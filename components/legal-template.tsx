import { SectionHeading } from "@/components/section-heading";

type LegalTemplateProps = {
  title: string;
  summary: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
};

export function LegalTemplate({ title, summary, sections }: LegalTemplateProps) {
  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto w-full max-w-4xl">
        <SectionHeading eyebrow="Legal" title={title} description={summary} />
        <div className="mt-10 space-y-6">
          {sections.map((section) => (
            <article key={section.heading} className="panel p-6 sm:p-8">
              <h2 className="text-2xl font-semibold text-white">{section.heading}</h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-8 text-slate-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
