import { ChatbotWidget } from "@/components/chatbot-widget";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/data/profile";

export default function ContactPage() {
  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="For roles, internships, collaborations, or project conversations."
            description="Reach out directly, use the contact form, or ask a quick portfolio question below."
          />
          <div className="mt-6 panel p-6">
            <div className="space-y-4 text-sm leading-7 text-slate-300">
              <p>
                Email:{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-cyan-200">
                  {siteConfig.email}
                </a>
              </p>
              <p>
                LinkedIn:{" "}
                <a href={siteConfig.linkedin} className="text-cyan-200">
                  {siteConfig.linkedin}
                </a>
              </p>
              <p>
                GitHub:{" "}
                <a href={siteConfig.github} className="text-cyan-200">
                  {siteConfig.github}
                </a>
              </p>
            </div>
          </div>
          <div className="mt-6">
            <ChatbotWidget />
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
