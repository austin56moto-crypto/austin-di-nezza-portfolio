import type { Stat } from "@/types";

type StatsStripProps = {
  stats: Stat[];
};

export function StatsStrip({ stats }: StatsStripProps) {
  return (
    <section className="px-5 py-10 sm:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-6 border-y border-[var(--line)] py-8 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <article key={stat.label} className="px-1">
            <p className="text-5xl text-[var(--accent)] sm:text-6xl">{stat.value}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.24em] text-[var(--foreground)]">{stat.label}</p>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{stat.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
