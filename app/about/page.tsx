import type { Metadata } from "next";

import { PortraitPlaceholder } from "@/components/portrait-placeholder";
import { Timeline } from "@/components/sections/timeline";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { site } from "@/data/site";
import { timeline } from "@/data/timeline";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}, a self-taught frontend developer based in ${site.location}.`,
};

const values = [
  {
    title: "Ship to learn",
    description: "A finished, deployed project teaches more than a finished tutorial ever does.",
  },
  {
    title: "Honest about the gaps",
    description: "Comfortable, learning, or exploring — I'd rather say it plainly than overstate it.",
  },
  {
    title: "Craft over speed",
    description: "Happy to slow down on details — spacing, focus states, loading states — that most people skip.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section className="pb-12">
        <Container>
          <div className="grid gap-10 sm:grid-cols-[1fr_220px] sm:items-start">
            <Reveal>
              <Eyebrow>about/me</Eyebrow>
              <h1 className="mt-3 font-heading text-4xl text-text sm:text-5xl">
                Hi, I&apos;m {site.name.split(" ")[0]}.
              </h1>
              <div className="mt-5 space-y-4 text-text-secondary">
                <p>
                  I&apos;m a self-taught frontend developer based in {site.location}. I got into programming
                  through curiosity about how the websites I used every day were actually built, and that
                  curiosity turned into a habit of building real, working things rather than just reading
                  about them.
                </p>
                <p>
                  Most of my time goes into JavaScript, React and increasingly TypeScript and Next.js. I
                  care about interfaces that feel fast and considered — not flashy for its own sake, but
                  deliberate about hierarchy, motion and the small details that make something pleasant to
                  use.
                </p>
                <p>
                  I&apos;m also interested in AI-assisted development and creative coding — using code to
                  generate visuals, not just layouts — which shows up in a few of the projects on this
                  site.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1} className="hidden sm:block">
              <PortraitPlaceholder />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-line bg-surface-2/40">
        <Container>
          <Reveal>
            <Eyebrow>about/values</Eyebrow>
            <h2 className="mt-3 font-heading text-3xl text-text sm:text-4xl">How I work</h2>
          </Reveal>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.08}>
                <h3 className="font-heading text-lg text-text">{value.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{value.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-line">
        <Container size="narrow">
          <Reveal>
            <Eyebrow>about/timeline</Eyebrow>
            <h2 className="mt-3 font-heading text-3xl text-text sm:text-4xl">Learning journey</h2>
            <p className="mt-3 text-text-secondary">
              A real, ongoing timeline — including the goals I haven&apos;t hit yet.
            </p>
          </Reveal>
          <div className="mt-10">
            <Timeline entries={timeline} />
          </div>
        </Container>
      </Section>
    </>
  );
}
