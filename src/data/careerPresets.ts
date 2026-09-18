import { CareerUniverse } from '../types/careeros';

export const SOFTWARE_DEVELOPER_PRESET: CareerUniverse = {
  profession: 'Software Developer',
  category: 'Technology',
  lastUpdated: '2026',
  
  identity: {
    profession: 'Software Developer',
    category: 'Technology',
    mainPurpose: 'Design, write, test, debug, and maintain software programs, systems, and applications that automate tasks, solve user problems, and power business operations.',
    problemSolved: 'Converts abstract business and human needs into reliable, scalable, automated computer software.',
    whereTheyWork: ['Tech startups', 'Enterprise corporations', 'Consultancies', 'Financial institutions', 'Remote / Distributed teams', 'Government tech units'],
    hiringIndustries: ['Finance & FinTech', 'Healthcare Tech', 'E-commerce & Retail', 'Cloud & SaaS', 'Automotive', 'Entertainment & Gaming'],
    titleVariations: ['Full Stack Engineer', 'Backend Developer', 'Frontend Engineer', 'Software Engineer I / II', 'Application Developer']
  },

  reality: {
    whatProfessionalsActuallyDo: [
      'Reading and deciphering existing legacy codebases (takes 60-70% of engineering time).',
      'Diagnosing obscure runtime bugs, edge cases, and flaky network requests.',
      'Writing automated tests, refactoring modules, and reviewing pull requests from teammates.',
      'Translating ambiguous product tickets into concrete architecture specifications.',
      'Participating in standups, backlog grooming, and incident post-mortems.'
    ],
    typicalResponsibilities: [
      'Designing clean API contracts and database schemas.',
      'Implementing features according to UX and security requirements.',
      'Optimizing performance bottlenecks (memory leaks, slow queries, payload sizes).',
      'Maintaining CI/CD pipelines, container deployments, and telemetry logs.'
    ],
    typicalWorkEnvironment: 'Modern office or hybrid/remote setup with dual monitors, Slack/Discord async communication, GitHub/GitLab PR review loops, and sprint tracking tools.',
    typicalWorkdayTimeline: [
      { time: '09:30 AM', task: 'Async Catch-up & Standup', detail: 'Review alert channels, check merged PR comments, 15-min team sync on blockers.' },
      { time: '10:00 AM', task: 'Deep Work Block 1', detail: 'Tackle core feature implementation, write unit tests, debug local regressions.' },
      { time: '01:00 PM', task: 'Code Reviews & PRs', detail: 'Inspect peer code for architecture patterns, security flaws, and test coverage.' },
      { time: '02:30 PM', task: 'Product/Design Alignment', detail: 'Clarify corner cases with Product Manager and UI/UX Designer before writing complex state.' },
      { time: '03:45 PM', task: 'Deep Work Block 2', detail: 'Database migrations, staging environment deployment, error-monitoring triage.' },
      { time: '05:30 PM', task: 'Documentation & Wrap-up', detail: 'Update READMEs, log branch status, prepare commit messages for next day.' }
    ],
    commonTasks: ['Writing TypeScript/Node/Python code', 'SQL query optimization', 'Bug replication and root cause analysis', 'Git branch merging and resolving conflicts'],
    toolsUsed: ['VS Code / Cursor / Neovim', 'Git & GitHub/GitLab', 'Docker & Kubernetes', 'PostgreSQL / MongoDB', 'Postman / Insomnia', 'Datadog / Sentry'],
    peopleTheyWorkWith: ['Product Managers', 'UI/UX Designers', 'QA Automation Engineers', 'DevOps / SRE Specialists', 'Engineering Managers'],
    beginnerMisunderstandings: [
      'Beginners think developers spend all day writing cool new code from scratch. In reality, most time is spent reading other people’s code and debugging.',
      'Beginners believe memorizing syntax is what makes a great engineer. Actually, system design, debugging discipline, and clear communication matter far more.',
      'Beginners think lone geniuses thrive. High-performing developers are collaborative team players who write readable, maintainable code.'
    ],
    unromanticizedTruth: 'Software development is demanding, cognitively exhausting intellectual labor. You will stare at screen errors for hours where the answer turns out to be an accidental typo or a misconfigured environment variable. The profession rewards persistent analytical patience, not momentary inspiration.'
  },

  realityCheck: {
    whatLooksAttractive: ['High compensation ceiling', 'Remote work flexibility', 'High market demand', 'Ability to build tangible apps from thin air'],
    whatIsActuallyDifficult: ['Endless tech stack churn requiring constant re-learning', 'Tight sprint deadlines and on-call pager duty', 'Imposter syndrome when facing complex distributed architectures', 'Mental exhaustion from context switching'],
    beginnerFrustrations: ['Tutorial hell (able to follow videos, but freezing on a blank screen)', 'Obscure dependency errors and compiler complaints', 'Passing resume filters without prior production experience'],
    competitionLevel: 'High at entry-level; moderate to scarce at mid-senior levels with proven production experience.',
    learningCurveAnalysis: 'Steep first 6 months (syntax, git, debugging, full stack integration), plateau from months 6-18, followed by architectural expansion.',
    workPressureReality: 'Varies by company; startups have frequent shifting requirements, while enterprises have rigid governance and slower deployment cycles.',
    continuousLearningRequirements: 'Crucial. Tools, frameworks, and AI-assisted workflows evolve every 12-18 months. Foundational computer science concepts, however, remain timeless.',
    commonMistakes: [
      'Jumping between 5 different frameworks without mastering JavaScript/TypeScript fundamentals.',
      'Building identical clone tutorials (Netflix clone, Spotify clone) with zero custom problem-solving.',
      'Neglecting Git commit discipline and readable code architecture.'
    ],
    socialMediaVsReality: 'Social media portrays developers sipping lattes by a pool working 2 hours a day. Reality is intense focus, reading dense documentation, debugging cryptic race conditions, and navigating complex corporate prioritization.'
  },

  mythsVsReality: [
    { myth: 'You must be a math genius to be a software developer.', reality: 'Most commercial software requires logic, structural thinking, and data modeling, not advanced calculus.' },
    { myth: 'AI coding tools will eliminate all software engineering jobs tomorrow.', reality: 'AI tools accelerate boilerplate generation, but engineers who understand systems, security, business context, and architecture are more valuable than ever.' },
    { myth: 'You must have a 4-year Computer Science degree from a top university.', reality: 'Demonstrated proof of skill (shipped applications, clean GitHub code, technical interview clarity) regularly beats paper credentials at top tech firms.' },
    { myth: 'Coding is an isolated, antisocial job where you wear headphones and talk to nobody.', reality: 'Software development is deeply social: design reviews, pair programming, RFC debates, and stakeholder consensus dominate the week.' }
  ],

  prosAndCons: {
    pros: [
      'Exceptional compensation and clear merit-based promotion tracks.',
      'Unmatched global liquidity: skills transfer across borders, industries, and business models.',
      'Intellectual satisfaction of solving tangible, real-world problems with code.',
      'Strong autonomy and potential for asynchronous or remote work.'
    ],
    cons: [
      'High risk of burnout if boundaries are not strictly maintained.',
      'Rapid technological obsolescence requires lifetime continuous study.',
      'Sedentary desk work can cause physical strain if posture/ergonomics are neglected.',
      'Production incidents and high-stress outages can disrupt personal schedules.'
    ],
    realityMatrix: [
      { area: 'Income Potential', reality: 'High to Very High', details: 'Entry-level ranges widely by geography ($60k-$120k in US, 6-18 LPA in India), scaling to $200k-$400k+ at senior levels.' },
      { area: 'Learning Difficulty', reality: 'Moderate-High', details: 'Initial syntax is approachable; distributed state, asynchronous concurrency, and performance tuning are difficult.' },
      { area: 'Competition', reality: 'Very High at Entry, Low at Senior', details: 'Massive entry-level applicant pools; heavy differentiation required through flagship projects.' },
      { area: 'Work Pressure', reality: 'Moderate to High', details: 'Pacing depends on sprint deadlines, deployment schedules, and production uptime agreements.' },
      { area: 'Creativity', reality: 'High', details: 'Architecture design, algorithmic optimization, and interface engineering are creative problem solving.' },
      { area: 'Technical Requirement', reality: 'Very High', details: 'Core data structures, API protocols, database schemas, and modern framework lifecycles are non-negotiable.' },
      { area: 'Communication Requirement', reality: 'High', details: 'Writing clear documentation, code reviews, and explaining tradeoffs to non-technical stakeholders is essential.' },
      { area: 'Career Growth', reality: 'Exceptional', details: 'Well-established dual career ladders: Staff/Principal Engineer track or Engineering Management.' },
      { area: 'Flexibility', reality: 'Very High', details: 'Hybrid, remote, contract, freelance, and startup paths are readily available worldwide.' },
      { area: 'Continuous Learning', reality: 'Mandatory', details: 'Requires regular reading of RFCs, framework updates, and architectural whitepapers.' }
    ]
  },

  audienceFit: {
    whoMayEnjoy: [
      'People who enjoy untangling puzzles and finding why something failed.',
      'Builders who derive satisfaction from turning thought into working interactive tools.',
      'Independent learners who don’t mind reading documentation and exploring unknowns.',
      'Detail-oriented thinkers who take pride in neat, structured systems.'
    ],
    whoMayFindChallenging: [
      'Individuals who want predictable, unchanging daily routines without new tools.',
      'People who experience intense anxiety when encountering unexplained errors.',
      'Those who despise sitting at a computer for extended blocks of focused time.',
      'Anyone seeking an immediate finish line where learning is "done forever".'
    ],
    tryBeforeCommit: {
      title: 'The 7-Day "Debug & Build" Test',
      experimentDescription: 'Before enrolling in an expensive course or quitting your job, spend 1 hour a day for 7 consecutive days building an interactive web utility from scratch.',
      testTasks: [
        'Day 1: Set up VS Code, Git, and write an HTML page with structured forms.',
        'Day 2: Add CSS layout using flexbox and grid without a visual editor.',
        'Day 3: Write vanilla JavaScript to capture form inputs and compute a calculated output.',
        'Day 4: Intentionally introduce 3 bugs and use browser DevTools Console & Network tabs to trace them.',
        'Day 5: Fetch live data from a public free JSON API (e.g. OpenWeather or CoinGecko) and display it.',
        'Day 6: Deploy your code to GitHub Pages or Vercel and test it on your mobile phone.',
        'Day 7: Reflect: Did you enjoy solving the errors, or did the debugging process make you miserable?'
      ]
    }
  },

  educationAndEligibility: {
    traditionalRoute: {
      name: 'Degree Route',
      sequence: ['B.S. / B.Tech in Computer Science or Software Engineering', 'Academic DSA & Operating Systems coursework', 'Summer Tech Internship', 'Campus placement / Entry-level SWE role'],
      detail: 'Provides rigorous foundation in data structures, computer networks, and algorithms. High acceptance rate for big tech campus recruiting pipelines.'
    },
    alternativeRoute: {
      name: 'Self-Learning & Bootcamps',
      sequence: ['Structured self-study roadmap (Odin Project / FullStackOpen)', 'Building 3 production-grade portfolio apps', 'Contributing to open-source software', 'Targeted cold-outreach & referral networking'],
      detail: 'Requires intense self-discipline. Success depends entirely on having verifiable "Proof of Skill" (live deployed URLs, readable clean GitHub repos).'
    },
    careerSwitchRoute: {
      name: 'Domain-Adjacent Pivot',
      sequence: ['Identify domain knowledge in current field (Finance, Healthcare, Logistics)', 'Learn full-stack programming targeting your current domain', 'Build internal automation tools at current employer', 'Apply for junior developer roles in your specific domain'],
      detail: 'Leverages existing business acumen so you are not competing purely as a junior coder, but as an engineer who understands the business.'
    },
    advancedRoute: {
      name: 'Specialization & Systems Track',
      sequence: ['3+ years full-stack experience', 'Deep dive into Distributed Systems, Cloud Architecture, or Low-Level Systems', 'Senior SWE → Staff Engineer or Solutions Architect'],
      detail: 'Focuses on multi-region scalability, database internals, security compliance, and organizational technical direction.'
    },
    requiredEducation: ['No legal minimum requirement (unlike Medicine or Civil Engineering)'],
    preferredEducation: ['Bachelor’s degree in Computer Science, Mathematics, or STEM discipline'],
    optionalEducation: ['Master’s in CS / Distributed Systems for specialized R&D roles'],
    certifications: [
      { name: 'AWS Certified Developer / Solutions Architect', issuer: 'Amazon Web Services', valueScore: 'High value for backend/cloud roles' },
      { name: 'Meta Front-End / Back-End Professional Certificate', issuer: 'Meta', valueScore: 'Good foundational signal for freshers' },
      { name: 'CKA (Certified Kubernetes Administrator)', issuer: 'CNCF', valueScore: 'High value for DevOps & Platform roles' }
    ],
    licensesOrExams: ['None required by law for commercial software developers.'],
    mandatoryVsOptionalClarification: 'Skills and verified proof of work are MANDATORY. Specific university degrees and commercial vendor certificates are OPTIONAL.'
  },

  skills: {
    technicalSkills: [
      { id: 'ts-1', name: 'TypeScript / JavaScript', level: 'Level 1 — Must Know', category: 'Technical', description: 'Strong understanding of types, async/await, closures, promises, and DOM manipulation.', proofOfSkill: 'Clean type definitions, zero "any" types in production code, unit tests covering edge cases.' },
      { id: 'ts-2', name: 'React / Modern Frontend Framework', level: 'Level 1 — Must Know', category: 'Technical', description: 'Component lifecycle, state management, hooks, memoization, and responsive layout.', proofOfSkill: 'Deployed interactive app handling complex form state, optimistic UI updates, and error boundaries.' },
      { id: 'ts-3', name: 'Node.js / Server-Side APIs', level: 'Level 2 — Should Know', category: 'Technical', description: 'RESTful API design, Express/Fastify, middleware, authentication (JWT/OAuth), and rate limiting.', proofOfSkill: 'Documented Swagger/OpenAPI endpoints with automated integration tests and rate limiting.' },
      { id: 'ts-4', name: 'Relational & NoSQL Databases', level: 'Level 2 — Should Know', category: 'Technical', description: 'SQL indexing, schema normalization, ACID transactions, migrations, and ORMs (Prisma/Drizzle).', proofOfSkill: 'Database schema with foreign key constraints, indexes on query filters, and clean migration history.' },
      { id: 'ts-5', name: 'System Design & Distributed State', level: 'Level 3 — Advanced', category: 'Technical', description: 'Caching (Redis), message queues (Kafka/RabbitMQ), load balancing, and microservices tradeoffs.', proofOfSkill: 'Architectural RFC document explaining latency tradeoffs, cache invalidation, and failure modes.' },
      { id: 'ts-6', name: 'Performance Optimization & Web Vitals', level: 'Level 4 — Specialization', category: 'Technical', description: 'Code splitting, tree shaking, SSR/SSG, DB query explain plans, and memory profiling.', proofOfSkill: 'Lighthouse score > 95 audit report and Flamegraph profile isolating a CPU bottleneck.' }
    ],
    softSkills: [
      { id: 'ss-1', name: 'Technical Written Communication', level: 'Level 1 — Must Know', category: 'Soft', description: 'Writing clear pull request descriptions, issue tickets, and RFC technical proposals.', proofOfSkill: 'A published engineering blog post or PR description detailing problem, approach, and testing checklist.' },
      { id: 'ss-2', name: 'Debugging Methodology', level: 'Level 1 — Must Know', category: 'Soft', description: 'Systematically isolating variables instead of random trial-and-error guessing.', proofOfSkill: 'Able to articulate step-by-step root-cause analysis in an interview setting.' },
      { id: 'ss-3', name: 'Constructive Code Review', level: 'Level 2 — Should Know', category: 'Soft', description: 'Giving empathetic, constructive feedback on peers’ work without ego.', proofOfSkill: 'Public PR review comments showing balanced appreciation and actionable architectural suggestions.' },
      { id: 'ss-4', name: 'Scope Negotiation with Product', level: 'Level 3 — Advanced', category: 'Soft', description: 'Helping product managers break down high-effort requests into phased MVPs.', proofOfSkill: 'Demonstrated history of delivering high-impact features ahead of deadlines by trimming non-essential scope.' }
    ],
    tools: [
      { id: 'tl-1', name: 'Git & Version Control', level: 'Level 1 — Must Know', category: 'Tool', description: 'Branching, rebasing, resolving merge conflicts, and atomic commits.', proofOfSkill: 'Clean GitHub commit history with conventional commit messages (feat:, fix:, chore:).' },
      { id: 'tl-2', name: 'Docker', level: 'Level 2 — Should Know', category: 'Tool', description: 'Writing multi-stage Dockerfiles, compose files, and containerizing environments.', proofOfSkill: 'Dockerfile building a production container under 100MB with security scanning.' },
      { id: 'tl-3', name: 'CI/CD Pipelines (GitHub Actions)', level: 'Level 2 — Should Know', category: 'Tool', description: 'Automating linting, tests, and preview deployments on pull requests.', proofOfSkill: 'Configured .github/workflows/deploy.yml pipeline that runs tests before deploying.' }
    ],
    domainKnowledge: [
      { topic: 'HTTP Protocols & Web Security', whyItMatters: 'Understanding HTTPS, CORS, CSP headers, XSS, and CSRF prevents catastrophic user data leaks.' },
      { topic: 'Data Structures & Algorithmic Complexity', whyItMatters: 'Knowing O(n) vs O(n²) prevents production systems from locking up under high user traffic.' },
      { topic: 'Software Design Principles (SOLID, DRY)', whyItMatters: 'Ensures codebase remains maintainable 2 years later when team size expands.' }
    ]
  },

  defaultSkillGaps: [
    {
      skill: 'Full-Stack Asynchronous State Management',
      whyItMatters: 'Handling loading states, network failures, race conditions, and optimistic rollbacks is what separates junior coders from production engineers.',
      currentLikelyLevel: 'Basic useState hooks that break when network lags or errors.',
      targetLevel: 'Robust query caching (TanStack Query / SWR) with offline resilience and retry logic.',
      howToLearn: 'Study cache invalidation patterns, optimistic mutation updates, and error boundaries in modern React.',
      practiceMethod: 'Build a Kanban board where network latency is simulated at 2000ms and items revert if server returns 500.',
      projectToDemonstrate: 'Real-time collaborative task board with offline queue and instant optimistic updates.'
    },
    {
      skill: 'Production Database Modeling & Indexing',
      whyItMatters: 'Slow database queries crash server infrastructure under real user loads.',
      currentLikelyLevel: 'Single table flat models with no foreign keys or indexes.',
      targetLevel: 'Normalized schema design, composite indexes, transaction isolation, and explain query analysis.',
      howToLearn: 'Study PostgreSQL documentation on B-tree indexes, execution plans, and foreign key cascades.',
      practiceMethod: 'Seed a local database with 1,000,000 synthetic records and benchmark query times before/after indexing.',
      projectToDemonstrate: 'E-commerce analytics dashboard querying 500k rows in under 20ms.'
    },
    {
      skill: 'Automated Testing (Unit + Integration + E2E)',
      whyItMatters: 'Companies do not hire developers whose code requires manual testing by hand every release.',
      currentLikelyLevel: 'Zero automated tests; testing only via browser refresh.',
      targetLevel: '70%+ test coverage with Vitest/Jest for business logic and Playwright for critical user journeys.',
      howToLearn: 'Practice Test-Driven Development (TDD) for utility functions and mock API handlers with MSW.',
      practiceMethod: 'Write unit tests for a checkout cart calculation engine testing discounts, taxes, and empty states.',
      projectToDemonstrate: 'Payment processing service with 100% test coverage for edge case calculations.'
    }
  ],

  learningRoadmap: [
    {
      stageNumber: 0,
      code: 'STAGE_0_ORIENTATION',
      title: 'Stage 0 — Orientation & Architecture',
      duration: 'Weeks 1–2',
      whatToLearn: ['How the Internet works: DNS, HTTP/HTTPS, Client-Server architecture', 'The terminal/command line, file systems, and environment variables', 'How code gets compiled, bundled, and rendered'],
      whyToLearn: 'Removes the black-box illusion and builds mental model of how computing components interact.',
      suggestedPractice: 'Curl endpoints from the terminal, inspect browser network waterfall, configure SSH keys.',
      expectedOutcome: 'Comfort navigating the terminal and understanding web request lifecycles.',
      commonMistakes: ['Rushing immediately to React without understanding how browsers parse HTML/CSS/JS.'],
      readyCriteria: 'Can explain what happens when a user types "https://google.com" into a browser and hits Enter.'
    },
    {
      stageNumber: 1,
      code: 'STAGE_1_FOUNDATION',
      title: 'Stage 1 — JavaScript & Core Fundamentals',
      duration: 'Weeks 3–6',
      whatToLearn: ['Variables, scopes, data types, arrays, objects', 'ES6+ features: destructuring, rest/spread, modules', 'Asynchronous JS: Event loop, Callbacks, Promises, async/await', 'DOM manipulation and event listeners'],
      whyToLearn: 'JavaScript is the runtime engine of modern client and full-stack development.',
      suggestedPractice: 'Solve 30 algorithmic array/object challenges without using external libraries.',
      expectedOutcome: 'Fluency in functional array methods (map, filter, reduce) and asynchronous promise chaining.',
      commonMistakes: ['Copy-pasting solutions from ChatGPT without stepping through the code line-by-line.'],
      readyCriteria: 'Can build an interactive browser countdown timer and weather widget from scratch without looking up syntax.'
    },
    {
      stageNumber: 2,
      code: 'STAGE_2_CORE_SKILLS',
      title: 'Stage 2 — TypeScript & Modern Frontend',
      duration: 'Weeks 7–10',
      whatToLearn: ['TypeScript interfaces, types, generics, and strict mode', 'React core: JSX, Props, State, Effects, Custom Hooks', 'Tailwind CSS utility-first styling and accessible HTML semantics', 'Component decomposition and prop drilling prevention'],
      whyToLearn: 'TypeScript catches 30% of runtime bugs at build time and is mandatory at top software organizations.',
      suggestedPractice: 'Convert a vanilla JS application into strict TypeScript with zero "any" types.',
      expectedOutcome: 'Ability to build modular, component-driven web interfaces with type safety.',
      commonMistakes: ['Over-using useEffect for state calculations that could be derived directly in render.'],
      readyCriteria: 'Can write reusable UI components with TypeScript props and unit tests.'
    },
    {
      stageNumber: 3,
      code: 'STAGE_3_PRACTICE',
      title: 'Stage 3 — Backend, APIs & Database Systems',
      duration: 'Weeks 11–14',
      whatToLearn: ['Node.js runtime, Express/Fastify server setup', 'REST API best practices, HTTP status codes, headers, and CORS', 'PostgreSQL schema modeling, relations (1-to-many, many-to-many), and migrations', 'Authentication: Password hashing (argon2/bcrypt), session cookies vs JWT'],
      whyToLearn: 'Full-stack competence requires building secure data storage and server-side business logic.',
      suggestedPractice: 'Build a secure user authentication API with email verification and rate-limiting.',
      expectedOutcome: 'A running API service connected to a database with verified security headers.',
      commonMistakes: ['Storing plaintext passwords or exposing database connection strings in client code.'],
      readyCriteria: 'Can design a relational database schema for an e-commerce platform and query it with complex joins.'
    },
    {
      stageNumber: 4,
      code: 'STAGE_4_PROJECTS',
      title: 'Stage 4 — Real-World Projects & Full Stack Architecture',
      duration: 'Weeks 15–18',
      whatToLearn: ['End-to-end integration: React client + Node/TypeScript API + PostgreSQL', 'State synchronization, query caching (TanStack Query), optimistic UI', 'File uploads (S3/Cloud Storage) and background jobs', 'Containerization with Docker and multi-stage builds'],
      whyToLearn: 'Recruiters hire engineers who have assembled all the moving parts into working systems.',
      suggestedPractice: 'Build an end-to-end application from scratch, Dockerize it, and deploy it to a live cloud host.',
      expectedOutcome: 'A live, deployed production web app used by real humans with zero console errors.',
      commonMistakes: ['Abandoning projects when they reach 80% completion because the edge cases are hard.'],
      readyCriteria: 'Have a deployed URL with custom domain, SSL, database persistence, and automated CI/CD.'
    },
    {
      stageNumber: 5,
      code: 'STAGE_5_SPECIALIZATION',
      title: 'Stage 5 — Specialization & System Optimization',
      duration: 'Weeks 19–22',
      whatToLearn: ['Choose track: Backend/Distributed Systems OR Frontend/Web Performance OR DevOps/Platform', 'Redis caching strategies and database connection pooling', 'Automated testing suites (Unit, Integration, End-to-End)', 'Application telemetry: logging, metrics, error tracking (Sentry)'],
      whyToLearn: 'Specialized engineers command higher compensation and stand out from generic junior candidates.',
      suggestedPractice: 'Audit an existing application for slow queries, add Redis cache, and benchmark latency improvement.',
      expectedOutcome: 'Observable, high-performance architecture with instrumentation.',
      commonMistakes: ['Premature optimization of things that have zero measurable user impact.'],
      readyCriteria: 'Can explain how to scale a system from 100 to 100,000 concurrent users.'
    },
    {
      stageNumber: 6,
      code: 'STAGE_6_PROFESSIONAL_READINESS',
      title: 'Stage 6 — Professional Readiness & Portfolio Strategy',
      duration: 'Weeks 23–24',
      whatToLearn: ['Proof-of-work documentation: Architecture diagrams, RFCs, and clean READMEs', 'ATS-optimized resume engineering with quantifiable metrics', 'LinkedIn positioning and GitHub profile curation', 'Behavioral interview frameworks (STAR method)'],
      whyToLearn: 'Technical ability is useless if your application gets rejected by screening algorithms.',
      suggestedPractice: 'Record a 3-minute video walkthrough of your flagship project explaining architectural tradeoffs.',
      expectedOutcome: 'Polished resume, curated GitHub, deployed flagship project, and elevator pitch.',
      commonMistakes: ['Listing 30 programming languages on your resume when you only know 2 properly.'],
      readyCriteria: 'Resume passes ATS scan with 85%+ match for target entry-level SWE postings.'
    },
    {
      stageNumber: 7,
      code: 'STAGE_7_JOB_ENTRY',
      title: 'Stage 7 — Job Entry & Interview Execution',
      duration: 'Weeks 25–28',
      whatToLearn: ['Data Structures & Algorithms interview patterns (Two pointers, Sliding window, BFS/DFS)', 'System design interview communication for junior/mid engineers', 'Live coding composure and asking clarifying questions', 'Targeted referral outreach and recruiter networking'],
      whyToLearn: 'Technical interviews are a specialized skill set that requires deliberate practice.',
      suggestedPractice: 'Conduct 5 mock technical interviews with peers or AI simulators.',
      expectedOutcome: 'Confidence answering both coding and architectural interview prompts under time pressure.',
      commonMistakes: ['Starting to write code in an interview before clarifying edge cases with the interviewer.'],
      readyCriteria: 'Can solve medium LeetCode/HackerRank problems while explaining thought process aloud.'
    },
    {
      stageNumber: 8,
      code: 'STAGE_8_PROFESSIONAL_GROWTH',
      title: 'Stage 8 — Post-Hiring Professional Growth',
      duration: 'Months 7–12+',
      whatToLearn: ['First 90 days survival: Understanding codebase, delivering quick wins, building peer trust', 'Code review etiquette and proposing architectural improvements via RFCs', 'Mentoring junior developers and stakeholder management', 'Negotiating promotions and positioning for Senior Engineer promotion'],
      whyToLearn: 'Getting the job is only the halfway mark; lasting career success requires professional leverage.',
      suggestedPractice: 'Write your first internal technical RFC to refactor a high-friction module.',
      expectedOutcome: 'Promotion from Junior to Mid-Level Software Engineer within 18–24 months.',
      commonMistakes: ['Remaining a passive ticket-taker who never learns the business value of features.'],
      readyCriteria: 'Independently scoping and executing multi-week technical initiatives with minimal guidance.'
    }
  ],

  projects: {
    beginner: [
      {
        id: 'proj-b1',
        title: 'Interactive Markdown Notes & Documentation Engine',
        level: 'Beginner',
        problem: 'Beginners need a local offline-capable markdown editor with real-time preview, word count metrics, and export capabilities.',
        objective: 'Master state management, event handling, local storage synchronization, and DOM parsing.',
        skillsUsed: ['TypeScript', 'React', 'Tailwind CSS', 'LocalStorage API'],
        tools: ['VS Code', 'Vite', 'GitHub'],
        difficulty: 'Beginner (1/5)',
        expectedTime: '10–15 hours',
        features: ['Split screen raw markdown vs live preview', 'Tags & search filtering', 'Export as clean HTML and PDF', 'Auto-save with dirty state indicators'],
        deliverables: ['Live deployed link on Vercel', 'Public GitHub repo with clean commit messages and setup instructions'],
        portfolioPresentation: 'Highlight the clean keyboard shortcuts, debounce performance on fast typing, and responsive layout.',
        resumeBulletPossibilities: ['Engineered responsive markdown documentation engine in TypeScript/React with real-time AST parsing and zero latency on 10k-word inputs.'],
        interviewQuestionsExpected: ['Why did you debounce the markdown preview rendering?', 'How did you handle invalid markdown syntax without crashing the app?']
      }
    ],
    intermediate: [
      {
        id: 'proj-i1',
        title: 'Team Task Management API & Kanban Client',
        level: 'Intermediate',
        problem: 'Remote distributed teams need real-time drag-and-drop task tracking with role-based permissions and audit logs.',
        objective: 'Build a full-stack CRUD application with relational schema, authentication, and optimistic drag-and-drop state.',
        skillsUsed: ['TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma ORM', 'JWT Auth'],
        tools: ['Docker', 'Postman', 'Supabase/Neon'],
        difficulty: 'Intermediate (3/5)',
        expectedTime: '30–40 hours',
        features: ['JWT authentication with refresh token rotation', 'Drag-and-drop Kanban columns with order re-indexing', 'Team invite links with RBAC (Admin, Member, Viewer)', 'Automated email notifications on task assignment'],
        deliverables: ['Documented REST API with Swagger/Postman collection', 'Interactive web client with responsive mobile view', 'Docker Compose file running client, server, and database'],
        portfolioPresentation: 'Focus on how re-ordering items works mathematically (fractional indexing) to prevent updating every single row in the database.',
        resumeBulletPossibilities: ['Architected full-stack Kanban board with PostgreSQL and Node.js supporting fractional indexing, reducing database write operations by 85% during column reorders.'],
        interviewQuestionsExpected: ['How do you prevent two users from overwriting the same task simultaneously?', 'Explain your JWT expiration and refresh token security architecture.']
      }
    ],
    advanced: [
      {
        id: 'proj-a1',
        title: 'High-Throughput Webhook Processing & Telemetry Pipeline',
        level: 'Advanced',
        problem: 'SaaS companies receive thousands of third-party webhooks (Stripe, GitHub, Shopify) that must be ingested reliably without losing events during traffic spikes.',
        objective: 'Design a decoupled backend with queueing, idempotency keys, worker consumers, and dead-letter queues.',
        skillsUsed: ['Node.js/Go', 'Redis (BullMQ)', 'PostgreSQL', 'Docker', 'Grafana/Prometheus'],
        tools: ['K6 load tester', 'Docker Compose', 'Sentry'],
        difficulty: 'Advanced (4/5)',
        expectedTime: '45–60 hours',
        features: ['API endpoint acknowledging webhooks in < 25ms', 'Redis queue buffer decoupling ingestion from heavy processing', 'Idempotency checks preventing duplicate processing of retried events', 'Prometheus telemetry dashboard tracking queue depth and error rates'],
        deliverables: ['Load test report proving ingestion of 1,000 req/sec with zero dropped messages', 'Architecture diagram explaining retry exponential backoff and DLQ routing'],
        portfolioPresentation: 'Demonstrate with a video demo running K6 load testing: show the queue absorbing the traffic burst while the database remains stable.',
        resumeBulletPossibilities: ['Built resilient webhook ingestion pipeline in TypeScript and Redis processing 1,000+ events/sec with strict idempotency verification and automated dead-letter queue recovery.'],
        interviewQuestionsExpected: ['How did you ensure idempotency across distributed worker nodes?', 'What happens if the Redis broker runs out of memory?']
      }
    ],
    flagship: {
      id: 'proj-flagship',
      title: 'DevPulse: Real-Time Collaborative API Mocking & Contract Testing Engine',
      level: 'Flagship',
      problem: 'Frontend and backend engineering teams are routinely blocked waiting for backend APIs to be built, leading to integration mismatches and sprint delays.',
      objective: 'Create a comprehensive platform where engineers can define OpenAPI specifications, generate realistic dynamic mock endpoints with custom latency/error simulations, and collaborate in real-time with teammates.',
      skillsUsed: ['TypeScript', 'Next.js / Vite React', 'Node.js / Express', 'PostgreSQL', 'Redis', 'WebSockets', 'OpenAPI 3.0 Specs', 'Docker'],
      tools: ['GitHub Actions CI/CD', 'AWS / Cloud Run', 'Tailwind CSS', 'Vitest'],
      difficulty: 'Flagship Industry-Grade (5/5)',
      expectedTime: '80–120 hours',
      features: [
        'OpenAPI Spec Parser & Visual Schema Designer.',
        'Dynamic Mock Engine generating randomized schema-compliant response payloads on unique subdomains.',
        'Configurable network chaos simulation (custom latency, HTTP 429 rate limit triggers, intermittent 500 errors).',
        'Live request inspector with real-time WebSocket streaming of incoming request headers and payloads.',
        'Team workspaces with role-based access control and exportable Postman collections.',
        'Automated contract diffing alerting teams when frontend payloads diverge from agreed specs.'
      ],
      deliverables: [
        'Production deployed system with custom domain, SSL, and uptime monitoring.',
        'Extensive architectural documentation with C4 model system diagrams.',
        'Test suite with 80%+ coverage (Unit tests, Integration tests, End-to-End Playwright runs).',
        'Open source GitHub repository with detailed README, quickstart Docker container, and architecture decision records (ADRs).'
      ],
      portfolioPresentation: 'This is the centerpiece of your professional identity. Present it like a real commercial product with a clear problem statement, live working demo, architecture walkthrough video, and technical tradeoffs section.',
      resumeBulletPossibilities: [
        'Architected DevPulse, a production-grade API contract mocking platform handling real-time WebSocket payload inspection and OpenAPI validation, utilized by 150+ developer beta users.',
        'Engineered dynamic mock response engine with Redis caching, supporting sub-15ms response latency and configurable network chaos simulation for resilient client testing.'
      ],
      interviewQuestionsExpected: [
        'Walk me through the lifecycle of an incoming mock request on your dynamic subdomain.',
        'How did you architect the WebSocket pipeline to broadcast request logs only to authorized workspace members without leaking data?',
        'What was the most challenging technical tradeoff you encountered during implementation?'
      ]
    }
  },

  professionalIdentity: {
    headlineTemplates: [
      'Full Stack Software Engineer | TypeScript, React, Node.js & Distributed Systems | Built DevPulse (API Engine)',
      'Software Developer | Backend Systems, PostgreSQL & Performance Optimization | Open Source Contributor',
      'Frontend Software Engineer | React, TypeScript & Web Performance | Crafting High-Usability Web Applications'
    ],
    careerPositioning: 'Position yourself as an analytical, production-minded engineer who writes clean, tested code and deeply cares about user experience and system reliability—not just a casual tutorial follower.',
    linkedInProfileDirection: {
      aboutSectionTemplate: 'I am a Full Stack Software Engineer focused on building resilient, scalable web applications with TypeScript, React, Node.js, and PostgreSQL.\n\nRecently, I built DevPulse—a real-time collaborative API mocking platform that helps frontend and backend teams unblock integration dependencies with zero friction. I love tackling asynchronous state challenges, optimizing database query performance, and writing clean, readable code with automated test coverage.\n\nTechnical Stack:\n• Languages: TypeScript, JavaScript, SQL, HTML/CSS\n• Frontend: React, Next.js, Tailwind CSS, TanStack Query\n• Backend & Data: Node.js, Express, PostgreSQL, Redis, Prisma ORM\n• DevOps & Tools: Docker, Git/GitHub, CI/CD Actions, Linux, Postman\n\nAlways open to discussing software architecture, engineering tradeoffs, and new career opportunities.',
      featuredRecommendations: [
        'Pin your Flagship Project (DevPulse) live URL and architecture GitHub repo with an engaging preview card.',
        'Pin an engineering breakdown post detailing a tough technical bug you solved (e.g., "How I solved a Redis connection leak in Node.js").',
        'Upload your clean 1-page ATS-optimized PDF resume.'
      ],
      skillsToHighlight: ['TypeScript', 'React.js', 'Node.js', 'PostgreSQL', 'System Design', 'Git', 'Docker']
    },
    portfolioStructure: {
      recommendedPages: [
        'Hero: Concise value statement + links to GitHub, LinkedIn, and PDF Resume.',
        'Featured Projects: The Flagship Project first (large visual preview, live URL, GitHub URL, technical architecture summary), followed by 2 intermediate/advanced projects.',
        'Engineering Insights / Articles: 2 short technical writeups showing your communication ability.',
        'About & Contact: Simple, human overview of your journey, work ethic, and quick email contact form.'
      ],
      proofOfWorkStrategy: 'Never show static screenshots. Provide live working links that anyone can test in 5 seconds, accompanied by public GitHub repositories with clean READMEs, architecture diagrams, and verified test suites.'
    },
    elevatorPitch30s: 'Hi, I’m a Full Stack Software Engineer specializing in TypeScript, React, and Node.js. Most recently, I built DevPulse, a real-time API contract testing platform that helps distributed engineering teams simulate endpoints and inspect payloads with sub-15ms latency. I focus on writing clean, well-tested code, understanding database performance, and turning complex product requirements into reliable software.',
    networkingIntroduction: 'Hi [Name], I came across your engineering work at [Company] regarding your team’s transition to event-driven architectures. I’m a full-stack engineer who recently built a distributed webhook pipeline with Redis and PostgreSQL, and I’d love to follow your team’s technical developments. Would love to connect!',
    proofOfSkillFormula: 'Skill → Practice Exercises → Production Project → GitHub Verification → Architecture Diagram → Resume Metric → Live Interview Demo'
  },

  resumeIntelligence: {
    recommendedSections: [
      'Contact Header (Name, Location, Phone, Email, LinkedIn URL, GitHub URL, Portfolio URL)',
      'Technical Skills (categorized by Languages, Frameworks, Databases, Tools & Platforms)',
      'Featured Engineering Projects (Title, Tech Stack, Live URL, GitHub URL, 2–3 impact-oriented bullet points)',
      'Professional Experience / Internships (Company, Role, Dates, Action + Metric + Impact bullets)',
      'Education & Certifications'
    ],
    professionSpecificKeywords: [
      'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'RESTful APIs', 'System Architecture',
      'Docker', 'Git', 'CI/CD', 'Redis', 'Unit Testing', 'Vitest', 'Integration Testing',
      'Database Optimization', 'State Management', 'WebSockets', 'Async Programming'
    ],
    bulletPointFormula: 'Action Verb + Technical Tool / Context + Specific Metric / Outcome = High-Impact Bullet',
    bulletExamples: [
      {
        role: 'Full Stack Project',
        before: 'Created a website for managing team tasks using React and Node.',
        after: 'Architected responsive Kanban board in TypeScript and PostgreSQL, implementing fractional re-indexing to reduce database write operations by 85% during drag-and-drop operations.',
        impactExplanation: 'Shows specific technical depth (fractional indexing), explicit tech stack, and a quantifiable performance outcome.'
      },
      {
        role: 'Backend Feature',
        before: 'Worked on the API and fixed some bugs with user authentication.',
        after: 'Refactored authentication microservice to utilize Argon2 password hashing and HTTP-only JWT cookies, eliminating unauthorized session hijacking vulnerabilities across 2,500 active accounts.',
        impactExplanation: 'Specifies the cryptographic standard used, the security problem resolved, and the scale of users protected.'
      }
    ],
    atsChecklist: [
      'Clean single-column layout without tables, multi-column boxes, or graphic skill meters.',
      'Standard section titles (Experience, Projects, Skills, Education).',
      'Save and submit as text-searchable PDF (never an image export).',
      'Include keywords explicitly matching the target job description naturally in project bullets.'
    ],
    antiFabricationNotice: 'CAREEROS AI STRICT WARNING: Never invent false employment history, exaggerate project metrics you cannot defend in an interview, or claim mastery of tools you have never built with. Technical interviewers will ask you to explain every detail, and fabrication leads to immediate disqualification and industry blacklisting.'
  },

  interviewSpec: {
    modes: [
      { id: 'beginner', name: 'Beginner / Fundamentals', description: 'Core JavaScript, HTML/CSS, basic data structures, and terminal concepts.' },
      { id: 'technical', name: 'Technical & System Knowledge', description: 'TypeScript, async event loops, API design, database normalization, and framework lifecycle.' },
      { id: 'behavioral', name: 'Behavioral & Culture Fit', description: 'Teamwork, conflict resolution, dealing with feedback, and debugging under pressure (STAR method).' },
      { id: 'situational', name: 'Situational & Problem Solving', description: 'Real-world workplace scenarios: handling an outage, scoping an ambiguous ticket, pushing back on unreasonable deadlines.' },
      { id: 'hr', name: 'HR & Motivation', description: 'Career goals, why this company, strengths & weaknesses, and salary expectation management.' },
      { id: 'expert', name: 'Expert & System Design', description: 'Distributed systems, database sharding, caching tradeoffs, message queues, and high-concurrency scaling.' }
    ],
    sampleBank: [
      {
        id: 'q1',
        category: 'technical',
        question: 'Explain the difference between SQL and NoSQL databases. In what scenario would you explicitly choose PostgreSQL over MongoDB for a new project?',
        hint: 'Focus on ACID transactions, schema consistency, relational joins, and query flexibility vs unstructured document scaling.',
        keyAspectsExpected: ['ACID compliance and transaction guarantees', 'Relational data integrity with foreign keys', 'Complex joins and reporting', 'Schema evolution and data consistency'],
        difficulty: 'Medium'
      },
      {
        id: 'q2',
        category: 'technical',
        question: 'How does the JavaScript Event Loop handle asynchronous operations? Walk me through what happens when a Promise resolves versus a setTimeout callback.',
        hint: 'Microtasks (Promises) vs Macrotasks (setTimeout, I/O), Call Stack, and Callback Queue.',
        keyAspectsExpected: ['Call stack execution model', 'Microtask queue priority over macrotask queue', 'Non-blocking I/O in browser/Node runtime'],
        difficulty: 'Hard'
      },
      {
        id: 'q3',
        category: 'behavioral',
        question: 'Tell me about a time you encountered a severe bug or production issue right before a deadline. How did you diagnose it, and how did you communicate with your team?',
        hint: 'Use the STAR structure (Situation, Task, Action, Result) with an emphasis on systematic debugging and proactive communication.',
        keyAspectsExpected: ['Structured troubleshooting over panicked guessing', 'Keeping teammates/stakeholders informed', 'Post-mortem or test addition to prevent recurrence'],
        difficulty: 'Medium'
      },
      {
        id: 'q4',
        category: 'situational',
        question: 'A product manager asks you to deliver a new feature in 3 days, but you estimate it will realistically take 10 days to build safely with tests. How do you handle this conversation?',
        hint: 'Do not just say "no". Offer phased delivery, scope trimming (MVP), and transparent tradeoff explanations.',
        keyAspectsExpected: ['Understanding business urgency behind deadline', 'Proposing phased MVP vs full scope', 'Explaining risks of technical debt if rushed'],
        difficulty: 'Medium'
      }
    ]
  },

  jobReadinessAudit: {
    categories: [
      { id: 'cat-tech', name: 'Technical Competence', weight: 25, keyChecklist: ['Can build full stack CRUD app with TypeScript', 'Understands relational database modeling & indexing', 'Writes automated unit and integration tests'] },
      { id: 'cat-proj', name: 'Production Projects', weight: 25, keyChecklist: ['Has 1 Flagship Project deployed with live URL', 'Has 2 distinct intermediate/advanced supporting projects', 'Clean public GitHub repos with detailed READMEs and architecture diagrams'] },
      { id: 'cat-resume', name: 'Resume & Online Presence', weight: 20, keyChecklist: ['ATS-compliant 1-page PDF resume', 'Action + Metric + Impact project bullets', 'Active LinkedIn profile with featured projects pinned'] },
      { id: 'cat-interview', name: 'Interview Articulation', weight: 20, keyChecklist: ['Can solve LeetCode medium problems while thinking out loud', 'Can explain architecture tradeoffs of flagship project', 'STAR framework prepared for 5 standard behavioral prompts'] },
      { id: 'cat-awareness', name: 'Professional Market Awareness', weight: 10, keyChecklist: ['Understands entry-level hiring market reality', 'Knows where to search beyond generic LinkedIn Easy Apply', 'Has customized recruiter outreach templates'] }
    ],
    jobReadyActionPlan: [
      { priority: 'Critical', task: 'Deploy Flagship Project to production with custom domain, SSL, and zero console errors.', targetProof: 'Working public URL verified on desktop and mobile.' },
      { priority: 'Critical', task: 'Revise resume bullets using Action Verb + Technical Context + Quantifiable Metric formula.', targetProof: 'Resume scanned and scored 85%+ on ATS tool.' },
      { priority: 'High', task: 'Conduct 5 live mock technical interviews focusing on clear spoken explanations of code.', targetProof: 'Recorded feedback score > 8/10 on clarity and edge-case handling.' },
      { priority: 'Medium', task: 'Connect with 10 engineering alumni or senior developers for informational chats.', targetProof: '3 referral conversations initiated.' }
    ]
  },

  entryAndJobSearch: {
    entryStrategies: [
      { channel: 'Direct Referral Outreach', realismScore: 'Highest Conversion (40–60% interview rate)', approach: 'Reach out to engineering team leads at target mid-sized companies with a personalized 3-sentence note referencing their product and linking your flagship project.' },
      { channel: 'Open Source Contribution', realismScore: 'High Signal', approach: 'Find actively maintained libraries (e.g. documentation, bug fixes on popular GitHub tools), contribute meaningful PRs, and connect with maintainers who frequently hire.' },
      { channel: 'Targeted Niche Job Boards', realismScore: 'Moderate-High', approach: 'Use specialized tech boards (Wellfound, RemoteOK, Hacker News "Who is Hiring?") where engineering hiring managers post directly, bypassing black-hole enterprise ATS forms.' },
      { channel: 'Generic Job Board Easy Apply', realismScore: 'Lowest Conversion (<2% interview rate)', approach: 'Apply to 500 jobs with zero customization. Leads to burnout. Use only as secondary pipeline.' }
    ],
    whereToSearch: [
      { platform: 'Wellfound (AngelList)', strategy: 'Best for seed to Series B tech startups seeking hungry, project-proven builders.' },
      { platform: 'Hacker News "Who is Hiring?"', strategy: 'Posted on the 1st of every month; direct engineering manager email addresses without recruiters.' },
      { platform: 'LinkedIn Jobs (Filtered)', strategy: 'Filter by "Posted in past 24 hours" and reach out to the recruiter or hiring manager directly with your flagship demo link.' }
    ],
    recruiterMessagingTemplates: [
      {
        scenario: 'Reaching out to an Engineering Manager with a relevant Flagship Project',
        subject: 'Quick question regarding [Company]\'s [Team/Product] & DevPulse architecture',
        message: 'Hi [Name],\n\nI noticed [Company] is scaling your customer-facing API infrastructure. I’m a Full Stack Engineer who recently built DevPulse—a real-time OpenAPI contract testing engine with Redis and WebSockets that simulates mock endpoints in under 15ms.\n\nI admired how your team solved [specific recent feature or blog post topic]. Here is the 2-minute live demo of DevPulse: [Live Link].\n\nIf your team is open to junior/mid engineers who love tackling async systems and database performance, I’d welcome 10 minutes to learn about your current engineering roadmap.\n\nBest regards,\n[Your Name]'
      }
    ],
    applicationStrategy: [
      'Prioritize quality over quantity: 5 deeply customized applications with personalized outreach beat 50 blind clicks.',
      'Record a 90-second Loom video demonstrating how your flagship project solves a problem related to the company’s product.',
      'Track every application in a simple pipeline spreadsheet (Company, Role, Contact, Date, Follow-up 1, Follow-up 2, Outcome).'
    ]
  },

  growthMap: {
    timeline: [
      { stage: 'Years 0–1', years: '0–1 Years', focus: 'Entry-Level / Junior Developer', title: 'Junior Software Engineer', responsibilities: ['Delivering well-scoped feature tickets', 'Writing thorough unit and integration tests', 'Learning the production deployment process', 'Learning from PR reviews and pairing with senior peers'] },
      { stage: 'Years 1–3', years: '1–3 Years', focus: 'Core Professional', title: 'Mid-Level Software Engineer', responsibilities: ['Owning entire medium-sized features end-to-end', 'Designing database schemas and API contracts', 'Reviewing junior pull requests and unblocking teammates', 'Triaging and fixing production on-call incidents independently'] },
      { stage: 'Years 3–5', years: '3–5 Years', focus: 'Specialization & Autonomy', title: 'Senior Software Engineer', responsibilities: ['Architecting multi-month system initiatives', 'Balancing technical debt against business speed', 'Mentoring junior and mid-level engineers', 'Leading technical design reviews (RFCs)'] },
      { stage: 'Years 5–10+', years: '5–10+ Years', focus: 'High-Leverage Leadership', title: 'Staff Engineer OR Engineering Manager', responsibilities: ['Setting organizational technical direction (Staff track)', 'Managing 6–10 engineers and hiring/performance (Manager track)', 'Aligning technical roadmap with executive business priorities'] }
    ],
    careerTree: [
      { branch: 'Individual Contributor Track', roles: ['Junior SWE', 'Mid-Level SWE', 'Senior SWE', 'Staff Engineer', 'Principal Engineer'], requiredAdvancementSkills: ['Deep distributed systems knowledge', 'Cross-team architectural influence', 'Mentorship and technical vision'] },
      { branch: 'Engineering Management Track', roles: ['Tech Lead', 'Engineering Manager', 'Director of Engineering', 'VP of Engineering', 'CTO'], requiredAdvancementSkills: ['People management and hiring', 'Sprint delivery predictability', 'Executive communication and conflict resolution'] },
      { branch: 'Specialized Paths', roles: ['Cloud / DevOps Architect', 'Security Engineer', 'Site Reliability Engineer (SRE)', 'Data Engineer'], requiredAdvancementSkills: ['Deep domain infrastructure mastery', 'Kernel/networking internals', 'Zero-trust security compliance'] },
      { branch: 'Entrepreneurial & Consulting', roles: ['Freelance Consultant', 'Technical Founder / Co-Founder', 'Boutique Agency Lead'], requiredAdvancementSkills: ['Sales and client acquisition', 'Product-market fit intuition', 'Rapid MVP prototyping'] }
    ]
  },

  pivotAndAlternatives: {
    transferableSkillsTemplate: [
      'Problem decomposition and structural logic (useful from finance, math, legal, or operations).',
      'Domain expertise (e.g. accounting knowledge makes you a powerhouse in FinTech software).',
      'Stakeholder communication and project management.'
    ],
    transitionRoadmapSequence: [
      'Step 1: Identify existing industry expertise (e.g., Healthcare, Real Estate, Logistics).',
      'Step 2: Learn full-stack fundamentals (TypeScript, React, Node, PostgreSQL) through daily 2-hour blocks.',
      'Step 3: Build 1 flagship project specifically solving a major problem in your existing industry.',
      'Step 4: Position your resume as "Healthcare Specialist turned Software Engineer", not an inexperienced junior.'
    ],
    alternativeCareers: [
      { title: 'DevOps / Cloud Engineer', relationType: 'Adjacent', whyRelated: 'Focuses on infrastructure, containers, CI/CD pipelines, and cloud hosting rather than frontend interfaces.' },
      { title: 'Product Manager (Technical)', relationType: 'Less Technical', whyRelated: 'Focuses on feature roadmap, user research, and sprint prioritization while communicating closely with engineers.' },
      { title: 'UI/UX Engineer / Design Technologist', relationType: 'Creative', whyRelated: 'Bridges visual design and frontend code; heavy focus on animations, design systems, and micro-interactions.' },
      { title: 'Data Engineer', relationType: 'More Technical', whyRelated: 'Focuses on building massive ETL data pipelines, data warehouses, and batch processing systems.' },
      { title: 'Solutions Architect / Technical Consultant', relationType: 'Higher Responsibility', whyRelated: 'Designs software solutions for enterprise clients and helps sales teams win multi-million dollar tech contracts.' }
    ],
    decisionMatrix: [
      { dimension: 'Coding vs Product Thinking', realityInThisCareer: '70% coding/architecture, 30% product alignment.' },
      { dimension: 'Math Requirement', realityInThisCareer: 'Standard algebra and logic; heavy math only in graphics or ML engines.' },
      { dimension: 'Remote Availability', realityInThisCareer: 'Among the highest remote-work flexibilities across global industries.' },
      { dimension: 'Job Security', realityInThisCareer: 'High if you continuously upskill; vulnerable if you stop learning for 3+ years.' }
    ]
  },

  risksAndSustainability: {
    careerRisks: [
      {
        risk: 'Framework Obsolescence & Dependency Churn',
        whyItMatters: 'If you only learn syntax of one framework, you can become unemployable when market trends shift.',
        earlyWarningSign: 'Struggling to build anything when not using your preferred framework or boilerplate.',
        prevention: 'Master timeless fundamentals: vanilla JavaScript, HTTP protocols, SQL relational theory, and data structures.'
      },
      {
        risk: 'Burnout from Chronic Cognitive Overload',
        whyItMatters: 'Staring at screens 12 hours a day while debugging complex logic leads to mental fatigue and cynicism.',
        earlyWarningSign: 'Dreading opening your code editor; insomnia thinking about broken code; brain fog.',
        prevention: 'Strict physical boundaries: close laptop at 6 PM, take 10-minute walk every 90 minutes, cultivate offline hobbies.'
      },
      {
        risk: 'Over-reliance on AI Code Generators Without Verification',
        whyItMatters: 'Engineers who blindly accept AI code without understanding it create catastrophic security holes and fail live interviews.',
        earlyWarningSign: 'Unable to explain why a snippet works or unable to debug when the AI gets confused.',
        prevention: 'Use AI as an interactive tutor and boilerplate typist, never as an unverified substitute for your own reasoning.'
      }
    ],
    sustainabilityCheck: {
      learningWorkloadHours: '10–15 focused hours/week is sustainable for career transitioners; 25+ hours/week often leads to burnout within 60 days.',
      burnoutPreventionAdvice: 'Consistency beats intensity. 90 minutes of focused code every single day for 6 months beats 14-hour weekend marathons followed by two weeks of inactivity.',
      skillMaintenanceRoutine: 'Dedicate 2 hours every Friday afternoon to reading architectural articles, exploring release changelogs, or pairing on unfamiliar tools.'
    }
  },

  missionsPlan: {
    days30: [
      { week: 'Week 1', goal: 'Terminal, Git, & Web Architecture', tasks: ['Install VS Code, configure Git with SSH', 'Learn 15 essential bash terminal commands', 'Understand DNS and HTTP request/response cycle'], learning: 'Terminal basics and HTTP protocols', practice: 'Push 3 test repos to GitHub with conventional commit messages', output: 'Configured developer machine + verified GitHub profile', milestone: 'Terminal & Git fluency', selfCheck: 'Can I clone, branch, edit, commit, and push without looking up commands?' },
      { week: 'Week 2', goal: 'HTML5 Semantics & Responsive Tailwind CSS', tasks: ['Build semantic HTML layout (header, main, nav, section, footer)', 'Master flexbox and grid alignment', 'Apply Tailwind CSS utility patterns for mobile-first layout'], learning: 'Modern layout mechanics and accessibility', practice: 'Replicate a clean SaaS pricing table and responsive navigation', output: 'A fully responsive, accessible web page deployed on Vercel', milestone: 'Semantic frontend structure', selfCheck: 'Does my page look pristine on both an iPhone screen and a 27-inch desktop?' },
      { week: 'Week 3', goal: 'Core JavaScript & Asynchronous Event Loop', tasks: ['Master ES6+: arrow functions, destructuring, spread, modules', 'Practice functional array methods (map, filter, reduce)', 'Understand Promises, async/await, and try/catch error handling'], learning: 'Asynchronous JavaScript execution', practice: 'Solve 20 data manipulation coding challenges', output: 'Interactive currency converter consuming a live exchange-rate API', milestone: 'Asynchronous API consumption', selfCheck: 'Can I explain how async/await works to someone without programming knowledge?' },
      { week: 'Week 4', goal: 'TypeScript Fundamentals & First Beginner Project', tasks: ['Set up TypeScript with strict mode', 'Define interfaces, types, union types, and generics', 'Build Beginner Project: Interactive Markdown Notes Engine'], learning: 'Static typing and client-side persistence', practice: 'Implement debounce on text input and synchronize with LocalStorage', output: 'Deployed Markdown Engine with live URL and clean GitHub repo', milestone: 'Completed Beginner Project #1', selfCheck: 'Are there any "any" types in my code? (Should be zero).' }
    ],
    days60: [
      { week: 'Week 5', goal: 'React Component Architecture & State Management', tasks: ['Component lifecycle, props, state, custom hooks', 'Preventing unnecessary re-renders with useMemo/useCallback', 'Tailwind component decomposition'], learning: 'Modern React design patterns', practice: 'Build a multi-step interactive onboarding form with form validation', output: 'Validated multi-step form with error state handling', milestone: 'React component mastery', selfCheck: 'Are my components cleanly decoupled with single responsibilities?' },
      { week: 'Week 6', goal: 'Server-Side APIs with Node.js & Express', tasks: ['Create Express server with RESTful endpoints', 'Implement request validation and error-handling middleware', 'Configure CORS, security headers (Helmet), and environment variables'], learning: 'Backend architecture and security best practices', practice: 'Build a CRUD API for a bookstore with search, filter, and pagination', output: 'Documented REST API tested via Postman / Insomnia', milestone: 'Backend API creation', selfCheck: 'Do my endpoints return accurate HTTP status codes (200, 201, 400, 404, 500)?' },
      { week: 'Week 7', goal: 'PostgreSQL Relational Modeling & Prisma ORM', tasks: ['Design relational schema with 1-to-many and many-to-many relationships', 'Write migrations and seed scripts', 'Implement password hashing (Argon2) and JWT auth'], learning: 'Relational database theory and authentication', practice: 'Connect Express server to PostgreSQL and run complex queries', output: 'Secure user registration and authentication microservice', milestone: 'Database persistence & security', selfCheck: 'Can I explain why passwords must never be stored in plain text or MD5?' },
      { week: 'Week 8', goal: 'Complete Intermediate Project: Full Stack Kanban Board', tasks: ['Integrate React frontend with Express/PostgreSQL backend', 'Implement drag-and-drop state with fractional indexing', 'Add Docker compose for running the entire stack locally'], learning: 'End-to-end full stack synchronization', practice: 'Simulate network lag and verify optimistic UI updates', output: 'Deployed Full Stack Kanban app with live URL and Dockerfile', milestone: 'Completed Intermediate Project #2', selfCheck: 'Can a friend create an account, create boards, and invite me to collaborate?' }
    ],
    days90: [
      { week: 'Week 9', goal: 'System Design & Redis Caching Fundamentals', tasks: ['Study caching strategies (Cache-aside, Write-through)', 'Integrate Redis for session storage and rate-limiting', 'Write unit tests with Vitest for core business logic'], learning: 'Performance optimization and automated testing', practice: 'Add rate-limiting to API: max 100 requests per 15 minutes per IP', output: 'Rate-limited API with 80%+ unit test coverage', milestone: 'Production hardening', selfCheck: 'Do all my unit tests pass cleanly in under 5 seconds?' },
      { week: 'Week 10', goal: 'Flagship Project: Architecture & Core Engine', tasks: ['Draft architectural RFC and C4 system diagram for DevPulse', 'Build dynamic mock server with sub-15ms response latency', 'Implement OpenAPI 3.0 schema parsing'], learning: 'High-level system architecture design', practice: 'Benchmark response latency under concurrent requests', output: 'Core mock execution engine deployed on cloud container', milestone: 'Flagship Core Running', selfCheck: 'Does my architecture solve a genuine problem in the software industry?' },
      { week: 'Week 11', goal: 'Flagship Project: Real-Time WebSockets & Collaboration', tasks: ['Implement WebSocket server for real-time payload streaming', 'Build visual schema editor and network chaos simulator', 'Add team workspaces with role-based access control'], learning: 'Real-time bidirectional protocols', practice: 'Test concurrent WebSocket clients without message loss', output: 'Complete, polished DevPulse platform deployed with custom domain', milestone: 'Flagship Project Shipped', selfCheck: 'Would I proudly show this live application in a technical interview right now?' },
      { week: 'Week 12', goal: 'Resume, Portfolio, & Interview Execution', tasks: ['Craft 1-page ATS resume with Action + Metric + Impact bullets', 'Curate GitHub profile and record 2-min Loom video walkthrough', 'Complete 5 simulated mock interviews on CareerOS simulator'], learning: 'Professional positioning and interview storytelling', practice: 'Rehearse elevator pitch and STAR behavioral answers', output: 'Job-Ready Application Dossier + 10 targeted referral outreach notes', milestone: 'Full Job Readiness', selfCheck: 'Am I ready to articulate my technical decisions clearly under pressure?' }
    ]
  },

  postHiringDevelopment: {
    first30DaysAtWork: [
      'Focus 100% on learning: absorb codebase patterns, architecture diagrams, and team deployment workflows.',
      'Set up your local environment swiftly and document any gaps or bugs in the company setup guide.',
      'Schedule 20-minute 1-on-1s with every engineer on your immediate team to learn their domains.',
      'Submit your first small pull request within your first 10 days (e.g., a bug fix, documentation tweak, or minor test).'
    ],
    first90DaysAtWork: [
      'Deliver an end-to-end feature independently with thorough test coverage and zero regressions.',
      'Actively participate in code reviews: ask thoughtful questions on senior engineers’ pull requests.',
      'Take on a minor on-call rotation or shadow an experienced engineer during a production incident.',
      'Seek direct feedback from your manager: "What is one thing I should start doing, stop doing, or do more of?"'
    ],
    longTermCareerMobility: [
      'Write technical RFCs proposing structural improvements before someone asks you to.',
      'Develop domain expertise in a critical, high-impact area that makes you the go-to specialist.',
      'Mentor incoming interns and junior engineers; teaching solidifies your own seniority.',
      'Stay visible: present a 15-minute internal tech talk or demo at company engineering all-hands.'
    ],
    essentialProfessionalSkills: [
      { skill: 'Structured Written Documentation', howItApplies: 'Writing concise RFCs and incident post-mortems influences company roadmap more than raw code volume.' },
      { skill: 'Empathy in Code Reviews', howItApplies: 'Focusing critique on the code architecture rather than the person preserves high team morale.' },
      { skill: 'Graceful Prioritization Pushback', howItApplies: 'Helping product managers understand engineering tradeoffs builds deep mutual trust.' },
      { skill: 'Continuous Curiosity', howItApplies: 'Exploring the business impact behind every feature transforms you from a code monkey into a trusted partner.' }
    ]
  },

  dailyCoachTemplate: {
    learn: 'Spend 30 minutes reading 1 authoritative article on TypeScript generics or PostgreSQL indexing.',
    practice: 'Solve 1 algorithmic or architectural challenge; focus on edge cases and time complexity.',
    build: 'Write code on your active project for 60 uninterrupted minutes with notifications muted.',
    document: 'Write a 3-sentence git commit message or short note summarizing what you built and why.',
    reflect: 'Ask yourself: What broke today, why did it break, and how will I prevent it next time?'
  }
};
