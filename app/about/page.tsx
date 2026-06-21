import { AboutSnapshot } from "@/components/about-snapshot";
import { EmployerValueSection } from "@/components/employer-value-section";
import { SectionHeading } from "@/components/section-heading";
import { TimelineBlock } from "@/components/timeline-block";
import { education, experiences, siteConfig } from "@/data/profile";

export default function AboutPage() {
  return (
    <>
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="About"
              title="A practical builder with a strong user-facing problem-solving lens."
              description="Austin's profile combines technical learning, automation interest, and hands-on experience translating real support and operations needs into structured solutions."
            />
          </div>
          <div className="panel p-8">
            <p className="text-sm leading-8 text-slate-200">
              Based in {siteConfig.location}, Austin is currently pursuing Artificial Intelligence studies
              while building projects that reflect backend logic, dashboard thinking, automation, and
              clean product presentation. The portfolio is intentionally positioned to show useful,
              employer-ready work rather than over-claiming depth he has not earned yet.
            </p>
          </div>
        </div>
      </section>
      <AboutSnapshot />
      <EmployerValueSection />
      <TimelineBlock
        eyebrow="Experience"
        title="Work experience that strengthens the software story."
        description="Support and operations work sharpened communication, troubleshooting, and process thinking."
        items={experiences}
      />
      <TimelineBlock
        eyebrow="Education"
        title="Education path"
        description="Current AI training is backed by earlier studies in computer science and analytical disciplines."
        items={education}
      />
    </>
  );
}
