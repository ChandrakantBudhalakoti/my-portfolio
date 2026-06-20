"use client";

import { Briefcase } from "lucide-react";
import { experiences } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionHeading
        eyebrow="Experience"
        title="Where I've made an impact"
        description="Professional roles, responsibilities and the work I've shipped."
      />

      <div className="mt-14 space-y-6">
        {experiences.map((exp, i) => (
          <Reveal key={exp.company} delay={i * 0.1}>
            <article className="card-glow grid gap-6 rounded-2xl p-7 sm:p-9 lg:grid-cols-[0.8fr_2fr]">
              <div>
                <span className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-[var(--color-brand)]/20 to-[var(--color-brand-2)]/20">
                  <Briefcase className="size-5 text-[var(--color-brand)]" />
                </span>
                <h3 className="mt-4 font-display text-xl font-bold">
                  {exp.role}
                </h3>
                <p className="mt-1 text-brand-gradient font-semibold">
                  {exp.company}
                </p>
                <p className="mt-2 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-[var(--color-muted)]">
                  {exp.period}
                </p>
              </div>

              <ul className="space-y-3">
                {exp.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-[var(--color-fg)]/85"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--color-brand-2)]" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
