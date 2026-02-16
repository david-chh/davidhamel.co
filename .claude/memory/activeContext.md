# Active Context

> Current development focus. Update at start/end of each session.
>
> For stable reference info, see: `CLAUDE.md` (overview), `docs/` (planning docs).

---

## Current State

**Status**: Project initialized. Planning, IA, copy, and technical architecture complete. Ready for Phase 1 build.
**Focus**: Follow `docs/kickoff-brief.md` to scaffold Astro project. Then build homepage (EN + DE) using `docs/copy-deck.md` and `docs/technical-architecture.md`.

## Completed Work (2026-02-15 - Session 1)

### Project Setup
- Initialized git repository at `/Users/davidhamel/Development/Claude Code/davidhamel.co`
- Created GitHub repository: https://github.com/david-chh/davidhamel.co
- Installed GitHub CLI (`gh`) and authenticated as `david-chh`
- Set up `.claude/` directory structure with rules, agents, and memory
- Ported generalizable best practices from Alba Finance AI project

### Planning & Documentation Consolidation
- Imported planning docs from Claude Chat session into `docs/`:
  - `docs/brand-context.md` — Full brand identity, site architecture, visual identity, SEO keywords
  - `docs/marketing-infrastructure.md` — Decisions log, tech stack, email infrastructure, marketing agent architecture, phased implementation
  - `docs/kickoff-brief.md` — Step-by-step first coding session instructions
  - `docs/brand-assets-additions.md` — Product & Build Services positioning, updated brand one-liners
- Updated root `CLAUDE.md` with Astro tech stack, brand context, key decisions
- Updated `.claude/rules/coding-conventions.md` for Astro (was Next.js)
- Updated `.claude/rules/technical-patterns.md` for Astro patterns (removed Next.js-specific)
- Synced Notion pages with latest planning decisions:
  - Written Identity: fixed 3 language issues, added Product & Build Services positioning
  - Marketing Infrastructure: full rewrite (Astro, Umami, Resend unified, resolved all open questions)

## Completed Work (2026-02-15 - Session 2)

### Information Architecture
- Reviewed all projects from career history with David
- Corrected employment types: everything except ABN Amro was self-employed/freelance/consulting
- Established `/services` sells + `/projects` proves architecture
- Added `/projects` section with 9 individual project pages:
  - **Own ventures:** Alba Wealth, Ziggma, DeRisk, Digital Partners
  - **Consulting:** Porsche Digital Lab, Buena, Carly, Impactive
  - **Own build:** Rootlocaly
- Projects in About narrative only (no page): Cormo Energy, Antler EIR, ABN Amro, ISM eCompany
- Updated all docs: brand-context.md (IA, project structure, career timeline, phases), coding-conventions.md (file organization), kickoff-brief.md (Phase 2 scope note)

### Career Timeline Corrections (from CV + LinkedIn)
- Cross-referenced David's CV (Nov 2025) and LinkedIn profile against project docs
- Major corrections to dates, roles, and stats (see session 2 summary for details)

### Copy Deck (Bilingual EN + DE)
- Created `docs/copy-deck.md` (1,506 lines) with complete production-ready copy for every page
- All navigation labels, meta tags, page sections, CTAs, and project pages in EN + DE
- Photo shot list: 13 minimum images for launch

## Completed Work (2026-02-16 - Session 3)

### Technical Architecture & Agent Design
- Created `docs/technical-architecture.md` — comprehensive technical spec covering:
  - Finalized tech stack with rationale
  - Cost model (~€1/mo total)
  - **i18n strategy**: Astro built-in routing (EN default, DE with `/de/` prefix) + Paraglide.js for UI strings
  - Decision: **site pages bilingual, blog posts English-only**
  - Full project structure with i18n file layout (~44 pages at launch)
  - Environment variables spec
  - Component architecture (static Astro + React islands)
  - Build & deploy pipeline (Vercel auto-deploy on push)
  - Third-party integrations (Resend, Umami, Calendly)
  - Updated phase plan aligned with new architecture

### Sub-Agent Architecture (11 development + 4 marketing)
- Updated 4 existing agents for Astro (removed Next.js references):
  - `code-reviewer.md` — added Astro checks, i18n checks, brand/regulatory checks
  - `performance-optimizer.md` — Astro-specific patterns, Core Web Vitals focus
  - `security-auditor.md` — simplified for static site (no DB/auth), focus on env vars and API keys
  - `test-runner.md` — build verification + Playwright E2E, i18n verification
- Created 4 new project-specific agents:
  - `astro-developer.md` — Astro patterns, islands, i18n, Content Collections
  - `brand-guardian.md` — brand voice, §34h regulatory compliance, copy deck consistency
  - `i18n-reviewer.md` — translation completeness, German formatting, hreflang validation
  - `seo-auditor.md` — meta tags, OG tags, structured data (JSON-LD), sitemap
- 3 existing agents kept as-is: `debugger.md`, `git-workflow.md`, `doc-updater.md`
- Marketing agents (Phase 3): ContentDrafter, ReleaseAnnouncer, AnalyticsReporter, SocialScheduler — defined in architecture, built later

## Key Decisions

| Decision | Choice |
|----------|--------|
| Framework | Astro (not Next.js) |
| Analytics | Umami Cloud free tier |
| Email | Resend unified |
| Hosting | Vercel free Hobby tier |
| DNS | Cloudflare |
| i18n | Astro built-in routing + Paraglide.js |
| Default locale | English (no URL prefix) |
| Secondary locale | German (`/de/` prefix) |
| Blog content | English-only (pages are bilingual) |
| IA: Services vs Projects | /services sells (tiers + differentiators), /projects proves (portfolio) |
| Project pages | 9 pages: Alba, Ziggma, DeRisk, Digital Partners, Porsche, Buena, Carly, Impactive, Rootlocaly |

## Next Steps (Phase 1: Foundation)

1. Initialize Astro + Tailwind + shadcn project (`docs/kickoff-brief.md` steps 2-3)
2. Configure i18n in `astro.config.mjs`
3. Set up Paraglide.js with message files
4. Set up Tailwind config with brand colors
5. Build BaseLayout (nav with language switcher, footer, meta tags, hreflang)
6. Build EN homepage (using `docs/copy-deck.md`)
7. Build DE homepage
8. Set up Content Collections for blog
9. Set up Vercel deployment
10. Set up ESLint + Prettier

---

*Last updated: 2026-02-16 (Session 3 - Technical Architecture & Agent Design)*
