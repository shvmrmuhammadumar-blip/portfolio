import type { TimelineEntry } from "@/types";

export const timeline: TimelineEntry[] = [
  {
    id: "start",
    date: "2024",
    title: "Started learning to code",
    description:
      "Picked up HTML, CSS and JavaScript fundamentals through free resources and a lot of small experiments.",
    kind: "milestone",
  },
  {
    id: "first-project",
    date: "2025",
    title: "Shipped the first real project",
    description:
      "Built and deployed a small static site end to end — domain, hosting and all — and got hooked on the deploy feedback loop.",
    kind: "project",
  },
  {
    id: "react",
    date: "2025",
    title: "Moved into React",
    description:
      "Started building component-driven UIs and learning to think in state, props and hooks instead of direct DOM manipulation.",
    kind: "milestone",
  },
  {
    id: "nextjs",
    date: "2026",
    title: "Learning Next.js and TypeScript",
    description:
      "Currently deepening into the App Router, server components and strict typing — this portfolio is part of that practice.",
    kind: "milestone",
  },
  {
    id: "goal-oss",
    date: "Next",
    title: "Goal: ship something open source",
    description: "Working toward a small, genuinely useful open-source library or tool, not just a personal demo.",
    kind: "goal",
  },
  {
    id: "goal-job",
    date: "Next",
    title: "Goal: first frontend role",
    description: "Looking for a junior or entry-level frontend position to keep growing alongside other engineers.",
    kind: "goal",
  },
];
