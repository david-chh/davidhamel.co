# Kickoff Brief — First Claude Code Session

## Context

This is a new project: davidhamel.co, a personal brand website for David Hamel.
All strategic planning, brand identity, and architecture decisions have been made.
The full project context is in CLAUDE.md (read it first).

## Session Goal

Initialize the project, set up the foundation, and get a locally running site with the basic layout and one styled page (homepage).

## Step-by-Step

### 1. Create Repository

```bash
gh repo create davidhamel-co --private --clone
cd davidhamel-co
```

### 2. Initialize Astro Project

```bash
pnpm create astro@latest . -- --template minimal --typescript strict --install
```

Then add integrations:

```bash
pnpm astro add react tailwind
pnpm add @astrojs/mdx
pnpm add -D prettier eslint @typescript-eslint/parser
```

### 3. Set Up Tailwind Config

Apply the brand color palette from CLAUDE.md:

```js
// tailwind.config.mjs
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#0A6E6E',
          light: '#B8D8D8',
        },
        navy: '#1A1A2E',
        coral: '#E07A5F',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Source Serif Pro', 'Georgia', 'serif'],
      },
    },
  },
};
```

### 4. Copy CLAUDE.md Into Repo Root

The CLAUDE.md file provided alongside this brief is the project's source of truth.

### 5. Set Up Base Layout

Create `src/layouts/BaseLayout.astro` with:
- HTML shell with proper meta tags (charset, viewport, description, OG tags)
- Google Fonts link for Inter + Source Serif Pro (or self-host)
- Navigation component (logo text "David Hamel" + page links + CTA button)
- Footer component (social links placeholder, newsletter signup placeholder, copyright)
- Umami Cloud analytics script placeholder (commented out until account created)

### 6. Build Homepage (index.astro)

Structure:
1. **Hero section** — Headline: "Independent financial planning coach and fintech builder." Sub-headline from brand statement. Two CTA buttons: "Financial Coaching →" and "Product & Build Services →"
2. **Brief intro block** — 2–3 sentences + headshot placeholder
3. **Latest blog posts** — 2–3 cards (can use placeholder content initially)
4. **"Currently" section** — What I'm building (Alba Wealth), current focus
5. **Newsletter CTA** — Email signup form (can be non-functional placeholder initially)

Use the brand colors, respect the typography principles (large headings, 18-20px body, generous whitespace).

### 7. Set Up Content Collections

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    pillar: z.enum([
      'expat-money-mastery',
      'systems-and-money',
      'building-alba',
      'freedom-by-design',
      'practitioners-edge',
    ]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

export const collections = { blog };
```

### 8. Create a Placeholder Blog Post

Create `src/content/blog/hello-world.mdx` to test the content pipeline:

```mdx
---
title: "Hello, World"
description: "The first post on davidhamel.co — why I'm starting to write publicly."
publishDate: 2026-02-15
pillar: "building-alba"
tags: ["personal", "introduction"]
---

Placeholder content. This post will be replaced with actual content during Phase 2.
```

### 9. Set Up Prettier & ESLint

Copy configs from Alba Wealth repo where applicable. Ensure Astro plugin support:

```bash
pnpm add -D prettier-plugin-astro eslint-plugin-astro
```

### 10. Verify & Commit

```bash
pnpm dev          # Verify site runs locally
pnpm build        # Verify production build succeeds
git add .
git commit -m "feat: initialize davidhamel.co with Astro, Tailwind, and base layout"
git push origin main
```

### 11. Deploy to Vercel

```bash
pnpm add -D vercel
# Or connect via Vercel dashboard → Import Git Repository
```

## What NOT To Do in This Session

- Don't set up the marketing agent or shortcuts (Phase 3)
- Don't create empty placeholder directories for future features
- Don't build all pages — just the homepage + base layout
- Don't integrate Resend yet (Phase 2)
- Don't set up Umami yet (need account first)
- Don't worry about the domain (will be configured later)

## Design Reference

When building the homepage, reference these principles from the Visual Identity:
- **Whitespace-forward** — generous spacing, editorial feel
- **Typography-driven** — type does the heavy lifting
- **Mobile-first** — majority of traffic will be mobile
- **Ocean teal as anchor color** — use for headers, CTAs
- **Coral sparingly** — secondary CTAs, highlights only
- **Dark navy for text** — not pure black
- **No stock imagery** — use placeholder boxes where photos will go

The site should feel like Vilinskyy meets Urban Finance: clean, personal, editorial, slightly techy.
