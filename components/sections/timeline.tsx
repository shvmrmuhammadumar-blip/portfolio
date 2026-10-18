import { Flag, FolderGit2, Milestone } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import type { TimelineEntry } from "@/types";

const kindIcon: Record<TimelineEntry["kind"], typeof Milestone> = {
  milestone: Milestone,
  project: FolderGit2,
  goal: Flag,
};

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="relative space-y-8 border-l border-line pl-8 sm:pl-10">
      {entries.map((entry, index) => {
        const Icon = kindIcon[entry.kind];
        return (
          <Reveal as="li" key={entry.id} delay={index * 0.05} className="relative">
            <span className="absolute -left-[2.55rem] flex size-8 items-center justify-center rounded-full border border-line bg-surface text-text-secondary sm:-left-[3.05rem]">
              <Icon className="size-4" aria-hidden />
            </span>
            <p className="font-mono text-xs text-text-muted">{entry.date}</p>
            <h3 className="mt-1 font-heading text-lg text-text">{entry.title}</h3>
            <p className="mt-1.5 max-w-xl text-sm text-text-secondary">{entry.description}</p>
          </Reveal>
        );
      })}
    </ol>
  );
}
