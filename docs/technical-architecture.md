# Technical Architecture — davidhamel.co

> Complete technical spec: stack decisions, i18n strategy, project structure, agent architecture, and build/deploy pipeline.
>
> Last updated: 2026-02-16

---

## 1. Tech Stack (Finalized)

| Layer | Tool | Version / Tier | Rationale |
|-------|------|---------------|-----------|
| **Framework** | Astro | 5.x | Content-first, zero JS by default, islands architecture. 2-3x faster FCP than Next.js. |
| **UI library** | React | 19.x | Islands only — forms, embeds, interactive components |
| **Styling** | Tailwind CSS | 4.x | Utility-first, brand tokens in config |
| **Component library** | shadcn/ui | latest | React islands — use `npx shadcn@latest add [component]` before building custom |
| **Content** | MDX via Astro Content Collections | built-in | Type-safe frontmatter, Zod schemas |
| **Language** | TypeScript | strict mode | No `any`, explicit return types |
| **i18n** | Astro built-in routing + Paraglide.js | see § 3 | Static routes per locale, type-safe UI strings |
| **Package manager** | pnpm | latest | Fast, disk-efficient |
| **Hosting** | Vercel | Free Hobby tier | 100GB bandwidth/mo, familiar from Alba |
| **Analytics** | Umami Cloud | Free tier | GDPR, no cookies, 100k events/mo, 3 sites, 6mo retention |
| **Email** | Resend | unified account | Newsletters (Broadcasts), transactional, nurture sequences |
| **DNS** | Cloudflare | wholesale pricing | DNSSEC, free WHOIS privacy |
| **Testing** | Playwright | E2E | Visual verification through browser automation |
| **Linting** | ESLint + Prettier | with Astro plugins | prettier-plugin-astro, eslint-plugin-astro |

### Stack Rationale: Astro vs Next.js

davidhamel.co is a content/marketing site — blog, static pages, photos. Astro ships zero JavaScript by default and achieves near-perfect Lighthouse scores. Interactive elements (Calendly, newsletter signup, language switcher) are React islands with explicit `client:` directives.

Alba Wealth is a full SaaS app — stays on Next.js. Different tools for different jobs. shadcn/ui works in both via React islands.

---

## 2. Cost Model

| Service | Cost | Notes |
|---------|------|-------|
| Vercel Hobby | €0/mo | 100GB bandwidth |
| Umami Cloud Free | €0/mo | 100k events, 3 sites |
| Resend Free | €0/mo | 3,000 emails/mo, 100 contacts |
| Cloudflare domain | ~€1/mo amortized | Wholesale pricing |
| Claude Code (agents) | €0 incremental | Covered by David's existing Pro/Max subscription |
| **Total** | **~€1/mo** | |

Upgrade paths: Umami self-host on Hetzner (~€4.50/mo) or Umami Pro (€20/mo). Resend Pro when contact list exceeds 100. Agent SDK migration (API pay-per-token) only if fully autonomous scheduling needed.

---

## 3. Internationalization (i18n) Strategy

### The Requirement

The site launches bilingual: English (default) + German. **All site pages** have both EN and DE versions. **Blog posts are English-only** for now (German blog translations can be added later). All copy defined in `docs/copy-deck.md`.

### Architecture: Astro Built-in i18n Routing + Paraglide.js

**Two complementary layers:**

1. **Astro's built-in i18n routing** (since v4.0) — handles URL structure and page routing
2. **Paraglide.js** — handles UI string translations for shared components (nav, footer, buttons)

**Why this combo:**
- Astro's i18n gives us `/en/` and `/de/` prefixes with proper `hreflang` tags, automatic locale detection, and middleware support
- Paraglide.js is type-safe, tree-shaken, and recommended by the Astro community over `astro-i18next` (which has Astro 5 compatibility issues)
- Static content (page sections, project pages) uses duplicate `.astro` files per locale — simple, no runtime overhead
- Dynamic strings (nav labels, button text, footer) use Paraglide functions — type-safe, auto-complete in IDE

### URL Structure

