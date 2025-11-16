# PadhaKU - Hackathon Submission Documentation

---

## About the Project

### Inspiration

The inspiration for PadhaKU came from observing the struggles of computer science students in traditional learning environments. We noticed three critical gaps in modern education:

First, students with different learning paces were forced into one-size-fits-all courses, leading to frustration and disengagement. Second, specially-abled students faced significant barriers when using traditional input methods like keyboards and mice, limiting their access to quality CS education. Third, learning programming concepts often felt abstract and disconnected from real-world application, making it difficult for students to stay motivated.

We asked ourselves: What if we could leverage modern AI and computer vision technologies to create a learning platform that adapts to each student, breaks down accessibility barriers, and makes learning genuinely engaging? That question became the foundation of PadhaKU.

The name "PadhaKU" combines the Hindi word "Padha" meaning "to study" with "KU" representing "knowledge unlimited," symbolizing our mission to make limitless learning accessible to everyone.

### What We Learned

Building PadhaKU taught us invaluable lessons across multiple domains:

**Technical Learning:**
- Integrating MediaPipe's hand tracking capabilities with real-time gesture recognition required deep understanding of computer vision pipelines and optimization techniques
- Implementing Google's Gemini AI for course generation taught us about prompt engineering and structuring AI responses for educational content
- Managing backend processes programmatically, including auto-start and heartbeat monitoring systems, enhanced our understanding of process lifecycle management
- Building a scalable database schema in PostgreSQL with Supabase taught us about data modeling for complex educational content

**Design Learning:**
- Creating accessible interfaces that work seamlessly for both traditional users and those relying on gesture controls required rethinking conventional UI/UX patterns
- Balancing feature richness with simplicity was crucial to avoid overwhelming users while maintaining powerful functionality
- Implementing smooth transitions and responsive feedback mechanisms significantly improved the user experience

**Problem-Solving:**
- When we discovered that direct PostgreSQL connections were being blocked in certain network environments, we pivoted to using Supabase's REST API, teaching us the importance of flexible architecture
- Implementing a heartbeat system to automatically manage backend processes required creative thinking about process monitoring and cleanup
- Making course content scrollable within modals while maintaining navigation controls taught us about CSS flex layouts and overflow management

**Team Collaboration:**
- Integrating multiple technologies (Next.js frontend, Flask backend, AI services) required clear communication and well-defined API contracts
- Version control became critical when working on different features simultaneously
- Code reviews and pair programming helped us catch bugs early and share knowledge

### How We Built It

**Architecture Overview:**

PadhaKU follows a modern full-stack architecture with clear separation of concerns:

**Frontend Layer:**
- Built with Next.js 15 and React 19, leveraging server-side rendering for optimal performance
- Styled using Tailwind CSS for rapid development and consistent design language
- UI components built with Radix UI primitives and shadcn/ui for accessibility compliance
- Implemented client-side routing and state management using React hooks and Context API

**Backend Layer:**
- Next.js API routes handle primary backend logic for authentication, course management, and database operations
- Separate Flask backend powers the Magic Learn features, providing endpoints for DrawInAir, Image Reader, and Plot Crafter
- Process management system automatically starts and stops the Flask server based on user activity using Node.js child processes

**Database Architecture:**
- PostgreSQL database hosted on Supabase providing robust relational data storage
- Schema includes tables for users, courses, chapters, user progress, points, and leaderboard tracking
- Connection pooling implemented using the `pg` library for efficient database queries
- Dual connectivity approach: direct PostgreSQL for local development, Supabase REST API for production

**AI Integration:**
- Google Gemini 1.5 Flash model for intelligent course generation and content creation
- Custom prompting system that generates structured course content including chapters, subtopics, theory, examples, and hands-on exercises
- MediaPipe Hands solution for accurate hand landmark detection and gesture recognition
- OpenCV for computer vision processing and real-time video stream analysis

**Authentication System:**
- NextAuth.js providing secure session management
- Support for credentials-based authentication with bcrypt password hashing
- Session persistence using JWT tokens
- Protected routes using middleware for authorization checks

**Feature Implementation:**

1. **Magic Learn Suite:**
   - DrawInAir uses MediaPipe to track 21 hand landmarks in real-time
   - Gesture combinations trigger different actions: drawing, erasing, clearing, and analyzing
   - Canvas rendering implemented using HTML5 Canvas API
   - Image data sent to Gemini AI for mathematical analysis and step-by-step solutions
   - Image Reader allows file upload and sends image data with custom prompts to Gemini
   - Plot Crafter generates creative narratives using AI-powered text generation

