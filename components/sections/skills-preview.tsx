import Link from "next/link";

import { SkillCard } from "@/components/skill-card";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { skillGroups } from "@/data/skills";

export function SkillsPreview() {
  const preview = skillGroups.slice(0, 3);

  return (
    <Section className="bg-surface-2/40">
      <Container>
        <Reveal>
          <Eyebrow>skills/overview</Eyebrow>
          <h2 className="mt-3 font-heading text-3xl text-text sm:text-4xl">What I work with</h2>
          <p className="mt-3 max-w-xl text-text-secondary">
            Categorized honestly: comfortable, learning, or exploring — no inflated percentages.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {preview.map((group, index) => (
            <Reveal key={group.id} delay={index * 0.08}>
              <SkillCard group={group} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <Link href="/skills" className="font-mono text-sm text-teal hover:underline">
            see the full skill set →
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}