```
/                      → English homepage (default locale)
/de/                   → German homepage
/about                 → English about
/de/ueber-mich         → German about (localized slug)
/coaching              → English coaching
/de/coaching            → German coaching
/services              → English services
/de/services            → German services
/projects              → English projects grid
/de/projekte            → German projects grid
/projects/alba-wealth  → English project page
/de/projekte/alba-wealth → German project page
/blog                  → English blog
/de/blog               → German blog
/blog/[slug]           → English blog post
/de/blog/[slug]        → German blog post
/adventures            → English adventures
/de/abenteuer          → German adventures
/contact               → English contact
/de/kontakt            → German contact
/impressum             → German only (legal requirement)
/datenschutz           → German only (legal requirement)
/privacy-policy        → English privacy (optional, links to /datenschutz)
```

**Default locale:** English (`en`) — no prefix required.
**Secondary locale:** German (`de`) — prefixed with `/de/`.

### Astro i18n Config

```typescript
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: {
      prefixDefaultLocale: false, // /about (not /en/about)
      redirectToDefaultLocale: false,
    },
  },
});
```

### File Structure for i18n

```
src/
├── pages/
│   ├── index.astro                    # EN homepage
│   ├── about.astro                    # EN about
│   ├── coaching.astro                 # EN coaching
│   ├── services.astro                 # EN services
│   ├── contact.astro                  # EN contact
│   ├── adventures.astro               # EN adventures
│   ├── impressum.astro                # DE only (legal)
│   ├── datenschutz.astro              # DE only (legal)
│   ├── privacy-policy.astro           # EN privacy
│   ├── blog/
│   │   ├── index.astro                # EN blog listing
│   │   └── [...slug].astro            # EN blog posts
│   ├── projects/
│   │   ├── index.astro                # EN project grid
│   │   ├── alba-wealth.astro
│   │   ├── ziggma.astro
│   │   ├── derisk.astro
│   │   ├── digital-partners.astro
│   │   ├── porsche-digital-lab.astro
│   │   ├── buena.astro
│   │   ├── carly.astro
│   │   ├── impactive.astro
│   │   └── rootlocaly.astro
│   └── de/
│       ├── index.astro                # DE homepage
│       ├── ueber-mich.astro           # DE about
│       ├── coaching.astro             # DE coaching
│       ├── services.astro             # DE services
│       ├── kontakt.astro              # DE contact
│       ├── abenteuer.astro            # DE adventures
│       ├── blog/
│       │   ├── index.astro            # DE blog listing
│       │   └── [...slug].astro        # DE blog posts
│       └── projekte/
│           ├── index.astro            # DE project grid
│           ├── alba-wealth.astro
│           ├── ziggma.astro
│           ├── derisk.astro
│           ├── digital-partners.astro
│           ├── porsche-digital-lab.astro
│           ├── buena.astro
│           ├── carly.astro
│           ├── impactive.astro
│           └── rootlocaly.astro
```

**Why duplicate page files instead of a single template with i18n data?**
- Astro pages are mostly static content — the copy IS the page
- Duplicate files are simpler to reason about, no abstraction layer
- Each locale can have independent layout tweaks (German text is ~30% longer)
- Copy deck already provides all text in both languages — it's a direct mapping
- No runtime cost — everything is static HTML at build time

**Shared components** (Nav, Footer, CTABlock, etc.) use Paraglide for their translated strings, so they don't need duplication.

### Paraglide.js Setup

```typescript
// src/i18n/messages/en.json
{
  "nav_about": "About",
  "nav_services": "Services",
  "nav_projects": "Projects",
  "nav_blog": "Blog",
  "nav_adventures": "Adventures",
  "nav_book_call": "Book a Call",
  "nav_coaching": "Financial Coaching",
  "nav_product_build": "Product & Build",
  "footer_subscribe": "Subscribe",
  "footer_no_spam": "No spam. Unsubscribe anytime.",
  // ... all shared UI strings
}

// src/i18n/messages/de.json
{
  "nav_about": "Über mich",
  "nav_services": "Leistungen",
  "nav_projects": "Projekte",
  "nav_blog": "Blog",
  "nav_adventures": "Abenteuer",
  "nav_book_call": "Gespräch buchen",
  "nav_coaching": "Finanzcoaching",
  "nav_product_build": "Product & Build",
  "footer_subscribe": "Abonnieren",
  "footer_no_spam": "Kein Spam. Jederzeit abbestellbar.",
  // ...
}
```

### Language Switcher Component

