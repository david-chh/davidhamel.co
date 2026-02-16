Living document. Plan for building davidhamel.co, the marketing automation agent, and the integration layer between personal brand, Alba Wealth, and content operations.

**Last updated:** 2026-02-15 — Major revision based on planning session in Claude Chat. Key decisions: Astro (not Next.js), Umami Cloud free tier (not Plausible), Resend unified email, /services page with Product & Build Services offering.

**Cost model:** All marketing automation runs inside Claude Code using custom subagents and shortcuts — fully covered by David's existing Pro or Max subscription. No separate API costs. If fully autonomous scheduled execution is needed later, can migrate specific routines to the Claude Agent SDK (API pay-per-token) as a Phase 5 upgrade.

---

# 1. Decisions Log

All decisions made during the planning session (2026-02-15):

| Decision         | Choice                                                    | Rationale                                                                                                                                                       |
| ---------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework        | **Astro** (not Next.js)                                   | Content/marketing site — zero JS by default, native MDX, 2-3x faster than Next.js for content sites. Alba stays on Next.js. Different tools for different jobs. |
| Analytics        | **Umami Cloud free tier** (not Plausible, not GA)         | €0/mo, GDPR-compliant, no cookies, 100k events/mo, 3 sites, 6mo retention. Upgrade path: self-host on Hetzner ~€4.50/mo or Umami Pro $20/mo when needed.        |
| Email            | **Resend unified**                                        | One system for transactional (Alba), newsletters (personal), coaching leads, and build client follow-ups. Multiple Audiences in one account.                    |
| Hosting          | **Vercel free Hobby tier**                                | Same as Alba, familiar, 100GB bandwidth/mo.                                                                                                                     |
| Domain registrar | **Cloudflare**                                            | Wholesale pricing, free WHOIS privacy, DNSSEC. Domain available — register when localhost looks good.                                                           |
| Newsletter tool  | **None separate** — Resend Broadcasts                     | Newsletter archive lives on the blog. No Buttondown/Substack/Kit. Marketing agent creates broadcasts via Resend API.                                            |
| Page rename      | **/ventures → /services**                                 | Expanded to cover build services alongside consulting                                                                                                           |
| Service name     | **Product & Build Services** (working title, may iterate) | Covers fractional CPO + product strategy + AI-native app/website builds. Folded into /services page alongside portfolio.                                        |

---

# 2. Tool & Platform Strategy

## Claude Code — for code, builds, and agent execution

- Building davidhamel.co (Astro, components, pages, deployment)
- Building and running the marketing automation agent
- Git operations, CI/CD, scripts
- Running scheduled marketing routines (shortcuts/hooks)
- Accessing both repos (Alba Wealth + davidhamel.co)

## Cowork — for strategy, content, and Notion management

- Notion content pipeline management
- Marketing content drafting and brand review (using marketing skills)
- Research, competitive analysis, strategic planning
- Document creation (proposals, reports, presentations)
- Brand asset iteration

## Chat (claude.ai) — for quick interactions

- Brainstorming, one-off questions, strategic conversations
- Reviewing drafts before approval
- Quick feedback loops

---

# 3. Tech Stack: davidhamel.co

**Decision: Astro + Tailwind CSS + shadcn/ui (via React islands)**

| Component       | Choice                   | Notes                                                        |
| --------------- | ------------------------ | ------------------------------------------------------------ |
| Framework       | Astro                    | Content-first, zero-JS-by-default, islands architecture      |
| UI              | Tailwind CSS + shadcn/ui | shadcn available as React islands where interactivity needed |
| Content         | MDX                      | Astro Content Collections, type-safe frontmatter             |
| Language        | TypeScript (strict)      |                                                              |
| Deployment      | Vercel (free Hobby tier) |                                                              |
| Analytics       | Umami Cloud (free tier)  | 100k events/mo, 3 sites, 6mo retention, API access           |
| Email           | Resend (unified)         | Transactional + newsletters + nurture sequences              |
| DNS             | Cloudflare               |                                                              |
| Package manager | pnpm                     |                                                              |

### Why Astro (not Next.js like Alba)

davidhamel.co is a content/marketing site — blog, static pages, photos. Astro ships zero JavaScript by default, achieves near-perfect Lighthouse scores, and has native MDX support. Interactive elements (Calendly embed, newsletter signup, contact form) are React islands. Alba Wealth is a full SaaS app — stays on Next.js.

Benchmarks: Astro 2-3x faster first contentful paint (0.5s vs 1-1.5s). Component reuse argument debunked: shadcn/ui works in Astro via React islands, and custom marketing components won't transfer to SaaS app anyway.

**Caveat:** Claude Code may have less Astro training data vs Next.js. Astro docs are excellent and patterns are simpler.

---

# 4. Site Architecture

## Pages

```
/ .................. Homepage (2-track hero, latest posts, "currently" section)
/about ............. Origin story, career timeline, values
/coaching .......... Financial coaching services, 3-step process, Calendly CTA
/services .......... Product & Build Services — fractional CPO, product strategy, app/website builds, portfolio
/blog .............. Blog listing (filterable by content pillar)
/blog/[slug] ....... Individual blog posts (MDX)
/adventures ........ Photo gallery — surf, dive, travel (placeholder for v1)
/contact ........... Calendly embed, newsletter signup, direct email
```

