import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...["about", "skills", "experience", "work", "contact"].map((page) => ({
      url: `${siteUrl}/${page}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
