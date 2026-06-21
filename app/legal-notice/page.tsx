import { LegalTemplate } from "@/components/legal-template";
import { siteConfig } from "@/data/profile";

export default function LegalNoticePage() {
  return (
    <LegalTemplate
      title="Legal Notice"
      summary="This page provides a professional legal placeholder for ownership and contact details. It should be customized further based on hosting provider, jurisdiction, and commercial use."
      sections={[
        {
          heading: "Site owner",
          paragraphs: [
            `Portfolio owner: ${siteConfig.name}.`,
            `Public contact: ${siteConfig.email}. Professional profile: ${siteConfig.linkedin}.`,
          ],
        },
        {
          heading: "Hosting and publication",
          paragraphs: [
            "The site may be hosted through a third-party deployment provider. If published publicly, the hosting provider name, registered business details if applicable, and jurisdiction-specific legal disclosures should be added here.",
          ],
        },
        {
          heading: "Professional context notice",
          paragraphs: [
            "Because this portfolio may be used in a professional or commercial context, this page is included as part of the site's baseline legal structure.",
            "It is a template-level implementation and should be reviewed before a long-term production launch.",
          ],
        },
      ]}
    />
  );
}
