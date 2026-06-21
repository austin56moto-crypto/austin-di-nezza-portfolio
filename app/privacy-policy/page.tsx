import { LegalTemplate } from "@/components/legal-template";
import { siteConfig } from "@/data/profile";

export default function PrivacyPolicyPage() {
  return (
    <LegalTemplate
      title="Privacy Policy"
      summary="This template explains what information the portfolio may collect and how that information is handled. It should be reviewed before production launch if the contact form is used publicly."
      sections={[
        {
          heading: "Information collected",
          paragraphs: [
            `This portfolio may collect personal information that visitors choose to submit through the contact form, including name, email address, company, reason for contact, and message content. The current public contact email for the site owner is ${siteConfig.email}.`,
            "Standard technical data such as browser type, device information, and approximate usage metrics may also be collected by the hosting platform or analytics tools if they are enabled later.",
          ],
        },
        {
          heading: "How information is used",
          paragraphs: [
            "Information submitted through the portfolio is intended only for responding to legitimate inquiries such as job opportunities, internships, collaborations, or project-related discussions.",
            "The site is not intended to sell personal data or use inquiry submissions for unrelated marketing activity.",
          ],
        },
        {
          heading: "Retention and third parties",
          paragraphs: [
            "Submitted data may be retained for as long as reasonably necessary to respond to inquiries or maintain a record of professional communication.",
            "If production services such as email delivery, analytics, or hosting integrations are added, this policy should be updated to list those providers clearly.",
          ],
        },
      ]}
    />
  );
}
