"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import type { Project, ProjectCategory } from "@/types";

const categories: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web-app", label: "Web apps" },
  { id: "landing-page", label: "Landing pages" },
  { id: "tool", label: "Tools" },
  { id: "experiment", label: "Experiments" },
];

export function ProjectsExplorer({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ProjectCategory | "all">("all");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesCategory = category === "all" || project.category === category;
      const matchesQuery =
        !normalized ||
        project.title.toLowerCase().includes(normalized) ||
        project.description.toLowerCase().includes(normalized) ||
        project.stack.some((tech) => tech.toLowerCase().includes(normalized));
      return matchesCategory && matchesQuery;
    });
  }, [projects, query, category]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item.id}
              onClick={() => setCategory(item.id)}
              aria-pressed={category === item.id}
              className={cn(
                "rounded-full border px-3.5 py-1.5 font-mono text-xs transition-colors",
                category === item.id
                  ? "border-teal bg-teal-soft text-teal"
                  : "border-line text-text-secondary hover:border-line-strong hover:text-text",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-text-muted" aria-hidden />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects..."
            aria-label="Search projects"
            className="w-full rounded-[10px] border border-line bg-surface py-2 pl-9 pr-3 text-sm text-text outline-none transition-colors focus:border-teal"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-16 rounded-card border border-dashed border-line p-12 text-center">
          <p className="text-text-secondary">No projects match that search.</p>
          <button
            onClick={() => {
              setQuery("");
              setCategory("all");
            }}
            className="mt-3 font-mono text-sm text-teal hover:underline"
          >
            clear filters
          </button>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, index) => (
            <Reveal key={project.slug} delay={Math.min(index, 5) * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