## Key Pages Detail

**Homepage:** Hero with headline + two paths (coaching / product & build services). "Who I am" block with headshot. Latest 2–3 blog posts. "Currently" section (what I'm building, where I am). Newsletter signup CTA.

**Coaching:** What I offer (scoped to pre-§34h language). Who it's for (English-speaking professionals in Germany, €75k–200k). 3-step process: Understand → Plan → Implement. Differentiation (fee-only, expat perspective, AI tools). Link to Alba Wealth. CTA: Book free 30-min consultation (Calendly).

**Services (Product & Build Services):** Three-tier offering on one page:

1. **Fractional CPO / Product Strategy** — For startups and scaleups needing senior product leadership without a full-time hire. Strategy, roadmapping, team coaching.
2. **App & Website Builds** — Full-service development of small apps, websites, and landing pages using AI-native tooling (Claude Code). Fast delivery, high quality, productized pricing. One-time build fee + optional monthly retainer for maintenance/iteration.
3. **Own Ventures** — Portfolio of David's own products: Alba Wealth (primary), Ziggma ($2B+ linked assets), DeRisk (NBIM/Barings), Digital Partners, Rootlocaly.

Past client work: Porsche Digital Lab, Buena/HomeHT, Impactive, Carly.
CTA: "Let's talk about your project" (Calendly or contact form).

_Note: "Product & Build Services" is a working title. May iterate on naming._

**Adventures:** Photo grid, minimal text. Categories: Surf, Dive, Travel. Launch sparse, fill as photos are organized.

---

# 5. Email Infrastructure (Resend — Unified)

Resend is the single email layer for both davidhamel.co and alba-wealth.com.

## Audiences (Segments)

| Audience               | Source                            | Content                                           |
| ---------------------- | --------------------------------- | ------------------------------------------------- |
| Newsletter Subscribers | davidhamel.co signup form         | Blog digests, insights, personal updates          |
| Coaching Leads         | davidhamel.co Calendly booking    | Coaching follow-up sequences                      |
| Build Clients          | davidhamel.co /services inquiries | Project follow-ups, case studies, product updates |
| Alba Users             | alba-wealth.com registration      | Product updates, feature announcements            |

A single contact can belong to multiple audiences. One source of truth across both properties.

## Integration Points

- Newsletter signup form → Resend Contacts API → "Newsletter" audience
- Coaching Calendly booking → Resend Contacts API → "Coaching Leads" audience
- Services inquiries → Resend Contacts API → "Build Clients" audience
- Newsletter sending → Resend Broadcast API (triggered by marketing agent or manual)
- Blog RSS → marketing agent drafts newsletter → Resend Broadcast API

Newsletter archive lives on the blog (posts tagged "newsletter"). No Buttondown, no Substack, no Kit.

**Action needed:** David to check current Resend plan — confirm Audiences/Broadcasts availability and cost.

---

# 6. Project Structure

```
davidhamel.co/
├── astro.config.mjs
├── CLAUDE.md                          # Root project config — source of truth for Claude Code
├── .claude/
│   └── settings.json                  # MCP server configs (Notion, GitHub)
├── src/
│   ├── layouts/
│   │   ├── BaseLayout.astro           # HTML shell, meta tags, nav, footer
│   │   └── BlogPostLayout.astro       # Blog post template
│   ├── pages/
│   │   ├── index.astro                # Homepage
│   │   ├── about.astro
│   │   ├── coaching.astro
│   │   ├── services.astro             # Product & Build Services
│   │   ├── adventures.astro
│   │   ├── contact.astro
│   │   └── blog/
│   │       ├── index.astro            # Blog listing
│   │       └── [...slug].astro        # Dynamic blog post route
│   ├── content/
│   │   ├── config.ts                  # Astro content collections schema
│   │   └── blog/                      # MDX blog posts
│   ├── components/
│   │   ├── Nav.astro                  # Site navigation
│   │   ├── Footer.astro               # Site footer
│   │   ├── BlogCard.astro             # Blog post preview card
│   │   ├── CTABlock.astro             # Reusable call-to-action
│   │   ├── SectionWrapper.astro       # Consistent section spacing
│   │   ├── NewsletterSignup.tsx       # React island — Resend integration
│   │   └── CalendlyEmbed.tsx          # React island — Calendly widget
│   ├── styles/
│   │   └── global.css                 # Tailwind imports + CSS custom properties
│   └── lib/
│       └── utils.ts                   # Utility functions
├── public/
│   ├── images/
│   └── fonts/
├── marketing/
│   └── brand-assets/                  # Brand identity as markdown (exported from Notion)
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── .prettierrc
```

_Note: .claude/agents/ and .claude/shortcuts/ directories deferred to Phase 3._

---

# 7. Marketing Agent Architecture

## Design: Claude Code subagents + shortcuts (included in Pro/Max subscription)

The marketing agent is NOT a separate service or SDK app. It's a set of custom subagents (in `.claude/agents/`) and shortcuts (in `.claude/shortcuts/`) that run inside Claude Code. David triggers them manually from the terminal.

## Subagent roles

**ContentDrafter** — Reads Content Pipeline (Notion MCP) for items marked "Ready to Draft." Uses brand voice skill + content templates. Outputs: blog post MDX, LinkedIn post text, X post text. Updates Notion status to "In Review."

**ReleaseAnnouncer** — Checks Alba Wealth GitHub repo for new releases, CHANGELOG updates, or key PRs. Generates announcement copy for each channel. Queues in Content Pipeline with "Release" tag.

**AnalyticsReporter** — Pulls weekly data from Umami (davidhamel.co) and PostHog (alba-wealth.com) via APIs. Generates performance summary. Saves report to Notion.

**SocialScheduler** — Takes approved content and formats for each platform. Handles LinkedIn and X posting via API. Tracks publish status in Content Pipeline.

## Weekly routine — David's workflow

**Monday AM:** Run `/marketing-draft`. Agent reads Content Pipeline, checks Alba repo, drafts content, saves to Notion as "In Review." ~5 minutes.

**Tuesday–Wednesday:** Review drafts in Notion, approve/reject/edit.

**Thursday:** Run `/marketing-publish`. Agent reads approved content, formats, publishes. ~3 minutes.

**Friday:** Run `/analytics-report`. Agent pulls weekly data, generates report in Notion. ~2 minutes.

**Total David time: ~10 minutes/week of active interaction.**

## Approval mechanism

- Agent NEVER publishes without David's explicit approval
- Drafts saved to Notion with status "In Review"
- David changes status to "Approved" → runs /marketing-publish → agent publishes
- Rejection: David changes status to "Rejected" with a comment

---

# 8. Phased Implementation

## Phase 1: Foundation (Week 1–2)

- [ ] Create davidhamel.co repo on GitHub
- [ ] Initialize Astro + Tailwind + shadcn project
- [ ] Set up CLAUDE.md, ESLint, Prettier, TypeScript config
- [ ] Set up Vercel deployment (preview URL, no custom domain yet)
- [ ] Build BaseLayout (nav, footer, meta tags)
- [ ] Export Notion brand assets to marketing/brand-assets/ markdown
- [ ] Implement color palette and typography in Tailwind config

## Phase 2: Website Build (Week 3–4)

- [ ] Build homepage (2-track hero, blog cards, currently section)
- [ ] Build About page (origin story, career timeline)
- [ ] Build Coaching page (services, process, Calendly embed)
- [ ] Build Services page (Product & Build Services — three tiers + portfolio)
- [ ] Build Blog infrastructure (listing, MDX post template, content collections)
- [ ] Build Contact page (Calendly, newsletter signup via Resend)
- [ ] Build Adventures page (photo grid, placeholder-ready)
- [ ] Set up Umami Cloud analytics
- [ ] Write and publish first 2–3 blog posts

## Phase 3: Marketing Agent v1 (Week 5–6)

- [ ] Create Claude Code shortcuts (.claude/shortcuts/)
- [ ] Build ContentDrafter subagent with brand voice skill
- [ ] Build ReleaseAnnouncer subagent (monitors Alba repo)
- [ ] Configure Notion MCP (Content Pipeline read/write)
- [ ] Implement approval workflow (Notion status-based)
- [ ] Test full cycle: draft → review → approve → publish

## Phase 4: Integration & Automation (Week 7–8)

- [ ] Connect Umami API for analytics
- [ ] Build AnalyticsReporter subagent
- [ ] Build SocialScheduler subagent (LinkedIn/X APIs)
- [ ] Resend Broadcast API integration for newsletter automation
- [ ] Feedback loop: analytics → content optimization

## Phase 5: Iteration (Ongoing)

- [ ] Newsletter growth and optimization
- [ ] Instagram tertiary channel
- [ ] SEO monitoring
- [ ] Cross-site content syndication (blog ↔ Alba blog)
- [ ] Optional: Claude Agent SDK for fully autonomous scheduled execution

---

# 9. Open Questions (All Resolved)

| Question             | Resolution                                                                                                                                           |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Domain               | davidhamel.co available — register via Cloudflare when localhost looks good                                                                          |
| Hosting              | Vercel free Hobby tier                                                                                                                               |
| Analytics            | Umami Cloud free tier (100k events/mo, 3 sites)                                                                                                      |
| Newsletter provider  | Resend unified — Broadcasts for newsletters, no separate tool                                                                                        |
| Social API access    | Apply for LinkedIn and X developer accounts now (approval takes days/weeks)                                                                          |
| Photo library        | David will organize later. Adventures section designed for incremental population.                                                                   |
| Budget               | ~€0/mo to start (Umami free, Vercel free, domain ~€1/mo amortized)                                                                                   |
| Email infrastructure | Resend unified — one system for everything. David to check current plan for Audiences/Broadcasts.                                                    |
| Build service        | Folded into /services page as "Product & Build Services" (working title). Three tiers: Fractional CPO, App & Website Builds, Own Ventures portfolio. |
