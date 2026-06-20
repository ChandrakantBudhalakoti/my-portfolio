"use client";

import { useRef, type MouseEvent } from "react";
import { ArrowUpRight, Star } from "lucide-react";
import { GithubIcon } from "./ui/BrandIcons";
import { projects, profile, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./ui/SectionHeading";
import { RevealGroup, RevealItem } from "./ui/Reveal";

export function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Selected Work"
        title="Projects I'm proud of"
        description="A selection of products and platforms I've designed and engineered — from open-source tooling to large-scale apps."
      />

      <RevealGroup className="mt-14 grid gap-5 md:grid-cols-2" stagger={0.1}>
        {projects.map((project) => (
          <RevealItem
            key={project.title}
            className={cn(project.featured && "md:col-span-1")}
          >
            <ProjectCard project={project} />
          </RevealItem>
        ))}
      </RevealGroup>

      <div className="mt-10 flex justify-center">
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
        >
          <GithubIcon className="size-4" />
          See more on GitHub
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className="card-glow group flex h-full flex-col overflow-hidden rounded-2xl p-7"
    >
      {/* accent header */}
      <div className="mb-5 flex items-start justify-between gap-4">
        <div
          className={cn(
            "grid size-12 place-items-center rounded-xl bg-gradient-to-br text-[#06060a]",
            project.accent
          )}
        >
          <span className="font-display text-lg font-black">
            {project.title.charAt(0)}
          </span>
        </div>
        {project.featured && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
            <Star className="size-3 fill-current" />
            Featured
          </span>
        )}
      </div>

      <h3 className="font-display text-xl font-bold">{project.title}</h3>
      <p className="mt-0.5 text-sm font-medium text-brand-gradient">
        {project.blurb}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
        {project.description}
      </p>

      <ul className="mt-4 space-y-2">
        {project.highlights.map((h) => (
          <li
            key={h}
            className="flex gap-2.5 text-xs leading-relaxed text-[var(--color-fg)]/75"
          >
            <span
              className={cn(
                "mt-1.5 size-1.5 shrink-0 rounded-full bg-gradient-to-br",
                project.accent
              )}
            />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-[var(--color-muted)]"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
