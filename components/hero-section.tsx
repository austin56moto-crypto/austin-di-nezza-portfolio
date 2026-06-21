import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Code2, Mail } from "lucide-react";

import { heroChips, siteConfig } from "@/data/profile";
import { formatRelativeMonth } from "@/lib/utils";
import type { Project } from "@/types";

type HeroSectionProps = {
  projects: Project[];
};

export function HeroSection({ projects }: HeroSectionProps) {
  const liveProjects = projects.filter((project) => !project.fork);
  const recentProjects = liveProjects.slice(0, 3);
  const featuredCount = liveProjects.filter((project) => project.featured).length;
  const latestProject = recentProjects[0];

  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-14 sm:px-8 lg:pb-24">
      <div className="mx-auto grid min-h-[calc(100svh-7rem)] w-full max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <div className="relative z-10">
          <p className="editorial-kicker">{siteConfig.location} · English / French · Open to work</p>
          <h1 className="editorial-title mt-7 max-w-5xl text-6xl text-[var(--foreground)] sm:text-[5rem] lg:text-[7rem]">
            AI &amp; Automation
            <br />
            Developer
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            {siteConfig.heroSummary}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="accent-button"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={siteConfig.github}
              className="ghost-button"
            >
              <Code2 className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={siteConfig.linkedin}
              className="ghost-button"
            >
              <BriefcaseBusiness className="h-4 w-4" />
              LinkedIn
            </a>
            <Link
              href="/contact"
              className="ghost-button"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap gap-2.5">
            {heroChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-[var(--line)] bg-white/[0.02] px-4 py-2 text-xs uppercase tracking-[0.16em] text-[var(--muted)]"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <div className="panel hero-panel p-7 sm:p-8">
            <div className="grid gap-8 sm:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-6">
                <div>
                  <p className="editorial-kicker">Live Portfolio Feed</p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                    Backend-connected GitHub data keeps this project section current as new work is pushed.
                  </p>
                </div>
                <div className="space-y-6">
                  <div>
                    <p className="text-5xl text-[var(--accent)]">{liveProjects.length}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.16em] text-[var(--muted)]">Public repos</p>
                  </div>
                  <div>
                    <p className="text-5xl text-[var(--accent)]">{featuredCount}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.16em] text-[var(--muted)]">Featured builds</p>
                  </div>
                  <div>
                    <p className="text-4xl text-[var(--accent)]">
                      {latestProject ? formatRelativeMonth(latestProject.updatedAt) : "Live"}
                    </p>
                    <p className="mt-2 text-sm uppercase tracking-[0.16em] text-[var(--muted)]">Latest push</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-[var(--line)] pt-6 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm uppercase tracking-[0.18em] text-[var(--foreground)]">Recent public work</p>
                  <span className="rounded-full border border-[rgba(217,191,119,0.28)] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                    Sync active
                  </span>
                </div>
                <div className="mt-5 space-y-4">
                  {recentProjects.map((project, index) => (
                    <div key={project.name} className="border-b border-[var(--line)] pb-4 last:border-none last:pb-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                            {String(index + 1).padStart(2, "0")}
                          </p>
                          <p className="mt-2 text-lg text-[var(--foreground)]">{project.displayName}</p>
                          <p className="mt-1 text-sm text-[var(--muted)]">{project.category}</p>
                        </div>
                        <p className="text-xs uppercase tracking-[0.16em] text-[var(--accent-strong)]">
                          {formatRelativeMonth(project.updatedAt)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-7 text-[var(--muted)]">{siteConfig.availability}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
