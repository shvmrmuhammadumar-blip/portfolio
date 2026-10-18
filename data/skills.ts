import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    description: "Where most of the hands-on time goes.",
    skills: [
      { name: "JavaScript", level: "comfortable" },
      { name: "HTML & CSS", level: "comfortable" },
      { name: "React", level: "comfortable" },
      { name: "Tailwind CSS", level: "comfortable" },
      { name: "TypeScript", level: "learning" },
      { name: "Next.js", level: "learning" },
    ],
  },
  {
    id: "animation",
    label: "Animation & motion",
    description: "Bringing interfaces to life without hurting performance.",
    skills: [
      { name: "Motion (Framer Motion)", level: "comfortable" },
      { name: "CSS transitions & keyframes", level: "comfortable" },
      { name: "GSAP", level: "learning" },
      { name: "SVG animation", level: "learning" },
    ],
  },
  {
    id: "tooling",
    label: "Developer tools",
    description: "The everyday workbench.",
    skills: [
      { name: "Git & GitHub", level: "comfortable" },
      { name: "Vite", level: "comfortable" },
      { name: "ESLint & Prettier", level: "comfortable" },
      { name: "Vercel", level: "comfortable" },
      { name: "Figma", level: "learning" },
    ],
  },
  {
    id: "backend",
    label: "Backend & data",
    description: "Enough to make a frontend project self-sufficient.",
    skills: [
      { name: "Node.js", level: "learning" },
      { name: "REST APIs", level: "learning" },
      { name: "PostgreSQL", level: "exploring" },
      { name: "Prisma", level: "exploring" },
    ],
  },
  {
    id: "ai",
    label: "AI & creative coding",
    description: "Where curiosity is currently pointed.",
    skills: [
      { name: "Prompt-assisted development", level: "comfortable" },
      { name: "LLM-powered UI features", level: "learning" },
      { name: "Generative SVG / Canvas", level: "learning" },
    ],
  },
];

export const skillLevelCopy: Record<string, string> = {
  comfortable: "Comfortable",
  learning: "Learning",
  exploring: "Exploring",
};
