export const siteUrl = "https://devchandrakant.vercel.app";

// Bump when page content changes; used as the sitemap's lastmod.
export const contentUpdatedAt = "2026-11-02";

export const profile = {
  name: "Chandra Kant Budhalakoti",
  shortName: "Chandra Kant",
  role: "Frontend Engineer",
  tagline: "Vue.js · React · Next.js · TypeScript",
  headline: "I build fast, scalable, production-grade web interfaces.",
  location: "Haldwani, Uttarakhand, India",
  email: "chandrakantbudhalakoti189@gmail.com",
  phone: "+91-8279633139",
  resumeUrl: "/Chandra_Kant_Budhalakoti.pdf",
  // Kept within the 100-130 character SEO sweet spot.
  metaDescription:
    "Frontend Engineer building Vue, React & Next.js apps — AI products, enterprise dashboards, e-commerce and chatbots.",
  summary:
    "Frontend Engineer with 2.5 years of experience building production web applications in Vue.js, Nuxt, React, Next.js and TypeScript. I've shipped an AI product frontend, enterprise task and tenant management platforms, multilingual chatbot systems and customer-facing e-commerce storefronts — working across the stack from component architecture and state management to REST integration, SSR strategy and Dockerised Node services.",
  socials: {
    github: "https://github.com/ChandrakantBudhalakoti",
    linkedin: "https://www.linkedin.com/in/chetanbudhalakoti/",
    x: "https://x.com/CBudhalakoti",
    instagram: "https://www.instagram.com/chetan_budhalakoti_/",
    facebook: "https://www.facebook.com/chetan.budhalakoti.189/",
  },
} as const;

export const stats = [
  { value: "2.5+", label: "Years of experience" },
  { value: "10+", label: "Projects shipped" },
  { value: "5+", label: "Core frameworks" },
  { value: "∞", label: "Cups of coffee" },
] as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
] as const;

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks",
    skills: [
      "Vue 3",
      "Nuxt.js",
      "React 19",
      "Next.js (App Router)",
      "Node.js",
      "Express",
    ],
  },
  {
    title: "State Management",
    skills: ["Vuex", "Zustand", "Context API"],
  },
  {
    title: "UI & Styling",
    skills: [
      "Tailwind CSS",
      "Bootstrap-Vue",
      "DaisyUI",
      "SCSS",
      "CSS Modules",
      "Figma",
    ],
  },
  {
    title: "Testing",
    skills: ["Jest", "Vue Test Utils", "Vitest", "Chrome DevTools"],
  },
  {
    title: "APIs & Data",
    skills: [
      "REST APIs",
      "Axios",
      "Authentication Flows",
      "i18n",
      "File Uploads",
      "MongoDB",
      "MySQL",
    ],
  },
  {
    title: "Performance",
    skills: [
      "SSR / CSR Strategy",
      "Code Splitting",
      "Lazy Loading",
      "Caching",
      "Lighthouse Auditing",
      "SEO",
    ],
  },
  {
    title: "Tooling",
    skills: [
      "Git",
      "Docker",
      "Vite",
      "ESLint",
      "Prettier",
      "Vercel",
      "Netlify",
      "Render",
      "Postman",
      "Jira",
      "Agile",
    ],
  },
];

