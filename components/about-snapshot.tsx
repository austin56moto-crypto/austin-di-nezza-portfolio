import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { aboutBullets } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";

export function AboutSnapshot() {
  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="About"
            title="A technical profile shaped by both software building and real user support."
            description="The goal is not just to ship code, but to build tools that make workflows clearer, faster, and easier to operate."
          />
        </div>
        <div className="panel p-8">
          <div className="space-y-4">
            {aboutBullets.map((bullet) => (
              <div key={bullet} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm leading-7 text-slate-200">{bullet}</p>
              </div>
            ))}
          </div>
          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-white"
          >
            Explore full background
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
