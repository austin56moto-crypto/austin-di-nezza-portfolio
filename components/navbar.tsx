"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Download, Menu, X } from "lucide-react";

import { navLinks, siteConfig } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const navItemClass =
    "inline-flex items-center rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-800 hover:text-white";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/96 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3 text-white">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-sm font-semibold text-slate-100">
            AD
          </span>
          <span>
            <span className="block text-sm font-semibold tracking-wide">
              {siteConfig.name}
            </span>
            <span className="block text-xs text-slate-400">{siteConfig.role}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  navItemClass,
                  active
                    ? "border-slate-300/20 bg-slate-800 text-white"
                    : "",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/cv"
            className={cn(navItemClass, "gap-2 font-medium")}
          >
            <Download className="h-4 w-4" />
            Download CV
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-100 lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-slate-950/95 px-5 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-800 hover:text-white",
                  pathname === link.href
                    ? "border-slate-300/20 bg-slate-800 text-white"
                    : "",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cv"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-white"
            >
              <Download className="h-4 w-4" />
              Download CV
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
