import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { getProjectBySlug, projects } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 2);

  return (
    <>
      <Section className="pb-10">
        <Container size="narrow">
          <Reveal>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 font-mono text-sm text-text-secondary hover:text-text"
            >
              <ArrowLeft className="size-3.5" aria-hidden />
              all projects
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Badge tone="teal">{project.category.replace("-", " ")}</Badge>
              <Badge tone="neutral">{project.year}</Badge>
              <Badge tone="neutral">{project.role}</Badge>
            </div>

            <h1 className="mt-4 font-heading text-4xl text-text sm:text-5xl">{project.title}</h1>
            <p className="mt-4 text-lg text-text-secondary">{project.summary}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.demoUrl && (
                <Button href={project.demoUrl} rightIcon={<ArrowUpRight className="size-4" />} external>
                  Live demo
                </Button>
              )}
              {project.repoUrl && (
                <Button href={project.repoUrl} variant="secondary" leftIcon={<Github className="size-4" />} external>
                  View source
                </Button>
              )}
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="border-t border-line pt-12">
        <Container size="narrow">
          <div className="grid gap-12">
            <Reveal>
              <h2 className="font-heading text-2xl text-text">The problem</h2>
              <p className="mt-3 text-text-secondary">{project.problem}</p>
            </Reveal>

            <Reveal>
              <h2 className="font-heading text-2xl text-text">The approach</h2>
              <p className="mt-3 text-text-secondary">{project.solution}</p>
            </Reveal>

            <Reveal>
              <h2 className="font-heading text-2xl text-text">Key features</h2>
              <ul className="mt-3 space-y-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-2.5 text-text-secondary">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal" aria-hidden />
                    {feature}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="font-heading text-2xl text-text">Tech stack</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li key={tech} className="rounded-md bg-surface-2 px-2.5 py-1 font-mono text-xs text-text-secondary">
                    {tech}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="font-heading text-2xl text-text">Lessons learned</h2>
              <ul className="mt-3 space-y-2">
                {project.lessons.map((lesson) => (
                  <li key={lesson} className="flex gap-2.5 text-text-secondary">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                    {lesson}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="font-heading text-2xl text-text">What&apos;s next</h2>
              <ul className="mt-3 space-y-2">
                {project.improvements.map((improvement) => (
                  <li key={improvement} className="flex gap-2.5 text-text-secondary">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-text-muted" aria-hidden />
                    {improvement}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {related.length > 0 && (
        <Section className="border-t border-line">
          <Container>
            <Reveal>
              <h2 className="font-heading text-2xl text-text">More projects</h2>
            </Reveal>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {related.map((item, index) => (
                <Reveal key={item.slug} delay={index * 0.08}>
                  <ProjectCard project={item} />
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