```astro
---
// src/components/LanguageSwitcher.astro
const { currentLocale = 'en' } = Astro.props;

// Map current path to the other locale's equivalent
const pathMap: Record<string, string> = {
  '/': '/de/',
  '/about': '/de/ueber-mich',
  '/coaching': '/de/coaching',
  '/services': '/de/services',
  '/projects': '/de/projekte',
  '/adventures': '/de/abenteuer',
  '/contact': '/de/kontakt',
  '/blog': '/de/blog',
  // Reverse mappings for DE → EN
  '/de/': '/',
  '/de/ueber-mich': '/about',
  '/de/coaching': '/coaching',
  '/de/services': '/services',
  '/de/projekte': '/projects',
  '/de/abenteuer': '/adventures',
  '/de/kontakt': '/contact',
  '/de/blog': '/blog',
};

const currentPath = Astro.url.pathname;
const targetPath = pathMap[currentPath] ?? (currentLocale === 'en' ? `/de${currentPath}` : currentPath.replace('/de/', '/'));
const targetLocale = currentLocale === 'en' ? 'de' : 'en';
---

<a href={targetPath} class="text-sm font-medium hover:text-teal" aria-label={`Switch to ${targetLocale === 'de' ? 'German' : 'English'}`}>
  <span class:list={[currentLocale === 'en' ? 'font-bold' : 'opacity-60']}>EN</span>
  <span class="mx-1">/</span>
  <span class:list={[currentLocale === 'de' ? 'font-bold' : 'opacity-60']}>DE</span>
</a>
```

### Content Collections: Blog Posts (English-only)

Blog posts are English-only for now. The schema includes a `locale` field for future German translations, but all initial posts are EN. The DE blog listing page (`/de/blog`) shows the same English posts.

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    pillar: z.enum([
      'expat-money-mastery',
      'systems-and-money',
      'building-alba',
      'freedom-by-design',
      'practitioners-edge',
    ]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    image: z.string().optional(),
    locale: z.enum(['en', 'de']).default('en'),       // Future-proof for DE posts
    translationOf: z.string().optional(),              // Link to other-locale version
  }),
});

