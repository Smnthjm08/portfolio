import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  DiscordIcon,
} from "@/components/icons";
import { projects } from "@/lib/projects";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: GithubIcon,
    hoverClass: "hover:text-foreground",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: LinkedinIcon,
    hoverClass: "hover:text-[#0A66C2]",
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: TwitterIcon,
    hoverClass: "hover:text-[#1DA1F2]",
  },
  {
    label: "Discord",
    href: "https://discord.com",
    icon: DiscordIcon,
    hoverClass: "hover:text-[#5865F2]",
  },
];

const experience = [
  {
    company: "Cron Labs",
    role: "Software Engineer",
    location: "Bangalore",
    period: "Jul 2024 – Present",
  },
  {
    company: "Varcons Technologies",
    role: "Full Stack Developer Intern",
    location: "Bangalore",
    period: "Aug 2023 – Sep 2023",
  },
];

const techStack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Solidity",
  "PostgreSQL",
  "Tailwind CSS",
  "Docker",
];

const blogs = [
  {
    title: "Understanding Gas Optimisation in Solidity",
    date: "May 2025",
    href: "#",
  },
  {
    title: "Building production Next.js apps — lessons learned",
    date: "Mar 2025",
    href: "#",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-10">
      <div className="flex flex-col max-w-2xl mx-auto w-full gap-6">
        {/* ── Nav ── */}
        <header className="flex items-center justify-between">
          <nav className="flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <ModeToggle />
        </header>

        <Separator />

        {/* ── Profile ── */}
        <section className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-semibold tracking-tight">Sumanth JM</h1>
            <p className="text-sm text-muted-foreground">
              Software Engineer · Web3 Developer
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3 mt-1">
            {socialLinks.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`text-muted-foreground ${s.hoverClass} transition-colors duration-200 cursor-pointer`}
              >
                <s.icon className="w-[18px] h-[18px]" />
              </Link>
            ))}
          </div>
        </section>

        <Separator />

        <section id="about" className="flex flex-col gap-2 scroll-mt-10">
          <SectionLabel>About</SectionLabel>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Full Stack Engineer building seamless, production-ready web
            applications. Passionate about web3 and decentralised infrastructure
            — I bridge smart contract development with polished frontend
            experiences.
          </p>
        </section>

        <Separator />

        {/* ── Experience ── */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Experience</SectionLabel>
          <div className="flex flex-col gap-4">
            {experience.map((job) => (
              <div key={job.company} className="flex flex-col gap-0.5">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-medium">{job.company}</span>
                  <span className="text-xs text-muted-foreground tabular-nums">
                    {job.period}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">
                  {job.role} · {job.location}
                </span>
              </div>
            ))}
          </div>
        </section>

        <Separator />

        {/* ── Tech Stack ── */}
        <section className="flex flex-col gap-3">
          <SectionLabel>Stack</SectionLabel>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-md border border-border bg-muted text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <Separator />

        {/* ── Projects ── */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Projects</SectionLabel>
          <div className="flex flex-col gap-4">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group flex flex-col gap-1.5 cursor-pointer"
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-medium group-hover:text-primary transition-colors duration-200">
                    {project.name}
                  </span>
                  <svg
                    className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 -translate-x-0.5 group-hover:translate-x-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>

                  {project.completed && (
                    <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                      Completed
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-0.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <Separator />

        {/* ── Blogs ── */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Writing</SectionLabel>
          <div className="flex flex-col gap-3">
            {blogs.map((post) => (
              <Link
                key={post.title}
                href={post.href}
                className="group flex items-baseline justify-between gap-4 cursor-pointer"
              >
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200 leading-snug">
                  {post.title}
                </span>
                <span className="text-xs text-muted-foreground tabular-nums shrink-0">
                  {post.date}
                </span>
              </Link>
            ))}
          </div>
        </section>

        <Separator />

        {/* ── Footer ── */}
        <footer className="flex items-center justify-between pb-4">
          <span className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sumanth JM
          </span>
          <span className="text-xs text-muted-foreground">
            Built with Next.js
          </span>
        </footer>
      </div>
    </main>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-semibold uppercase tracking-wide text-foreground">
      {children}
    </h2>
  );
}
