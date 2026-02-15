# davidhamel.co — Personal Brand Website

## Project Overview

Personal website and blog for David Hamel — independent financial planning coach, fintech builder (Alba Wealth), and product leader. Two-track positioning: financial coaching for expats + product & build services (fractional CPO, product strategy, and AI-native app/website development).

**Live site:** davidhamel.co (domain to be registered)
**Related project:** Alba Wealth — alba-wealth.com (separate repo: alba-finance-ai)

---

## Tech Stack

- **Framework:** Astro (content-first, zero-JS-by-default, islands architecture)
- **UI:** Tailwind CSS + shadcn/ui (via React islands where interactivity needed)
- **Content:** MDX for blog posts (Astro Content Collections)
- **Language:** TypeScript
- **Deployment:** Vercel (free Hobby tier)
- **Analytics:** Umami Cloud free tier (GDPR-friendly, no cookies, no cookie banner, API for agent access — 100k events/mo, 3 sites, 6mo retention)
- **Email:** Resend (unified across davidhamel.co + Alba Wealth — transactional, newsletters, nurture sequences)
- **DNS:** Cloudflare

### Why Astro (not Next.js like Alba)

davidhamel.co is a content/marketing site — blog, static pages, photos. Astro ships zero JavaScript by default, achieves near-perfect Lighthouse scores, and has native MDX support. The interactive elements (Calendly embed, newsletter signup, contact form) are handled as React islands. Alba Wealth is a full SaaS app — that stays on Next.js. Different tools for different jobs.

---

## Brand Context

### CRITICAL — Regulatory Language

David does NOT yet hold the §34h GewO license.

**ALWAYS use:** "financial planning coach", "financial coaching", "planning support", "financial education"
**NEVER use:** "financial advisor", "financial advisory", "investment advice", "Anlageberatung"

Service scope is currently limited to financial education, planning support, and coaching — not personalized investment advice on specific financial instruments.

Once the §34h license is obtained, terminology transitions to "independent financial advisor" (Honorar-Finanzanlagenberater).

### Positioning

**For** English-speaking professionals in Germany (€75k–200k earners) who feel lost navigating the German financial system.

**Two tracks:**
1. **Financial Coaching (primary):** Independent, fee-based financial planning for expats. No commissions, no product-binding.
2. **Product & Build Services (secondary):** Fractional CPO, product strategy consulting, AND hands-on app/website development. David combines product leadership experience with AI-native development (Claude Code) to offer full-service product delivery — from strategy through shipped code. Target clients: startups, small businesses, and founders who need a product thinker who can also build. Pricing model: one-time build fee + monthly retainer for maintenance/iteration.

**Brand one-liner:** Independent financial planning coach and fintech builder helping expats in Germany take control of their money.

### Brand Archetypes

- **Primary: The Sage** — Analytical, frameworks-driven, educational, "here's how it actually works"
- **Secondary: The Explorer** — Global perspective, adventure lifestyle, freedom-seeking, unconventional path

Together: "I've seen the world, I've analyzed the systems, and here's what I've learned about money and freedom."

### Voice & Tone

- **Direct:** Say what you mean. No corporate filler. If you don't know something, say so.
- **Analytical:** Use data, frameworks, logic. Show the thinking.
- **Personal:** Write as "I", share experience, admit mistakes. The brand is a person.
- **Accessible:** Complex topics, simple language. No jargon without explanation.

**Do:** Use first person, start with hooks not questions, use specifics over vague claims, share genuine opinions.
**Don't:** Use fear-based messaging, corporate language, talk down to audience, use stock photos.

### Core Values

1. **Independence** — Fee-based, no commissions, no product-binding
2. **Transparency** — Clear about fees, trade-offs, and unknowns
3. **Systems Thinking** — Full-picture financial planning, not isolated products
4. **Freedom by Design** — The plan serves the life, not the other way around
5. **Active Living** — Travel, adventure, health are the reason we plan

### Content Pillars

