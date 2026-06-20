"use client";

import { useState, type FormEvent } from "react";
import { Mail, Copy, Check, Send, Loader2, AlertCircle } from "lucide-react";
import { socialLinks } from "./ui/socials";
import { profile } from "@/lib/data";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // No key configured → fall back to opening the visitor's mail client.
    if (!WEB3FORMS_KEY) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
      const body = encodeURIComponent(
        `${form.message}\n\n— ${form.name}\n${form.email}`,
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    setError("");

    const payload = new FormData(e.currentTarget);
    payload.append("access_key", WEB3FORMS_KEY);
    payload.append("subject", `Portfolio enquiry from ${form.name}`);
    payload.append("from_name", `${profile.shortName} Portfolio`);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Network error. Please try again or email me directly.");
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="card-glow overflow-hidden rounded-3xl p-6 sm:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <div className="min-w-0">
            <SectionHeading
              eyebrow="Contact"
              title="Let's build something great"
              description="Have a project, role or idea in mind? My inbox is always open — I'll get back to you within a day or two."
            />

            <Reveal delay={0.1} className="mt-8 flex flex-col gap-3">
              <button
                type="button"
                onClick={copyEmail}
                className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-left transition-colors hover:border-white/20 sm:px-5"
              >
                <span className="flex min-w-0 items-center gap-3">
                  <Mail className="size-5 shrink-0 text-[var(--color-brand)]" />
                  <span className="truncate text-xs sm:text-sm">
                    {profile.email}
                  </span>
                </span>
                {copied ? (
                  <Check className="size-4 shrink-0 text-emerald-400" />
                ) : (
                  <Copy className="size-4 shrink-0 text-[var(--color-muted)] transition-colors group-hover:text-white" />
                )}
              </button>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="grid size-12 flex-1 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-[var(--color-muted)] transition-colors hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                  >
                    <Icon className="size-5" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="min-w-0">
            {status === "success" ? (
              <div className="flex h-full min-h-[20rem] flex-col items-center justify-center gap-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-8 text-center">
                <span className="grid size-14 place-items-center rounded-full bg-emerald-400/15">
                  <Check className="size-7 text-emerald-400" />
                </span>
                <h3 className="font-display text-xl font-bold">
                  Message sent!
                </h3>
                <p className="max-w-xs text-sm text-[var(--color-muted)]">
                  Thanks for reaching out — I&apos;ll get back to you within a
                  day or two.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-sm font-medium text-[var(--color-brand-2)] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Field
                  label="Name"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                  placeholder="Your name"
                />
                <Field
                  label="Email"
                  id="email"
                  name="email"
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
                    name="message"
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

                {/* Honeypot: hidden from humans, traps bots */}
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {status === "error" && (
                  <p className="flex items-center gap-2 text-sm text-red-400">
                    <AlertCircle className="size-4 shrink-0" />
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-brand-2)] px-6 py-3.5 text-sm font-semibold text-[#06060a] shadow-glow transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {status === "sending" ? (
                    <>
                      Sending…
                      <Loader2 className="size-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send message
                      <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  id: string;
  name: string;
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
        name={name}
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
