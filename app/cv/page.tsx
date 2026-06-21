import Link from "next/link";
import { Download } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";

export default function CvPage() {
  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="CV"
            title="Downloadable PDF CV"
            description="This route gives the portfolio a dedicated CV page while also exposing a direct PDF download for employers and recruiters."
          />
          <Link
            href="/documents/Austin-Di-Nezza-CV.pdf"
            className="accent-button"
            target="_blank"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </Link>
        </div>
        <div className="mt-10 panel overflow-hidden">
          <iframe
            src="/documents/Austin-Di-Nezza-CV.pdf"
            title="Austin Di Nezza CV"
            className="h-[900px] w-full bg-white"
          />
        </div>
      </div>
    </section>
  );
}
