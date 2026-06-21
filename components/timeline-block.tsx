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
              className="panel p-6 sm:p-7"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h3 className="text-3xl uppercase leading-none text-[var(--foreground)]">
                    {"role" in item ? item.role : item.program}
                  </h3>
                  <p className="mt-3 text-sm text-[var(--accent-strong)]">
                    {"company" in item ? `${item.company} · ${item.location}` : item.school}
                  </p>
                </div>
                <span className="rounded-full border border-[var(--line)] bg-white/[0.03] px-4 py-2 text-xs uppercase tracking-[0.16em] text-[var(--muted)]">
                  {item.period}
                </span>
              </div>
              <div className="mt-5 grid gap-3">
                {item.bullets.map((bullet) => (
                  <div key={bullet} className="rounded-[1.25rem] border border-[var(--line)] bg-[var(--background)]/55 p-4">
                    <p className="text-sm leading-8 text-[var(--muted)]">{bullet}</p>
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
