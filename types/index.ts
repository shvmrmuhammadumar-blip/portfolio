export type ProjectStatus = "live" | "in-progress" | "archived";

export type ProjectCategory = "web-app" | "landing-page" | "tool" | "experiment";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  summary: string;
  category: ProjectCategory;
  status: ProjectStatus;
  stack: string[];
  year: number;
  role: string;
  featured: boolean;
  repoUrl?: string;
  demoUrl?: string;
  problem: string;
  solution: string;
  features: string[];
  lessons: string[];
  improvements: string[];
}

export type SkillLevel = "comfortable" | "learning" | "exploring";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillGroup {
  id: string;
  label: string;
  description: string;
  skills: Skill[];
}

export interface TimelineEntry {
  id: string;
  date: string;
  title: string;
  description: string;
  kind: "milestone" | "project" | "goal";
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  path: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "telegram" | "mail";
}
