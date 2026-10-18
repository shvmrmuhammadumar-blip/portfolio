import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { faqs } from "@/data/faq";
import { site, socialLinks } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} about frontend development work.`,
};

const icons = { github: Github, linkedin: Linkedin, telegram: Send, mail: Mail };

export default function ContactPage() {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <Eyebrow>contact/new</Eyebrow>
            <h1 className="mt-3 font-heading text-4xl text-text sm:text-5xl">Let&apos;s talk</h1>
            <p className="mt-4 max-w-md text-text-secondary">
              Whether it&apos;s a project, a question, or feedback on something here — I read every message
              myself.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Badge tone="success" dot>
                {site.available ? "Available for work" : "Not currently available"}
              </Badge>
              <Badge tone="neutral">
                <MapPin className="mr-1 inline size-3" aria-hidden />
                {site.location}
              </Badge>
            </div>

            <ul className="mt-8 space-y-3">
              {socialLinks.map((link) => {
                const Icon = icons[link.icon];
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2.5 text-sm text-text-secondary transition-colors hover:text-text"
                    >
                      <Icon className="size-4" aria-hidden />
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-12">
              <h2 className="font-heading text-xl text-text">Frequently asked</h2>
              <dl className="mt-5 space-y-5">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt className="text-sm font-medium text-text">{faq.question}</dt>
                    <dd className="mt-1 text-sm text-text-secondary">{faq.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-card border border-line bg-surface p-6 shadow-soft sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
