import { EmployerValueSection } from "@/components/employer-value-section";
import { SectionHeading } from "@/components/section-heading";
import { SkillsGrid } from "@/components/skills-grid";

export default function SkillsPage() {
  return (
    <>
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Skills"
              title="Technical skills grouped around practical delivery."
              description="The skill structure mirrors the kind of work Austin is aiming to do: automation, backend, data, cloud foundations, and employer-ready software presentation."
            />
          </div>
          <div className="panel p-8">
            <p className="text-sm leading-8 text-slate-200">
              Instead of presenting a random wall of tools, this page groups the stack by actual use:
              building interfaces, handling data, automating workflows, and supporting backend behavior.
            </p>
          </div>
        </div>
      </section>
      <SkillsGrid />
      <EmployerValueSection />
    </>
  );
}
