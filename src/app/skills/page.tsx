import { Skills } from "@/components/Skills";
import { SectionPage } from "@/components/SectionPage";
import { profile } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Skills",
  description: `${profile.name}'s skills: Vue 3, Nuxt, React 19, Next.js, TypeScript, Tailwind CSS, Jest and Vitest testing, SSR and web performance.`,
  path: "/skills",
});

export default function SkillsPage() {
  return <SectionPage><Skills headingAs="h1" /></SectionPage>;
}
