import { ExternalLink, GitFork, Star } from "lucide-react";

import { formatRelativeMonth } from "@/lib/utils";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="panel flex h-full flex-col p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-200">
              {project.status}
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-300">
              {project.category}
            </span>
          </div>
          <h3 className="mt-4 text-2xl font-semibold text-white">{project.displayName}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-300">{project.summary}</p>
        </div>
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-100 transition hover:border-white/25 hover:bg-white/[0.08]"
          aria-label={`Open ${project.displayName} repository`}
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-slate-900 px-3 py-1.5 text-xs text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Updated</p>
          <p className="mt-2 text-sm font-medium text-white">{formatRelativeMonth(project.updatedAt)}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Stars</p>
          <p className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-white">
            <Star className="h-4 w-4 text-cyan-300" />
            {project.stars}
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Forks</p>
          <p className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-white">
            <GitFork className="h-4 w-4 text-cyan-300" />
            {project.forks}
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-white/10 bg-slate-900/60 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
          What this proves
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-200">{project.employerValue}</p>
      </div>
    </article>
  );
}
