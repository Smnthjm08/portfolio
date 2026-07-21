import { notFound } from "next/navigation";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  return { title: project ? `${project.name} — Sumanth JM` : "Project not found" };
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 py-10">
      <div className="flex flex-col max-w-2xl mx-auto w-full gap-6">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 w-fit"
        >
          ← Back
        </Link>

        <Separator />

        <section className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            {project.completed && (
              <span className="flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Completed
              </span>
            )}
            <h1 className="text-xl font-semibold tracking-tight">{project.name}</h1>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded border border-border text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.content}
          </p>

          {(project.demoHref || project.githubHref) && (
            <div className="flex items-center gap-4 mt-1">
              {project.demoHref && (
                <Link
                  href={project.demoHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground hover:text-primary transition-colors duration-200"
                >
                  Live demo →
                </Link>
              )}
              {project.githubHref && (
                <Link
                  href={project.githubHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground hover:text-primary transition-colors duration-200"
                >
                  Source →
                </Link>
              )}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
