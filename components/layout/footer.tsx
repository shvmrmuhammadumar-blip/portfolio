"use client";

import { ArrowUp, Github, Linkedin, Mail, Send } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { navItems } from "@/data/nav";
import { site, socialLinks } from "@/data/site";

const icons = {
  github: Github,
  linkedin: Linkedin,
  telegram: Send,
  mail: Mail,
};

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-3">
          <Link className="font-mono text-sm text-text" href="/">
            {"<"}
            {site.name.split(" ")[0]}
            {" />"}
          </Link>
          <p className="max-w-xs text-sm text-text-secondary">{site.tagline}</p>
          <div className="flex gap-2 pt-1">
            {socialLinks.map((link) => {
              const Icon = icons[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                  className="inline-flex size-9 items-center justify-center rounded-[10px] border border-line text-text-secondary transition-colors hover:border-line-strong hover:text-text"
                >
                  <Icon className="size-4" aria-hidden />
                </a>
              );
            })}
          </div>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-2 font-mono text-sm text-text-secondary sm:grid-cols-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-text">
                  {item.path}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <div className="border-t border-line bg-surface-2">
        <Container className="flex h-10 items-center justify-between gap-4 font-mono text-xs text-text-muted">
          <div className="flex items-center gap-4 overflow-x-auto">
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="size-1.5 rounded-full bg-success" aria-hidden />
              {site.available ? "available for work" : "not currently available"}
            </span>
            <span className="hidden whitespace-nowrap sm:inline">
              {site.location} · {site.timezone}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden whitespace-nowrap sm:inline">
              built with Next.js · &copy; {new Date().getFullYear()}
            </span>
            <a
              href="#top"
              className="flex items-center gap-1 whitespace-nowrap text-text-secondary hover:text-text"
            >
              back to top <ArrowUp className="size-3" aria-hidden />
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
