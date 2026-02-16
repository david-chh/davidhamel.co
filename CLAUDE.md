# CLAUDE.md - davidhamel.co

> Lean project instructions. Detailed docs in `docs/` and `.claude/rules/`.

## Project Overview

**davidhamel.co** - Personal website and blog for David Hamel — independent financial planning coach, fintech builder (Alba Wealth), and product leader. Two-track positioning: financial coaching for expats + product & build services.

**Development Phase**: Phase 1 (Foundation) | **Team**: David Hamel (founder) + Claude Code

## Tech Stack

Astro (content-first, islands architecture) | TypeScript (strict) | TailwindCSS | shadcn/ui (React islands) | MDX (Astro Content Collections) | Paraglide.js (i18n UI strings) | Vercel | Umami Cloud | Resend | Cloudflare DNS

**Bilingual:** EN (default, no prefix) + DE (`/de/` prefix). All site pages are bilingual. Blog posts are English-only. See `docs/technical-architecture.md` § 3 for i18n details.

## Key Commands

```bash
pnpm dev              # Local dev server
pnpm build            # Production build
pnpm preview          # Preview production build
pnpm lint             # ESLint
pnpm format           # Prettier
```

## Core Rules

1. **No timeouts** - Never add `setTimeout` or delays. Use proper event handling or state management.
2. **shadcn/ui first** - Check `npx shadcn@latest add [component]` before building UI.
3. **Astro for static, React for interactive** - Use `.astro` for pages/components. `.tsx` React ONLY for interactive islands (forms, embeds). Always specify `client:load`, `client:visible`, or `client:only="react"`.
4. **Complete all work** - Test, build, commit, push. Don't leave partial work.
5. **Test with Playwright** - Always verify features work by running through the app in browser.
6. **Configure via Playwright** - Proactively use Playwright browser to configure external services. Don't just document settings - navigate to dashboards and apply them directly.
7. **Keep Playwright browser open** - Never close browser tabs after testing. Leave them open for the user to inspect or for follow-up work. Only close if explicitly requested.
8. **Session wrap-up** - At the end of EVERY session: update `.claude/memory/session-log.md` (continuously during session) and `.claude/memory/activeContext.md` (at session end), commit all changes, and push to remote. Never leave uncommitted work.

## Brand Context (Critical)

**ALWAYS use:** "financial planning coach", "financial coaching", "planning support"
**NEVER use:** "financial advisor", "financial advisory", "investment advice"
David does NOT yet hold the §34h GewO license. See `docs/brand-context.md` for full brand guidelines.

## Documentation Map

| Topic | File |
|-------|------|
| **Brand & Visual Identity** | `docs/brand-context.md` |
| **Marketing Infrastructure** | `docs/marketing-infrastructure.md` |
| **Information Architecture** | `docs/information-architecture.md` |
| **Technical Architecture** | `docs/technical-architecture.md` |
| **Copy Deck (EN + DE)** | `docs/copy-deck.md` |
| **Kickoff Brief** | `docs/kickoff-brief.md` |
| **Coding Conventions** | `.claude/rules/coding-conventions.md` |
| **Technical Patterns** | `.claude/rules/technical-patterns.md` |

## Modular Rules (`.claude/rules/`)

- `coding-conventions.md` - TypeScript, Astro, React islands, styling patterns
- `technical-patterns.md` - Debugging, input validation, security patterns

## Key Decisions

| Decision | Choice |
|----------|--------|
| Framework | Astro (not Next.js — content site, zero JS by default) |
| Analytics | Umami Cloud free tier (GDPR-friendly, no cookies) |
| Email | Resend unified (newsletters + transactional, no separate tool) |
| Hosting | Vercel free Hobby tier |
| Domain/DNS | Cloudflare |
| i18n | Astro built-in routing + Paraglide.js (EN default, DE secondary) |
| Blog content | English-only (pages are bilingual) |

## Current Context

**Read `.claude/memory/activeContext.md` at session start** for current focus and recent decisions. Update it at session end.
**Session log:** `.claude/memory/session-log.md` — chronological record of all work. Update continuously during each session.

---

*Last updated: 2026-02-16 | Target: <100 lines | Current: ~85 lines*
