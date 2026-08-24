import { notFound } from "next/navigation";
import Link from "next/link";
import { Markdown } from "@/components/markdown";
import { getBlog, blogs } from "@/lib/blogs";

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata(props: PageProps<"/blogs/[slug]">) {
  const { slug } = await props.params;
  const blog = getBlog(slug);
  return { title: blog ? `${blog.title} — Sumanth JM` : "Post not found" };
}

export default async function BlogPage(props: PageProps<"/blogs/[slug]">) {
  const { slug } = await props.params;
  const blog = getBlog(slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <Link
        href="/blogs"
        className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-200 w-fit"
      >
        ← All blogs
      </Link>

      <section className="flex flex-col gap-3">
        <div className="flex items-baseline justify-between gap-4">
          <h1 className="text-xl font-semibold tracking-tight">{blog.title}</h1>
          <span className="font-mono text-[11px] text-muted-foreground tabular-nums shrink-0">
            {blog.date}
          </span>
        </div>
        {blog.content ? (
          <Markdown content={blog.content} />
        ) : (
          <p className="text-sm text-muted-foreground leading-relaxed">
            Coming soon.
          </p>
        )}
      </section>
    </>
  );
}
