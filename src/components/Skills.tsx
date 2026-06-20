"use client";

import { skillGroups } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { RevealGroup, RevealItem } from "./ui/Reveal";

const marquee = [
  "React.js",
  "Next.js",
  "Vue.js",
  "Nuxt.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Redux Toolkit",
  "Zustand",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Docker",
  "Figma",
  "REST APIs",
  "SCSS",
];

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="My technical toolbox"
          description="The languages, frameworks and tools I reach for to ship production-grade products."
        />
      </div>

      {/* Marquee */}
      <div className="relative mt-12 flex overflow-hidden mask-fade-x py-2">
        <div className="flex shrink-0 animate-marquee items-center gap-4 pr-4">
          {[...marquee, ...marquee].map((tech, i) => (
            <span
              key={i}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-5 py-2 font-mono text-sm text-[var(--color-muted)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl px-5 sm:px-8">
        <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <RevealItem
              key={group.title}
              className="card-glow group rounded-2xl p-6"
            >
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[var(--color-muted)]">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-[var(--color-fg)]/85 transition-colors hover:border-[var(--color-brand)]/40 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
