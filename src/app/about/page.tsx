import { About } from "@/components/About";
import { SectionPage } from "@/components/SectionPage";
import { profile } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description: `About ${profile.name}, a ${profile.role} in Haldwani, India with 2.5 years building Vue, Nuxt, React and Next.js applications.`,
  path: "/about",
});

export default function AboutPage() {
  return <SectionPage><About headingAs="h1" /></SectionPage>;
}