export type Experience = {
  role: string;
  team?: string;
  company: string;
  location?: string;
  period: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    role: "Frontend Engineer",
    team: "CiteMentor AI (product team)",
    company: "Trigital Technologies Pvt. Ltd.",
    location: "Hyderabad (Remote)",
    period: "Sep 2025 – Present",
    points: [
      "Build the frontend for CiteMentor AI, an AI product under Trigital, delivering 20+ reusable Vue and React components and interactive UI features across web and mobile breakpoints.",
      "Cut initial bundle size by 35% through route-level code splitting, lazy loading and dependency pruning, improving time-to-interactive on low-bandwidth connections.",
      "Partner with backend, design and product to scope and ship features — API integration, dynamic data flows and cross-browser compatibility.",
    ],
  },
  {
    role: "Frontend Engineer",
    team: "Client Platforms",
    company: "Trigital Technologies Pvt. Ltd.",
    location: "Hyderabad (Remote)",
    period: "Apr 2024 – Sep 2025",
    points: [
      "Built a Jira/ClickUp-style task and workflow tracking platform with Kanban boards, dynamic task cards, filtering and user-based organisation across 6 dashboard views.",
      "Delivered a tenant management system and customer-facing Vue/Nuxt e-commerce storefronts; Nuxt SSR lifted Lighthouse performance from 61 to 92 and cut product-page LCP from 4.2s to 1.8s.",
      "Shipped production chatbot systems with multi-step conversation flows, dynamic payload handling, session management and i18n across 4 business domains and 3 languages.",
      "Designed in Figma and built the Trigital Technologies marketing site in Next.js, Tailwind CSS and DaisyUI, reaching 95+ Lighthouse SEO and accessibility scores.",
      "Raised unit coverage on core Vue components to ~70% with Jest and Vue Test Utils, reducing regressions on shared UI during refactors.",
    ],
  },
];

