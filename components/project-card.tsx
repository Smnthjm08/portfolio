import Link from "next/link";
import type { Project } from "@/lib/projects";
import { HoverArrow } from "@/components/hover-arrow";
import { TagList } from "@/components/tag";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col gap-1.5 cursor-pointer"
    >
      <div className="flex items-center gap-1.5">
        <span className="text-sm font-medium group-hover:text-primary transition-colors duration-200">
          {project.name}
        </span>
        <HoverArrow />
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed">
        {project.description}
      </p>
      <TagList tags={project.tags} className="mt-0.5" />
    </Link>
  );
}