export const collections = { blog };
```

Blog post files (English-only for now):
```
src/content/blog/
├── hello-world.mdx
├── how-german-pension-works.mdx
└── ...
```

When German blog posts are added later, they can be placed in a `de/` subdirectory and linked via `translationOf`.

### SEO: hreflang Tags

Every page includes `hreflang` in `<head>` for proper search engine indexing:

```html
<!-- On /about -->
<link rel="alternate" hreflang="en" href="https://davidhamel.co/about" />
<link rel="alternate" hreflang="de" href="https://davidhamel.co/de/ueber-mich" />
<link rel="alternate" hreflang="x-default" href="https://davidhamel.co/about" />
```

The `BaseLayout.astro` handles this automatically based on the locale prop and the path mapping.

---

## 4. Full Project Structure

```
davidhamel.co/
├── astro.config.mjs                     # Astro config (i18n, integrations, Vercel adapter)
├── CLAUDE.md                            # Root project instructions — source of truth
├── package.json
├── pnpm-lock.yaml
├── tailwind.config.mjs                  # Brand colors, fonts, custom theme
├── tsconfig.json                        # TypeScript strict mode
├── .prettierrc                          # Prettier config with Astro plugin
├── .eslintrc.cjs                        # ESLint config with Astro plugin
├── .env.example                         # Template for required env vars
├── .gitignore
│
├── .claude/
│   ├── settings.json                    # MCP server configs (Notion, GitHub)
│   ├── agents/                          # Custom subagents (see § 6)
│   │   ├── debugger.md
│   │   ├── code-reviewer.md
│   │   ├── git-workflow.md
│   │   ├── doc-updater.md
│   │   ├── test-runner.md
│   │   ├── security-auditor.md
│   │   ├── performance-optimizer.md
│   │   ├── astro-developer.md           # NEW: Astro + i18n specialist
│   │   ├── brand-guardian.md            # NEW: Copy/brand voice enforcement
│   │   ├── i18n-reviewer.md             # NEW: Translation quality & consistency
│   │   └── seo-auditor.md              # NEW: SEO & meta tag auditor
│   ├── shortcuts/                       # Phase 3 — marketing automation shortcuts
│   │   ├── marketing-draft.md           # /marketing-draft
│   │   ├── marketing-publish.md         # /marketing-publish
│   │   └── analytics-report.md          # /analytics-report
│   ├── rules/
│   │   ├── coding-conventions.md        # TypeScript, Astro, React, styling rules
│   │   └── technical-patterns.md        # Debugging, validation, security patterns
│   └── memory/
│       └── activeContext.md             # Current development state
│
├── docs/
│   ├── brand-context.md                 # Brand identity, visual identity, SEO keywords
│   ├── brand-assets-additions.md        # Product & Build Services positioning
│   ├── marketing-infrastructure.md      # Decisions log, email, marketing agents, phasing
│   ├── information-architecture.md      # Page-by-page IA spec
│   ├── copy-deck.md                     # Production-ready EN + DE copy
│   ├── kickoff-brief.md                 # Phase 1 build instructions
│   └── technical-architecture.md        # THIS FILE
│
├── src/
│   ├── layouts/
│   │   ├── BaseLayout.astro             # HTML shell, meta, nav, footer, hreflang, analytics
│   │   └── BlogPostLayout.astro         # Blog post template (author bio, related posts)
│   │
│   ├── pages/
│   │   ├── index.astro                  # EN homepage
│   │   ├── about.astro                  # EN about
│   │   ├── coaching.astro               # EN coaching
│   │   ├── services.astro               # EN services
│   │   ├── contact.astro                # EN contact
│   │   ├── adventures.astro             # EN adventures
│   │   ├── impressum.astro              # DE only — legal
│   │   ├── datenschutz.astro            # DE only — legal
│   │   ├── privacy-policy.astro         # EN privacy
│   │   ├── blog/
│   │   │   ├── index.astro              # EN blog listing
│   │   │   └── [...slug].astro          # EN dynamic blog posts
│   │   ├── projects/
│   │   │   ├── index.astro              # EN portfolio grid
│   │   │   ├── alba-wealth.astro
│   │   │   ├── ziggma.astro
│   │   │   ├── derisk.astro
│   │   │   ├── digital-partners.astro
│   │   │   ├── porsche-digital-lab.astro
│   │   │   ├── buena.astro
│   │   │   ├── carly.astro
│   │   │   ├── impactive.astro
│   │   │   └── rootlocaly.astro
│   │   └── de/
│   │       ├── index.astro              # DE homepage
│   │       ├── ueber-mich.astro         # DE about
│   │       ├── coaching.astro           # DE coaching
│   │       ├── services.astro           # DE services
│   │       ├── kontakt.astro            # DE contact
│   │       ├── abenteuer.astro          # DE adventures
│   │       ├── blog/
│   │       │   ├── index.astro          # DE blog listing
│   │       │   └── [...slug].astro      # DE dynamic blog posts
│   │       └── projekte/
│   │           ├── index.astro          # DE portfolio grid
│   │           ├── alba-wealth.astro
│   │           ├── ziggma.astro
│   │           ├── derisk.astro
│   │           ├── digital-partners.astro
│   │           ├── porsche-digital-lab.astro
│   │           ├── buena.astro
│   │           ├── carly.astro
│   │           ├── impactive.astro
│   │           └── rootlocaly.astro
│   │
│   ├── content/
│   │   ├── config.ts                    # Content Collections schema (blog)
│   │   └── blog/                        # Blog posts (English-only for now, MDX)
│   │
│   ├── components/
│   │   ├── Nav.astro                    # Site navigation (sticky, Services dropdown, mobile hamburger)
│   │   ├── Footer.astro                 # Footer (3 columns, newsletter, legal links)
│   │   ├── LanguageSwitcher.astro       # EN/DE toggle
│   │   ├── MobileNav.astro              # Mobile navigation overlay
│   │   ├── BlogCard.astro               # Blog post preview card
│   │   ├── ProjectCard.astro            # Project preview card
│   │   ├── CTABlock.astro               # Reusable call-to-action section
│   │   ├── SectionWrapper.astro         # Consistent max-width + spacing
│   │   ├── PillarTag.astro              # Color-coded content pillar label
│   │   ├── ServiceDropdown.astro        # Nav dropdown for Services
│   │   ├── NewsletterSignup.tsx         # React island — Resend Contacts API
│   │   └── CalendlyEmbed.tsx            # React island — Calendly widget
│   │
│   ├── i18n/
│   │   ├── utils.ts                     # getLocale(), getLocalizedPath(), locale helpers
│   │   ├── pathMap.ts                   # EN ↔ DE URL mapping
│   │   └── messages/
│   │       ├── en.json                  # English UI strings (Paraglide)
│   │       └── de.json                  # German UI strings (Paraglide)
│   │
│   ├── styles/
│   │   └── global.css                   # Tailwind imports + CSS custom properties
│   │
│   └── lib/
│       └── utils.ts                     # Utility functions (cn(), date formatting, etc.)
│
├── public/
│   ├── images/                          # Static images (headshots, adventure photos)
│   ├── fonts/                           # Self-hosted fonts (if not using CDN)
│   └── favicon.svg                      # Favicon
│
└── marketing/
    └── brand-assets/                    # Brand identity as markdown (exported from Notion)
