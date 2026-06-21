import { LegalTemplate } from "@/components/legal-template";

export default function CookiePolicyPage() {
  return (
    <LegalTemplate
      title="Cookie Policy"
      summary="This page describes how cookies or similar technologies may be used by the portfolio and should be updated if analytics or embedded third-party services are added."
      sections={[
        {
          heading: "Essential functionality",
          paragraphs: [
            "The portfolio may use basic browser storage or essential cookies where necessary for core site behavior, interface preferences, or secure delivery through the hosting platform.",
            "At the current stage, the portfolio is designed to function without heavy cookie dependency.",
          ],
        },
        {
          heading: "Analytics and future tools",
          paragraphs: [
            "If analytics, chat enhancements, embedded content, or marketing tools are enabled later, additional cookies or tracking technologies may be introduced.",
            "Any such change should be reflected in this policy before or at the time those tools become active in production.",
          ],
        },
        {
          heading: "User choices",
          paragraphs: [
            "Visitors can usually control cookies through their browser settings. Blocking some cookies may affect certain site functionality if more advanced services are added later.",
          ],
        },
      ]}
    />
  );
}
