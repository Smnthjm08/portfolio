import { Separator } from "@/components/ui/separator";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  DiscordIcon,
  MailIcon,
} from "@/components/icons";
import { projects } from "@/lib/projects";
import { HoverArrow } from "@/components/hover-arrow";
import { Tag } from "@/components/tag";
import { SectionLabel } from "@/components/section-label";
import { experience } from "@/lib/experience";
import { blogs } from "@/lib/blogs";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";

const HOME_PROJECT_COUNT = 4;
const HOME_BLOG_COUNT = 3;

const EMAIL = "sumanthjm.work@gmail.com";
const HANDLE = "smnthjm08";

const socialLinks = [
  {
    label: "GitHub",
    href: `https://github.com/${HANDLE}`,
    icon: GithubIcon,
    hoverClass: "hover:text-foreground",
  },
  {
    label: "LinkedIn",
    href: `https://linkedin.com/in/${HANDLE}`,
    icon: LinkedinIcon,
    hoverClass: "hover:text-[#0A66C2] dark:hover:bg-white",
  },
  {
    label: "Twitter",
    href: `https://twitter.com/${HANDLE}`,
    icon: TwitterIcon,
    hoverClass: "hover:text-[#1DA1F2]",
  },
  {
    label: "Discord",
    href: `https://discord.com/users/${HANDLE}`,
    icon: DiscordIcon,
    hoverClass: "hover:text-[#5865F2]",
  },
  {
    label: "Email",
    href: `mailto:${EMAIL}`,
    icon: MailIcon,
    hoverClass: "hover:text-foreground",
  },
];

const openSource = [
  {
    repo: "8bitcn-ui",
    href: "https://github.com/TheOrcDev/8bitcn-ui/pull/596",
    label: "#596",
    description:
      "Authored the ButtonGroup component for this retro shadcn/ui registry in response to a tracked feature request — component, registry entry, and docs page with previews, usage examples and props reference (~400 LOC across 5 files).",
  },
  {
    repo: "better-auth / better-hub",
    href: "https://github.com/better-auth/better-hub/pull/51",
    label: "#51",
    description:
      "Corrected a schema migration that failed against pre-existing indexes.",
  },
];

const education = {
  school: "Dayananda Sagar Academy of Technology & Management",
  degree: "B.E. Computer Science & Engineering",
  location: "Bangalore",
  period: "Sep 2024",
  detail: "CGPA 7.83",
  // certificates: [
  //   "100xdevs Full Stack & Web3 Development Bootcamp (Cohort 3)",
  //   "Udemy Python Bootcamp",
  // ],
};

