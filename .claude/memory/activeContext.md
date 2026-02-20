# Active Context

> Current development focus. Update at start/end of each session.
>
> For stable reference info, see: `CLAUDE.md` (overview), `docs/` (planning docs).

---

## Current State

**Status**: Phase 1 Foundation COMPLETE. All pages built, polished, copy-finalized. Integrations done (Calendly, Resend, Umami, ESLint). Email infrastructure configured.
**Focus**: Live deployment verification and testing.

## Completed Work (Session 11 — 2026-02-19/20)

### Resend Email Infrastructure
- API key created, Newsletter audience created
- Domain verified (davidhamel.co, eu-west-1)
- `.env` created, Vercel env vars set via dashboard
- `NewsletterSignup.tsx` React island with Zod validation
- `src/pages/api/newsletter.ts` API endpoint
- Newsletter signup integrated in Footer (EN + DE)

### Gmail "Send As" Configuration
- `hello@davidhamel.co` and `dh@davidhamel.co` configured with Resend SMTP
- Both auto-confirmed via Cloudflare Email Routing
- Reply setting: "Reply from same address the message was sent to"

### ESLint Setup
- Flat config (`eslint.config.mjs`) for Astro + TypeScript
- eslint v10, typescript-eslint, eslint-plugin-astro

### Commit & Deploy
- `bd67a91` — feat: Add newsletter signup, ESLint setup, and Resend email integration
- Pushed to main (auto-deploys via Vercel)

## Previous Work (Sessions 5-10)

- Build page rewrite, Calendly integration, copy corrections (Session 10)
- About page rewrite, section removals, newsletter to footer only (Session 9)
- Copy polish, real logos, hero photo centering (Session 8)
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
| Email | Resend unified (newsletters + transactional) |
| Gmail | Send as hello@ + dh@ via Resend SMTP |
| Analytics | Umami Cloud (GDPR-friendly) |
| Terminology | "AI-native build" (not "vibe coding") |
| CTA pattern | Button + email, no heading, centered flex-col |

## Next Steps

1. Verify live Vercel deployment works (check newsletter form, Calendly embed)
2. Playwright E2E testing of all pages
3. Test newsletter signup end-to-end (subscribe, check Resend audience)
4. Send test emails from Gmail via hello@ and dh@

---

_Last updated: 2026-02-20 (Session 11 - Resend email infrastructure, Gmail Send As, ESLint, newsletter signup)_
