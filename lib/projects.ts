import projectsData from "@/data/projects.json";

export type Project = {
  slug: string;
  name: string;
  /** Lower comes first, on the home page and the /projects index. */
  priority: number;
  description: string;
  content: string;
  tags: string[];
  demoHref?: string;
  githubHref?: string;
};

export const projects: Project[] = [...(projectsData as Project[])].sort(
  (a, b) => a.priority - b.priority,
);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
