import { Card } from "@/components/ui/card";
import { skillLevelCopy } from "@/data/skills";
import type { SkillGroup } from "@/types";

const levelDot: Record<string, string> = {
  comfortable: "bg-teal",
  learning: "bg-gold",
  exploring: "bg-text-muted",
};

export function SkillCard({ group }: { group: SkillGroup }) {
  return (
    <Card className="h-full">
      <h3 className="font-heading text-lg text-text">{group.label}</h3>
      <p className="mt-1 text-sm text-text-secondary">{group.description}</p>
      <ul className="mt-5 space-y-2.5">
        {group.skills.map((skill) => (
          <li key={skill.name} className="flex items-center justify-between gap-3">
            <span className="text-sm text-text">{skill.name}</span>
            <span className="flex items-center gap-1.5 font-mono text-[11px] text-text-muted">
              <span className={`size-1.5 rounded-full ${levelDot[skill.level]}`} aria-hidden />
              {skillLevelCopy[skill.level]}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