```

**Total pages at launch:** ~44 (22 EN pages + 22 DE pages). Blog posts are English-only; DE blog listing shows English posts.

---

## 5. Environment Variables

```bash
# .env.example

# Resend (email)
RESEND_API_KEY=re_xxxxxxxxxxxx

# Umami (analytics)
PUBLIC_UMAMI_WEBSITE_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
PUBLIC_UMAMI_HOST=https://cloud.umami.is

# Calendly
PUBLIC_CALENDLY_URL=https://calendly.com/david-hamel/30min

# Site
PUBLIC_SITE_URL=https://davidhamel.co
```

**Rules:**
- `PUBLIC_` prefix = client-visible (Astro convention)
- Everything else = server-only
- Never commit `.env` — only `.env.example`

---

## 6. Sub-Agent Architecture

### Design Philosophy

Agents in this project serve two distinct purposes:

1. **Development agents** — help build and maintain the codebase
2. **Marketing agents** — automate content operations (Phase 3+)

All agents run inside Claude Code using David's Pro/Max subscription. No separate API costs.

### 6.1 Development Agents

#### Existing Agents (7 — ported from Alba, to be updated)

| Agent | Purpose | Status |
|-------|---------|--------|
| `debugger.md` | Root cause analysis for errors | ✅ Keep, update for Astro |
| `code-reviewer.md` | Code quality, security, maintainability | ✅ Keep, update for Astro |
| `git-workflow.md` | Commits, branches, PRs | ✅ Keep as-is |
| `doc-updater.md` | Documentation maintenance | ✅ Keep as-is |
| `test-runner.md` | Run and analyze tests | ✅ Keep, update for Playwright |
| `security-auditor.md` | Vulnerability scanning | ✅ Keep, simplify (no auth/DB) |
| `performance-optimizer.md` | Performance bottlenecks | ✅ Keep, update for Astro |

**Updates needed for existing agents:**

- `code-reviewer.md`: Remove Next.js Image component reference. Add Astro-specific checks (client directives, islands pattern, i18n completeness).
- `performance-optimizer.md`: Replace `next/dynamic` with Astro-native patterns. Replace Next.js Image with `<Image>` from `astro:assets`. Add Core Web Vitals focus (Astro should score near-perfect, flag regressions).
- `security-auditor.md`: Simplify — no database, no auth system. Focus on: env var exposure, XSS in MDX rendering, Resend API key protection, client-side code inspection.
- `test-runner.md`: Focus on Playwright E2E. Add Astro build verification (`pnpm build` must succeed with zero errors).

#### New Development Agents (4)

**`astro-developer.md`** — Astro & i18n specialist

```yaml
Purpose: Expert in Astro patterns, islands architecture, and i18n implementation.
When to use: Building new pages, components, or i18n features.
Key responsibilities:
  - Enforce Astro best practices (static by default, islands for interactivity)
  - Ensure proper client directives (client:load, client:visible, client:only)
  - Verify i18n completeness (every EN page has a DE counterpart)
  - Check hreflang tags and locale routing
  - Validate Content Collections schemas
  - Ensure Astro Image component usage for all images
