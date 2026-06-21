export type NavLink = {
  href: string;
  label: string;
};

export type Stat = {
  label: string;
  value: string;
  detail: string;
};

export type ExpertiseCard = {
  title: string;
  summary: string;
  items: string[];
};

export type SkillGroup = {
  title: string;
  summary: string;
  items: string[];
};

export type EmployerLane = {
  title: string;
  summary: string;
  proof: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
};

export type EducationItem = {
  school: string;
  program: string;
  period: string;
  bullets: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  publishedAt: string;
  readTime: string;
  excerpt: string;
  summary: string;
  takeaways: string[];
};

export type ProjectOverride = {
  displayName?: string;
  summary?: string;
  category?: string;
  tech?: string[];
  featured?: boolean;
  hidden?: boolean;
  priority?: number;
  employerValue?: string;
  status?: string;
  screenshot?: string;
  demoUrl?: string;
};

export type Project = {
  name: string;
  displayName: string;
  description: string;
  summary: string;
  language: string | null;
  tech: string[];
  category: string;
  featured: boolean;
  fork: boolean;
  priority: number;
  status: string;
  stars: number;
  forks: number;
  updatedAt: string;
  repoUrl: string;
  demoUrl?: string;
  screenshot?: string;
  employerValue: string;
};

export type ChatbotReply = {
  answer: string;
  references: string[];
  suggestedQuestions: string[];
};
