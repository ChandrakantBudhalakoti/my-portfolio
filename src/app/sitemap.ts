import type { MetadataRoute } from "next";
import { siteUrl, navLinks } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    // Section anchors so crawlers understand the page structure.
    ...navLinks
      .filter((link) => link.href !== "#home")
      .map((link) => ({
        url: `${siteUrl}/${link.href}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
  ];
}