export type Project = {
  title: string;
  blurb: string;
  description: string;
  stack: string[];
  highlights: string[];
  featured?: boolean;
  accent: string;
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    title: "CodeTakhti",
    blurb: "Free online code editor & compiler for phones",
    description:
      "An open-source, mobile-first code editor that runs Python, C, C++, Java, JavaScript, TypeScript, Go, Ruby, PHP, Lua and R entirely in the browser — so anyone can learn to code without a laptop. No install, no account.",
    stack: ["Next.js", "React", "TypeScript", "Monaco Editor", "WebAssembly", "Tailwind CSS"],
    highlights: [
      "VS Code-style Monaco editor with autocomplete, Prettier formatting and real TypeScript type checking from an in-memory language service.",
      "Every language runs on WebAssembly inside a sandboxed, network-isolated iframe and Web Worker — code never leaves the device.",
      "Live Clang diagnostics for C/C++, a Problems panel, stdin support and shareable runnable examples.",
    ],
    featured: true,
    accent: "from-indigo-500 to-cyan-400",
    liveUrl: "https://codetakhti.vercel.app/",
    repoUrl: "https://github.com/ChandrakantBudhalakoti/js-ts-playground",
  },
  {
    title: "PDF Lab",
    blurb: "Open-source PDF processing platform",
    description:
      "A full-stack TypeScript monorepo to merge, split, compress, convert, watermark, lock and unlock PDFs — a Next.js frontend paired with an Express REST API, with all processing done locally by CLI tools.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Express", "Docker", "qpdf", "Ghostscript", "ImageMagick"],
    highlights: [
      "qpdf, Ghostscript and ImageMagick run through Node child processes with safe argument handling to eliminate shell-injection risk.",
      "Upload validation, rate limiting, CORS policy and temporary-file cleanup on every request.",
      "Containerised with Docker and deployed through an automated pipeline.",
    ],
    featured: true,
    accent: "from-violet-500 to-fuchsia-500",
    liveUrl: "https://pdf-lab-alpha.vercel.app/",
    repoUrl: "https://github.com/ChandrakantBudhalakoti/pdf-lab",
  },
  {
    title: "CiteMentor AI",
    blurb: "AI product frontend at Trigital",
    description:
      "The frontend for CiteMentor AI, an AI product built by Trigital's product team — interactive UI features delivered across web and mobile breakpoints.",
    stack: ["Vue.js", "React", "REST APIs"],
    highlights: [
      "20+ reusable Vue and React components powering the product's interactive features.",
      "35% smaller initial bundle via route-level code splitting, lazy loading and dependency pruning.",
      "Shipped in close partnership with backend, design and product teams.",
    ],
    featured: true,
    accent: "from-sky-500 to-indigo-500",
  },
  {
    title: "RAG Pipeline API",
    blurb: "Ask questions of your PDFs, with sources",
    description:
      "A Retrieval-Augmented Generation API that ingests PDFs, embeds them into PostgreSQL with pgvector, and answers questions with file and page references — switchable between OpenAI and Google Gemini.",
    stack: ["Python", "FastAPI", "LangChain", "PostgreSQL", "pgvector", "Docker"],
    highlights: [
      "End-to-end pipeline: PDF ingestion → chunking → embeddings → similarity search → LLM answer with sources.",
      "One setting switches both the embedding and chat models between OpenAI and Gemini.",
      "Automated evaluation set (10/10 on the sample documents) and a Docker Compose template for new clients.",
    ],
    featured: true,
    accent: "from-lime-500 to-emerald-500",
    repoUrl: "https://github.com/ChandrakantBudhalakoti/pdf-rag-api-template",
  },
  {
    title: "Enterprise Task Tracker",
    blurb: "Jira / ClickUp-style project management",
    description:
      "A modern project-management platform with Kanban boards, filters and reusable UI components across 6 dashboard views, fully backed by REST APIs.",
    stack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    highlights: [
      "Kanban-style interfaces with dynamic task cards and user-based organisation.",
      "Responsive dashboards built from a reusable component system.",
      "Seamless backend integration with filtering and live updates.",
    ],
    accent: "from-cyan-500 to-blue-500",
  },
  {
    title: "Production E-Commerce Platform",
    blurb: "Customer-facing storefront",
    description:
      "An SEO-friendly e-commerce app serving real users — product browsing, search, variants, cart, wishlist, checkout and order workflows.",
    stack: ["Vue.js", "Nuxt.js", "Vuex", "Tailwind CSS"],
    highlights: [
      "Full purchase funnel: browse, search, variants, cart, wishlist, checkout.",
      "Nuxt SSR lifted Lighthouse performance from 61 to 92 and cut product-page LCP from 4.2s to 1.8s.",
    ],
    accent: "from-emerald-500 to-teal-500",
  },
  {
    title: "AI Powered Chatbot Platform",
    blurb: "Dynamic conversational interfaces",
    description:
      "Structured, API-driven chatbot interfaces with multilingual support and reusable conversation components across business domains.",
    stack: ["Vue.js", "JavaScript", "REST APIs", "i18n"],
    highlights: [
      "Multi-step conversation flows with dynamic payloads and session handling.",
      "Running across 4 business domains in 3 languages.",
    ],
    accent: "from-amber-500 to-orange-500",
  },
  {
    title: "Trigital Technologies Website",
    blurb: "Official company website",
    description:
      "A modern, SEO-optimized company website designed in Figma and built with Next.js — responsive layouts, reusable components and strong accessibility.",
    stack: ["Next.js", "Tailwind CSS", "DaisyUI", "Figma"],
    highlights: [
      "Designed UI in Figma and implemented pixel-accurate layouts.",
      "Reached 95+ Lighthouse SEO and accessibility scores.",
    ],
    accent: "from-pink-500 to-rose-500",
  },
  {
    title: "CodeQuest",
    blurb: "Gamified programming lessons",
    description:
      "A gamified learning platform that teaches beginners programming concepts through interactive quizzes, puzzles and mini-games.",
    stack: ["Next.js", "React", "TypeScript", "Zustand", "dnd-kit", "Tailwind CSS"],
    highlights: [
      "Interactive quizzes and drag-and-drop puzzles for hands-on practice.",
      "Lesson progress and game state managed with Zustand.",
    ],
    accent: "from-yellow-400 to-amber-500",
    liveUrl: "https://codequest-ashen.vercel.app/",
    repoUrl: "https://github.com/ChandrakantBudhalakoti/codequest",
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  year: string;
};

export const education: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Amrapali Group of Institutes, Haldwani (Uttarakhand Technical University)",
    year: "2024",
  },
  {
    degree: "Bachelor of Arts (BA)",
    school: "Kumaun University, Nainital",
    year: "2022",
  },
];
