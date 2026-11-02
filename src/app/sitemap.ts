import type { MetadataRoute } from "next";
import { contentUpdatedAt, navLinks, siteUrl } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  // A fixed date: a lastmod that changes on every deploy gets ignored by Google.
  const lastModified = new Date(contentUpdatedAt);

  return navLinks.map((link) => ({
    url: link.href === "/" ? siteUrl : `${siteUrl}${link.href}`,
    lastModified,
    changeFrequency: "monthly",
    priority: link.href === "/" ? 1 : 0.8,
  }));
}
