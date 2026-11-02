import { Experience } from "@/components/Experience";
import { SectionPage } from "@/components/SectionPage";
import { profile } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Experience",
  description: `${profile.name}'s experience at Trigital Technologies — the CiteMentor AI frontend plus task-management, e-commerce and chatbot platforms.`,
  path: "/experience",
});

export default function ExperiencePage() {
  return <SectionPage><Experience headingAs="h1" /></SectionPage>;
}
