import type { Metadata } from "next";
import { profile, siteUrl } from "@/lib/data";

// Served by src/app/opengraph-image.tsx. Listed explicitly because a page that
// sets its own openGraph no longer inherits the file-based image.
const shareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${profile.name} — ${profile.role}`,
};

// Metadata is shallowly merged per segment, so each page sets its own
// openGraph/twitter; otherwise it inherits the home page's og:url and title.
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${siteUrl}${path}`;
  const fullTitle = `${title} — ${profile.name}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: profile.name,
      title: fullTitle,
      description,
      url,
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [shareImage],
    },
  };
}
