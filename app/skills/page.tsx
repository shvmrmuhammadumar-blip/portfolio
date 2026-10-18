import type { Metadata } from "next";

import { SkillCard } from "@/components/skill-card";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills",
  description: "An honest breakdown of what I'm comfortable with, learning, and exploring.",
};

export default function SkillsPage() {
  return (
    <Section>
      <Container>
        <Reveal>
          <Eyebrow>skills/all</Eyebrow>
          <h1 className="mt-3 font-heading text-4xl text-text sm:text-5xl">Skills</h1>
          <p className="mt-4 max-w-xl text-text-secondary">
            No invented percentages or years of experience — just an honest read on where each technology
            sits for me right now.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={Math.min(index, 4) * 0.06}>
              <SkillCard group={group} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
