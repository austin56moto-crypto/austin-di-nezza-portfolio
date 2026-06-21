import { employerLanes } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";

export function EmployerValueSection() {
  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          eyebrow="Hiring Lens"
          title="What employers can hire Austin for."
          description="This section makes the portfolio easier to scan from a hiring perspective by translating projects and experience into practical value lanes."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {employerLanes.map((lane) => (
            <article key={lane.title} className="panel p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">{lane.title}</p>
              <p className="mt-4 text-lg font-semibold text-white">{lane.summary}</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">{lane.proof}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
