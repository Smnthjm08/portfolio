import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { blogs } from "@/lib/blogs";

export const metadata = {
  title: "Blogs — Sumanth JM",
  description:
    "Notes on web development, Rust, Solana and decentralised infrastructure.",
};

export default function BlogsPage() {
  return (
    <>
      <section className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold tracking-tight">Blogs</h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Notes on things I build and break — web development, Rust, Solana and
          decentralised infrastructure.
        </p>
      </section>

      <Separator />

      <section className="flex flex-col gap-4">
        {blogs.map((post) => (
          <Link
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="group flex flex-col gap-1 cursor-pointer"
          >
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-sm font-medium group-hover:text-primary transition-colors duration-200 leading-snug">
                {post.title}
              </span>
              <span className="font-mono text-[11px] text-muted-foreground tabular-nums shrink-0">
                {post.date}
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
              {post.content.split("\n")[0]}
            </p>
          </Link>
        ))}

        {blogs.length === 0 && (
          <p className="text-sm text-muted-foreground">
            Nothing published yet.
          </p>
        )}
      </section>
    </>
  );
}
