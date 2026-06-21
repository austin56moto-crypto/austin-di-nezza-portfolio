import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { blogPosts } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";

export function BlogPreview() {
  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Blog"
            title="Short reflections that add context beyond the project cards."
            description="The blog area is meant to show communication skill, technical reflection, and how the work fits together."
          />
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-[var(--accent-strong)] transition hover:text-[var(--foreground)]"
          >
            View all articles
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="panel panel-interactive p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--accent-strong)]">{post.category}</p>
              <h3 className="mt-4 text-3xl uppercase leading-none text-[var(--foreground)]">{post.title}</h3>
              <p className="mt-4 text-sm leading-8 text-[var(--muted)]">{post.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-sm text-[var(--muted)]">
                <span>{post.publishedAt}</span>
                <span>{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
