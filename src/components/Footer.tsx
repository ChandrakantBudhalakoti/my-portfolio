import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui/BrandIcons";
import { profile, navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row">
          <div className="max-w-sm">
            <a href="#home" className="flex items-center gap-2.5 font-display font-bold">
              <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-brand-2)]">
                <span className="text-[13px] font-black text-[#06060a]">CK</span>
              </span>
              {profile.shortName}
            </a>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
              {profile.role} crafting fast, scalable web experiences with React,
              Next.js and Vue.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--color-muted)] transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-2">
            {[
              { icon: GithubIcon, href: profile.socials.github, label: "GitHub" },
              { icon: LinkedinIcon, href: profile.socials.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-[var(--color-muted)] transition-colors hover:text-white"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-[var(--color-muted)]">
            © {new Date().getFullYear()} {profile.name}. Designed & built with
            Next.js + Tailwind CSS.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-xs text-[var(--color-muted)] transition-colors hover:text-white"
          >
            Back to top
            <ArrowUp className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
