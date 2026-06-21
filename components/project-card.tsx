import { ExternalLink, GitFork, Star } from "lucide-react";

import { formatRelativeMonth } from "@/lib/utils";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="panel panel-interactive flex h-full flex-col p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-[rgba(217,191,119,0.28)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">
              {project.status}
            </span>
            <span className="rounded-full border border-[var(--line)] bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">
              {project.category}
            </span>
          </div>
          <h3 className="mt-5 text-3xl uppercase leading-none text-[var(--foreground)]">{project.displayName}</h3>
          <p className="mt-4 text-sm leading-8 text-[var(--muted)]">{project.summary}</p>
        </div>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-white/[0.03] text-[var(--foreground)] transition hover:border-[rgba(243,238,226,0.26)] hover:bg-white/[0.08]"
          aria-label={`Open ${project.displayName} repository`}
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[var(--line)] bg-[var(--background)]/70 px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-[var(--muted)]"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-7 grid gap-3 sm:grid-cols-3">
        <div className="rounded-[1.25rem] border border-[var(--line)] bg-white/[0.02] p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Updated</p>
          <p className="mt-2 text-sm font-medium text-[var(--foreground)]">{formatRelativeMonth(project.updatedAt)}</p>
        </div>
        <div className="rounded-[1.25rem] border border-[var(--line)] bg-white/[0.02] p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Stars</p>
          <p className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)]">
            <Star className="h-4 w-4 text-[var(--accent-strong)]" />
            {project.stars}
          </p>
        </div>
        <div className="rounded-[1.25rem] border border-[var(--line)] bg-white/[0.02] p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Forks</p>
          <p className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)]">
            <GitFork className="h-4 w-4 text-[var(--accent-strong)]" />
            {project.forks}
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-[1.5rem] border border-[var(--line)] bg-[var(--background)]/50 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
          What this proves
        </p>
        <p className="mt-3 text-sm leading-8 text-[var(--muted)]">{project.employerValue}</p>
      </div>
    </article>
  );
}