const techStack: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["Rust", "Python", "TypeScript", "JavaScript", "Go"],
  },
  {
    label: "Backend",
    items: [
      "Django REST",
      "Anchor",
      "Axum",
      "Node.js",
      "Express",
      "FastAPI",
      "WebSockets",
      "Kafka",
    ],
  },
  {
    label: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "TanStack Query"
    ],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "Prisma", "SQLx"],
  },
  {
    label: "Infra",
    items: [
      "Docker",
      "Kubernetes",
      "Azure",
      "AWS",
      "Grafana",
      "Prometheus",
      "CI/CD",
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* ── Profile ── */}
      <section className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold tracking-tight">Sumanth JM</h1>
          <p className="text-sm text-muted-foreground">
            Backend Engineer · Solana / Rust Developer
          </p>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3 mt-1">
          {socialLinks.map((s) => {
            const isExternal = s.href.startsWith("http");
            return (
              <Link
                key={s.label}
                href={s.href}
                {...(isExternal && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                aria-label={s.label}
                className={`text-muted-foreground ${s.hoverClass} transition-colors duration-200 cursor-pointer`}
              >
                <s.icon className="w-[18px] h-[18px]" />
              </Link>
            );
          })}
        </div>
      </section>

      <Separator />

      <section id="about" className="flex flex-col gap-2 scroll-mt-10">
        <SectionLabel>About</SectionLabel>
        <p className="text-sm text-muted-foreground leading-relaxed">
          I&apos;m a backend engineer in Bangalore, two years into writing
          software where a wrong number is somebody&apos;s real problem, and
          what I&apos;m good at is the unglamorous half of that — the failure a
          vendor&apos;s API doesn&apos;t document, the call that must never be
          retried, the trail someone can still trust a year later.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          I work in Python and Rust, and I learn by rebuilding things from
          scratch — validator internals, indexers, on-chain settlement — because
          I don&apos;t trust that I understand a system until I&apos;ve written
          the part of it that breaks.
        </p>
      </section>

      <Separator />

      {/* ── Experience ── */}
      <section id="experience" className="flex flex-col gap-4 scroll-mt-10">
        <SectionLabel>Experience</SectionLabel>
        <div className="flex flex-col gap-4">
          {experience.map((job) => (
            <Link
              key={job.slug}
              href={`/experience/${job.slug}`}
              className="group flex flex-col gap-0.5 cursor-pointer"
            >
              <div className="flex items-baseline justify-between gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-medium group-hover:text-primary transition-colors duration-200">
                    {job.company}
                  </span>
                  <HoverArrow />
                </div>
                <span className="font-mono text-[11px] text-muted-foreground tabular-nums shrink-0">
                  {job.period}
                </span>
              </div>
              <span className="text-xs text-muted-foreground">
                {job.role} · {job.location}
              </span>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                {job.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <Separator />

      {/* ── Tech Stack ── */}
      <section className="flex flex-col gap-3">
        <SectionLabel>Stack</SectionLabel>
        <div className="flex flex-col gap-3">
          {techStack.map((group) => (
            <div key={group.label} className="flex flex-col gap-1.5">
              <span className="text-[10px] uppercase tracking-wide text-muted-foreground">
                {group.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <Tag key={tech} size="md">
                    {tech}
                  </Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* ── Projects ── */}
      <section id="projects" className="flex flex-col gap-4 scroll-mt-10">
        <div className="flex items-baseline justify-between">
          <SectionLabel>Projects</SectionLabel>
          {projects.length > HOME_PROJECT_COUNT && (
            <Link
              href="/projects"
              className="font-mono text-[11px] text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
            >
              View all →
            </Link>
          )}
        </div>
        <div className="flex flex-col gap-4">
          {projects.slice(0, HOME_PROJECT_COUNT).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <Separator />

      {/* ── Open Source ── */}
      <section className="flex flex-col gap-4">
        <SectionLabel>Open Source</SectionLabel>
        <div className="flex flex-col gap-4">
          {openSource.map((pr) => (
            <div key={pr.href} className="flex flex-col gap-0.5">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-sm font-medium">{pr.repo}</span>
                <Link
                  href={pr.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] text-muted-foreground hover:text-primary transition-colors duration-200 tabular-nums shrink-0"
                >
                  {pr.label} →
                </Link>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {pr.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* ── Education ── */}
      <section className="flex flex-col gap-2">
        <SectionLabel>Education</SectionLabel>
        <div className="flex flex-col gap-0.5">
          <div className="flex items-baseline justify-between gap-4">
            <span className="text-sm font-medium">{education.school}</span>
            <span className="font-mono text-[11px] text-muted-foreground tabular-nums shrink-0">
              {education.period}
            </span>
          </div>
          <span className="text-xs text-muted-foreground">
            {education.degree} · {education.location} · {education.detail}
          </span>
          {/* <p className="text-xs text-muted-foreground leading-relaxed mt-1.5">
            {education?.certificates.join(" · ")}
          </p> */}
        </div>
      </section>

      {/* ── Blogs ── Hidden entirely until there's something to show. */}
      {blogs.length > 0 && (
        <>
          <Separator />

          <section id="blogs" className="flex flex-col gap-4 scroll-mt-10">
            <div className="flex items-baseline justify-between">
              <SectionLabel>Blogs</SectionLabel>
              {blogs.length > HOME_BLOG_COUNT && (
                <Link
                  href="/blogs"
                  className="font-mono text-[11px] text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
                >
                  View all →
                </Link>
              )}
            </div>
            <div className="flex flex-col gap-3">
              {blogs.slice(0, HOME_BLOG_COUNT).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blogs/${post.slug}`}
                  className="group flex items-baseline justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200 leading-snug">
                    {post.title}
                  </span>
                  <span className="font-mono text-[11px] text-muted-foreground tabular-nums shrink-0">
                    {post.date}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </>
      )}

      <Separator />

      {/* ── Footer ── */}
      <footer className="flex flex-wrap items-end justify-between gap-x-4 gap-y-2 pb-4">
        <div className="flex flex-col gap-0.5">
          <span className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sumanth JM
          </span>
          <span className="text-xs text-muted-foreground">
            Built with Next.js
          </span>
        </div>
        <Link
          href={`mailto:${EMAIL}`}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          {EMAIL}
        </Link>
      </footer>
    </>
  );
}

