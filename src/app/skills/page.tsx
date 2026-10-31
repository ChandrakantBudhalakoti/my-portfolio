import type { Metadata } from "next";
import { Skills } from "@/components/Skills";
import { SectionPage } from "@/components/SectionPage";
import { profile, siteUrl } from "@/lib/data";

export const metadata: Metadata = {
  title: "Skills",
  description: `${profile.name}'s frontend engineering skills across React, Next.js, Vue, TypeScript, and web performance.`,
  alternates: { canonical: `${siteUrl}/skills` },
};

export default function SkillsPage() {
  return <SectionPage><Skills /></SectionPage>;
}