1. **Expat Money Mastery** — Navigating German finance as an English speaker
2. **Systems & Money** — How the financial system actually works
3. **Building Alba** — Founder transparency, product thinking applied to finance
4. **Freedom by Design** — Finance as a tool for life design
5. **The Practitioner's Edge** — Product strategy, venture building (consulting track)

---

## Visual Identity

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Deep Ocean Teal | #0A6E6E | Primary — headers, CTAs, key UI elements |
| Clean White | #FFFFFF / #FAFAFA | Backgrounds, whitespace |
| Dark Navy | #1A1A2E | Body text, contrast sections (replaces pure black) |
| Warm Coral | #E07A5F | Accent — CTAs, highlights, emphasis (sparingly) |
| Light Seafoam | #B8D8D8 | Card surfaces, subtle backgrounds, section dividers |

**Rationale:** Ocean teal differentiates from the royal-blue-and-gold of most financial sites. Coral adds warmth. Says "trustworthy AND alive."

### Typography (Test During Development)

**Option A (recommended start):** Inter (headings/UI) + Source Serif Pro (blog body)
**Option B:** Plus Jakarta Sans (headings) + Inter (body)
**Option C:** Satoshi (headings) + Literata (blog body)

All free/open-source. Use Google Fonts or self-host for performance.

**Principles:**
- Large bold headings, generous tracking
- Body text 18–20px
- Line height 1.5–1.7 for body
- 3–4 size steps maximum
- No ALL CAPS except small labels/tags

### Layout Principles

- Whitespace-forward — let content breathe
- Typography-driven — type does the heavy lifting
- Photography as accent — David's own photos, never stock
- Card-based content sections
- Simple sticky navigation, no mega-menus
- Mobile-first (majority of expat traffic is mobile)

### Logo

No formal logo for v1. Use "David Hamel" in the primary heading font as the brand mark. Monogram (DH) can be developed later if needed.

---

## Site Architecture

### Pages

```
/ .................. Homepage (2-track hero, selected work, latest posts, newsletter)
/about ............. Origin story, full career narrative, values
/coaching .......... Financial coaching services, 3-step process, Calendly CTA
/services .......... Product & Build Services — sells (fractional CPO, builds, differentiators)
/projects .......... Portfolio grid — proves the positioning
/projects/[slug] ... Individual project pages (case-study-like)
/blog .............. Blog listing (filterable by content pillar)
/blog/[slug] ....... Individual blog posts (MDX)
/adventures ........ Photo gallery — surf, dive, travel (placeholder for v1)
/contact ........... Calendly embed, newsletter signup, direct email
```

### Information Architecture: /services sells, /projects proves

The `/services` page focuses on **what David offers and why to hire him**. The `/projects` page provides the **evidence** — each project has its own page with case-study-like content. Services links to relevant projects as proof points.

The `/about` page tells the **full career story** chronologically — all projects appear here as narrative, including those without dedicated pages (Cormo Energy, Rootlocaly, ABN Amro).

### Key Pages Detail

