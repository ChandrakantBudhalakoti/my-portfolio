import type { Metadata } from "next";
import { About } from "@/components/About";
import { SectionPage } from "@/components/SectionPage";
import { profile, siteUrl } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${profile.name}, a ${profile.role} based in Haldwani, India.`,
  alternates: { canonical: `${siteUrl}/about` },
};

export default function AboutPage() {
  return <SectionPage><About /></SectionPage>;
}
