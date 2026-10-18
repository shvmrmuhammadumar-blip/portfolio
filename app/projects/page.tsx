import type { Metadata } from "next";

import { ProjectsExplorer } from "@/components/projects-explorer";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies of projects I've built — the problem, the approach, and what I'd improve.",
};

export default function ProjectsPage() {
  return (
    <Section>
      <Container>
        <Reveal>
          <Eyebrow>projects/all</Eyebrow>
          <h1 className="mt-3 font-heading text-4xl text-text sm:text-5xl">Projects</h1>
          <p className="mt-4 max-w-xl text-text-secondary">
            Each one started as a question I wanted to answer with code. Open a case study for the problem,
            the approach, and what I&apos;d do differently next time.
          </p>
        </Reveal>

        <div className="mt-10">
          <ProjectsExplorer projects={projects} />
        </div>
      </Container>
    </Section>
  );
}
