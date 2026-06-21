import type { Stat } from "@/types";

type StatsStripProps = {
  stats: Stat[];
};

export function StatsStrip({ stats }: StatsStripProps) {
  return (
    <section className="px-5 py-6 sm:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <article key={stat.label} className="panel panel-interactive overflow-hidden p-6">
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
            <p className="text-sm uppercase tracking-[0.22em] text-slate-400">{stat.label}</p>
            <p className="mt-4 text-3xl font-semibold text-white sm:text-4xl">{stat.value}</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">{stat.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
