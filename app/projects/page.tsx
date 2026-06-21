import { ProjectExplorer } from "@/components/project-explorer";
import { SectionHeading } from "@/components/section-heading";

export default function ProjectsPage() {
  return (
    <>
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Projects"
              title="A live project area designed to keep up with new GitHub pushes."
              description="This section is the core proof layer of the portfolio. It mixes live repository data with curated metadata so new public projects can surface quickly without sacrificing presentation quality."
            />
          </div>
          <div className="border-t border-[var(--line)] pt-6">
            <p className="text-sm leading-8 text-[var(--muted)]">
              The backend route pulls repositories directly from GitHub and merges them with local
              overrides for category, summary, featured state, and employer value. That means the site
              can stay current while still reading like a high-quality portfolio instead of a raw repo dump.
            </p>
          </div>
        </div>
      </section>
      <ProjectExplorer />
    </>
  );
}
