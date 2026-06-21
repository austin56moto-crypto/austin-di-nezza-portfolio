import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Code2, Mail, Sparkles } from "lucide-react";

import { heroChips, siteConfig } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-20 sm:px-8 sm:pt-24">
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
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

        <div className="relative">
          <div className="panel relative overflow-hidden p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_45%)]" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
                Portfolio Positioning
              </p>
              <div className="mt-6 space-y-5">
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm text-slate-400">Current Role Direction</p>
                  <p className="mt-2 text-lg font-semibold text-white">{siteConfig.role}</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-sm text-slate-400">What this site proves</p>
                  <p className="mt-2 text-sm leading-7 text-slate-200">
                    A polished frontend, a real backend, live GitHub project sync, structured content,
                    and a portfolio that can evolve as new public work is pushed.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                  <p className="text-sm text-slate-400">Best fit opportunities</p>
                  <p className="mt-2 text-sm leading-7 text-slate-200">{siteConfig.availability}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
