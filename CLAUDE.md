# CLAUDE.md - davidhamel.co

> Lean project instructions. Detailed docs in `docs/` and `.claude/rules/`.

## Project Overview

**davidhamel.co** - David Hamel's personal website.

**Development Phase**: Initial setup | **Team**: David Hamel (founder) + Claude Code

## Tech Stack

TBD - to be decided during project setup.

## Key Commands

```bash
# TBD - will be populated once tech stack is chosen
```

## Core Rules

1. **No timeouts** - Never add `setTimeout` or delays. Use proper event handling or state management.
2. **Complete all work** - Test, build, commit, push. Don't leave partial work.
3. **Test with Playwright** - Always verify features work by running through the app in browser.
4. **Configure via Playwright** - Proactively use Playwright browser to configure external services. Don't just document settings - navigate to dashboards and apply them directly.
5. **Keep Playwright browser open** - Never close browser tabs after testing. Leave them open for the user to inspect or for follow-up work. Only close if explicitly requested.
6. **Session wrap-up** - At the end of EVERY session: update all relevant documentation (`.claude/memory/activeContext.md`, any affected technical docs), commit all changes, and push to remote. Never leave uncommitted work.

## Documentation Map

| Topic | File |
|-------|------|
| **Coding Conventions** | `.claude/rules/coding-conventions.md` |
| **Technical Patterns** | `.claude/rules/technical-patterns.md` |

## Modular Rules (`.claude/rules/`)

- `coding-conventions.md` - TypeScript, React, styling patterns
- `technical-patterns.md` - Auth, async params, debugging patterns

## Current Context

**Read `.claude/memory/activeContext.md` at session start** for current focus and recent decisions. Update it at session end.

---

*Last updated: 2026-02-15 | Target: <100 lines | Current: ~45 lines*
