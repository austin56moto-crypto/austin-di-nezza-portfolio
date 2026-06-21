import { AboutSnapshot } from "@/components/about-snapshot";
import { BlogPreview } from "@/components/blog-preview";
import { ChatbotWidget } from "@/components/chatbot-widget";
import { EmployerValueSection } from "@/components/employer-value-section";
import { ExpertiseGrid } from "@/components/expertise-grid";
import { HeroSection } from "@/components/hero-section";
import { ProjectExplorer } from "@/components/project-explorer";
import { SkillsGrid } from "@/components/skills-grid";
import { StatsStrip } from "@/components/stats-strip";
import { TimelineBlock } from "@/components/timeline-block";
import { education, experiences, siteConfig } from "@/data/profile";
import { getPortfolioProjects } from "@/lib/github";
import { formatRelativeMonth } from "@/lib/utils";
import { SectionHeading } from "@/components/section-heading";
import type { Stat } from "@/types";

export default async function Home() {
  const projects = await getPortfolioProjects();
  const liveProjects = projects.filter((project) => !project.fork);
  const latestProject = liveProjects[0];
  const featuredCount = liveProjects.filter((project) => project.featured).length;
  const categoryCount = new Set(liveProjects.map((project) => project.category)).size;

  const dynamicStats: Stat[] = [
    {
      label: "Live Repositories",
      value: `${liveProjects.length}`,
      detail: "Public GitHub repositories are available through the backend-driven project explorer.",
    },
    {
      label: "Featured Builds",
      value: `${featuredCount}`,
      detail: "Priority projects are curated with stronger summaries, categories, and employer-facing takeaways.",
    },
    {
      label: "Latest Update",
      value: latestProject ? formatRelativeMonth(latestProject.updatedAt) : "Live",
      detail: latestProject
        ? `Most recent public repo activity: ${latestProject.displayName}.`
        : "Recent public work surfaces automatically once it lands on GitHub.",
    },
    {
      label: "Coverage",
      value: `${categoryCount}+`,
      detail: "The current project mix spans AI, data, backend, cloud, expert systems, and frontend work.",
    },
  ];

  return (
    <>
      <HeroSection projects={liveProjects} />
      <StatsStrip stats={dynamicStats} />
      <AboutSnapshot />
      <ExpertiseGrid />
      <EmployerValueSection />
      <ProjectExplorer
        compact
        title="Recent & Featured GitHub Work"
        description="This homepage project area is backed by the portfolio backend and reflects live public GitHub repositories. Recent pushes can surface here automatically, while curated metadata keeps the presentation employer-friendly."
      />
      <SkillsGrid />
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="Ask Austin"
              title="An AI-style portfolio section that can answer the basics quickly."
              description="Inspired by the reference site, this gives employers another way to navigate Austin's background, current studies, and strongest project areas."
            />
            <div className="mt-6 panel p-6">
              <p className="text-sm leading-7 text-slate-300">
                This first version uses a portfolio-specific knowledge base instead of an external LLM.
                It keeps the responses aligned with the actual CV, project list, and public links while
                proving the site has real backend behavior.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Contact email: <span className="text-white">{siteConfig.email}</span>
              </p>
            </div>
          </div>
          <ChatbotWidget />
        </div>
      </section>
      <TimelineBlock
        eyebrow="Experience"
        title="Professional experience rooted in support, operations, and technical communication."
        description="That background matters because it makes the software work more user-aware and practical."
        items={experiences}
      />
      <TimelineBlock
        eyebrow="Education"
        title="Current AI studies backed by earlier computer science foundations."
        description="The portfolio is meant to show growth, practical execution, and project quality."
        items={education}
      />
      <BlogPreview />
    </>
  );
}
