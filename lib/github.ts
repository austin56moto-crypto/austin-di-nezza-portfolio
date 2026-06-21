import fallbackRepos from "@/data/github-fallback.json";
import overrides from "@/data/project-overrides.json";
import { siteConfig } from "@/data/profile";
import type { Project, ProjectOverride } from "@/types";

type GithubRepo = {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  html_url: string;
  homepage: string | null;
  fork: boolean;
};

const projectOverrides = overrides as Record<string, ProjectOverride>;

function humanizeName(name: string) {
  return name
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function inferCategory(repo: GithubRepo) {
  const name = repo.name.toLowerCase();
  const language = repo.language ?? "";

  if (name.includes("expert")) return "AI / Expert Systems";
  if (name.includes("dashboard")) return "Dashboard / Analytics";
  if (name.includes("inventory")) return "Backend / Operations";
  if (name.includes("cloud") || name.includes("localstack")) return "Cloud / Infrastructure";
  if (name.includes("data") || name.includes("nettoyage")) return "Data / Analytics";
  if (language === "HTML") return "Frontend";
  if (language === "Dart") return "Mobile / App Development";
  if (language === "Python") return "Backend / Python";
  if (language === "JavaScript") return "Web Application";

  return "Software Project";
}

function inferTech(repo: GithubRepo) {
  const override = projectOverrides[repo.name];

  if (override?.tech?.length) {
    return override.tech;
  }

  const tech = new Set<string>();

  if (repo.language) {
    tech.add(repo.language);
  }

  const name = repo.name.toLowerCase();
  const description = (repo.description ?? "").toLowerCase();
  const combined = `${name} ${description}`;

  if (combined.includes("fastapi")) tech.add("FastAPI");
  if (combined.includes("react")) tech.add("React");
  if (combined.includes("sqlite")) tech.add("SQLite");
  if (combined.includes("streamlit")) tech.add("Streamlit");
  if (combined.includes("docker")) tech.add("Docker");
  if (combined.includes("localstack")) tech.add("LocalStack");
  if (combined.includes("aws")) tech.add("AWS");
  if (combined.includes("expert")) tech.add("Expert Systems");
  if (combined.includes("data")) tech.add("Analytics");

  return Array.from(tech).slice(0, 5);
}

function normalizeRepo(repo: GithubRepo): Project {
  const override = projectOverrides[repo.name];
  const displayName = override?.displayName ?? humanizeName(repo.name);
  const description = repo.description ?? `${displayName} repository on GitHub.`;
  const summary = override?.summary ?? description;
  const category = override?.category ?? inferCategory(repo);
  const tech = inferTech(repo);

  return {
    name: repo.name,
    displayName,
    description,
    summary,
    language: repo.language,
    tech,
    category,
    featured: override?.featured ?? false,
    fork: repo.fork,
    priority: override?.priority ?? 999,
    status: override?.status ?? "Live Repository",
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    updatedAt: repo.updated_at,
    repoUrl: repo.html_url,
    demoUrl: override?.demoUrl ?? repo.homepage ?? undefined,
    screenshot: override?.screenshot,
    employerValue:
      override?.employerValue ??
      "Shows ongoing hands-on development and a public record of technical work.",
  };
}

async function fetchGithubRepos(): Promise<GithubRepo[]> {
  const username = process.env.GITHUB_USERNAME || siteConfig.githubUsername;
  const url = `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`;
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "User-Agent": "advanced-ai-portfolio",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const response = await fetch(url, {
    headers,
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`GitHub API request failed with ${response.status}`);
  }

  return (await response.json()) as GithubRepo[];
}

export async function getPortfolioProjects() {
  const sourceRepos = await fetchGithubRepos().catch(() => fallbackRepos as GithubRepo[]);

  return sourceRepos
    .map(normalizeRepo)
    .sort((a, b) => {
      if (a.featured !== b.featured) {
        return Number(b.featured) - Number(a.featured);
      }

      if (a.priority !== b.priority) {
        return a.priority - b.priority;
      }

      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    });
}

export async function getFeaturedProjects(limit = 6) {
  const projects = await getPortfolioProjects();
  return projects.filter((project) => project.featured).slice(0, limit);
}
