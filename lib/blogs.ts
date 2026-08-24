export type Blog = {
  slug: string;
  title: string;
  date: string;
  content: string;
};

export const blogs: Blog[] = [];

export function getBlog(slug: string) {
  return blogs.find((b) => b.slug === slug);
}
