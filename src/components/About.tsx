"use client";

import { GraduationCap, Sparkles, Code2, Layers, Rocket } from "lucide-react";
import { education, profile } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "./ui/Reveal";

const strengths = [
  {
    icon: Code2,
    title: "Component-driven",
    text: "Reusable design systems and clean, maintainable architecture.",
  },
  {
    icon: Layers,
    title: "Full-stack aware",
    text: "REST APIs, auth, SSR/CSR — comfortable across the stack.",
  },
  {
    icon: Rocket,
    title: "Performance-first",
    text: "Lazy loading, code splitting and Lighthouse-driven tuning.",
  },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="About"
        title="Engineering interfaces that scale"
        description="A snapshot of who I am, what I value, and where I've trained."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal className="card-glow rounded-2xl p-7 sm:p-9">
          <Sparkles className="size-7 text-[var(--color-brand)]" />
          <p className="mt-5 text-lg leading-relaxed text-[var(--color-fg)]/90">
            {profile.summary}
          </p>
          <p className="mt-4 leading-relaxed text-[var(--color-muted)]">
            I care about the details that users feel — smooth interactions,
            accessible markup, and pages that load fast. I&apos;ve shipped
            production apps used by real customers, collaborated in Agile teams,
            and owned features end to end.
          </p>

          <RevealGroup className="mt-8 grid gap-4 sm:grid-cols-3">
            {strengths.map((s) => (
              <RevealItem
                key={s.title}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
              >
                <s.icon className="size-5 text-[var(--color-brand-2)]" />
                <p className="mt-3 font-display text-sm font-semibold">
                  {s.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[var(--color-muted)]">
                  {s.text}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>

        <div className="flex flex-col gap-6">
          <Reveal className="card-glow rounded-2xl p-7">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-white/5">
                <GraduationCap className="size-5 text-[var(--color-accent)]" />
              </span>
              <h3 className="font-display text-lg font-semibold">Education</h3>
            </div>
            <ul className="mt-5 space-y-5">
              {education.map((e) => (
                <li
                  key={e.degree}
                  className="relative border-l border-white/10 pl-5"
                >
                  <span className="absolute -left-1.5 top-1.5 size-3 rounded-full bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-brand-2)]" />
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="text-sm font-semibold">{e.degree}</p>
                    <span className="shrink-0 font-mono text-xs text-[var(--color-muted)]">
                      {e.year}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm text-[var(--color-muted)]">
                    {e.school}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal
            delay={0.1}
            className="card-glow flex flex-col justify-center rounded-2xl p-7"
          >
            <p className="font-display text-sm text-[var(--color-muted)]">
              Currently
            </p>
            <p className="mt-2 text-lg font-semibold leading-snug">
              Frontend Engineer at{" "}
              <span className="text-brand-gradient">Trigital Technologies</span>
            </p>
            <p className="mt-2 text-sm text-[var(--color-muted)]">
              Building enterprise dashboards, chatbots and e-commerce platforms
              with React & Vue.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
