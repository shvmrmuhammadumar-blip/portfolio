import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Project } from "@/types";

const statusCopy: Record<Project["status"], { label: string; tone: "success" | "teal" | "neutral" }> = {
  live: { label: "Live", tone: "success" },
  "in-progress": { label: "In progress", tone: "teal" },
  archived: { label: "Archived", tone: "neutral" },
};

export function ProjectCard({ project }: { project: Project }) {
  const status = statusCopy[project.status];

  return (
    <Card interactive className="group flex h-full flex-col">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-xs text-text-muted">{project.year}</p>
          <h3 className="mt-1 font-heading text-xl text-text">{project.title}</h3>
        </div>
        <Badge tone={status.tone} dot>
          {status.label}
        </Badge>
      </div>

      <p className="mt-3 flex-1 text-sm text-text-secondary">{project.description}</p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <li key={tech}>
            <span className="rounded-md bg-surface-2 px-2 py-1 font-mono text-[11px] text-text-secondary">
              {tech}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-text transition-colors group-hover:text-teal"
        >
          Read case study
          <ArrowUpRight className="size-3.5" aria-hidden />
        </Link>
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="text-text-muted transition-colors hover:text-text"
          >
            <Github className="size-4" aria-hidden />
          </a>
        )}
      </div>
    </Card>
  );
}
