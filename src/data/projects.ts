export type PortfolioProject = {
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured: boolean;
  previewMode: "iframe" | "system";
  accent: string;
};

export const projects: PortfolioProject[] = [
  {
    number: "01",
    title: "MyTask",
    category: "Customer Engagement / Automation",
    year: "2026",
    description:
      "A customer engagement and automation platform built around conversations, contacts, campaigns, channels, CRM workflows and automation systems.",
    technologies: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "Socket.IO",
      "BullMQ",
    ],

    featured: true,
    previewMode: "system",
    accent: "#7C9CFF",
  },
  {
    number: "02",
    title: "JobWay",
    category: "Education / SaaS Platform",
    year: "2026",
    description:
      "A full-stack education platform with structured courses, examinations, dashboards, educator workflows and administrative systems.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Node.js",
      "MongoDB",
    ],
    github: "https://github.com/asGithub09/JobWay",
    live: "https://jobway-ojd.vercel.app/",
    featured: true,
    previewMode: "iframe",
    accent: "#D6B77A",
  },
  {
    number: "03",
    title: "OJD Education",
    category: "Learning Platform",
    year: "2026",
    description:
      "A complete education platform covering public courses, authentication, student workflows, administration and course management.",
    technologies: [
      "React",
      "Vite",
      "Express",
      "MongoDB",
      "JWT",
    ],
    github: "https://github.com/asGithub09/ojd-education",
    live: "https://ojd-education.vercel.app",
    featured: true,
    previewMode: "iframe",
    accent: "#E28A78",
  },
  {
    number: "04",
    title: "ExamFlow",
    category: "Examination Platform",
    year: "2026",
    description:
      "An examination-focused SaaS project exploring structured assessments, candidate workflows and modern education-product interfaces.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Node.js",
    ],
    github: "https://github.com/asGithub09/ExamFlow",
    live: "https://examflow-production-1.onrender.com/",
    featured: false,
    previewMode: "iframe",
    accent: "#7C9CFF",
  },
  {
    number: "05",
    title: "HRMS",
    category: "Human Resource Management",
    year: "2026",
    description:
      "A human resource management platform designed around employee operations, workforce data and performance insights.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
    ],
    live: "https://sw-hrms.onrender.com/",
    featured: false,
    previewMode: "iframe",
    accent: "#D6B77A",
  },
];








