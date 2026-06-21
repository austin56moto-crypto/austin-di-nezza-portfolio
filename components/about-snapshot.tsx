import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { aboutBullets } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";

export function AboutSnapshot() {
  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div>
          <SectionHeading
            eyebrow="About"
            title="Useful software starts with understanding the workflow, the friction, and the person using it."
            description="That is the lens behind Austin's projects: practical systems, cleaner operations, and interfaces that communicate clearly."
          />
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="editorial-kicker">This is me</p>
            <p className="mt-5 max-w-md text-4xl leading-tight text-[var(--foreground)] sm:text-5xl">
              A technical profile shaped by software building and real user support.
            </p>
          </div>
          <div className="space-y-5 border-t border-[var(--line)] pt-6">
            {aboutBullets.map((bullet) => (
              <div key={bullet} className="border-b border-[var(--line)] pb-5 last:border-none last:pb-0">
                <p className="text-base leading-8 text-[var(--muted)]">{bullet}</p>
              </div>
            ))}
            <Link
              href="/about"
              className="mt-3 inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-[var(--accent-strong)] transition hover:text-[var(--foreground)]"
            >
              Explore full background
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
