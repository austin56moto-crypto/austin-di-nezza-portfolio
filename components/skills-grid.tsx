import { skillGroups } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";

export function SkillsGrid() {
  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Grouped technical skills with an employer-facing structure."
          description="The goal here is to communicate range without turning the page into a dense list of logos or buzzwords."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.title} className="panel panel-interactive p-6">
              <h3 className="text-3xl uppercase leading-none text-[var(--foreground)]">{group.title}</h3>
              <p className="mt-4 text-sm leading-8 text-[var(--muted)]">{group.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--line)] bg-white/[0.03] px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-[var(--muted)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
