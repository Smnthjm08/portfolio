import { notFound } from "next/navigation";
import Link from "next/link";
import { Markdown } from "@/components/markdown";
import { getProject, projects } from "@/lib/projects";
import { TagList } from "@/components/tag";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  return {
    title: project ? `${project.name} — Sumanth JM` : "Project not found",
  };
}

export default async function ProjectPage(
  props: PageProps<"/projects/[slug]">,
) {
  const { slug } = await props.params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Link
        href="/projects"
        className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-200 w-fit"
      >
        ← All projects
      </Link>

      <section className="flex flex-col gap-3">
        <h1 className="text-xl font-semibold tracking-tight">{project.name}</h1>
        <TagList tags={project.tags} />
        <Markdown content={project.content} />

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
    </>
  );
}
