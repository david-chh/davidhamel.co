# Active Context

> Current development focus. Update at start/end of each session.
>
> For stable reference info, see: `CLAUDE.md` (overview), `docs/` (planning docs).

---

## Current State

**Status**: Phase 1 Foundation COMPLETE. All pages built, build passing with 38 pages.
**Focus**: Visual review in browser, then Vercel deployment and integrations.

## Completed Work (Session 6 — 2026-02-17)

### All Remaining Sub-Pages Built

- **About** (EN + DE) — Hero with B&W portrait, Story narrative with inline images, What I Believe values, Background, CTA
- **Coaching** (EN + DE) — Hero, The Problem (dark), How I Help 3-step, Why Me 2x2 cards, Alba Wealth, Is This For You checklist, Calendly CTA
- **Services** (EN + DE) — Hero, Service Tiers 2-col cards, Why Me differentiators, Selected Work ProjectCards, CTABlock
- **Projects grid** (EN + DE) — 3-col grid of 9 ProjectCards
- **9 Individual project pages** (EN + DE = 18 pages) — Dynamic routes via `[slug].astro` + `getStaticPaths()`, ProjectPageLayout with metrics, tech stack, prev/next nav
- **Adventures** (EN + DE) — Full-bleed hero, sticky category filter (All/Surf/Freedive/Kite/Snow/Travel), CSS columns masonry grid with 17 photos
- **Contact** (EN + DE) — Hero, Calendly placeholder, direct contact (email + LinkedIn), NewsletterCTA
- **Impressum** (German-only) — Legal imprint per § 5 TMG
- **Datenschutz** (German-only) — Privacy policy (Vercel, Umami, Resend, Calendly, rights)

### Infrastructure Created

- `src/data/projects.ts` — Centralized typed data for all 9 projects (EN + DE)
- `src/layouts/ProjectPageLayout.astro` — Shared project detail layout with prev/next nav
- `src/components/NewsletterCTA.astro` — Reusable dark newsletter section
- Updated `src/i18n/pathMap.ts` with all new page paths
- Updated `src/i18n/ui.ts` with all new translation keys
- Updated `src/components/ProjectCard.astro` with period prop
- Copied ~20 photos to `src/assets/images/` (about + adventures)

### Build Results

- **38 pages** built successfully, zero errors
- 87 optimized images generated (WebP, multiple srcset widths)
- Build time: ~2.2s

## Previous Work (Session 5)

- Scaffolded Astro project, design system, i18n, layout/components
- EN + DE homepages, blog foundation
- 6 pages passing build

## Key Decisions

| Decision | Choice |
|----------|--------|
| Framework | Astro 5 (static) |
| i18n | Custom Astro-native (not Paraglide.js) |
| CSS | Tailwind v4 with `@theme` |
| Fonts | Fontsource (self-hosted, GDPR) |
| Content | Astro Content Collections with `glob()` loader |
| Images | sharp + Astro `<Image>` (WebP, srcset) |
| Blog | English-only content, bilingual chrome |
| Projects | Dynamic routes with centralized data file |

## Next Steps

1. Visual review in Playwright browser (spot-check all pages)
2. ESLint config (skipped in v0 — Prettier done)
3. Set up Vercel deployment
4. Set up Umami analytics
5. Set up Resend newsletter integration (React island)
6. Set up Calendly embed (React island)

---

_Last updated: 2026-02-17 (Session 6 - All Sub-Pages Built)_