Tools: Read, Edit, Bash, Grep, Glob
```

**`brand-guardian.md`** — Brand voice & copy enforcement

```yaml
Purpose: Ensures all content matches brand voice and regulatory requirements.
When to use: After writing or modifying any user-facing copy.
Key responsibilities:
  - Enforce brand voice (direct, analytical, personal, accessible)
  - Flag regulatory violations (§34h language rules):
    NEVER: "financial advisor", "advisory", "investment advice"
    ALWAYS: "financial planning coach", "coaching", "planning support"
  - Check tone consistency between EN and DE
  - Verify copy matches the copy deck (docs/copy-deck.md)
  - Ensure calls-to-action follow brand patterns
  - Reference: docs/brand-context.md, docs/brand-assets-additions.md
Tools: Read, Grep, Glob
```

**`i18n-reviewer.md`** — Translation quality & consistency

```yaml
Purpose: Ensures bilingual content is complete, consistent, and culturally appropriate.
When to use: After adding or modifying any page content.
Key responsibilities:
  - Verify every EN page has a DE counterpart (and vice versa)
  - Check that navigation labels match across locales
  - Validate Paraglide message files are in sync (same keys)
  - Check language switcher links resolve correctly
  - Verify German legal pages (Impressum, Datenschutz) are present
  - Flag untranslated strings or placeholders
  - Check German number formatting (1.000 vs 1,000; €1,5 Mrd. vs €1.5bn)
  - Verify hreflang tags are correct
Tools: Read, Grep, Glob
```

**`seo-auditor.md`** — SEO & meta tag auditor

```yaml
Purpose: Ensures SEO best practices across all pages.
When to use: Before deployment or after page structure changes.
Key responsibilities:
  - Verify every page has unique <title> and <meta description>
  - Check Open Graph tags (og:title, og:description, og:image, og:url)
  - Verify Twitter card tags
  - Check canonical URLs
  - Validate hreflang tags for i18n
  - Check JSON-LD structured data (Person, Article, Service schemas)
  - Verify sitemap.xml includes all pages (both locales)
  - Check robots.txt
  - Flag duplicate title/description across pages
  - Verify image alt text is present
Tools: Read, Grep, Glob, Bash
```

### 6.2 Marketing Agents (Phase 3–4)

These are defined in `docs/marketing-infrastructure.md` and will be implemented as Claude Code shortcuts (`.claude/shortcuts/`) and subagents.

| Agent | Shortcut | Phase | Purpose |
|-------|----------|-------|---------|
| **ContentDrafter** | `/marketing-draft` | 3 | Reads Notion Content Pipeline for "Ready to Draft" items. Uses brand voice skill. Outputs blog MDX + social posts. Updates Notion to "In Review". |
| **ReleaseAnnouncer** | (part of `/marketing-draft`) | 3 | Checks Alba GitHub repo for releases/CHANGELOG changes. Generates announcement copy. Queues in Content Pipeline. |
| **AnalyticsReporter** | `/analytics-report` | 4 | Pulls Umami + PostHog APIs. Generates weekly performance summary. Saves to Notion. |
| **SocialScheduler** | `/marketing-publish` | 4 | Takes approved content, formats for LinkedIn/X, publishes via API. Tracks status in Notion. |

**Weekly routine:**
- Monday: `/marketing-draft` (~5 min)
- Tue–Wed: David reviews in Notion
- Thursday: `/marketing-publish` (~3 min)
- Friday: `/analytics-report` (~2 min)

**Approval mechanism:** Agent NEVER publishes without explicit approval. Drafts go to Notion as "In Review" → David changes to "Approved" → `/marketing-publish` reads approved items only.

### 6.3 Agent Dependency Map

```
DEVELOPMENT AGENTS (always available)
├── astro-developer ─── builds pages, components, i18n
├── brand-guardian ──── reviews copy for voice/regulatory compliance
├── i18n-reviewer ──── checks bilingual completeness & consistency
├── seo-auditor ────── validates meta tags, structured data, sitemap
├── code-reviewer ──── general code quality review
├── debugger ────────── root cause analysis
├── test-runner ────── E2E tests (Playwright)
├── performance-optimizer ── Core Web Vitals, bundle analysis
├── security-auditor ── env vars, XSS, API key protection
├── doc-updater ────── keeps docs current
└── git-workflow ───── commits, branches, PRs

