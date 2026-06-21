import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Code2, Mail, Sparkles } from "lucide-react";

import { heroChips, siteConfig } from "@/data/profile";
import { formatRelativeMonth } from "@/lib/utils";
import type { Project } from "@/types";

type HeroSectionProps = {
  projects: Project[];
};

export function HeroSection({ projects }: HeroSectionProps) {
  const liveProjects = projects.filter((project) => !project.fork);
  const recentProjects = liveProjects.slice(0, 4);
  const featuredCount = liveProjects.filter((project) => project.featured).length;
  const latestProject = recentProjects[0];

  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-20 sm:px-8 sm:pt-24">
      <div className="hero-orb hero-orb-left" />
      <div className="hero-orb hero-orb-right" />
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
            <Sparkles className="h-4 w-4" />
            {siteConfig.location} · Bilingual English / French
          </div>
          <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {siteConfig.heroTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {siteConfig.heroSummary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={siteConfig.github}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
            >
              <Code2 className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
            >
              <BriefcaseBusiness className="h-4 w-4" />
              LinkedIn
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            {heroChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <div className="panel panel-interactive hero-panel relative overflow-hidden p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_45%)]" />
            <div className="hero-scanline" />
            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                  Live Portfolio Feed
                </p>
                <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-200">
                  GitHub Sync Active
                </span>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Public Repos</p>
                  <p className="mt-3 text-2xl font-semibold text-white">{liveProjects.length}</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Featured</p>
                  <p className="mt-3 text-2xl font-semibold text-white">{featuredCount}</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Latest Push</p>
                  <p className="mt-3 text-2xl font-semibold text-white">
                    {latestProject ? formatRelativeMonth(latestProject.updatedAt) : "Live"}
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-white">Recent public work</p>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    updates roll in from GitHub
                  </p>
                </div>
                <div className="mt-4 space-y-3">
                  {recentProjects.map((project) => (
                    <div
                      key={project.name}
                      className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3"
                    >
                      <div>
                        <p className="text-sm font-medium text-white">{project.displayName}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">
                          {project.category}
                        </p>
                      </div>
                      <p className="text-xs text-cyan-200">{formatRelativeMonth(project.updatedAt)}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm text-slate-400">What this site proves</p>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  A polished frontend, a real backend, live GitHub project sync, structured content,
                  and a portfolio that can evolve as new public work is pushed.
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-200">{siteConfig.availability}</p>
                <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">
                  Website live · deploy-ready · recruiter-safe
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="panel panel-interactive p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">Role Direction</p>
              <p className="mt-3 text-lg font-semibold text-white">{siteConfig.role}</p>
            </div>
            <div className="panel panel-interactive p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">Hiring Fit</p>
              <p className="mt-3 text-sm leading-7 text-slate-200">
                Junior developer, internship, AI-supporting product work, and backend-oriented opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
