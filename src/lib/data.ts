export const siteUrl = "https://devchandrakant.vercel.app";

export const profile = {
  name: "Chandra Kant Budhalakoti",
  shortName: "Chandra Kant",
  role: "Frontend Engineer",
  tagline: "React · Next.js · Vue.js Developer",
  headline: "I build fast, scalable, production-grade web interfaces.",
  location: "Haldwani, Uttarakhand, India",
  email: "chandrakantbudhalakoti189@gmail.com",
  phone: "+91-8279633139",
  resumeUrl: "/Chandra_Kant_Budhalakoti_Frontend_Dev.pdf",
  // Kept under ~160 characters for SEO meta-description limits.
  metaDescription:
    "Frontend Engineer with 2+ years building scalable React, Next.js & Vue.js apps — enterprise dashboards, e-commerce and chatbots. Fast, accessible web UIs.",
  summary:
    "Frontend Engineer with 2+ years of professional experience designing and developing scalable, production-grade web applications using React.js, Next.js, Vue.js, Nuxt.js, and TypeScript. I specialise in component-driven architecture, reusable design systems, performant rendering, and pixel-accurate UI — turning complex product requirements into clean, maintainable interfaces.",
  socials: {
    github: "https://github.com/ChandrakantBudhalakoti",
    linkedin: "https://www.linkedin.com/in/chetanbudhalakoti/",
  },
} as const;

export const stats = [
  { value: "2+", label: "Years of experience" },
  { value: "10+", label: "Projects shipped" },
  { value: "5+", label: "Core frameworks" },
  { value: "∞", label: "Cups of coffee" },
] as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const;

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Node.js"],
  },
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js (App Router)",
      "Vue.js",
      "Nuxt.js",
      "React Hooks",
      "Component Architecture",
    ],
  },
  {
    title: "State Management",
    skills: ["Redux Toolkit", "Zustand", "Vuex", "Context API"],
  },
  {
    title: "UI & Styling",
    skills: [
      "Tailwind CSS",
      "DaisyUI",
      "BootstrapVue",
      "SCSS",
      "CSS Modules",
      "Material UI",
      "Figma",
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Express.js",
      "REST APIs",
      "Axios",
      "Authentication",
      "Form Validation",
      "File Uploads",
    ],
  },
  {
    title: "Performance & Security",
    skills: [
      "SEO Optimization",
      "Lighthouse Auditing",
      "SSR / CSR",
      "Lazy Loading",
      "Code Splitting",
      "Rate Limiting",
      "CORS",
    ],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Git & GitHub",
      "Docker",
      "Docker Compose",
      "Vercel",
      "Railway",
      "Netlify",
      "Postman",
      "Jira",
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    role: "Frontend Engineer",
    company: "Trigital Technologies Pvt. Ltd.",
    period: "Apr 2024 – Present",
    points: [
      "Developed enterprise-level web applications using Vue.js, React.js, and modern frontend architectures.",
      "Built task management & workflow tracking apps inspired by Jira and ClickUp — dynamic task cards, dashboards, and reusable components.",
      "Shipped production-ready chatbot systems with multi-step conversation flows, dynamic payloads, session management, and multilingual support.",
      "Built and maintained large-scale e-commerce platforms: product listings, variants, cart, wishlist, checkout, and order management.",
      "Integrated REST APIs, authentication, i18n, and optimized frontend data handling.",
      "Improved performance via lazy loading, optimized rendering, efficient state management, and code splitting.",
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
};

export const projects: Project[] = [
  {
    title: "PDF Lab",
    blurb: "Open-source PDF processing platform",
    description:
      "A full-stack PDF toolkit supporting merge, split, compress, convert, watermark, lock and unlock — with secure, injection-safe backend processing.",
    stack: ["Next.js", "TypeScript", "Express.js", "Node.js", "Docker", "qpdf", "Ghostscript"],
    highlights: [
      "Secure Node.js child processes with safe argument handling to prevent shell injection.",
      "File validation, rate limiting, CORS, temp-file cleanup and Docker-based deployment.",
      "Scalable REST APIs with optimized file-processing workflows.",
    ],
    featured: true,
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Enterprise Task Tracker",
    blurb: "Jira / ClickUp-style project management",
    description:
      "A modern project-management platform with responsive dashboards, Kanban boards, filters and reusable UI components, fully backed by REST APIs.",
    stack: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    highlights: [
      "Kanban-style interfaces with task workflows and user-based organization.",
      "Responsive dashboards built from a reusable component system.",
      "Seamless backend integration with filtering and live updates.",
    ],
    featured: true,
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
      "Improved performance & SEO using Nuxt.js server-side rendering.",
    ],
    accent: "from-emerald-500 to-teal-500",
  },
  {
    title: "AI Powered Chatbot Platform",
    blurb: "Dynamic conversational interfaces",
    description:
      "Structured, API-driven chatbot interfaces with multilingual support and reusable conversation components across business domains.",
    stack: ["Vue.js", "JavaScript", "REST APIs"],
    highlights: [
      "Option-based interactions with structured conversation flows.",
      "Session handling and multilingual support.",
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
      "Improved performance, accessibility and SEO.",
    ],
    accent: "from-pink-500 to-rose-500",
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
    school: "Uttarakhand Technical University",
    year: "2024",
  },
  {
    degree: "Bachelor of Arts (BA)",
    school: "Kumaon University",
    year: "2022",
  },
];
