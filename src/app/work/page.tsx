import type { Metadata } from "next";
import { Projects } from "@/components/Projects";
import { SectionPage } from "@/components/SectionPage";
import { profile, siteUrl } from "@/lib/data";

export const metadata: Metadata = {
  title: "Selected Work",
  description: `Projects by ${profile.name}, including CodeTakhti, PDF Lab, and open source JavaScript and TypeScript tools.`,
  alternates: { canonical: `${siteUrl}/work` },
};

export default function WorkPage() {
  return <SectionPage><Projects /></SectionPage>;
}
