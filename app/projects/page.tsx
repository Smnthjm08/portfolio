import { Separator } from "@/components/ui/separator";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Projects — Sumanth JM",
  description:
    "Things I've built — Solana programs, Rust backends and systems reimplementations, and full stack web applications.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="flex flex-col gap-2">
        <h1 className="text-xl font-semibold tracking-tight">Projects</h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Solana programs, Rust backends and systems reimplementations, and
          full stack web applications.
        </p>
      </section>

      <Separator />

      <section className="flex flex-col gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </>
  );
}
