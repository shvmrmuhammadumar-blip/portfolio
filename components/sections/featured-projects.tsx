import { ArrowRight } from "lucide-react";

import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedProjects() {
  const projects = getFeaturedProjects().slice(0, 3);

  return (
    <Section id="work">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Eyebrow>projects/featured</Eyebrow>
              <h2 className="mt-3 font-heading text-3xl text-text sm:text-4xl">Selected work</h2>
            </div>
            <Button href="/projects" variant="ghost" rightIcon={<ArrowRight className="size-4" />}>
              All projects
            </Button>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
