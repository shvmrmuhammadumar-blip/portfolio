# Portfolio

A personal developer portfolio built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, and Motion (Framer Motion).

## Before you deploy — replace the placeholders

All personal content lives in one place: **`data/site.ts`**. Update your name, email, location and social links there. Project case studies live in **`data/projects.ts`** — replace the four placeholder projects with your real ones (same field shape, so nothing else needs to change). Skills live in **`data/skills.ts`**, the learning timeline in **`data/timeline.ts`**.

Every placeholder is marked with a `// PLACEHOLDER` comment so they're easy to find:

```bash
grep -rn "PLACEHOLDER" data/
```

A resume link is referenced at `/resume.pdf` in the hero — drop your résumé into `public/resume.pdf` once you have one, or remove that button in `components/sections/hero.tsx`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint     # eslint
```

## Stack

- **Next.js 16** — App Router, async route params, Turbopack
- **React 19** / **TypeScript** (strict mode)
- **Tailwind CSS v4** — CSS-first config in `app/globals.css` (no `tailwind.config.js`)
- **Motion** (formerly Framer Motion) — entrance, hover and page-level animation
- **next-themes** — dark/light mode, dark by default
- **react-hook-form** + **zod** — typed, validated contact form
- **lucide-react** — icon set

## Project structure

```
app/                  routes (App Router)
components/
  ui/                 base primitives (Button, Card, Badge, Section, Container, Reveal...)
  layout/             Navbar, Footer, ScrollProgress, CommandPalette
  sections/           page-section components (Hero, FeaturedProjects, Timeline...)
  patterns/           the decorative SVG geometric pattern
  providers/          ThemeProvider, CommandPaletteProvider
data/                 all editable content — projects, skills, nav, site config, FAQ
hooks/                useScrollProgress, useMediaQuery, useMousePosition
lib/                  cn() helper, shared motion variants, next/font setup
types/                shared TypeScript types for the content above
```

## Design notes

- **Dark mode is the default.** Toggle in the navbar; preference persists via `next-themes`.
- **Design tokens** (`app/globals.css`) use Tailwind v4's `@theme` directive — colors, fonts and radii are CSS variables, swapped wholesale under `.dark`, rather than scattered `dark:` utilities.
- **⌘K / Ctrl+K** opens a command palette to jump to any page or project.
- Motion respects `prefers-reduced-motion` throughout (see `components/ui/reveal.tsx`).

## Wiring up the contact form

The form posts to `app/api/contact/route.ts`. By default it just logs the submission server-side. Set `CONTACT_FORM_ENDPOINT` in `.env.local` to forward submissions to an email service (Resend, Formspree, etc.) — copy `.env.example` to get started:

```bash
cp .env.example .env.local
```

## Deployment

Works out of the box on Vercel, Netlify, or Cloudflare Pages. Set `NEXT_PUBLIC_SITE_URL` to your real domain so metadata, the sitemap and Open Graph tags resolve correctly.

## What's intentionally out of scope (v1)

This is a strong, real starting point — not literally every line item from a "build the entire internet" brief. Not included yet, and straightforward to add later: a blog, a certificates page, a testimonials carousel, and a custom animated cursor. The architecture (typed content in `data/`, composable section components) is built so any of these slot in cleanly.
