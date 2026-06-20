"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "motion/react";
import { Mail, ArrowDown, MapPin } from "lucide-react";
import { socialLinks } from "./ui/socials";
import { profile, stats } from "@/lib/data";

const roles = ["React.js", "Next.js", "Vue.js", "TypeScript", "Nuxt.js"];

function RotatingRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-grid">
      {roles.map((role, i) => (
        <motion.span
          key={role}
          aria-hidden={i !== index}
          className="col-start-1 row-start-1 text-brand-gradient font-display font-bold"
          initial={false}
          animate={
            i === index
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 14, filter: "blur(6px)" }
          }
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          {role}
        </motion.span>
      ))}
    </span>
  );
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.08, duration: 0.6, ease: "easeOut" },
  }),
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-5 pb-16 pt-32 sm:px-8"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: copy */}
        <div>
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[var(--color-muted)]">
              Available for new opportunities
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-4 flex flex-wrap items-center gap-x-3 text-2xl font-semibold sm:text-3xl"
          >
            <span className="text-[var(--color-muted)]">Frontend Engineer crafting with</span>
            <RotatingRole />
          </motion.div>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg"
          >
            {profile.headline} I turn complex product requirements into clean,
            accessible, high-performance interfaces — from enterprise dashboards
            to large-scale e-commerce.
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 flex items-center gap-2 text-sm text-[var(--color-muted)]"
          >
            <MapPin className="size-4 text-[var(--color-brand)]" />
            {profile.location}
          </motion.div>

          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-brand-2)] px-6 py-3 text-sm font-semibold text-[#06060a] shadow-glow transition-transform hover:-translate-y-0.5"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
            >
              Get in touch
            </a>

            <div className="mx-1 hidden h-8 w-px bg-white/10 sm:block" />

            <div className="flex flex-wrap items-center gap-2">
              {[
                ...socialLinks,
                { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-[var(--color-muted)] transition-all hover:-translate-y-0.5 hover:border-white/20 hover:text-white"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: terminal card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="animate-float">
            <TerminalCard />
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.dl
        custom={6}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-4"
      >
        {stats.map((s) => (
          <div key={s.label} className="bg-[var(--color-bg)]/40 p-5 backdrop-blur">
            <dd className="font-display text-3xl font-bold text-brand-gradient">
              {s.value}
            </dd>
            <dt className="mt-1 text-sm text-[var(--color-muted)]">{s.label}</dt>
          </div>
        ))}
      </motion.dl>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="mx-auto mt-12 hidden text-[var(--color-muted)] sm:block"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="grid size-10 place-items-center rounded-full border border-white/10"
        >
          <ArrowDown className="size-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}

function TerminalCard() {
  const lines = [
    { p: "~/chandra", c: "whoami" },
    { out: "Frontend Engineer @ Trigital Technologies" },
    { p: "~/chandra", c: "cat stack.json" },
    { out: "{ react, next, vue, typescript, tailwind }" },
    { p: "~/chandra", c: "echo $PASSION" },
    { out: "→ building delightful, fast web apps ✨" },
  ];

  return (
    <div className="card-glow overflow-hidden rounded-2xl shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
        <span className="size-3 rounded-full bg-red-400/80" />
        <span className="size-3 rounded-full bg-yellow-400/80" />
        <span className="size-3 rounded-full bg-green-400/80" />
        <span className="ml-2 font-mono text-xs text-[var(--color-muted)]">
          chandra — zsh
        </span>
      </div>
      <div className="space-y-2 p-5 font-mono text-sm leading-relaxed">
        {lines.map((line, i) =>
          "c" in line ? (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.25 }}
              className="flex gap-2"
            >
              <span className="text-[var(--color-brand-2)]">{line.p}</span>
              <span className="text-[var(--color-accent)]">$</span>
              <span className="text-white">{line.c}</span>
            </motion.div>
          ) : (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 + i * 0.25 }}
              className="pl-2 text-[var(--color-muted)]"
            >
              {line.out}
            </motion.div>
          )
        )}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block h-4 w-2 translate-y-0.5 bg-[var(--color-brand-2)]"
        />
      </div>
    </div>
  );
}
