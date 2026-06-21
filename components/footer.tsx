import Link from "next/link";

import { navLinks, siteConfig } from "@/data/profile";

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
  { href: "/legal-notice", label: "Legal Notice" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-transparent">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.3fr_0.9fr_0.9fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            Austin Di Nezza
          </p>
          <h2 className="mt-4 max-w-xl text-4xl uppercase leading-none text-[var(--foreground)] sm:text-5xl">
            Built for real hiring conversations, not portfolio fluff.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-8 text-[var(--muted)]">
            Built to present practical AI, automation, backend, and project work in a cleaner,
            easier-to-review format that stays current as new public repositories are pushed.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-6 inline-block text-lg text-[var(--foreground)] transition hover:text-[var(--accent-strong)]"
          >
            {siteConfig.email}
          </a>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Explore</p>
          <div className="mt-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--foreground)] transition hover:text-[var(--accent-strong)]"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/cv" className="text-sm text-[var(--foreground)] transition hover:text-[var(--accent-strong)]">
              Download CV
            </Link>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Legal & Contact</p>
          <div className="mt-4 flex flex-col gap-3">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--foreground)] transition hover:text-[var(--accent-strong)]"
              >
                {link.label}
              </Link>
            ))}
            <a href={siteConfig.linkedin} className="text-sm text-[var(--foreground)] transition hover:text-[var(--accent-strong)]">
              LinkedIn
            </a>
            <a href={siteConfig.github} className="text-sm text-[var(--foreground)] transition hover:text-[var(--accent-strong)]">
              GitHub
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-[var(--foreground)] transition hover:text-[var(--accent-strong)]"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