2. **AI Course Generator:**
   - User inputs course parameters: name, level, category, number of chapters, and video preference
   - Backend constructs a detailed prompt for Gemini AI including learning objectives and structure requirements
   - AI returns JSON-formatted course data parsed into database schema
   - Automatic YouTube video search and embedding for each subtopic
   - Course data stored in PostgreSQL with JSONB column for flexible content structure

3. **Interactive Learning Interface:**
   - Accordion-style chapter expansion for intuitive navigation
   - Modal-based subtopic viewer with scrollable content area
   - YouTube video embedding with fallback to direct YouTube links
   - Progress tracking with visual indicators for completed chapters
   - Navigation controls for moving between subtopics seamlessly

4. **Gamification System:**
   - Points awarded for completing chapters and courses using the formula:
     $P = C \times 10 + Ch \times 5$
     where $P$ is total points, $C$ is courses completed, and $Ch$ is chapters completed
   - Leaderboard ranking based on points with tiebreaker using chapter completion count
   - Real-time updates to user statistics stored in PostgreSQL
   - Visual feedback with animations celebrating achievements

5. **AI Mentor (AskSensei):**
   - Chat interface powered by AI for answering programming questions
   - Context-aware responses that understand previous conversation history
   - Voice interaction capability using Vapi's voice AI API
   - Support for code snippet formatting and syntax highlighting in responses

**Development Workflow:**

We followed an agile development approach with iterative feature releases:
- Started with core authentication and database setup
- Built the course generator as the foundational feature
- Added Magic Learn capabilities with gesture recognition
- Implemented gamification to increase engagement
- Polished UI/UX and added responsive design elements
- Conducted extensive testing across different devices and browsers

### Challenges We Faced

**Challenge 1: Real-Time Gesture Recognition Performance**

**Problem:** Initial implementation of hand tracking caused significant frame rate drops, making the drawing experience laggy and frustrating.

**Solution:** We optimized the MediaPipe configuration by reducing the model complexity setting and implementing frame skipping (processing every 2nd frame instead of every frame). We also moved intensive AI analysis to a separate thread to prevent blocking the rendering pipeline. This improved frame rates from 15 FPS to a smooth 30 FPS.

**Challenge 2: Backend Process Management**

**Problem:** The Flask backend for Magic Learn required manual starting and stopping, creating a poor user experience. Additionally, leaving it running consumed system resources unnecessarily.

**Solution:** We implemented an automatic process lifecycle management system:
- API route spawns the Flask backend using Node.js child processes when the user clicks "Launch Magic Learn"
- Health check endpoint polls the backend to confirm it's running before opening the UI
- Heartbeat system where the frontend sends periodic signals to indicate active usage
- Automatic shutdown after 15 seconds of no heartbeat, cleaning up resources efficiently
- Used `pythonw.exe` instead of `python.exe` to run the backend silently without terminal windows

**Challenge 3: Database Connection Issues in Production**

**Problem:** Direct PostgreSQL connections were being blocked by certain network configurations and firewalls, causing the courses feature to fail with `ENOTFOUND` errors.

**Solution:** We implemented a dual-connection strategy:
- Kept the connection pool for local development and environments with direct database access
- Added Supabase REST API client as an alternative connection method using HTTPS (port 443)
- Refactored all database queries to work with both approaches
- This made the application more resilient and deployment-friendly across different network environments

**Challenge 4: Course Content Overflow in Modal**

**Problem:** When displaying course subtopics with embedded videos, theory, examples, and hands-on content, the modal became too tall and content was cut off. Users couldn't scroll to see all information.

**Solution:** Restructured the modal layout using flexbox:
- Set maximum height to 90% of viewport height (`max-h-[90vh]`)
- Made the content area scrollable with `overflow-y-auto`
- Fixed the navigation footer at the bottom using `flex-shrink-0`
- Added smooth scrolling behavior for better user experience
- Improved close button visibility with absolute positioning and higher z-index

**Challenge 5: AI Response Consistency**

**Problem:** Gemini AI sometimes returned course content in inconsistent formats, causing parsing errors and broken course displays.

**Solution:** 
- Implemented strict JSON schema definition in the AI prompt
- Added response validation middleware to check for required fields
- Created fallback mechanisms that retry with modified prompts if parsing fails
- Implemented error boundaries to gracefully handle malformed AI responses
- Added user-friendly error messages when generation fails

**Challenge 6: Coordinating Multiple Technologies**

**Problem:** Integrating Next.js, Flask, PostgreSQL, Supabase, MediaPipe, and multiple AI APIs created complex dependency management and deployment challenges.

**Solution:**
- Created clear API contracts and documentation for each service
- Implemented comprehensive error logging to quickly identify integration issues
- Used environment variables for configuration management across environments
- Built modular architecture where each feature could be developed and tested independently
- Established a robust testing workflow before merging features

**Challenge 7: Accessibility Compliance**

