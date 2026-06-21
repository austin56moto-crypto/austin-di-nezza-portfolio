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
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
            Austin Di Nezza
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            Professional portfolio with live GitHub project sync.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
            Built to present practical AI, automation, backend, and project work in a cleaner,
            easier-to-review format that stays current as new public repositories are pushed.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Explore</p>
          <div className="mt-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-slate-400 transition hover:text-white">
                {link.label}
              </Link>
            ))}
            <Link href="/cv" className="text-sm text-slate-400 transition hover:text-white">
              Download CV
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Legal & Contact</p>
          <div className="mt-4 flex flex-col gap-3">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-slate-400 transition hover:text-white">
                {link.label}
              </Link>
            ))}
            <a href={siteConfig.linkedin} className="text-sm text-slate-400 transition hover:text-white">
              LinkedIn
            </a>
            <a href={siteConfig.github} className="text-sm text-slate-400 transition hover:text-white">
              GitHub
            </a>
            <a href={`mailto:${siteConfig.email}`} className="text-sm text-slate-400 transition hover:text-white">
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
