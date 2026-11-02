import { Projects } from "@/components/Projects";
import { SectionPage } from "@/components/SectionPage";
import { profile } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Selected Work",
  description: `Projects by ${profile.name}: the CodeTakhti online compiler, PDF Lab, a RAG pipeline API, CiteMentor AI and production client platforms.`,
  path: "/work",
});

export default function WorkPage() {
  return <SectionPage><Projects headingAs="h1" /></SectionPage>;
}
