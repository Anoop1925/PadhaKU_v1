# PadhaKU - Hackathon Submission

## Project Information

**Project Name**: PadhaKU (Knowledge Unlimited)

**Tagline**: AI-Powered Adaptive Learning Platform for All Students

**Repository**: [https://github.com/Anoop1925/Eduverse](https://github.com/Anoop1925/Eduverse)

**Category**: EdTech / Educational Technology

---

## Inspiration

PadhaKU was born from witnessing three critical gaps in modern online education:

**Accessibility Crisis**: Students with motor disabilities face significant barriers using traditional keyboards and mice, limiting their access to quality education. Current assistive technologies are expensive and complex.

**One-Size-Fits-All Approach**: Rigid curricula don't adapt to individual learning paces, causing frustration and high dropout rates.

**Lack of Immediate Support**: Students get stuck on concepts without instant help, leading to demotivation.

**Our Solution**: An AI-powered platform combining gesture-based interaction, personalized course generation, and 24/7 mentorship. PadhaKU makes education accessible to everyone, especially benefiting motor-impaired students who can learn hands-free using webcam gestures.

The name combines Hindi "Padha" (to study) with "KU" (Knowledge Unlimited) - limitless learning for all.

---

## What It Does

PadhaKU is a comprehensive learning platform with six integrated features designed for all students, with special emphasis on accessibility:

### 1. Magic Learn Suite - Hands-Free Learning Tools

**DrawInAir**: Gesture-based drawing and math solver using webcam and hand tracking
- Draw problems in mid-air with hand gestures (no keyboard/mouse needed)
- MediaPipe tracks 21 hand landmarks at 30 FPS
- AI analyzes drawings and provides step-by-step solutions
- Perfect for motor-impaired students

**Image Reader**: Upload diagrams, code screenshots, or math expressions for AI analysis with custom instructions

**PlotCrafter**: Converts complex concepts into concise, real-world examples (one paragraph explanations)

### 2. AI Course Generator
- Create personalized courses on any topic with AI
- Customize difficulty level, chapters (2-10), and categories
- Auto-embedded YouTube videos for visual learning
- Progress tracking with point rewards

### 3. Interactive Quiz System
- Gesture-based quiz answering (hands-free mode)
- Thumbs-down for hints, adaptive difficulty
- Detailed performance reports

### 4. AI Mentor (AskSensei)
- 24/7 Q&A on any educational topic
- Voice interaction support (Vapi AI)
- Code debugging and explanations
- Context-aware conversations

### 5. Gamification
- Points system: (Courses × 10) + (Chapters × 5)
- Global leaderboard and achievement badges
- Confetti celebrations for milestones

### 6. Secure Authentication
- Email/password and Google OAuth
- Protected routes and personalized dashboards

---

## Target Audience

**All Students**: High school to adult learners across all subjects and skill levels

**Motor-Impaired Students**: Gesture controls eliminate keyboard/mouse barriers, making education truly accessible

**Self-Paced Learners**: Working professionals, career switchers, lifelong learners

**Educators**: Teachers creating custom curriculum and tracking student progress

---

## How We Built It

**Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS 4, Framer Motion

**Backend**: Node.js with Next.js API routes, Flask (Python) for computer vision features

**Database**: PostgreSQL + Supabase (dual connectivity for reliability)

**AI/ML**: Google Gemini 2.5 Flash (course generation, analysis), MediaPipe Hands (gesture tracking), Vapi (voice AI), OpenCV (video processing)

**Authentication**: NextAuth.js with bcrypt and Google OAuth

**Development Approach**: Agile, modular architecture with 5-phase iterative development

**Key Implementation Highlights**:
- Auto-start/stop Flask backend with heartbeat monitoring
- Smart gesture locking (3-frame consistency) for smooth 30 FPS tracking
- Dual database connection (direct PostgreSQL + Supabase REST API fallback)
- Multi-layer AI response validation with retry logic
- Responsive modal design with flexbox scrolling

---

## Challenges We Faced

**1. Real-Time Gesture Performance**
- Problem: Initial 10-15 FPS lag made drawing frustrating
- Solution: Optimized MediaPipe config (model_complexity=0), selective frame processing, smart gesture locking
- Result: Stable 30 FPS with smooth, responsive interaction

**2. Backend Process Management**
- Problem: Manual Flask server start/stop, wasted resources
- Solution: Auto-start on demand with pythonw, heartbeat monitoring, graceful shutdown after 15s inactivity
- Result: Seamless user experience with automatic resource cleanup

**3. Database Connection in Restricted Networks**
- Problem: Port 5432 blocked by firewalls in schools/corporations
- Solution: Dual-connection system - try direct PostgreSQL, fallback to Supabase REST API (HTTPS port 443)
- Result: 100% network compatibility

**4. AI Response Consistency**
- Problem: Gemini returning inconsistent JSON formats, causing crashes
- Solution: Strict prompt engineering, response sanitization, schema validation, 3-attempt retry logic
- Result: 95% success rate (up from 70%)

**5. Content Overflow in Modals**
- Problem: Course content cut off, no scrolling
- Solution: Flexbox layout with fixed header/footer, scrollable content area
- Result: All content accessible on any viewport size

---

## What We Learned

**Technical**: AI requires validation not trust; performance optimization through model selection and frame processing; dual-connectivity ensures reliability; gesture locking improves UX; comprehensive error handling builds trust

**Design**: Accessibility features benefit everyone; concise content outperforms lengthy explanations; immediate feedback is critical; gamification maintains engagement; progressive disclosure reduces overwhelm

**Development**: Start with MVP and iterate; user testing reveals wrong assumptions; documentation saves time; platform-agnostic code matters; comprehensive logging simplifies debugging

**Key Insight**: Building for accessibility (motor-impaired students) created innovations that improved the experience for all users - gesture controls are faster and more intuitive than traditional input for many tasks.

---

## Technology Stack

**Languages**: TypeScript, Python, JavaScript, HTML5, CSS3, SQL

**Frontend**: Next.js 15.3.4, React 19, Tailwind CSS 4, Radix UI, shadcn/ui, Framer Motion 12.19, Lucide React

**Backend**: Node.js 20, Flask 3.1, NextAuth.js 4.24

**Database**: PostgreSQL 16, Supabase, pg library

**AI/ML**: Google Gemini 2.5 Flash, MediaPipe Hands, Vapi Voice AI, OpenCV, NumPy, Pillow

**APIs**: YouTube Data API v3, Google OAuth 2.0

**Dev Tools**: Git, GitHub, npm, pip, ESLint, TypeScript Compiler

---

## Built With

- Next.js - Server-side rendering and API routes
- React - Component-based UI
- TypeScript - Type-safe development
- Tailwind CSS - Utility-first styling
- PostgreSQL - Relational database
- Supabase - Database hosting and REST API
- Google Gemini AI - Course generation and content analysis
- MediaPipe - Hand tracking and gesture recognition
- OpenCV - Video processing
- Flask - Python backend for computer vision
- NextAuth.js - Authentication and session management
- Vapi - Voice AI interactions
- Framer Motion - Smooth animations
- YouTube Data API - Video embedding

---

## Impact & Accessibility

**Breaking Barriers**: PadhaKU makes education accessible to motor-impaired students through gesture-based controls, eliminating the need for keyboards and mice. Students can draw, navigate, answer quizzes, and learn entirely hands-free.

**Universal Design**: Features built for accessibility benefit all users - gesture controls are often faster and more intuitive than traditional input methods.

**24/7 Support**: AI mentor provides instant help regardless of timezone or physical location.

**Personalized Learning**: Adaptive content and self-paced courses accommodate different learning styles and speeds.

**Target Impact** (Year 1): 10,000+ users, 500+ motor-impaired students benefiting from accessibility features, 70%+ course completion rate, partnerships with disability advocacy organizations.

---

## Future Roadmap

**Version 2.0** (2025): Mobile apps (iOS/Android), multi-language support (Spanish, Hindi, Mandarin), advanced analytics with ML recommendations, real-time study rooms, peer collaboration

**Version 3.0** (2026): Certification system with blockchain verification, enterprise features, content marketplace, enhanced gamification with daily challenges

**Version 4.0** (2026+): AR/VR integration for immersive learning, emotion detection for engagement optimization, offline-first architecture, global expansion with regional partnerships

---

## Installation & Setup

**Prerequisites**: Node.js 20+, Python 3.9+, PostgreSQL 16

**Quick Start**:
```bash
# Clone repository
git clone https://github.com/Anoop1925/Eduverse.git
cd Eduverse

# Install dependencies
npm install
pip install -r requirements.txt

# Configure environment variables (.env.local)
DATABASE_URL=<your-postgresql-url>
SUPABASE_URL=<your-supabase-url>
SUPABASE_ANON_KEY=<your-supabase-key>
GOOGLE_GEMINI_API_KEY=<your-gemini-key>
NEXTAUTH_SECRET=<generate-secret>
GOOGLE_CLIENT_ID=<oauth-client-id>
GOOGLE_CLIENT_SECRET=<oauth-secret>

# Setup database
psql -U postgres -d padhaku -f database_schema.sql

# Run development servers
npm run dev  # Next.js on http://localhost:3000
# Flask backend auto-starts on demand
```

Detailed instructions in README.md.

---

## Conclusion

PadhaKU demonstrates how modern AI and computer vision can break down educational barriers and create truly inclusive learning experiences. By designing for accessibility from day one, we've built a platform that benefits all learners while specifically empowering motor-impaired students to pursue education without limitations.

Our journey taught us that constraints (like designing for hands-free interaction) drive innovation that improves experiences universally. We're excited to continue evolving PadhaKU based on user feedback and technological advancements.

**Thank you for considering PadhaKU. We believe education should be limitless and accessible to everyone.**

---

**Contact**: [GitHub Repository](https://github.com/Anoop1925/Eduverse) | Live Demo Available

**Submitted with dedication to accessible education for all students**

---

## Key Features

### 1. Magic Learn Suite

**DrawInAir - Gesture-Based Drawing & Math Solver**

Technical Specifications:
- Hand tracking: MediaPipe Hands with 21 landmark detection
- Frame rate: 30 FPS optimized performance
- Resolution: 950x550 pixels
- Gesture vocabulary: 5 distinct commands
- AI model: Google Gemini 2.5 Flash
- Response time: 2-5 seconds for analysis

Gesture Controls:
1. **Drawing Mode**: Index finger + Thumb
   - Precise line drawing with 6px thickness
   - Color: Magenta (RGB: 255, 0, 255)
   - Continuous path tracking

2. **Moving Mode**: Index + Middle fingers + Thumb
   - Navigate without drawing
   - Green circle cursor (10px radius)
   - Position reset

3. **Erasing Mode**: Thumb + Ring finger
   - 20px thick eraser
   - Black color (canvas background)
   - Progressive erasure

4. **Clear Canvas**: Thumb + Pinky
   - Instant full canvas reset
   - No confirmation required
   - Immediate feedback

5. **Analyze & Solve**: Index + Middle fingers (no thumb)
   - Captures current canvas state
   - Sends to Gemini AI
   - Returns mathematical solution with steps

Use Cases:
- Solving mathematical equations visually
- Drawing geometric diagrams for analysis
- Quick calculations without keyboard
- Accessibility for motor-impaired students
- Interactive problem-solving

**Image Reader - Visual Learning Assistant**

Technical Specifications:
- Supported formats: JPEG, PNG, GIF, WebP
- Max file size: 10 MB
- AI model: Gemini 2.5 Flash
- Response time: 3-7 seconds

Features:
- Drag-and-drop upload interface
- Custom instruction input for targeted analysis
- Analysis of diagrams, charts, code screenshots
- Mathematical expression recognition
- Detailed explanations with context

Use Cases:
- Understanding complex diagrams from textbooks
- Analyzing code screenshots for debugging
- Interpreting data visualizations
- Getting explanations for mathematical notation
- Quick reference lookup

**PlotCrafter - Concept Explainer**

Technical Specifications:
- AI model: Gemini 2.5 Flash
- Output format: Single paragraph
- Response time: 2-4 seconds
- Language: Simple, conversational

Features:
- Converts complex CS concepts to real-world analogies
- One-paragraph concise explanations
- Interactive, engaging language
- Immediate comprehension focus

Use Cases:
- Understanding abstract CS concepts (recursion, pointers, etc.)
- Quick refreshers before exams
- Explaining topics to others
- Breaking down intimidating subjects
- Building mental models

### 2. AI Course Generator

Technical Specifications:
- AI model: Google Gemini 2.5 Flash
- Generation time: 10-30 seconds (depends on chapters)
- Database: PostgreSQL with JSONB content column
- Video source: YouTube Data API v3

Customization Options:
- **Course Name**: Any topic in computer science
- **Description**: Learning objectives and target audience
- **Difficulty Level**: Beginner, Intermediate, Advanced
- **Category**: Programming, Web Dev, Data Science, Algorithms, etc.
- **Chapters**: 2-10 chapters
- **Video Integration**: Toggle on/off

Content Structure:
Each course includes:
- **Chapters**: High-level topic divisions
- **Subtopics**: Granular concepts within chapters
- **Theory**: Comprehensive explanations
- **Examples**: Real-world applications
- **Hands-On**: Practice exercises
- **Videos**: Embedded YouTube tutorials (optional)

Database Schema:
```sql
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL,
  course_name TEXT NOT NULL,
  description TEXT,
  level TEXT,
  category TEXT,
  content JSONB NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

Features:
- Progress tracking per user
- Completion indicators for chapters/subtopics
- Point rewards system
- Shareable course links
- Export to PDF (future feature)

### 3. Interactive Quiz System

Technical Specifications:
- Gesture detection: MediaPipe Hands
- Question formats: MCQ, True/False, Coding
- AI model: Gemini for question generation
- Performance tracking: PostgreSQL

Features:
- **Gesture-Based Answering**: Select options with hand gestures
- **Adaptive Hints**: Thumbs-down triggers context-specific hints
- **Performance Reports**: Detailed analytics post-completion
- **Camera Mode**: Completely hands-free quiz experience
- **Timed Challenges**: Optional time constraints

Use Cases:
- Self-assessment after course completion
- Practice for technical interviews
- Accessibility for keyboard-averse users
- Gamified learning reinforcement

### 4. AI Mentor (AskSensei)

Technical Specifications:
- Text AI: Google Gemini 2.5 Flash
- Voice AI: Vapi voice technology
- Response time: 1-3 seconds (text), 2-5 seconds (voice)
- Context window: Last 10 messages

Features:
- **Natural Language Q&A**: Ask questions in plain English
- **Voice Interaction**: Speak questions, hear answers
- **Code Assistance**: Debugging, explanations, best practices
- **Context Awareness**: Remembers conversation history
- **Markdown Support**: Formatted code blocks with syntax highlighting
- **Math Equations**: KaTeX rendering for technical content

Knowledge Domains:
- Programming languages (Python, JavaScript, Java, C++, etc.)
- Data structures and algorithms
- Web development
- Database design
- Software engineering principles
- Computer science fundamentals

Use Cases:
- Instant doubt resolution while studying
- Code review and debugging assistance
- Concept clarification
- Exam preparation
- Project guidance

### 5. Gamification System

Point System:
```
Total Points = (Courses Completed × 10) + (Chapters Completed × 5)
```

Features:
- **Global Leaderboard**: Ranks all users by points
- **Tiebreaker**: Chapter count for equal points
- **Real-Time Updates**: Live rank changes
- **Visual Celebrations**: Confetti on achievements
- **Progress Dashboard**: Detailed statistics
- **Achievement Badges** (future): Milestones and streaks

Database Schema:
```sql
CREATE TABLE user_progress (
  user_id TEXT PRIMARY KEY,
  courses_completed INT DEFAULT 0,
  chapters_completed INT DEFAULT 0,
  total_points INT DEFAULT 0,
  rank INT,
  last_updated TIMESTAMP
);
```

Leaderboard Query:
```sql
SELECT 
  user_id,
  total_points,
  chapters_completed,
  RANK() OVER (ORDER BY total_points DESC, chapters_completed DESC) as rank
FROM user_progress
ORDER BY rank
LIMIT 100;
```

Psychological Benefits:
- Increased motivation through competition
- Clear progress visualization
- Sense of achievement
- Social validation
- Habit formation through streaks

### 6. Comprehensive Authentication

Technical Stack:
- Framework: NextAuth.js 4.24
- Password Hashing: bcrypt (10 salt rounds)
- Session: JWT tokens
- OAuth Provider: Google

Features:
- **Email/Password Authentication**:
  - Secure password hashing
  - Email verification (optional)
  - Password reset flow
  
- **Google OAuth**:
  - One-click sign-in
  - Auto account creation
  - Profile picture sync

- **Session Management**:
  - Persistent sessions with cookies
  - Auto-renewal on activity
  - Secure token storage
  
- **Protected Routes**:
  - Middleware-based authorization
  - Redirect to login for unauthorized access
  - Role-based access control (future)

- **User Profiles**:
  - Personalized dashboards
  - Progress persistence
  - Settings management

Security Measures:
- HTTPS-only in production
- HttpOnly cookies
- CSRF protection
- Rate limiting on auth endpoints
- Brute force protection

---

## Technology Stack

### Languages

**TypeScript**
- Version: 5.0
- Usage: Primary language for frontend and API routes
- Benefits: Type safety, IntelliSense, refactoring support, reduced runtime errors
- Configuration: Strict mode enabled

**JavaScript**
- Usage: Configuration files, legacy code
- ES Version: ES2017+

**Python**
- Version: 3.9+
- Usage: Flask backend for Magic Learn features
- Benefits: Extensive ML/CV libraries, rapid prototyping

**HTML5**
- Usage: Semantic markup, canvas elements
- Features: Canvas API for drawing

**CSS3**
- Framework: Tailwind CSS 4
- Features: Utility classes, custom animations, responsive design

**SQL**
- Dialect: PostgreSQL 16
- Usage: Database queries, schema definitions
- ORM: None (raw queries via pg library)

### Frontend Technologies

**Next.js**
- Version: 15.3.4
- Features:
  - Server-side rendering (SSR)
  - API routes
  - File-based routing
  - Image optimization
  - Code splitting
  - Static site generation (SSG)

**React**
- Version: 19.0.0
- Features:
  - Server components
  - Hooks (useState, useEffect, useCallback, useMemo)
  - Context API for state management
  - Suspense for data fetching

**Tailwind CSS**
- Version: 4.0
- Configuration: Custom theme with brand colors
- Plugins: Forms, typography
- Benefits: Rapid development, consistent design, small bundle size

**Radix UI**
- Components: Dialog, Dropdown Menu, Select, Tabs, Tooltip, Progress, Avatar
- Benefits: Accessible primitives, unstyled for customization, keyboard navigation

**shadcn/ui**
- Components: Button, Card, Input, Badge, Separator
- Benefits: Beautiful design, copy-paste components, Tailwind integration

**Framer Motion**
- Version: 12.19.2
- Usage: Page transitions, scroll animations, gesture animations
- Features: Spring animations, layout animations, SVG path animations

**Lucide React**
- Version: 0.523.0
- Usage: Icon library
- Benefits: 1000+ icons, consistent design, tree-shakeable

**Other Frontend Libraries**:
- **clsx**: Conditional className construction
- **tailwind-merge**: Merge Tailwind classes without conflicts
- **react-markdown**: Render markdown in AI responses
- **rehype-katex**: Math equation rendering
- **remark-math**: Parse math in markdown
- **html2canvas**: Screenshot generation
- **jspdf**: PDF export functionality
- **react-confetti**: Celebration animations

### Backend Technologies

**Node.js**
- Version: 20+
- Runtime: JavaScript runtime for Next.js
- Features: Event loop, non-blocking I/O

**Flask**
- Version: 3.1
- Usage: Python backend for Magic Learn
- Features: Lightweight, WSGI server, blueprint routing

**NextAuth.js**
- Version: 4.24.11
- Features:
  - Multiple authentication providers
  - JWT session management
  - Database adapters
  - Custom callbacks

**Flask-CORS**
- Usage: Cross-origin resource sharing
- Configuration: Allow specific origins

**Process Management**
- Child process spawning
- Heartbeat monitoring
- Graceful shutdown
- Resource cleanup

### Database & Cloud

**PostgreSQL**
- Version: 16
- Features:
  - JSONB for flexible content storage
  - Full-text search
  - Indexes for performance
  - Transactions
  - Foreign keys and constraints

**Supabase**
- Features:
  - PostgreSQL hosting
  - REST API auto-generation
  - Real-time subscriptions
  - Authentication
  - File storage

**pg (node-postgres)**
- Version: 8.16.2
- Features:
  - Connection pooling
  - Prepared statements
  - Transaction support
  - SSL connections

### AI & Machine Learning

**Google Generative AI (Gemini)**
- Model: gemini-2.5-flash-lite
- Usage:
  - Course content generation
  - Image analysis (DrawInAir, Image Reader)
  - Concept explanations (PlotCrafter)
  - Chat responses (AI Mentor)
- Features:
  - Multimodal (text + images)
  - Fast inference
  - High rate limits
  - Structured output support

**MediaPipe Hands**
- Provider: Google
- Features:
  - 21 hand landmark detection
  - Real-time tracking
  - Left/right hand classification
  - Multiple hand support
  - Cross-platform

**Vapi**
- Version: Web SDK 2.3.6
- Features:
  - Natural voice conversations
  - Low latency
  - Custom voice models
  - Function calling

**OpenCV (cv2)**
- Version: 4.x
- Usage: Video capture, image processing
- Features:
  - Camera access
  - Frame manipulation
  - Drawing operations
  - Color space conversion

**NumPy**
- Usage: Numerical computations for gesture recognition
- Features: Array operations, mathematical functions

**Pillow (PIL)**
- Usage: Image processing and manipulation
- Features: Format conversion, resize, filters

### Development Tools

**Git**
- Version Control: Distributed VCS
- Hosting: GitHub
- Workflow: Feature branches, pull requests

**npm**
- Version: 10+
- Usage: JavaScript package management
- Scripts: dev, build, start, lint

**pip**
- Usage: Python package management
- Requirements file: Locked dependencies

**ESLint**
- Version: 9
- Configuration: Next.js recommended + custom rules
- Benefits: Code quality, consistency

**TypeScript Compiler**
- Configuration: tsconfig.json with strict mode
- Target: ES2017
- Module: ESNext

**Vercel** (Deployment - Optional)
- Features:
  - Serverless functions
  - Edge network
  - Automatic HTTPS
  - Environment variables

### Additional Technologies

**APIs & Services**:
- YouTube Data API v3: Video search and metadata
- Google OAuth 2.0: Social authentication
- Supabase REST API: Database operations

**Data Formats**:
- JSON: API communication, data interchange
- JSONB: Flexible database storage
- JWT: Session tokens
- Markdown: Content formatting

**Protocols**:
- HTTPS: Secure communication
- WebSockets: Real-time updates (Supabase)
- REST: API architecture

**Browser APIs**:
- Canvas API: Drawing surface
- File API: File upload handling
- MediaDevices API: Camera access
- LocalStorage: Client-side caching

### Development Stack Summary

**Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS 4, Radix UI, shadcn/ui, Framer Motion, Lucide React

**Backend**: Node.js 20, Flask 3.1, NextAuth.js 4.24, Python 3.9+

**Database**: PostgreSQL 16, Supabase

**AI/ML**: Google Gemini 2.5 Flash, MediaPipe Hands, Vapi Voice AI, OpenCV, NumPy, Pillow

**DevOps**: Git, GitHub, npm, pip, ESLint, Vercel (optional)

**Total Package Dependencies**: 30+ npm packages, 10+ Python packages

---

## Architecture

### System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         Client Browser                          │
│  ┌───────────────────┐  ┌──────────────┐  ┌─────────────────┐  │
│  │   React Frontend  │  │    Camera    │  │  Local Storage  │  │
│  │   (Next.js 15)    │  │   MediaPipe  │  │   (JWT Tokens)  │  │
│  └────────┬──────────┘  └──────┬───────┘  └─────────────────┘  │
└───────────┼────────────────────┼────────────────────────────────┘
            │                    │
            │ HTTPS              │ WebRTC
            ▼                    ▼
┌─────────────────────────────────────────────────────────────────┐
│                       Next.js Server                            │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                     API Routes                            │  │
│  │  ┌────────────┐  ┌──────────┐  ┌──────────────────────┐  │  │
│  │  │    Auth    │  │  Courses │  │  Gamification        │  │  │
│  │  │  (NextAuth)│  │   Gen    │  │  (Points/Leaderboard)│  │  │
│  │  └─────┬──────┘  └────┬─────┘  └──────────┬───────────┘  │  │
│  └────────┼──────────────┼───────────────────┼──────────────┘  │
│           │              │                   │                  │
│           ▼              ▼                   ▼                  │
│  ┌────────────────────────────────────────────────────────┐    │
│  │             PostgreSQL Connection Pool                │    │
│  │                  (pg library)                         │    │
│  └────────────────────┬───────────────────────────────────┘    │
└────────────────────────┼──────────────────────────────────────┘
                         │
                         │ TCP:5432 or HTTPS:443
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Supabase (PostgreSQL)                        │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Tables: users, courses, user_progress, leaderboard      │  │
│  │  Features: JSONB columns, indexes, real-time subscriptions│ │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                    Flask Backend (Python)                       │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              Magic Learn Features                        │  │
│  │  ┌──────────┐  ┌─────────────┐  ┌──────────────────┐    │  │
│  │  │DrawInAir │  │Image Reader │  │  PlotCrafter     │    │  │
│  │  │(MediaPipe│  │  (Gemini)   │  │   (Gemini)       │    │  │
│  │  │ +Gemini) │  │             │  │                  │    │  │
│  │  └────┬─────┘  └──────┬──────┘  └────────┬─────────┘    │  │
│  └───────┼────────────────┼──────────────────┼──────────────┘  │
│          │                │                  │                  │
│          ▼                ▼                  ▼                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │           Google Gemini API (2.5 Flash)                  │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│                   External Services                             │
│  ┌──────────────┐  ┌─────────────┐  ┌──────────────────────┐   │
│  │ Google OAuth │  │  YouTube    │  │      Vapi            │   │
│  │   (Auth)     │  │  Data API   │  │   (Voice AI)         │   │
│  └──────────────┘  └─────────────┘  └──────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

### Data Flow Diagrams

**Course Generation Flow**:
```
User Input → Next.js API Route → Gemini API → Parse JSON → 
YouTube Search → Store in PostgreSQL → Return Course ID → 
Redirect to Course Viewer → Display with Progress Tracking
```

**DrawInAir Flow**:
```
Camera Feed → MediaPipe → Landmark Detection → Gesture Recognition →
Canvas Rendering → User Analysis Trigger → Capture Canvas → 
Convert to Image → Send to Gemini → Parse Solution → 
Display Results
```

**Authentication Flow**:
```
User Credentials → NextAuth API Route → Verify Password (bcrypt) →
Generate JWT Token → Store in HTTP-Only Cookie → 
Sync User Data with DB → Redirect to Dashboard
```

**Gamification Flow**:
```
Chapter Completion → Update user_progress Table → 
Calculate Points (formula) → Update Leaderboard → 
Trigger Confetti Animation → Update Dashboard Stats
```

### Database Schema

```sql
-- Users table (managed by NextAuth)
CREATE TABLE users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password TEXT,  -- bcrypt hashed
  name TEXT,
  image TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Courses table
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT REFERENCES users(id) ON DELETE CASCADE,
  course_name TEXT NOT NULL,
  description TEXT,
  level TEXT CHECK (level IN ('Beginner', 'Intermediate', 'Advanced')),
  category TEXT,
  content JSONB NOT NULL,  -- Full course structure
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- User progress table
CREATE TABLE user_progress (
  user_id TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  courses_completed INT DEFAULT 0,
  chapters_completed INT DEFAULT 0,
  total_points INT DEFAULT 0,
  last_updated TIMESTAMP DEFAULT NOW()
);

-- Course completion tracking
CREATE TABLE course_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT REFERENCES users(id) ON DELETE CASCADE,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  chapters_completed JSONB DEFAULT '[]',  -- Array of chapter IDs
  progress_percentage INT DEFAULT 0,
  started_at TIMESTAMP DEFAULT NOW(),
  completed_at TIMESTAMP,
  UNIQUE(user_id, course_id)
);

-- Leaderboard view (materialized for performance)
CREATE MATERIALIZED VIEW leaderboard AS
SELECT 
  u.id,
  u.name,
  u.image,
  up.total_points,
  up.courses_completed,
  up.chapters_completed,
  RANK() OVER (ORDER BY up.total_points DESC, up.chapters_completed DESC) as rank
FROM users u
JOIN user_progress up ON u.id = up.user_id
ORDER BY rank
LIMIT 100;

-- Indexes for performance
CREATE INDEX idx_courses_user_id ON courses(user_id);
CREATE INDEX idx_course_progress_user_id ON course_progress(user_id);
CREATE INDEX idx_user_progress_points ON user_progress(total_points DESC, chapters_completed DESC);

-- Refresh leaderboard periodically
-- Manually: REFRESH MATERIALIZED VIEW leaderboard;
-- Or via cron job/trigger
```

### API Endpoints

**Authentication**:
- `POST /api/auth/signin` - Sign in with credentials
- `POST /api/auth/signout` - Sign out user
- `GET /api/auth/session` - Get current session
- `POST /api/auth/signup` - Create new account

**Courses**:
- `POST /api/feature-2/generate-course` - Generate new course
- `GET /api/feature-2/courses` - List user's courses
- `GET /api/feature-2/courses/[id]` - Get specific course
- `DELETE /api/feature-2/courses/[id]` - Delete course
- `POST /api/feature-2/courses/[id]/progress` - Update progress

**Gamification**:
- `GET /api/feature-5/leaderboard` - Get global leaderboard
- `GET /api/feature-5/points` - Get user's points
- `POST /api/feature-5/points` - Update user points
- `GET /api/feature-5/progress` - Get user progress stats

**Magic Learn**:
- `POST /api/magic-learn/start-backend` - Start Flask backend
- `POST /api/magic-learn/stop-backend` - Stop Flask backend
- `POST /api/magic-learn/heartbeat` - Heartbeat signal
- `GET /api/magic-learn/status` - Backend health check

**Flask Backend (Magic Learn)**:
- `POST /api/drawinair/start` - Start camera
- `POST /api/drawinair/stop` - Stop camera
- `GET /api/drawinair/video-feed` - Video stream (Server-Sent Events)
- `POST /api/drawinair/analyze` - Analyze drawing
- `POST /api/drawinair/clear` - Clear canvas
- `GET /api/drawinair/gesture` - Current gesture
- `POST /api/image-reader/analyze` - Analyze uploaded image
- `POST /api/plot-crafter/generate` - Generate concept explanation
- `GET /health` - Flask backend health check

### Security Architecture

**Authentication Security**:
- Passwords hashed with bcrypt (10 salt rounds)
- JWT tokens stored in HTTP-only cookies
- CSRF tokens for state-changing requests
- Session expiration after 30 days of inactivity
- Secure flag on cookies in production

**API Security**:
- Rate limiting on authentication endpoints (10 requests/minute)
- Input validation and sanitization
- Parameterized SQL queries (no string concatenation)
- Environment variables for sensitive data
- CORS configuration restricting origins

**Data Security**:
- HTTPS-only in production
- Database connections with SSL
- Password reset tokens expire after 1 hour
- User data segregation (can only access own data)
- Audit logging for sensitive operations

**Frontend Security**:
- Content Security Policy (CSP) headers
- XSS protection via React's built-in escaping
- No eval() or innerHTML usage
- Sanitized markdown rendering
- Secure file upload validation

### Deployment Architecture

**Production Environment**:
```
┌──────────────────────────────────────┐
│       Vercel Edge Network            │
│  ┌────────────────────────────────┐  │
│  │  Next.js Serverless Functions  │  │
│  │  - Global CDN                  │  │
│  │  - Automatic HTTPS             │  │
│  │  - Load balancing              │  │
│  └────────────────────────────────┘  │
└──────────────────────────────────────┘
                ↓
┌──────────────────────────────────────┐
│        Supabase Cloud                │
│  ┌────────────────────────────────┐  │
│  │  PostgreSQL Database           │  │
│  │  - Automated backups           │  │
│  │  - Connection pooling          │  │
│  │  - Read replicas               │  │
│  └────────────────────────────────┘  │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│     Separate Flask Server            │
│  (AWS EC2 / DigitalOcean Droplet)    │
│  - MediaPipe and OpenCV              │
│  - Auto-scaling disabled             │
│  - Heartbeat monitoring              │
└──────────────────────────────────────┘
```

**Development Environment**:
```
Local Machine:
- Next.js dev server (port 3000)
- Flask backend (port 5000)
- PostgreSQL local instance (port 5432)
- Hot reload enabled
- Source maps for debugging
```

---

## Installation & Setup

[Detailed installation instructions provided in README.md section above]

---

## Future Roadmap

### Version 2.0 (Q2 2025)

**Mobile Applications**:
- React Native apps for iOS and Android
- Gesture recognition on mobile cameras
- Offline course access
- Push notifications for streaks and reminders

**Advanced Analytics**:
- Learning pattern analysis with ML
- Personalized course recommendations
- Weak topic identification
- Study time tracking with insights

**Collaboration Features**:
- Real-time study rooms
- Peer-to-peer code review
- Group challenges and competitions
- Shared course playlists

**Enhanced AI**:
- Fine-tuned models for better course generation
- Multi-language support (Spanish, Hindi, Mandarin)
- Voice-only course consumption
- AI-generated practice problems

### Version 3.0 (Q4 2025)

**Certification System**:
- Verified skill assessments
- Blockchain-backed certificates
- LinkedIn integration
- Employer verification portal

**Enterprise Features**:
- Organization accounts
- Team progress dashboards
- Custom branding
- SSO integration

**Advanced Gamification**:
- Daily challenges
- Achievement system with badges
- Social features (friends, following)
- Seasonal leaderboards

**Content Marketplace**:
- User-created course sharing
- Paid premium courses
- Content creator monetization
- Community ratings and reviews

### Version 4.0 (2026+)

**AR/VR Integration**:
- Virtual classroom environments
- 3D code visualization
- Spatial gesture controls
- Immersive learning experiences

**AI Teaching Assistant**:
- Personalized learning paths with RL
- Socratic method questioning
- Emotion detection for engagement
- Adaptive difficulty adjustment

**Global Expansion**:
- Regional content partnerships
- Local language course generation
- Accessibility certifications (WCAG AAA)
- Offline-first architecture

---

## Impact & Metrics

### Target Metrics (Year 1)

**User Acquisition**:
- 10,000+ registered users
- 5,000+ monthly active users
- 50+ courses generated daily
- 1,000+ hours of learning time

**Engagement**:
- 70%+ course completion rate
- 4.5+ average user rating
- 3+ courses per active user
- 30+ minutes average session duration

**Accessibility Impact**:
- 500+ specially-abled users
- 90%+ satisfaction from accessibility-focused users
- Partnerships with 5+ disability advocacy organizations

**Educational Outcomes**:
- 80%+ self-reported concept understanding improvement
- 60%+ users applying learned skills in projects
- 500+ positive testimonials

### Social Impact

**Breaking Barriers**:
- Making CS education accessible to motor-impaired students
- Reducing cost barriers with free core features
- Providing 24/7 learning support regardless of timezone
- Democratizing personalized education

**Empowering Learners**:
- Self-paced learning for working professionals
- Instant doubt resolution for isolated learners
- Gamification maintaining motivation
- Building confidence through achievement

**Community Building**:
- Open source contributions welcome
- User-generated content sharing (future)
- Peer mentorship opportunities (future)
- Global learning community

---

## Conclusion

PadhaKU represents a paradigm shift in computer science education by combining cutting-edge AI, computer vision, and web technologies to create an accessible, personalized, and engaging learning platform. Our journey from initial concept to functional product taught us invaluable lessons about technical implementation, user-centered design, and the power of perseverance.

We believe education should be limitless, accessible, and adaptive. PadhaKU is our contribution toward that vision, and we're excited to continue evolving the platform based on user feedback and technological advancements.

Thank you for considering PadhaKU for this hackathon. We look forward to feedback and opportunities to make a positive impact in the educational technology space.

---

## Contact Information

**Project Repository**: [https://github.com/Anoop1925/Eduverse](https://github.com/Anoop1925/Eduverse)

**Email**: support@padhaku.com

**Documentation**: Comprehensive README.md in repository

**Video Demo**: [Link to demo video]

**Live Deployment**: [Link to deployed application]

---

**Submitted with passion and dedication by the PadhaKU Development Team**
