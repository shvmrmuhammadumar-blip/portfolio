import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { site } from "@/data/site";

export function ContactCta() {
  return (
    <Section>
      <Container size="narrow">
        <Reveal className="rounded-card border border-line bg-surface p-10 text-center shadow-soft sm:p-14">
          <p className="font-mono text-xs text-teal">{"// "}~/contact</p>
          <h2 className="mt-3 font-heading text-3xl text-text sm:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-text-secondary">
            I&apos;m based in {site.location}, working remotely, and {site.available ? "currently open to new work." : "not taking on new work right now."}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button href="/contact" rightIcon={<ArrowRight className="size-4" />}>
              Get in touch
            </Button>
            <Button href="/about" variant="outline">
              More about me
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