**Problem:** Ensuring the platform was genuinely accessible to specially-abled students required more than just gesture controls.

**Solution:**
- Implemented ARIA labels throughout the application
- Ensured keyboard navigation works for all features
- Added high-contrast visual indicators for state changes
- Provided alternative input methods for every gesture-based feature
- Tested with screen readers and accessibility auditing tools

**Challenge 8: YouTube Video Embedding Restrictions**

**Problem:** Some YouTube videos have embedding disabled by creators, causing blank iframes in our course viewer.

**Solution:**
- Added informative messaging explaining embedding restrictions
- Implemented fallback button that opens videos directly on YouTube
- Extracted video IDs from various YouTube URL formats for consistent embedding
- Provided clear visual feedback when videos can't be displayed inline

These challenges taught us resilience, creative problem-solving, and the importance of user-centric design. Each obstacle we overcame made PadhaKU more robust and user-friendly.

---

## Built With

### Languages
- **TypeScript** - Primary language for type-safe frontend and backend development
- **JavaScript** - Used in configuration files and certain dynamic components
- **Python** - Backend services for Magic Learn features and AI integration
- **HTML5** - Semantic markup and canvas elements for drawing features
- **CSS3** - Styling with Tailwind utility classes and custom animations
- **SQL** - Database queries and schema definitions

### Frontend Frameworks & Libraries
- **Next.js 15** - React framework with server-side rendering and API routes
- **React 19** - UI component library with hooks and context
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Radix UI** - Unstyled, accessible component primitives
- **shadcn/ui** - Re-usable component collection built on Radix UI
- **Framer Motion** - Animation library for smooth UI transitions
- **Lucide React** - Icon library for consistent visual elements

### Backend Technologies
- **Node.js** - JavaScript runtime for Next.js API routes
- **Flask** - Lightweight Python web framework for Magic Learn backend
- **NextAuth.js** - Authentication library for Next.js with session management
- **bcrypt** - Password hashing for secure credential storage

### Databases & Cloud Services
- **PostgreSQL** - Relational database for structured data storage
- **Supabase** - Backend-as-a-Service providing PostgreSQL hosting, REST API, and real-time subscriptions
- **pg (node-postgres)** - PostgreSQL client for Node.js with connection pooling

### AI & Machine Learning
- **Google Generative AI (Gemini 1.5 Flash)** - Large language model for course generation, content creation, and image analysis
- **MediaPipe Hands** - Hand landmark detection and tracking solution by Google
- **Vapi** - Voice AI API for natural language voice interactions
- **OpenCV (cv2)** - Computer vision library for image processing and video stream handling

### APIs & Services
- **YouTube Data API** - Video search and embedding
- **Gemini AI API** - Text generation and image analysis
- **Supabase REST API** - Database operations and authentication
- **MediaPipe API** - Hand tracking and gesture recognition

### Development Tools
- **Git** - Version control system
- **npm** - Package manager for JavaScript dependencies
- **pip** - Package manager for Python dependencies
- **ESLint** - Code linting and quality enforcement
- **TypeScript Compiler** - Type checking and compilation

### Python Libraries
- **NumPy** - Numerical computing for array operations in gesture recognition
- **Pillow (PIL)** - Image processing and manipulation
- **mediapipe** - Hand tracking framework
- **opencv-python** - Computer vision operations
- **google-generativeai** - Gemini AI Python SDK
- **Flask-CORS** - Cross-Origin Resource Sharing support

### Deployment & DevOps
- **Vercel** (potential deployment platform) - Serverless hosting for Next.js
- **GitHub** - Repository hosting and collaboration
- **Environment Variables** - Configuration management across environments

### Additional Technologies
- **JSON** - Data interchange format for API communication
- **JWT (JSON Web Tokens)** - Secure session token management
- **WebSockets** (via Supabase) - Real-time data synchronization
- **REST API** - API architecture pattern for client-server communication
- **Canvas API** - HTML5 canvas for drawing and rendering
- **File API** - Browser file upload and handling

### UI/UX Enhancement
- **clsx** - Utility for constructing className strings conditionally
- **tailwind-merge** - Merge Tailwind CSS classes without conflicts
- **react-hook-form** - Form state management and validation
- **zod** - TypeScript-first schema validation

---

## Technology Stack Summary

**Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS, Radix UI, shadcn/ui, Framer Motion

**Backend:** Node.js, Flask, NextAuth.js, Python

**Database:** PostgreSQL, Supabase

**AI/ML:** Google Gemini 1.5 Flash, MediaPipe Hands, Vapi Voice AI, OpenCV

**Additional:** Git, npm, ESLint, NumPy, Pillow, Flask-CORS, JWT

---

*This comprehensive technology stack enables PadhaKU to deliver a seamless, intelligent, and accessible learning experience for computer science students worldwide.*
