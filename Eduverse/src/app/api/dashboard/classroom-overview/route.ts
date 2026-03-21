import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface ClassroomCourse {
  id: string;
  name: string;
  section?: string;
}

interface ClassroomAnnouncement {
  id: string;
  text?: string;
}

interface ClassroomCourseWork {
  id: string;
  title: string;
  description?: string;
  creationTime?: string;
  updateTime?: string;
  dueDate?: {
    year?: number;
    month?: number;
    day?: number;
  };
  dueTime?: {
    hours?: number;
    minutes?: number;
    seconds?: number;
  };
}

interface StudentSubmission {
  courseWorkId: string;
  state: string;
}

type AssignmentStatus = "COMPLETED" | "PENDING";

const CLASSROOM_BASE_URL = "https://classroom.googleapis.com/v1";

async function fetchClassroomJson<T>(url: string, accessToken: string): Promise<T> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      signal: controller.signal,
      cache: "no-store",
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      throw new Error(`Classroom API ${response.status}: ${errorText}`);
    }

    return (await response.json()) as T;
  } finally {
    clearTimeout(timeout);
  }
}

function toAssignmentStatus(state?: string): AssignmentStatus {
  if (!state) return "PENDING";

  const normalized = state.toUpperCase();
  if (normalized === "TURNED_IN" || normalized === "RETURNED") {
    return "COMPLETED";
  }

  return "PENDING";
}

function toIsoDueDate(dueDate?: ClassroomCourseWork["dueDate"], dueTime?: ClassroomCourseWork["dueTime"]): string | null {
  if (!dueDate?.year || !dueDate?.month || !dueDate?.day) {
    return null;
  }

  const date = new Date(
    dueDate.year,
    dueDate.month - 1,
    dueDate.day,
    dueTime?.hours ?? 23,
    dueTime?.minutes ?? 59,
    dueTime?.seconds ?? 59,
    0
  );

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return date.toISOString();
}

function toIsoFallbackDate(creationTime?: string, updateTime?: string): string | null {
  const candidates = [creationTime, updateTime].filter(Boolean) as string[];

  for (const value of candidates) {
    const date = new Date(value);
    if (!Number.isNaN(date.getTime())) {
      return date.toISOString();
    }
  }

  return null;
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    const accessToken = session?.accessToken;

    if (!accessToken) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const coursesData = await fetchClassroomJson<{ courses?: ClassroomCourse[] }>(
      `${CLASSROOM_BASE_URL}/courses?pageSize=50&courseStates=ACTIVE`,
      accessToken
    );

    const courses = coursesData.courses || [];

    const perCourseData = await Promise.all(
      courses.map(async (course) => {
        const announcementsPromise = fetchClassroomJson<{ announcements?: ClassroomAnnouncement[] }>(
          `${CLASSROOM_BASE_URL}/courses/${course.id}/announcements?pageSize=30`,
          accessToken
        ).catch(() => ({ announcements: [] }));

        const courseWorkPromise = fetchClassroomJson<{ courseWork?: ClassroomCourseWork[] }>(
          `${CLASSROOM_BASE_URL}/courses/${course.id}/courseWork?pageSize=100`,
          accessToken
        ).catch(() => ({ courseWork: [] }));

        const submissionsPromise = fetchClassroomJson<{ studentSubmissions?: StudentSubmission[] }>(
          `${CLASSROOM_BASE_URL}/courses/${course.id}/courseWork/-/studentSubmissions?userId=me&pageSize=200`,
          accessToken
        ).catch(() => ({ studentSubmissions: [] }));

        const [announcementsData, courseWorkData, submissionsData] = await Promise.all([
          announcementsPromise,
          courseWorkPromise,
          submissionsPromise,
        ]);

        const submissionsByCourseWorkId = new Map<string, string>();
        (submissionsData.studentSubmissions || []).forEach((submission) => {
          if (submission?.courseWorkId && !submissionsByCourseWorkId.has(submission.courseWorkId)) {
            submissionsByCourseWorkId.set(submission.courseWorkId, submission.state);
          }
        });

        const assignments = (courseWorkData.courseWork || []).map((work) => {
          const submissionState = submissionsByCourseWorkId.get(work.id);
          const status = toAssignmentStatus(submissionState);
          const dueDate = toIsoDueDate(work.dueDate, work.dueTime);
          const assignmentDate = dueDate || toIsoFallbackDate(work.creationTime, work.updateTime);

          return {
            id: work.id,
            title: work.title || "Untitled Assignment",
            description: work.description || "",
            dueDate,
            assignmentDate,
            status,
            courseId: course.id,
            courseName: course.name,
            courseSection: course.section || "",
          };
        });

        return {
          course,
          announcements: announcementsData.announcements || [],
          assignments,
        };
      })
    );

    const announcementsByCourse: Record<string, ClassroomAnnouncement[]> = {};
    const assignmentsByCourse: Record<string, any[]> = {};

    perCourseData.forEach((entry) => {
      announcementsByCourse[entry.course.id] = entry.announcements;
      assignmentsByCourse[entry.course.id] = entry.assignments;
    });

    const allAssignments = Object.values(assignmentsByCourse).flat();
    const allAnnouncements = Object.values(announcementsByCourse).flat();

    const assignmentsCompleted = allAssignments.filter((a) => a.status === "COMPLETED").length;
    const assignmentsPending = allAssignments.length - assignmentsCompleted;

    return NextResponse.json({
      success: true,
      courses,
      announcementsByCourse,
      assignmentsByCourse,
      kpis: {
        totalClasses: courses.length,
        totalAssignments: allAssignments.length,
        assignmentsCompleted,
        assignmentsPending,
        totalAnnouncements: allAnnouncements.length,
      },
      generatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Dashboard classroom overview error:", error);
    return NextResponse.json(
      { error: "Failed to fetch classroom overview" },
      { status: 500 }
    );
  }
}
