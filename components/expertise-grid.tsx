import { expertiseCards } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";

export function ExpertiseGrid() {
  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          eyebrow="Core Expertise"
          title="A portfolio focused on practical systems, not filler sections."
          description="These are the main technical lanes the site should communicate to employers at a glance."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {expertiseCards.map((card) => (
            <article key={card.title} className="panel p-6">
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{card.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {card.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-slate-300"
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
