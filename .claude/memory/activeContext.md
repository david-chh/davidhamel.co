# Active Context

> Current development focus. Update at start/end of each session.
>
> For stable reference info, see: `CLAUDE.md` (overview), `docs/` (planning docs).

---

## Current State

**Status**: Phase 1 Foundation v0 COMPLETE. Astro project scaffolded, bilingual homepage + blog foundation built, build passing.
**Focus**: Visual review in browser, then remaining Phase 1 pages (About, Coaching, Services, Projects, Adventures, Contact, Legal).

## Completed Work (Session 5 — 2026-02-16)

### Phase 1 Foundation Build

- Scaffolded full Astro project with all dependencies
- Created design system (Tailwind v4 `@theme` tokens, Fontsource fonts)
- Replaced Paraglide.js with Astro-native i18n (SSG-compatible)
- Built all layout and shared components (Nav, Footer, MobileNav, etc.)
- Built EN + DE homepages with all 5 sections
- Built blog foundation (Content Collections, placeholder post, listing + dynamic routes for EN + DE)
- Created tooling configs (.prettierrc, .env.example, favicon)
- **Build passes** — 6 pages, headshot optimized to WebP

### Technical Corrections from Plan

- Paraglide.js replaced with custom i18n (doesn't support SSG)
- Tailwind v4 uses `@theme` in CSS, not `tailwind.config.mjs`
- Astro 5 content collections use `src/content.config.ts` with `glob()` loader
- Fontsource for self-hosted fonts (no Google Fonts CDN)

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

## Next Steps

1. Visual review in Playwright browser
2. Build remaining pages: About, Coaching, Services, Projects (grid + 9 individual), Adventures, Contact, Legal
3. ESLint config (skipped in v0 — Prettier done)
4. Set up Vercel deployment
5. Set up Umami analytics
6. Set up Resend newsletter integration (React island)
7. Set up Calendly embed (React island)

---

_Last updated: 2026-02-16 (Session 5 - Phase 1 Foundation Build)_
