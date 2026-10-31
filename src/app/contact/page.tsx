import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { SectionPage } from "@/components/SectionPage";
import { profile, siteUrl } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${profile.name} about frontend engineering roles, projects, and collaborations.`,
  alternates: { canonical: `${siteUrl}/contact` },
};

export default function ContactPage() {
  return <SectionPage><Contact /></SectionPage>;
}
