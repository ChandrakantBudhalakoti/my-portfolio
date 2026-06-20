# Chandra Kant Budhalakoti — Portfolio

A modern, animated developer portfolio built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4** and **Motion**.

## ✨ Features

- Animated aurora/grid background with a gradient scroll-progress bar
- Glassmorphic sticky navbar with scroll-spy active section + animated pill
- Hero with rotating tech roles, live terminal card and animated stats
- Scroll-reveal animations throughout (respects `prefers-reduced-motion`)
- Sections: About, Skills (with marquee), Experience, Projects (mouse-spotlight cards), Contact (mailto form)
- Fully responsive, SEO metadata + Open Graph, custom SVG favicon

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## 🛠️ Editing content

All content lives in [`src/lib/data.ts`](src/lib/data.ts) — update your summary,
skills, experience, projects and education in one place.

## 📄 Resume

Drop your résumé PDF into `public/` as
`Chandra_Kant_Budhalakoti_Frontend_Dev.pdf` so the **Resume** button resolves.
(The file name is configured via `profile.resumeUrl` in `src/lib/data.ts`.)

## 🌐 Deploy

Optimised for [Vercel](https://vercel.com). Push to GitHub and import the repo,
or run `npx vercel`. Update `siteUrl` in [`src/app/layout.tsx`](src/app/layout.tsx)
to your production domain for correct Open Graph URLs.
