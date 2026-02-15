# Active Context

> Current development focus. Update at start/end of each session.
>
> For stable reference info, see: `CLAUDE.md` (overview), `docs/` (planning docs).

---

## Current State

**Status**: Project initialized. Planning & IA complete. Ready for Phase 1 build.
**Focus**: Follow `docs/kickoff-brief.md` to scaffold Astro project and build homepage.

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
- Projects in About narrative only (no page): Cormo Energy, ABN Amro
- Updated career timeline in brand-context.md with correct types
- Updated all docs: brand-context.md (IA, project structure, career timeline, phases), coding-conventions.md (file organization), kickoff-brief.md (Phase 2 scope note)

## Key Decisions

| Decision | Choice |
|----------|--------|
| Framework | Astro (not Next.js) |
| Analytics | Umami Cloud free tier |
| Email | Resend unified |
| Hosting | Vercel free Hobby tier |
| DNS | Cloudflare |
| IA: Services vs Projects | /services sells (tiers + differentiators), /projects proves (portfolio) |
| Project pages | 9 pages: Alba, Ziggma, DeRisk, Digital Partners, Porsche, Buena, Carly, Impactive, Rootlocaly |

## Next Steps (Phase 1: Foundation)

1. Initialize Astro + Tailwind + shadcn project (`docs/kickoff-brief.md` steps 2-3)
2. Set up Tailwind config with brand colors
3. Build BaseLayout (nav, footer, meta tags)
4. Build homepage
5. Set up content collections for blog
6. Set up Vercel deployment
7. Set up ESLint + Prettier

---

*Last updated: 2026-02-15 (Session 2 - Information Architecture)*
