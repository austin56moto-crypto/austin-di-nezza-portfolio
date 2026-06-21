import type {
  BlogPost,
  EducationItem,
  EmployerLane,
  ExperienceItem,
  ExpertiseCard,
  NavLink,
  SkillGroup,
  Stat,
} from "@/types";

export const siteConfig = {
  name: "Austin Di Nezza",
  shortName: "Austin",
  role: "AI & Automation Developer",
  location: "Montreal, QC",
  email: "austin.dinezza@icloud.com",
  linkedin: "https://www.linkedin.com/in/austin-di-nezza-8baab0388/",
  github: "https://github.com/austin56moto-crypto",
  githubUsername: "austin56moto-crypto",
  heroTitle: "Building practical AI systems, workflow automation, and portfolio-grade software.",
  heroSummary:
    "I build useful digital tools that combine automation, data, backend logic, and modern interfaces. My focus is practical AI work that solves real workflow problems without overcomplicating the user experience.",
  availability: "Open to internships, junior developer roles, and AI-focused opportunities.",
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const heroChips = [
  "Python",
  "SQL",
  "PostgreSQL",
  "FastAPI",
  "React",
  "Next.js",
  "Power BI",
  "AWS Foundations",
  "n8n",
  "Copilot",
  "GitHub API",
];

export const stats: Stat[] = [
  {
    label: "Bilingual",
    value: "EN / FR",
    detail: "Fluent in English and French for user-facing and technical work.",
  },
  {
    label: "Current Focus",
    value: "AI ACS",
    detail: "Artificial Intelligence studies in progress at CDI College.",
  },
  {
    label: "Project Lens",
    value: "Live GitHub",
    detail: "Project area is synced to live repositories, not a static list.",
  },
  {
    label: "Build Style",
    value: "Practical",
    detail: "Automation, dashboards, APIs, expert systems, and workflow tools.",
  },
];

export const expertiseCards: ExpertiseCard[] = [
  {
    title: "AI & Automation",
    summary: "Workflow improvement through automation, AI-assisted tools, and structured problem-solving.",
    items: ["n8n", "Prompt engineering", "Chatbots", "Copilot workflows"],
  },
  {
    title: "Data & Reporting",
    summary: "Turning raw information into usable dashboards, cleaned datasets, and clearer reporting.",
    items: ["Python", "SQL", "Power BI", "Data cleaning"],
  },
  {
    title: "Backend & APIs",
    summary: "Building logic-driven systems that connect interfaces, rules, and external services.",
    items: ["FastAPI", "REST APIs", "GitHub API", "PostgreSQL"],
  },
  {
    title: "Cloud Foundations",
    summary: "Early-stage cloud fluency with practical experimentation and architecture thinking.",
    items: ["AWS basics", "LocalStack", "Deployment concepts", "Infrastructure patterns"],
  },
  {
    title: "Digital Workplace",
    summary: "Using modern workplace tools to improve team productivity and support practical operations.",
    items: ["Microsoft 365", "Process optimization", "User training", "Documentation"],
  },
  {
    title: "Frontend Delivery",
    summary: "Building interfaces that explain technical work clearly and feel employer-ready.",
    items: ["React", "Next.js", "Tailwind CSS", "Responsive UI"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "AI & Automation",
    summary: "Tools and methods used to automate repetitive work and support intelligent workflows.",
    items: ["Chatbot development", "n8n", "Prompt engineering", "AI-assisted tools", "Copilot"],
  },
  {
    title: "Data",
    summary: "Data work centered on cleaning, reporting, querying, and making decisions easier.",
    items: ["Python", "SQL", "PostgreSQL", "Power BI", "Data visualization"],
  },
  {
    title: "Backend",
    summary: "Application logic and integrations that support real functionality behind the interface.",
    items: ["FastAPI", "REST APIs", "Database management", "API integrations", "SQLite"],
  },
  {
    title: "Frontend",
    summary: "Modern web interfaces focused on usability, clarity, and polished presentation.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Cloud & Tooling",
    summary: "Foundational cloud knowledge and practical developer tooling.",
    items: ["AWS foundations", "LocalStack", "GitHub", "VS Code", "Deployment concepts"],
  },
];

export const employerLanes: EmployerLane[] = [
  {
    title: "Automation & Workflow Improvement",
    summary: "I like reducing repetitive steps and turning scattered manual work into structured flows.",
    proof: "CV-backed experience with n8n, chatbots, API integrations, and process optimization.",
  },
  {
    title: "Backend & API Development",
    summary: "I enjoy the logic layer that powers applications, dashboards, and rule-driven tools.",
    proof: "Projects span FastAPI, expert systems, data handling, and dynamic GitHub-driven UI sections.",
  },
  {
    title: "Data Cleanup & Reporting",
    summary: "I focus on making data more understandable so teams can act on it faster.",
    proof: "Coursework and projects include SQL, PostgreSQL, Power BI, and EDA/data cleaning work.",
  },
  {
    title: "User-Centered Technical Support",
    summary: "I bring a customer-facing mindset into software work, which helps me build tools people can actually use.",
    proof: "Professional experience includes troubleshooting, training, documentation, and stakeholder communication.",
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: "Customer Support & Technical Solutions Specialist",
    company: "Tecnico Chauffage",
    location: "Greater Montreal Area",
    period: "May 2023 – Present",
    bullets: [
      "Provide technical troubleshooting and system support, helping users move from issue to resolution quickly.",
      "Translate customer and technician needs into structured solutions that improve service efficiency.",
      "Train users on system functionality and best practices to reduce recurring issues.",
      "Coordinate operations and dispatch workflows while documenting issues for process improvement.",
    ],
  },
  {
    role: "Customer Support & Operations Associate",
    company: "Walmart",
    location: "Montreal, QC",
    period: "May 2021 – 2023",
    bullets: [
      "Resolved customer and operational issues by analyzing problems and applying efficient solutions.",
      "Supported digital order systems and fulfillment coordination in a fast-paced environment.",
      "Maintained structured workflows and communicated clearly with diverse stakeholders in English and French.",
    ],
  },
  {
    role: "Logistics & Operations Assistant",
    company: "UPS",
    location: "Montreal, QC",
    period: "Oct 2020 – Mar 2021",
    bullets: [
      "Supported logistics and delivery operations with a focus on organization and speed.",
      "Handled sorting, routing, and preparation work under time-sensitive conditions.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    school: "CDI College",
    program: "Artificial Intelligence (ACS, In Progress)",
    period: "Current",
    bullets: ["Focus on AI applications, programming, automation, and data analysis."],
  },
  {
    school: "Dawson College",
    program: "Computer Sciences",
    period: "2020 – 2023",
    bullets: ["Built programming and technical problem-solving foundations through applied coursework."],
  },
  {
    school: "Marianopolis College",
    program: "Law, Society and Justice",
    period: "2018 – 2019",
    bullets: ["Added perspective on communication, structure, and analytical thinking."],
  },
];

export const aboutBullets = [
  "Detail-oriented and technically driven, with a focus on AI, automation, and digital tools.",
  "Comfortable bridging user needs and technical implementation through clear communication and practical systems thinking.",
  "Interested in emerging GenAI tools, backend workflows, dashboards, and cloud-oriented projects.",
  "Motivated by building useful software that looks polished and solves real operational problems.",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "building-a-live-github-portfolio",
    title: "Why I wanted a portfolio that stays synced with GitHub",
    category: "Portfolio Engineering",
    publishedAt: "June 2026",
    readTime: "4 min read",
    excerpt: "A portfolio should not freeze your work in time. I wanted mine to reflect what I push next, not only what I finished months ago.",
    summary:
      "This post explains why a backend-powered project explorer matters more than static cards if the goal is to show current work to employers.",
    takeaways: [
      "Live project sync keeps the portfolio current.",
      "Curated metadata is still important for employer-friendly storytelling.",
      "The best portfolio pages balance polish with honest technical proof.",
    ],
  },
  {
    slug: "expert-systems-and-practical-ai",
    title: "What expert-system projects taught me about practical AI",
    category: "AI Projects",
    publishedAt: "June 2026",
    readTime: "5 min read",
    excerpt: "Rule-based systems are a good reminder that useful AI is not always about the largest model.",
    summary:
      "A reflection on building expert-system style coursework and how explainable logic still matters in real software.",
    takeaways: [
      "Clear rules can still create useful AI behavior.",
      "Explainability matters when users need trust and clarity.",
      "Backend structure often matters as much as the interface.",
    ],
  },
  {
    slug: "automation-data-and-user-needs",
    title: "Automation works best when it starts from user friction",
    category: "Workflows",
    publishedAt: "June 2026",
    readTime: "4 min read",
    excerpt: "The strongest technical solutions usually begin with a small but repeated operational pain point.",
    summary:
      "A short note on connecting customer-facing experience with automation, data cleanup, and practical system design.",
    takeaways: [
      "Good workflow tools come from understanding where users slow down.",
      "Data and automation are most valuable when they reduce confusion.",
      "Support experience helps shape better product decisions.",
    ],
  },
];
