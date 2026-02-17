# Active Context

> Current development focus. Update at start/end of each session.
>
> For stable reference info, see: `CLAUDE.md` (overview), `docs/` (planning docs).

---

## Current State

**Status**: Phase 1 Foundation COMPLETE. Three-service split implemented. Build passing with 42 pages.
**Focus**: Vercel deployment and integrations.

## Completed Work (Session 7 — 2026-02-17)

### Three-Service Split

Split the combined `/services` (Product & Build) page into three distinct service pages:

- **`/product`** (EN + DE) — Product Leadership page with 6 sections: Hero, When This Works (two-column positive/negative), What You Get (5 deliverables + engagement callout), Track Record (4 ProjectCards), How I Work + FAQ (3-step process + 3 FAQs), CTA
- **`/build`** (EN + DE) — Build Services page with 7 sections: Hero, How I Work (3-step), What I Build (4 deliverables + tech stack), Why Me — Not an Agency (6 differentiator cards in 2x3 grid), Selected Work (3 ProjectCards), Pricing Signal, CTA
- **Coaching promoted to top-level nav** — No longer nested under Services dropdown

### Navigation Restructured

- **Desktop Nav**: About → Coaching → Services (dropdown: Product Leadership, Build) → Projects → Blog → Adventures
- **Mobile Nav**: Same structure, Coaching as full-size top-level link
- **Footer**: Services column now lists Financial Coaching, Product Leadership, Build

### Homepage Updated

- Hero subheadline changed to throughline: "I help people navigate complex systems..."
- Old two CTA buttons removed
- New three-card routing section (ServiceCard component) between hero and Who I Am
- Who I Am paragraph updated to mention all three services

### Other Page Updates

- **About** (EN + DE): Replaced two-button CTABlock with three-path CTA section using border-l pattern
- **Contact** (EN + DE): Updated subheadline to mention all three services
- **`/services`** (EN + DE): Replaced with 301 redirect to homepage

### New Files

- `src/components/ServiceCard.astro` — Reusable card for homepage routing section
- `src/pages/product.astro` + `src/pages/de/product.astro`
- `src/pages/build.astro` + `src/pages/de/build.astro`

### Build Results

- **42 pages** built successfully, zero errors (up from 38)
- All 301 redirects working
- Language switcher works on new pages

## Previous Work (Sessions 5-6)

- Scaffolded Astro project, design system, i18n, layout/components
- EN + DE homepages, blog foundation, all sub-pages built
- 38 pages passing build

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
