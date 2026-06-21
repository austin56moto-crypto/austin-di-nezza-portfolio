"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Download, X } from "lucide-react";

import { navLinks, siteConfig } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-white/[0.03] text-xs font-semibold tracking-[0.18em] text-[var(--foreground)]">
              AD
            </span>
            <span>
              <span className="block text-sm font-medium uppercase tracking-[0.2em] text-[var(--foreground)]">
                {siteConfig.shortName}
              </span>
              <span className="block text-xs text-[var(--muted)]">{siteConfig.role}</span>
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--background-soft)]/90 backdrop-blur"
            aria-label="Toggle navigation"
          >
            <span
              className={cn(
                "absolute h-0.5 w-5 rounded-full bg-[var(--foreground)] transition-transform duration-300",
                open ? "translate-y-0 rotate-45" : "-translate-y-[5px]",
              )}
            />
            <span
              className={cn(
                "absolute h-0.5 w-5 rounded-full bg-[var(--foreground)] transition-transform duration-300",
                open ? "translate-y-0 -rotate-45" : "translate-y-[5px]",
              )}
            />
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/60 transition-opacity duration-300",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
      />

      <aside
        className={cn(
          "fixed right-0 top-0 z-50 flex h-dvh w-[min(31rem,calc(100vw-2rem))] flex-col justify-between border-l border-[var(--line)] bg-[var(--background-soft)] px-8 py-8 transition-transform duration-500",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div>
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Menu</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] text-[var(--foreground)] transition hover:bg-white/5"
              aria-label="Close navigation"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Social</p>
              <div className="mt-5 flex flex-col gap-3 text-sm text-[var(--foreground)]">
                <a href={siteConfig.github} className="transition hover:text-[var(--accent-strong)]">
                  GitHub
                </a>
                <a href={siteConfig.linkedin} className="transition hover:text-[var(--accent-strong)]">
                  LinkedIn
                </a>
                <a href={`mailto:${siteConfig.email}`} className="transition hover:text-[var(--accent-strong)]">
                  Email
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Navigate</p>
              <nav className="mt-5 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "inline-flex items-center justify-between rounded-full border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm uppercase tracking-[0.16em] text-[var(--foreground)] transition hover:bg-[var(--surface-strong)] hover:text-[var(--accent-strong)]",
                      pathname === link.href ? "border-[rgba(217,191,119,0.35)] text-[var(--accent-strong)]" : "",
                    )}
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/cv"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-5 py-3 text-sm font-medium uppercase tracking-[0.16em] text-[var(--foreground)] transition hover:bg-[var(--surface-strong)] hover:text-[var(--accent-strong)]"
            >
              <Download className="h-4 w-4" />
              Download CV
            </Link>
          </div>
        </div>

        <div className="border-t border-[var(--line)] pt-6">
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">Get In Touch</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-3 inline-block text-2xl text-[var(--foreground)] transition hover:text-[var(--accent-strong)]"
          >
            {siteConfig.email}
          </a>
        </div>
      </aside>
    </>
  );
}
