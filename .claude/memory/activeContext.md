# Active Context

> Current development focus. Update at start/end of each session.
>
> For stable reference info, see: `CLAUDE.md` (overview), `docs/` (planning docs).

---

## Current State

**Status**: Phase 1 Foundation COMPLETE. All pages built, polished, and copy-finalized. Calendly integrated. Build passing with 42 pages.
**Focus**: Vercel deployment and integrations.

## Completed Work (Session 10 — 2026-02-19)

### Build Page Complete Rewrite (EN + DE)
- New hero: "Custom software is now viable for problems that were never worth solving before"
- New section: "Why this matters now" (two-column: cost collapsed + building fast without building right = risk)
- "What I build" streamlined from 4 categories to 2: Custom applications, AI agents and automation
- "How I work" reframed: Scope, Build, Ship & Support (scoping as differentiator)
- "Why me not an agency" (6 cards) replaced with "Why this works" (3 cards)
- Removed: tech stack box, hero CTA button, pricing section, FAQ section

### Product Page Updates (EN + DE)
- FAQ section removed
- CTA simplified to button + email only (centered flex-col, same as build page)

### Calendly Integration
- Contact page (EN + DE): Calendly embed with https://calendly.com/david-chh/call
- Coaching page (EN + DE): Calendly embed integrated

### Sitewide Copy Corrections
- "27 projects" to "30+ projects" everywhere
- "Vibe coded" to "AI-native build" everywhere
- "purchase conversion/funnel" to "sales conversion/funnel" (Carly)

### New Files
- `public/llms.txt` -- machine-readable CV, linked from About page

### CTABlock Component
- `heading` prop now optional
- Slot wrapper: flex-col items-center (centered layout)

## Completed Work (Session 9 — 2026-02-18)

- About page rewrite (personal narrative, bullet-list hero, university logos)
- Removed sections: "How can I help?" (About), "Who I Am" (homepage), Newsletter CTAs (all pages)
- Newsletter signup moved to footer only
- Footer newsletter heading updated ("building AI" added)

## Previous Work (Sessions 5-8)

- Copy polish: em dashes removed, About opening rewritten (Session 8)
- Real company logos recovered (Digital Partners, Impactive, DeRisk) (Session 8)
- Three-service split: `/coaching`, `/product`, `/build` (Session 7)
- All sub-pages built (Session 6)
- Scaffolded Astro project, design system, i18n, layout/components (Session 5)
- 42 pages passing build

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
| Services | Three separate pages: /coaching, /product, /build |
| Calendly | https://calendly.com/david-chh/call |
| Terminology | "AI-native build" (not "vibe coding") |
| CTA pattern | Button + email, no heading, centered flex-col |

## Next Steps

1. Set up Vercel deployment
2. Set up Umami analytics
3. Set up Resend newsletter integration (React island)
4. ESLint config (skipped in v0, Prettier done)

---

_Last updated: 2026-02-19 (Session 10 - Build page rewrite, Calendly integration, copy corrections)_
