import type { Metadata } from "next";
import { Experience } from "@/components/Experience";
import { SectionPage } from "@/components/SectionPage";
import { profile, siteUrl } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience",
  description: `${profile.name}'s professional experience building production web applications.`,
  alternates: { canonical: `${siteUrl}/experience` },
};

export default function ExperiencePage() {
  return <SectionPage><Experience /></SectionPage>;
}
