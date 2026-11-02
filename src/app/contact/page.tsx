import { Contact } from "@/components/Contact";
import { SectionPage } from "@/components/SectionPage";
import { profile } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description: `Contact ${profile.name} about frontend engineering roles, projects, and collaborations.`,
  path: "/contact",
});

export default function ContactPage() {
  return <SectionPage><Contact headingAs="h1" /></SectionPage>;
}
