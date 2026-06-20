import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { profile, siteUrl } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.metaDescription,
  applicationName: `${profile.name} Portfolio`,
  keywords: [
    "Chandra Kant Budhalakoti",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "Vue.js Developer",
    "TypeScript Developer",
    "Frontend Developer Portfolio",
    "Haldwani Developer",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${profile.name} — ${profile.role}`,
    description: profile.metaDescription,
    url: siteUrl,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.metaDescription,
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#06060a",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  description: profile.metaDescription,
  url: siteUrl,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Haldwani",
    addressRegion: "Uttarakhand",
    addressCountry: "IN",
  },
  sameAs: [profile.socials.github, profile.socials.linkedin],
  knowsAbout: [
    "React.js",
    "Next.js",
    "Vue.js",
    "Nuxt.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Frontend Engineering",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Trigital Technologies Pvt. Ltd.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${display.variable} ${mono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
