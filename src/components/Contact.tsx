"use client";

import { useState, type FormEvent } from "react";
import { Mail, Copy, Check, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";
import { profile } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="card-glow overflow-hidden rounded-3xl p-8 sm:p-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let's build something great"
              description="Have a project, role or idea in mind? My inbox is always open — I'll get back to you within a day or two."
            />

            <Reveal delay={0.1} className="mt-8 flex flex-col gap-3">
              <button
                type="button"
                onClick={copyEmail}
                className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-left transition-colors hover:border-white/20"
              >
                <span className="flex items-center gap-3">
                  <Mail className="size-5 text-[var(--color-brand)]" />
                  <span className="text-sm">{profile.email}</span>
                </span>
                {copied ? (
                  <Check className="size-4 text-emerald-400" />
                ) : (
                  <Copy className="size-4 text-[var(--color-muted)] transition-colors group-hover:text-white" />
                )}
              </button>

              <div className="flex gap-3">
                {[
                  { icon: GithubIcon, href: profile.socials.github, label: "GitHub" },
                  {
                    icon: LinkedinIcon,
                    href: profile.socials.linkedin,
                    label: "LinkedIn",
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm transition-colors hover:border-white/20 hover:bg-white/[0.06]"
                  >
                    <Icon className="size-5" />
                    {label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <Field
                label="Name"
                id="name"
                value={form.name}
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                placeholder="Your name"
              />
              <Field
                label="Email"
                id="email"
                type="email"
                value={form.email}
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                placeholder="you@example.com"
              />
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  placeholder="Tell me about your project…"
                  className="resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors placeholder:text-[var(--color-muted)]/60 focus:border-[var(--color-brand)]/50"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-brand-2)] px-6 py-3.5 text-sm font-semibold text-[#06060a] shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Send message
                <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-medium uppercase tracking-wider text-[var(--color-muted)]"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors placeholder:text-[var(--color-muted)]/60 focus:border-[var(--color-brand)]/50"
      />
    </div>
  );
}