**Homepage:** Hero with headline + two paths (coaching / product & build services). "Who I am" block with headshot. Selected work highlights (3–4 project cards linking to /projects/*). Latest 2–3 blog posts. Newsletter signup CTA.

**Coaching:** What I offer (scoped to pre-§34h language). Who it's for. 3-step process: Understand → Plan → Implement. Differentiation (fee-only, expat perspective, AI tools). Link to Alba Wealth. CTA: Book free 30-min consultation.

**Services (Product & Build Services):** Service-focused page — what, who, why:
1. **Fractional CPO / Product Strategy** — For startups and scaleups that need senior product leadership without a full-time hire. Strategy, roadmapping, team coaching.
2. **App & Website Builds** — Full-service development using AI-native tooling (Claude Code). Fast delivery, high quality, productized pricing. One-time build fee + optional monthly retainer.
3. **Differentiators** — Product + code in one person, AI-native 3-5x speed, transparent pricing, ongoing relationship, portfolio proof.
Selected project references link to /projects/* pages. CTA: "Let's talk about your project" (Calendly or contact form).

**Projects (Portfolio):** Grid/list overview of all projects. Each project has its own page:

| Project | Type | Period | Page |
|---------|------|--------|------|
| Alba Wealth (Stealth Startup) | Own venture (primary, active) | Jan 2025–present | /projects/alba-wealth |
| Ziggma | Own venture (Co-Founder & COO) | Feb 2023–Nov 2024 | /projects/ziggma |
| DeRisk | Own venture (Co-Founder & CEO) | Apr 2021–Feb 2022 | /projects/derisk |
| Digital Partners | Own venture (first business, Co-Founder & CEO) | Dec 2015–Jun 2022 | /projects/digital-partners |
| Porsche Digital Lab | Contract (via Digital Partners) | May–Aug 2018 | /projects/porsche-digital-lab |
| Buena (Home HT GmbH) | Contract | Jul–Sep 2020 | /projects/buena |
| Carly (Carly Connected Car) | Contract | Feb–Apr 2020 | /projects/carly |
| Impactive Tech | Contract (Venture Consultant) | Jul–Dec 2023 | /projects/impactive |
| Rootlocaly | Own build (side project) | Recent | /projects/rootlocaly |

Projects mentioned in About narrative only (no dedicated page): Cormo Energy (early-stage solar idea), Antler EIR program (Oct–Dec 2021), ABN Amro internship (origin story), ISM eCompany (student job).

**About:** Personal story (expat journey, 15+ countries). Full career narrative connecting all projects chronologically: Digital Partners (2015–2022, with Porsche/Carly/Buena contracts during) → Antler EIR → DeRisk → Ziggma (with Impactive contract during) → Alba Wealth. ABN Amro as brief origin mention. Values and "what I believe" section. CTAs to /coaching or /services.

**Adventures:** Photo grid, minimal text. Categories: Surf, Dive, Travel. Can launch sparse and fill as photos are organized.

---

## Project Structure

```
davidhamel.co/
├── astro.config.mjs
├── CLAUDE.md                          # This file
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
│   │   ├── services.astro             # Product & Build Services (sells)
│   │   ├── adventures.astro
│   │   ├── contact.astro
│   │   ├── projects/
│   │   │   ├── index.astro            # Portfolio grid (proves)
│   │   │   ├── alba-wealth.astro
│   │   │   ├── ziggma.astro
│   │   │   ├── derisk.astro
│   │   │   ├── digital-partners.astro
│   │   │   ├── porsche-digital-lab.astro
│   │   │   ├── buena.astro
│   │   │   ├── carly.astro
│   │   │   ├── impactive.astro
│   │   │   └── rootlocaly.astro
│   │   └── blog/
│   │       ├── index.astro            # Blog listing
│   │       └── [...slug].astro        # Dynamic blog post route
│   ├── content/
│   │   ├── config.ts                  # Astro content collections schema
│   │   └── blog/                      # MDX blog posts
│   │       └── first-post.mdx
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
│   │   ├── headshot/
│   │   └── adventures/
│   └── fonts/                         # Self-hosted fonts (if used)
├── marketing/
│   └── brand-assets/                  # Brand identity as markdown (exported from Notion)
│       ├── written-identity.md
│       ├── visual-identity.md
│       ├── strategic-frameworks.md
│       └── competitive-landscape.md
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── .prettierrc
```

---

## Email Infrastructure (Resend — Unified)

Resend is the single email layer for both davidhamel.co and alba-wealth.com.

### Audiences (Segments)

| Audience | Source | Content |
|----------|--------|---------|
| Newsletter Subscribers | davidhamel.co signup form | Blog digests, insights, personal updates |
| Coaching Leads | davidhamel.co Calendly booking | Coaching follow-up sequences |
| Build Clients | davidhamel.co /services inquiries | Project follow-ups, case studies, product updates |
| Alba Users | alba-wealth.com registration | Product updates, feature announcements |

A single contact can belong to multiple audiences. One source of truth across both properties.

### Integration Points

- Newsletter signup form on davidhamel.co → Resend Contacts API → "Newsletter" audience
- Coaching Calendly booking → Resend Contacts API → "Coaching Leads" audience
- Newsletter sending → Resend Broadcast API (triggered by marketing agent or manual)
- Blog RSS → marketing agent drafts newsletter → Resend Broadcast API

### No Separate Newsletter Tool

Newsletter archive lives on the blog (posts tagged "newsletter"). No Buttondown, no Substack, no Kit. Resend handles all sending. The marketing agent handles content creation and scheduling.

---

## Development Conventions

### From Alba Wealth (carry over)

- TypeScript strict mode
- ESLint + Prettier (copy config from Alba)
- Conventional commits
- pnpm as package manager

### Astro-Specific

- Use `.astro` files for all static pages and components
- Use `.tsx` React components ONLY for interactive islands (forms, embeds)
- Always specify client directives on React islands: `client:load`, `client:visible`, or `client:only="react"`
- Use Astro Content Collections for blog posts (type-safe frontmatter)
- Prefer Astro's built-in `<Image>` component for optimized images

### Key Commands

```bash
pnpm dev          # Local development server
pnpm build        # Production build
pnpm preview      # Preview production build locally
pnpm lint         # ESLint check
pnpm format       # Prettier format
```

---

## Phased Implementation

### Phase 1: Foundation (Week 1–2)
- Create repo, initialize Astro + Tailwind + shadcn
- Set up CLAUDE.md, ESLint, Prettier, TypeScript config
- Set up Vercel deployment (preview URL, no custom domain yet)
- Build BaseLayout (nav, footer, meta tags)
- Export Notion brand assets to marketing/brand-assets/ markdown
- Implement color palette and typography in Tailwind config

### Phase 2: Website Build (Week 3–4)
- Build homepage (2-track hero, selected work highlights, blog cards, newsletter CTA)
- Build About page (origin story, full career narrative, values)
- Build Coaching page (services, process, Calendly embed)
- Build Services page (Product & Build Services — sells: tiers + differentiators, links to /projects)
- Build Projects portfolio grid (/projects) and 9 individual project pages:
  - Own ventures: Alba Wealth, Ziggma, DeRisk, Digital Partners
  - Consulting: Porsche Digital Lab, Buena, Carly, Impactive
  - Own build: Rootlocaly
- Build Blog infrastructure (listing, MDX post template, content collections)
- Build Contact page (Calendly, newsletter signup via Resend)
- Build Adventures page (photo grid, placeholder-ready)
- Set up Umami Cloud analytics
- Write and publish first 2–3 blog posts

### Phase 3: Marketing Agent v1 (Week 5–6)
- Create Claude Code shortcuts (.claude/shortcuts/)
- Build content drafter subagent with brand voice skill
- Build release announcer subagent (monitors Alba repo)
- Configure Notion MCP (Content Pipeline read/write)
- Implement approval workflow (Notion status-based)
- Test full cycle: draft → review → approve → publish

### Phase 4: Integration & Automation (Week 7–8)
- Connect Umami API for analytics
- Build analytics reporter subagent
- Build social scheduler subagent (LinkedIn/X APIs)
- Resend Broadcast API integration for newsletter automation
- Feedback loop: analytics → content optimization

### Phase 5: Iteration (Ongoing)
- Newsletter growth and optimization
- Instagram tertiary channel
- SEO monitoring
- Cross-site content syndication (blog ↔ Alba blog)
- Optional: Claude Agent SDK for fully autonomous execution

---

## Reference: Career Timeline

**Important:** Everything except ABN Amro (internship) and ISM eCompany (student part-time) was self-employed, freelance, or consulting — never full-time employment.

**Note:** Digital Partners ran from Dec 2015 – Jun 2022 as David's primary company. Porsche, Buena, and Carly were short contract engagements executed **during** the Digital Partners period. Dates overlap intentionally.

| Period | Role | Company | Type | Key Detail |
|--------|------|---------|------|------------|
| Feb 2013 – Sep 2013 | Business Development DACH | ISM eCompany, Rotterdam | Part-time (student) | Dutch e-commerce, DACH market entry |
| Aug 2011 – Aug 2014 | BSc International Business | RSM, Erasmus University | Education | GPA 8.0/10, exchange at SMU Singapore |
| Aug 2014 – Dec 2015 | MSc Finance & Investments | RSM (Cum Laude) + EDHEC exchange | Education | GPA 8.4/10, exchange at EDHEC Nice |
| Mar 2015 – Jun 2015 | Commodities Trade Finance | ABN AMRO Bank, Amsterdam | Internship | Financial & political risk analysis |
| Dec 2015 – Jun 2022 | Co-Founder & CEO | DigitalPartners.io, Berlin + SF | Own venture (first business) | Digital strategy consulting, corporate venturing, IT/IoT. 27 projects for Viessmann, Porsche, Körber. Team of 7 engineers + 3 consulting partners |
| May 2018 – Aug 2018 | Product Owner | Porsche Digital Lab, Berlin | Contract (via Digital Partners) | Blockchain app for classic car owners. Scaled prototype to full versions, secured €6.5M funding. Hired/managed team of 12 |
| Feb 2020 – Apr 2020 | Product Manager | Carly Connected Car (Carly Solutions GmbH), Munich | Contract | Car diagnostics e-commerce. Built web funnel improving purchase conversion by 25%. Created agile product org, Analytics & BI setup |
| Jul 2020 – Sep 2020 | Senior Product Manager | Buena GmbH (Home HT GmbH), Berlin | Contract | Online marketplace for tenants/landlords. Automated contract generation from <5% to 100%. Agile processes for team of 9 |
| Oct 2021 – Dec 2021 | Entrepreneur in Residence | Antler, Berlin | Program | Ideating, learning and building with founder community |
| Apr 2021 – Feb 2022 | Co-Founder & CEO | DeRisk (DeRisk.earth), London/Berlin | Own venture | SaaS for asset managers — portfolio relationships & systemic risks. Piloted with NBIM, Barings, CCLA (>€1.5tn AUM) |
| Feb 2023 – Dec 2024 | Co-Founder & COO | Ziggma (Ziggma.com), Berlin | Own venture | Portfolio management SaaS for retail investors. 35k users, €10k MRR, €1.5bn linked assets |
| Jul 2023 – Dec 2023 | Venture Consultant | Impactive Tech (Impactive.pro), London | Contract | Strategy & business development for asset management stewardship/shareholder engagement SaaS |
| ~2022 | Founder | Cormo Energy | Own venture (inactive) | Solar energy B2B platform for commercial customers, German market |
| Jan 2025 – present | Co-Founder | Stealth Startup / Alba Wealth, Berlin + London | Own venture (primary, active) | AI agents for financial services. Financial planning coaching + AI-powered planning tool |
| Recent | Builder | Rootlocaly | Own build (side project) | Vibe coding learning project |

**Safe to reference in marketing:** ABN Amro, Porsche/Porsche Digital Lab, Buena/HomeHT.
**Context-only (not endorsements):** NBIM, Barings, CCLA were DeRisk prototyping clients.

---

## Reference: SEO Keywords

**Primary:** financial planning expat Germany, independent financial advisor Germany, fee-based financial advisor expats, financial planning for expats

**Long-tail:** how to invest as expat Germany, ETF portfolio expats Germany, tax optimization freelancer Germany, retirement planning expat Germany, commission-free financial advice Germany

---

## Reference: Inspiration Sites

- **Vilinskyy** — Editorial feel, strong typography, personal projects
- **Urban Finance** — Clean sections, lifestyle imagery, trust-building
- **Financemate** — Tech-forward, interactive elements, energy
- **Wealth Genesis** — Premium feel without being stuffy
