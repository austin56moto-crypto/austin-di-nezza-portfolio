import { SectionHeading } from "@/components/section-heading";
import { blogPosts } from "@/data/profile";

export default function BlogPage() {
  return (
    <>
      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <SectionHeading
            eyebrow="Blog"
            title="Short technical reflections that support the portfolio story."
            description="This section is intentionally focused on insights tied to real projects and practical lessons, not filler content written just to have a blog."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.slug} className="panel p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">{post.category}</p>
                <h2 className="mt-4 text-2xl font-semibold text-white">{post.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-300">{post.summary}</p>
                <div className="mt-6 flex items-center justify-between text-sm text-slate-400">
                  <span>{post.publishedAt}</span>
                  <span>{post.readTime}</span>
                </div>
                <div className="mt-6 space-y-3">
                  {post.takeaways.map((takeaway) => (
                    <div key={takeaway} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                      <p className="text-sm leading-7 text-slate-200">{takeaway}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