MARKETING AGENTS (Phase 3+, triggered via shortcuts)
├── ContentDrafter ─── /marketing-draft
│   └── reads: Notion MCP, Alba GitHub repo
│   └── writes: blog MDX, social copy → Notion
├── ReleaseAnnouncer ── part of /marketing-draft
│   └── reads: Alba GitHub API
│   └── writes: announcement copy → Notion
├── SocialScheduler ── /marketing-publish
│   └── reads: Notion (approved items)
│   └── writes: LinkedIn API, X API
└── AnalyticsReporter ── /analytics-report
    └── reads: Umami API, PostHog API
    └── writes: report → Notion
```

### 6.4 What We Don't Need

Agents from Alba that **don't transfer** to this project:

| Alba Agent | Why Not Needed |
|-----------|----------------|
| `backend-architect` | No backend — Astro is static, Resend/Calendly are external APIs |
| `frontend-developer` | Covered by `astro-developer` (more specific) |
| `prisma-specialist` | No database |
| `typescript-specialist` | Generic TS knowledge in all agents; Astro TS is simpler |
| `ui-designer` | Design system is Tailwind + shadcn/ui; brand-guardian covers voice |
| `ux-researcher` | No user research phase — this is a personal marketing site |

---

## 7. Component Architecture

### Static Components (Astro)

| Component | Props | Used By |
|-----------|-------|---------|
| `Nav.astro` | `locale: 'en' \| 'de'` | BaseLayout |
| `Footer.astro` | `locale: 'en' \| 'de'` | BaseLayout |
| `LanguageSwitcher.astro` | `currentLocale, currentPath` | Nav |
| `MobileNav.astro` | `locale` | Nav |
| `ServiceDropdown.astro` | `locale` | Nav |
| `BlogCard.astro` | `title, date, pillar, excerpt, slug, locale` | Homepage, Blog listing |
| `ProjectCard.astro` | `name, description, role, period, badge, metric, slug, locale` | Homepage, Projects grid, Services |
| `CTABlock.astro` | `heading, text, buttonText, buttonHref, locale` | Multiple pages |
| `SectionWrapper.astro` | `class?` | All pages |
| `PillarTag.astro` | `pillar` | BlogCard, Blog posts |

### Interactive Components (React Islands)

| Component | Client Directive | Props | API Integration |
|-----------|-----------------|-------|-----------------|
| `NewsletterSignup.tsx` | `client:visible` (footer), `client:load` (contact) | `locale` | Resend Contacts API |
| `CalendlyEmbed.tsx` | `client:visible` | `url` | Calendly embed script |

### Layout Components

| Layout | Purpose | Props |
|--------|---------|-------|
| `BaseLayout.astro` | HTML shell, meta tags, OG, hreflang, nav, footer, analytics | `title, description, ogImage?, locale, canonicalUrl?` |
| `BlogPostLayout.astro` | Blog post wrapper (article schema, author bio, related) | `frontmatter, locale` |

---

## 8. Build & Deploy Pipeline

### Local Development

```bash
pnpm dev              # Astro dev server (hot reload)
pnpm build            # Production build (static HTML)
pnpm preview          # Preview production build locally
pnpm lint             # ESLint
pnpm format           # Prettier
```

### Vercel Deployment

- **Connection:** GitHub repo → Vercel auto-deploy on push to `main`
- **Build command:** `pnpm build`
- **Output:** `dist/` (Astro static output)
- **Preview deployments:** Every PR gets a preview URL
- **Environment variables:** Set in Vercel dashboard (RESEND_API_KEY, PUBLIC_* vars)
- **Domain:** `davidhamel.co` via Cloudflare DNS (CNAME to Vercel)

### CI Checks (via Vercel + Astro build)

The `pnpm build` step catches:
- TypeScript errors (strict mode)
- Missing Content Collections schema violations
- Broken imports and missing pages
- Invalid Astro component usage

No separate CI pipeline needed for Phase 1. GitHub Actions can be added later for:
- Lighthouse CI (automated performance testing)
- Link checker (broken link detection)
- i18n completeness check (every EN page has DE counterpart)

---

## 9. Third-Party Integrations

### Resend (Email)

| Integration | Trigger | API |
|-------------|---------|-----|
| Newsletter signup | Form submit (NewsletterSignup.tsx) | `POST /contacts` → "Newsletter" audience |
| Coaching lead capture | Calendly webhook (future) | `POST /contacts` → "Coaching Leads" audience |
| Build client inquiry | Contact form (future) | `POST /contacts` → "Build Clients" audience |
| Newsletter broadcast | `/marketing-publish` shortcut | Resend Broadcast API |

**Implementation:** Server-side API route in Astro (`src/pages/api/subscribe.ts`) → Resend SDK → add to audience.

### Umami Cloud (Analytics)

```html
<!-- In BaseLayout.astro -->
<script
  defer
  src="https://cloud.umami.is/script.js"
  data-website-id={import.meta.env.PUBLIC_UMAMI_WEBSITE_ID}
