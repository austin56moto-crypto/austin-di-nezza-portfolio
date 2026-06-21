import knowledgeBase from "@/data/austin-knowledge-base.json";
import { experiences, education, siteConfig, skillGroups } from "@/data/profile";
import type { ChatbotReply, Project } from "@/types";

type FaqEntry = {
  keywords: string[];
  answer: string;
};

const faqEntries = knowledgeBase.faq as FaqEntry[];

function includesAny(text: string, keywords: string[]) {
  return keywords.some((keyword) => text.includes(keyword));
}

function topProjectMatches(projects: Project[], normalized: string) {
  return projects
    .filter((project) => {
      const haystack = [
        project.displayName,
        project.summary,
        project.category,
        project.language ?? "",
        ...project.tech,
      ]
        .join(" ")
        .toLowerCase();

      return normalized
        .split(/\s+/)
        .filter(Boolean)
        .some((term) => term.length > 2 && haystack.includes(term));
    })
    .slice(0, 3);
}

function formatProjectReferences(projects: Project[]) {
  return projects.map((project) => `${project.displayName} · ${project.category}`);
}

export function answerPortfolioQuestion(question: string, projects: Project[]): ChatbotReply {
  const normalized = question.toLowerCase();
  const matchedProjects = topProjectMatches(projects, normalized);
  const featuredProjects = projects.filter((project) => project.featured && !project.fork);

  if (includesAny(normalized, ["backend", "api", "fastapi", "server"])) {
    const backendProjects = featuredProjects.filter((project) =>
      ["FastAPI", "Python", "React", "SQLite", "Expert Systems"].some((tech) =>
        project.tech.includes(tech),
      ),
    );

    return {
      answer:
        "Yes. Austin's backend experience shows up through FastAPI-based apps, expert-system logic, API integrations, data-driven project structure, and full-stack builds where the server side is doing real work instead of just serving static content.",
      references: formatProjectReferences(backendProjects.slice(0, 3)),
      suggestedQuestions: [
        "Which project is the strongest backend example?",
        "What kind of AI projects has Austin built?",
        "Which project best shows cloud knowledge?",
      ],
    };
  }

  if (includesAny(normalized, ["cloud", "aws", "localstack", "deployment", "infrastructure"])) {
    const cloudProjects = featuredProjects.filter((project) =>
      ["Cloud", "Infrastructure", "Dashboard"].some((word) => project.category.includes(word)),
    );

    return {
      answer:
        "Austin's cloud signal is strongest in LocalStack and AI cloud planning work. The profile is still early-career, but it already shows AWS foundations, LocalStack experimentation, deployment awareness, and the habit of framing projects as systems rather than isolated scripts.",
      references: formatProjectReferences(cloudProjects.slice(0, 3)),
      suggestedQuestions: [
        "Does Austin have backend experience?",
        "What is Austin currently studying?",
        "Which project should an employer look at first?",
      ],
    };
  }

  if (includesAny(normalized, ["study", "studying", "education", "college", "school"])) {
    return {
      answer:
        "Austin is currently studying Artificial Intelligence at CDI College. Before that, he studied Computer Sciences at Dawson College and Law, Society and Justice at Marianopolis. That mix gives him both technical foundations and a strong communication and structured-thinking angle.",
      references: education.map((item) => `${item.school} · ${item.program}`),
      suggestedQuestions: [
        "Is Austin bilingual?",
        "What kind of projects has Austin built?",
        "What role is Austin targeting?",
      ],
    };
  }

  if (includesAny(normalized, ["experience", "work", "job", "support", "operations"])) {
    return {
      answer:
        "Austin's professional experience is strongest in technical support, operations, troubleshooting, user training, and workflow coordination. That matters because it carries over into the software side: he tends to build tools with the user problem and operational reality in mind.",
      references: experiences.map((item) => `${item.company} · ${item.role}`),
      suggestedQuestions: [
        "Does Austin have backend experience?",
        "What projects show practical AI work?",
        "What employers can Austin help with?",
      ],
    };
  }

  if (includesAny(normalized, ["skill", "stack", "tools", "technologies"])) {
    return {
      answer:
        "The strongest recurring skills in the portfolio are Python, SQL, PostgreSQL, FastAPI, React, Next.js, Power BI, n8n, API integrations, and practical AI/automation tooling. The emphasis is less on hype and more on shipping useful systems.",
      references: skillGroups.map((group) => group.title),
      suggestedQuestions: [
        "Which projects best prove those skills?",
        "Does Austin have cloud knowledge?",
        "What is Austin currently studying?",
      ],
    };
  }

  if (includesAny(normalized, ["bilingual", "language", "english", "french"])) {
    return {
      answer:
        "Austin is bilingual and works in both English and French, which helps in customer-facing roles, documentation, stakeholder communication, and support-heavy technical environments.",
      references: ["English · Fluent", "French · Fluent"],
      suggestedQuestions: [
        "What kind of projects has Austin built?",
        "What work experience does Austin have?",
        "How can I contact Austin?",
      ],
    };
  }

  if (includesAny(normalized, ["contact", "email", "linkedin", "reach"])) {
    return {
      answer: `You can reach Austin by email at ${siteConfig.email}. The portfolio also links directly to LinkedIn and GitHub for recruiter-friendly follow-up.`,
      references: [siteConfig.email, siteConfig.linkedin, siteConfig.github],
      suggestedQuestions: [
        "What projects should I review first?",
        "Does Austin have backend experience?",
        "What is Austin currently studying?",
      ],
    };
  }

  if (includesAny(normalized, ["best", "strongest", "first", "recommend"])) {
    const recommendations = featuredProjects.slice(0, 3);

    return {
      answer:
        "If an employer is short on time, the strongest first stops are the FastAPI/expert-system work, the cloud-oriented dashboard work, and the recent data-cleaning project. Together they show backend logic, practical AI structure, and analytical workflow skills.",
      references: formatProjectReferences(recommendations),
      suggestedQuestions: [
        "Why is Smart Reminder Expert System important?",
        "Which project best shows cloud knowledge?",
        "What kind of projects has Austin built?",
      ],
    };
  }

  if (matchedProjects.length > 0) {
    return {
      answer: `Here are the most relevant portfolio projects for that question: ${matchedProjects
        .map((project) => `${project.displayName} shows ${project.employerValue.toLowerCase()}`)
        .join(" ")}`,
      references: formatProjectReferences(matchedProjects),
      suggestedQuestions: [
        "Which of these projects is best for employers?",
        "Does Austin have backend experience?",
        "What does Austin want to work on?",
      ],
    };
  }

  for (const entry of faqEntries) {
    if (entry.keywords.some((keyword) => normalized.includes(keyword))) {
      return {
        answer: entry.answer,
        references: featuredProjects.slice(0, 2).map((project) => project.displayName),
        suggestedQuestions: [
          "What kind of projects has Austin built?",
          "Does Austin have backend experience?",
          "Which project best shows cloud knowledge?",
        ],
      };
    }
  }

  return {
    answer:
      "Austin focuses on practical AI, automation, data workflows, backend-oriented applications, and employer-ready project delivery. Ask about backend experience, cloud projects, strongest portfolio pieces, education, or contact details and I can answer more directly.",
    references: [
      "Current AI studies at CDI College",
      "Live GitHub project explorer",
      "Customer support and technical solutions background",
    ],
    suggestedQuestions: [
      "What kind of projects has Austin built?",
      "Does Austin have backend experience?",
      "Which project should an employer look at first?",
    ],
  };
}
