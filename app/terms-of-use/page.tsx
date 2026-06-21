import { LegalTemplate } from "@/components/legal-template";

export default function TermsOfUsePage() {
  return (
    <LegalTemplate
      title="Terms of Use"
      summary="These terms outline the intended use of the portfolio and should be reviewed if the site is used in a broader commercial context."
      sections={[
        {
          heading: "Purpose of the site",
          paragraphs: [
            "This portfolio is provided for professional presentation, informational purposes, and contact related to employment, internships, collaboration, or project discussions.",
            "The content is intended to reflect real background, skills, and public work without guaranteeing any particular outcome for visitors.",
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            "Unless otherwise noted, the written content, original design elements, and curated project presentation are the property of the site owner.",
            "Public GitHub repositories remain governed by their respective repository licenses and terms where applicable.",
          ],
        },
        {
          heading: "Limitations",
          paragraphs: [
            "The site owner makes reasonable efforts to keep content accurate and current, but no warranty is given that the site will always be uninterrupted, error-free, or complete.",
            "These terms should be adapted further if the portfolio begins offering services, paid products, or formal client engagements.",
          ],
        },
      ]}
    />
  );
}
