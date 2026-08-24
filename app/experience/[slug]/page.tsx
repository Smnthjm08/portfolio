import { notFound } from "next/navigation";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { getExperience, experience } from "@/lib/experience";
import { BulletList } from "@/components/bullet-list";

export function generateStaticParams() {
  return experience.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata(props: PageProps<"/experience/[slug]">) {
  const { slug } = await props.params;
  const role = getExperience(slug);
  return {
    title: role ? `${role.company} — Sumanth JM` : "Role not found",
    description: role?.summary,
  };
}

export default async function ExperiencePage(
  props: PageProps<"/experience/[slug]">,
) {
  const { slug } = await props.params;
  const role = getExperience(slug);

  if (!role) {
    notFound();
  }

  return (
    <>
      <Link
        href="/#experience"
        className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-200 w-fit"
      >
        ← Experience
      </Link>

      <section className="flex flex-col gap-2">
        <div className="flex items-baseline justify-between gap-4">
          <h1 className="text-xl font-semibold tracking-tight">
            {role.company}
          </h1>
          <span className="font-mono text-[11px] text-muted-foreground tabular-nums shrink-0">
            {role.period}
          </span>
        </div>
        <span className="text-xs text-muted-foreground">
          {role.role} · {role.location}
        </span>
        <p className="text-sm text-muted-foreground leading-relaxed mt-1">
          {role.intro}
        </p>
        {role.points && <BulletList points={role.points} className="mt-1" />}
      </section>

      {role.products?.map((product) => (
        <section key={product.name} className="flex flex-col gap-2">
          <Separator />
          <h2 className="text-sm font-medium mt-2">{product.name}</h2>
          <p className="text-[11px] text-muted-foreground leading-relaxed">
            {product.stack}
          </p>
          <BulletList points={product.points} className="mt-1" />
        </section>
      ))}
    </>
  );
}