></script>
```

No cookies. No GDPR banner needed. Tracks pageviews, referrers, devices, events.

### Calendly (Booking)

Embedded via React island (`CalendlyEmbed.tsx`) using Calendly's inline widget script. Used on `/coaching` and `/contact` pages.

---

## 10. Updated Phase Plan

Based on the technical architecture, here's the revised phase plan:

### Phase 1: Foundation (Week 1–2)

- [ ] Initialize Astro project (`pnpm create astro@latest`)
- [ ] Add integrations: React, Tailwind, MDX
- [ ] Set up Tailwind config with brand colors/fonts
- [ ] Configure i18n in `astro.config.mjs` (EN default, DE secondary)
- [ ] Set up Paraglide.js with initial message files
- [ ] Build BaseLayout.astro (meta, nav, footer, hreflang, analytics placeholder)
- [ ] Build Nav.astro with LanguageSwitcher and ServiceDropdown
- [ ] Build Footer.astro with newsletter signup placeholder
- [ ] Build EN homepage (index.astro)
- [ ] Build DE homepage (de/index.astro)
- [ ] Set up Content Collections for blog (with locale support)
- [ ] Create placeholder blog post (EN + DE)
- [ ] Set up ESLint + Prettier with Astro plugins
- [ ] Set up Vercel deployment (preview URL)
- [ ] Update existing agents for Astro (code-reviewer, performance-optimizer, security-auditor, test-runner)
- [ ] Create new agents: astro-developer, brand-guardian, i18n-reviewer, seo-auditor
- [ ] Export Notion brand assets to `marketing/brand-assets/`

### Phase 2: Full Website Build (Week 3–5)

- [ ] Build all EN pages (about, coaching, services, contact, adventures, blog, projects grid)
- [ ] Build all DE pages (mirroring EN)
- [ ] Build 9 EN project pages
- [ ] Build 9 DE project pages
- [ ] Build BlogCard, ProjectCard, CTABlock, PillarTag components
- [ ] Implement NewsletterSignup.tsx (Resend integration)
- [ ] Implement CalendlyEmbed.tsx
- [ ] Build blog listing with pillar filtering
- [ ] Build blog post template (BlogPostLayout.astro)
- [ ] Set up Umami Cloud analytics
- [ ] Write first 2–3 blog posts (English-only)
- [ ] Build legal pages (Impressum, Datenschutz, Privacy Policy)
- [ ] Register domain via Cloudflare
- [ ] Connect domain to Vercel
- [ ] Launch v1

### Phase 3: Marketing Agent v1 (Week 6–7)

- [ ] Create Claude Code shortcuts (`.claude/shortcuts/`)
- [ ] Build ContentDrafter with brand voice enforcement
- [ ] Build ReleaseAnnouncer (monitors Alba GitHub repo)
- [ ] Configure Notion MCP for Content Pipeline
- [ ] Implement approval workflow (Notion status-based)
- [ ] Test full cycle: draft → review → approve → publish

### Phase 4: Integration & Automation (Week 8–9)

- [ ] Connect Umami API for analytics reporting
- [ ] Build AnalyticsReporter shortcut
- [ ] Build SocialScheduler (LinkedIn/X APIs)
- [ ] Resend Broadcast API for newsletter automation
- [ ] Feedback loop: analytics → content optimization

### Phase 5: Iteration (Ongoing)

- [ ] Newsletter growth
- [ ] Instagram as tertiary channel
- [ ] SEO monitoring and optimization
- [ ] Cross-site syndication (blog ↔ Alba blog)
- [ ] Optional: Claude Agent SDK for autonomous scheduling

---

*This document is the technical source of truth. Update when architecture decisions change.*
