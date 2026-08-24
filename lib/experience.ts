import experienceData from "@/data/experience.json";

export type ExperienceProduct = {
  name: string;
  stack: string;
  /** A handful of bullets; `**text**` renders as emphasis. */
  points: string[];
};

export type Experience = {
  slug: string;
  /** Lower comes first, on the home page and the detail routes. */
  priority: number;
  company: string;
  role: string;
  location: string;
  period: string;
  /** One-liner shown on the home page. */
  summary: string;
  /** Opening paragraph on the detail page. */
  intro: string;
  products?: ExperienceProduct[];
  /** Role-level bullets, for roles without a product breakdown. */
  points?: string[];
};

// Client names and internal product names are deliberately omitted from the
// data — products are described by what they do, not what they're called.
export const experience: Experience[] = [
  ...(experienceData as Experience[]),
].sort((a, b) => a.priority - b.priority);

export function getExperience(slug: string) {
  return experience.find((e) => e.slug === slug);
}
