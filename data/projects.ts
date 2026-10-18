import type { Project } from "@/types";

// Every project below is a clearly labelled placeholder. Swap in your real
// projects, links and screenshots — the shape (fields) is what the rest of
// the app relies on, so keep the same keys when you replace the content.

export const projects: Project[] = [
  {
    slug: "task-flow",
    title: "TaskFlow", // PLACEHOLDER project name
    description: "A keyboard-first task manager with optimistic updates and drag-to-reorder.",
    summary:
      "Personal project built to practice complex client state and accessible drag-and-drop without a heavy library.",
    category: "web-app",
    status: "live",
    stack: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
    year: 2026,
    role: "Solo developer",
    featured: true,
    repoUrl: "https://github.com/your-handle/task-flow", // PLACEHOLDER
    demoUrl: "https://task-flow.example.com", // PLACEHOLDER
    problem:
      "Most lightweight task apps either lack keyboard support or fake their drag-and-drop with laggy re-renders.",
    solution:
      "Built a custom reorder primitive on top of the Pointer Events API with optimistic local state, so reordering feels instant even before the change is persisted.",
    features: [
      "Full keyboard navigation, including reordering with arrow keys",
      "Optimistic updates with rollback on failure",
      "Command palette for quick task entry",
      "Local-first storage with background sync",
    ],
    lessons: [
      "Optimistic UI is straightforward until you need rollback — designing the failure path first made the happy path simpler",
      "Accessible drag-and-drop needs a non-pointer fallback from day one, not bolted on later",
    ],
    improvements: ["Add multi-device sync", "Write E2E tests for the reorder logic"],
  },
  {
    slug: "weatherline",
    title: "Weatherline", // PLACEHOLDER project name
    description: "A minimal weather dashboard with a 7-day forecast and animated condition icons.",
    summary: "Learning project for data fetching patterns and SVG animation in Next.js.",
    category: "web-app",
    status: "live",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
    year: 2025,
    role: "Solo developer",
    featured: true,
    repoUrl: "https://github.com/your-handle/weatherline", // PLACEHOLDER
    demoUrl: "https://weatherline.example.com", // PLACEHOLDER
    problem:
      "Wanted a calmer alternative to cluttered weather apps — one good chart instead of a dozen widgets.",
    solution:
      "Server components fetch and cache forecast data; a single animated temperature chart communicates the whole week at a glance.",
    features: [
      "Server-rendered forecast with edge caching",
      "Animated, hand-drawn SVG weather icons",
      "Geolocation with a manual city search fallback",
      "Light and dark themes tuned per condition",
    ],
    lessons: [
      "Caching third-party API responses at the edge meaningfully changed perceived performance",
      "Animating SVG paths directly was lighter than reaching for a Lottie file",
    ],
    improvements: ["Add hourly breakdown view", "Support saved locations"],
  },
  {
    slug: "noteframe",
    title: "Noteframe", // PLACEHOLDER project name
    description: "A distraction-free markdown editor with live preview and local autosave.",
    summary: "Built to learn rich-text editing fundamentals and explore custom Framer Motion transitions.",
    category: "tool",
    status: "in-progress",
    stack: ["React", "TypeScript", "Tailwind CSS", "Motion"],
    year: 2026,
    role: "Solo developer",
    featured: true,
    repoUrl: "https://github.com/your-handle/noteframe", // PLACEHOLDER
    problem:
      "Existing note apps either lock content into a proprietary format or bury markdown behind a toolbar-heavy UI.",
    solution:
      "A two-pane editor: plain markdown on the left, a live-rendered preview on the right, synced scroll, zero lock-in — it's just a .md file.",
    features: [
      "Synced-scroll live preview",
      "Autosave to local storage with versioned history",
      "Exportable, portable markdown files",
      "Focus mode that fades the preview pane",
    ],
    lessons: [
      "Syncing scroll position between two differently-shaped panes is mostly about picking the right anchor, not the math",
    ],
    improvements: ["Add folder organization", "Ship a focus-mode keyboard shortcut"],
  },
  {
    slug: "ikat-ui",
    title: "Ikat UI", // PLACEHOLDER project name
    description: "A small open-source component library exploring patterned, parametric SVG backgrounds.",
    summary:
      "A creative-coding side project generating geometric tile patterns in the browser, inspired by Central Asian textile and tilework motifs.",
    category: "experiment",
    status: "in-progress",
    stack: ["TypeScript", "SVG", "Canvas API"],
    year: 2026,
    role: "Solo developer",
    featured: false,
    repoUrl: "https://github.com/your-handle/ikat-ui", // PLACEHOLDER
    problem:
      "Wanted decorative backgrounds that felt personal rather than another generic gradient mesh.",
    solution:
      "Wrote a small parametric generator for star-and-cross tiling patterns, tunable by stroke width, density and color, exportable as inline SVG.",
    features: [
      "Pure SVG output — no canvas rasterization needed",
      "Adjustable density, scale and stroke weight",
      "Respects prefers-reduced-motion for any animated variants",
    ],
    lessons: [
      "Parametric geometry is a good excuse to actually use trigonometry again",
    ],
    improvements: ["Publish as an installable npm package", "Add a live pattern playground"],
  },
];

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
