"use client";

import { ArrowDown, ArrowRight, Download, Github, Linkedin, Mail, Send } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useRef } from "react";

import { GirihPattern } from "@/components/patterns/girih-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { staggerChildren } from "@/lib/animations";
import { site, socialLinks } from "@/data/site";

const icons = { github: Github, linkedin: Linkedin, telegram: Send, mail: Mail };

const headlineWords = ["I", "build", "interfaces", "that", "feel", "considered."];

const stats = [
  { label: "years writing code", value: "2+" },
  { label: "projects shipped", value: "4" },
  { label: "main language", value: "TS/JS" },
];

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const mouse = useMousePosition(heroRef);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div ref={heroRef} className="relative overflow-hidden border-b border-line">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <GirihPattern size={88} strokeWidth={1} />
      </div>
      <div
        className="pointer-events-none absolute -right-32 -top-32 size-[480px] rounded-full bg-teal/10 blur-3xl"
        style={
          prefersReducedMotion
            ? undefined
            : { transform: `translate(${mouse.x * 24}px, ${mouse.y * 24}px)` }
        }
        aria-hidden
      />

      <Container className="relative py-24 sm:py-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren(0.08)}
          className="max-w-3xl"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}>
            <p className="font-mono text-sm text-teal">
              <span className="text-text-muted">{"// "}</span>
              {site.role.toLowerCase()}
            </p>
          </motion.div>

          <h1 className="mt-5 font-heading text-4xl font-medium leading-[1.1] tracking-tight text-text sm:text-5xl md:text-6xl">
            {headlineWords.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                className="mr-3 inline-block"
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
            className="mt-6 max-w-xl text-base text-text-secondary sm:text-lg"
          >
            Self-taught, based in {site.location}. I learn by shipping real, working projects — currently
            deepening into React, Next.js and TypeScript.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button href="/projects" rightIcon={<ArrowRight className="size-4" />}>
              View projects
            </Button>
            <Button href="/contact" variant="secondary">
              Contact me
            </Button>
            <Button href="/resume.pdf" variant="ghost" leftIcon={<Download className="size-4" />} external>
              Resume
            </Button>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Badge tone="success" dot>
              {site.available ? "Available for work" : "Not available right now"}
            </Badge>
            <Badge tone="teal">Currently learning: Next.js & TypeScript</Badge>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
            className="mt-10 flex items-center gap-5"
          >
            {socialLinks.map((link) => {
              const Icon = icons[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-text-muted transition-colors hover:text-text"
                >
                  <Icon className="size-5" aria-hidden />
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.dl
          initial="hidden"
          animate="visible"
          variants={staggerChildren(0.1)}
          transition={{ delayChildren: 0.4 }}
          className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-line pt-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
            >
              <dt className="font-mono text-2xl text-text sm:text-3xl">{stat.value}</dt>
              <dd className="mt-1 text-xs text-text-muted sm:text-sm">{stat.label}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </Container>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block">
        <motion.div
          animate={prefersReducedMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="text-text-muted"
        >
          <ArrowDown className="size-4" aria-hidden />
        </motion.div>
      </div>
    </div>
  );
}
