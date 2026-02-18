# Active Context

> Current development focus. Update at start/end of each session.
>
> For stable reference info, see: `CLAUDE.md` (overview), `docs/` (planning docs).

---

## Current State

**Status**: Phase 1 Foundation COMPLETE. Copy polish and real logos done. Build passing with 42 pages.
**Focus**: Vercel deployment and integrations.

## Completed Work (Session 8 — 2026-02-18)

### Copy Polish
- Removed all em dashes (~60+) across 16+ files — replaced with periods, commas, colons for natural tone
- Rewrote About page opening using PR psychology: "I've lived in over 15 countries, started four companies, and once spent a year kitesurfing..." (EN + DE)
- Homepage "Who I Am": changed "Porsche Digital Lab" → "startups and corporates"
- Projects page: "Eight years of building things that ship" → "Eight years of shipping products" (EN + DE)

### Real Company Logos
Replaced all generated monogram SVGs with real logos:
- **Digital Partners**: recovered from Wayback Machine (digitalpartners.io), 247x35 PNG
- **Impactive**: extracted from impactive.pro (Wix), 444x156 PNG
- **DeRisk**: extracted from LinkedIn company page (derisk-earth), 200x200 PNG
- Updated all references in `src/data/projects.ts`, `src/pages/product.astro`, `src/pages/de/product.astro`
- ProjectCard component updated to show logos with proper sizing

### Hero Photo
- Centered David's face in hero rounded rectangle: `object-[60%_50%]` (horizontal shift, no zoom)

## Previous Work (Sessions 5-7)

- Three-service split: `/coaching`, `/product`, `/build` (Session 7)
- Scaffolded Astro project, design system, i18n, layout/components (Sessions 5-6)
- EN + DE homepages, blog foundation, all sub-pages built
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

## Next Steps

1. ESLint config (skipped in v0 — Prettier done)
2. Set up Vercel deployment
3. Set up Umami analytics
4. Set up Resend newsletter integration (React island)
5. Set up Calendly embed (React island)

---

_Last updated: 2026-02-17 (Session 7 - Three-Service Split)_
