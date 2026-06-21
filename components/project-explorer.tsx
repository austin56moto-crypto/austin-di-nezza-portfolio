"use client";

import { useEffect, useState } from "react";
import { LoaderCircle, Search, SlidersHorizontal } from "lucide-react";

import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import type { Project } from "@/types";

type ProjectExplorerProps = {
  compact?: boolean;
  title?: string;
  description?: string;
};

export function ProjectExplorer({
  compact = false,
  title = "Live GitHub Project Explorer",
  description = "This section fetches public repositories through the portfolio backend, then blends them with curated portfolio metadata for a cleaner employer-facing presentation.",
}: ProjectExplorerProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("All");
  const [sortBy, setSortBy] = useState("updated");
  const [showForks, setShowForks] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadProjects() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch("/api/github/repos", { cache: "no-store" });

        if (!response.ok) {
          throw new Error("Unable to load repositories right now.");
        }

        const data = (await response.json()) as Project[];

        if (!cancelled) {
          setProjects(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Unable to load repositories right now.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void loadProjects();

    return () => {
      cancelled = true;
    };
  }, []);

  const languages = ["All", ...new Set(projects.map((project) => project.language).filter(Boolean))] as string[];

  let filtered = projects.filter((project) => {
    if (!showForks && project.fork) {
      return false;
    }

    if (language !== "All" && project.language !== language) {
      return false;
    }

    const haystack = `${project.displayName} ${project.summary} ${project.category}`.toLowerCase();
    return haystack.includes(search.toLowerCase());
  });

  if (sortBy === "name") {
    filtered = [...filtered].sort((a, b) => a.displayName.localeCompare(b.displayName));
  } else if (sortBy === "stars") {
    filtered = [...filtered].sort((a, b) => b.stars - a.stars);
  } else {
    filtered = [...filtered].sort(
      (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
    );
  }

  if (compact) {
    filtered = filtered.slice(0, 6);
  }

  const latestProject = filtered[0];
  const featuredCount = projects.filter((project) => project.featured && !project.fork).length;

  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading eyebrow="Projects" title={title} description={description} />
        <div className="mt-8 panel p-5 sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-1 items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-3">
              <Search className="h-4 w-4 text-slate-400" />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search repositories, categories, or summaries"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
                <SlidersHorizontal className="h-4 w-4 text-cyan-300" />
                Live sync from GitHub
              </div>
              <label className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
                <input
                  type="checkbox"
                  checked={showForks}
                  onChange={(event) => setShowForks(event.target.checked)}
                  className="rounded border-white/20 bg-transparent"
                />
                Show forks
              </label>
            </div>
          </div>

          <div className="mt-4 grid gap-3 xl:grid-cols-[1fr_180px_180px_220px]">
            <select
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
              className="rounded-3xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none"
            >
              {languages.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="rounded-3xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none"
            >
              <option value="updated">Recently updated</option>
              <option value="name">Name</option>
              <option value="stars">Stars</option>
            </select>
            <div className="rounded-3xl border border-cyan-400/25 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100">
              {projects.length} repos available
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200">
              {featuredCount} featured · {latestProject ? `updated ${latestProject.displayName}` : "live sync"}
            </div>
          </div>
        </div>

        {loading ? (
          <div className="mt-8 panel flex items-center justify-center gap-3 p-8 text-slate-300">
            <LoaderCircle className="h-5 w-5 animate-spin" />
            Loading live GitHub projects...
          </div>
        ) : error ? (
          <div className="mt-8 rounded-3xl border border-rose-400/30 bg-rose-500/10 p-6 text-sm text-rose-100">
            {error}
          </div>
        ) : (
          <div className="mt-8 grid gap-4 xl:grid-cols-2">
            {filtered.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
