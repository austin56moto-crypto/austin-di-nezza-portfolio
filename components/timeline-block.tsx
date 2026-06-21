import { SectionHeading } from "@/components/section-heading";
import type { EducationItem, ExperienceItem } from "@/types";

type TimelineBlockProps = {
  eyebrow: string;
  title: string;
  description: string;
  items: ExperienceItem[] | EducationItem[];
};

export function TimelineBlock({
  eyebrow,
  title,
  description,
  items,
}: TimelineBlockProps) {
  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        <div className="mt-10 space-y-4">
          {items.map((item) => (
            <article
              key={`${"school" in item ? item.school : item.company}-${item.period}`}
              className="panel p-6"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {"role" in item ? item.role : item.program}
                  </h3>
                  <p className="mt-2 text-sm text-cyan-200">
                    {"company" in item ? `${item.company} · ${item.location}` : item.school}
                  </p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
                  {item.period}
                </span>
              </div>
              <div className="mt-5 grid gap-3">
                {item.bullets.map((bullet) => (
                  <div key={bullet} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                    <p className="text-sm leading-7 text-slate-200">{bullet}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
