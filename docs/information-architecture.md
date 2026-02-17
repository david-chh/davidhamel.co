# Information Architecture — davidhamel.co

> Detailed IA spec. Defines every page, section, navigation element, and content relationship.
>
> Last updated: 2026-02-17 (v2 — Three-service split)

---

## Navigation

### Primary Navigation (sticky header)

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  David Hamel      About  Coaching  Services ▾  Projects  Blog  Adventures   │
│  [logo/wordmark]                                             [Book a Call ↗] │
└──────────────────────────────────────────────────────────────────────────────┘
```

| Nav Item    | Links To         | Notes                                                                |
| ----------- | ---------------- | -------------------------------------------------------------------- |
| David Hamel | `/`              | Wordmark in heading font (no logo for v1)                            |
| About       | `/about`         |                                                                      |
| Coaching    | `/coaching`      | Top-level — serves a completely different audience than other services |
| Services    | dropdown         | See below                                                            |
| Projects    | `/projects`      |                                                                      |
| Blog        | `/blog`          |                                                                      |
| Adventures  | `/adventures`    |                                                                      |
| Book a Call | Calendly link    | CTA button (teal bg, white text). Opens Calendly in new tab or modal |

**Services navigation behavior:**

- Coaching is top-level because it serves a fundamentally different audience (expat professionals) from the other two services
- On desktop: hovering "Services" shows a dropdown with two items:
  - Product Leadership → `/product`
  - Build → `/build`
- On mobile: tapping "Services" expands to show both links
- Rationale: Product leadership and build services share some audience overlap (tech/finance businesses). Coaching is completely separate and should be immediately findable without a dropdown.

### Footer Navigation

```
┌──────────────────────────────────────────────────────────────────────┐
│  David Hamel                                                         │
│                                                                      │
│  SERVICES            EXPLORE          CONNECT                        │
│  Financial Coaching   Blog            Email                          │
│  Product Leadership   Projects        LinkedIn                       │
│  Build                Adventures      GitHub                         │
│  Book a Call          About                                          │
│                                                                      │
│  ─────────────────── Newsletter Signup ───────────────────           │
│  [Email input]                              [Subscribe →]            │
│                                                                      │
│  © 2026 David Hamel · Impressum · Datenschutz                       │
└──────────────────────────────────────────────────────────────────────┘
```

**Legal pages (required for Germany):**

- `/impressum` — German legal requirement (Impressum/Imprint)
- `/datenschutz` — Privacy policy (Datenschutzerklärung)
- Footer-only links, no nav entry needed

### Mobile Navigation

- Hamburger menu (top right)
- Opens full-screen overlay or slide-in panel
- Same items as primary nav, plus footer links
- "Book a Call" button always visible in mobile header (not inside hamburger)

---

## Page-by-Page Specification

### 1. Homepage (`/`)

**Purpose:** First impression. Establish who David is, route three distinct audiences, showcase credibility, drive to next action.

**URL:** `/`

```
┌──────────────────────────────────────────────────────────────────┐
│ [NAV]                                                             │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│  HERO SECTION                                                     │
│  ─────────────────────────────────────────────────                │
│  Headline: "Financial planning coach.                             │
│             Product leader. Builder."                             │
│  Throughline subheadline: connects all three services             │
│  with a unifying theme                                            │
│                                                                   │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│  THREE-CARD ROUTING (audience self-selection)                     │
│  ─────────────────────────────────────────────────                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐            │
│  │  Financial   │  │   Product    │  │  App & Web   │            │
│  │  Coaching    │  │  Leadership  │  │    Builds    │            │
│  │             │  │             │  │             │            │
│  │ For expat   │  │ For startups │  │ For SMBs &  │            │
│  │ professionals│  │ & scaleups  │  │ financial   │            │
│  │ in Germany  │  │             │  │ services    │            │
│  │             │  │             │  │ firms       │            │
│  │ [Learn →]   │  │ [Learn →]   │  │ [Learn →]   │            │
│  └──────────────┘  └──────────────┘  └──────────────┘            │
│   → /coaching       → /product        → /build                    │
│                                                                   │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│  WHO I AM (brief intro block)                                     │
│  ─────────────────────────────────────────────────                │
│  [Headshot]  2-3 sentences. Expat story, product background,     │
│              what I do now. Link: "More about me →" → /about      │
│                                                                   │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│  SELECTED WORK                                                    │
│  ─────────────────────────────────────────────────                │
│  3-4 ProjectCards in a grid. Each card shows:                     │
│  - Project name                                                   │
│  - One-line description                                           │
│  - Role tag (Founder / Contract / Side Project)                   │
│  - Key metric or achievement                                      │
│  Links to individual /projects/[slug] pages                       │
│                                                                   │
│  Suggested featured projects:                                     │
│  Alba Wealth (active), Ziggma (metrics), Porsche (brand),        │
│  Digital Partners (scope)                                         │
│                                                                   │
│  "View all projects →" → /projects                                │
│                                                                   │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│  LATEST FROM THE BLOG                                             │
│  ─────────────────────────────────────────────────                │
│  2-3 BlogCards. Each shows:                                       │
│  - Title                                                          │
│  - Pillar tag (color-coded)                                       │
│  - Publication date                                               │
│  - 1-line excerpt                                                 │
│  Links to /blog/[slug]                                            │
│                                                                   │
│  "Read all posts →" → /blog                                       │
│                                                                   │
├───────────────────────────────────────────────────────────────────┤
│                                                                   │
│  NEWSLETTER SIGNUP                                                │
│  ─────────────────────────────────────────────────                │
│  Headline: "Insights on money, building, and living abroad."      │
│  Subtext: No spam. Unsubscribe anytime.                           │
│  [Email input] [Subscribe →]                                      │
│  React island: NewsletterSignup.tsx → Resend Contacts API         │
│                                                                   │
├───────────────────────────────────────────────────────────────────┤
│ [FOOTER]                                                          │
└───────────────────────────────────────────────────────────────────┘
```

**CTAs on this page:**

1. Three-card routing → `/coaching`, `/product`, `/build`
2. Selected work cards → `/projects/[slug]`
3. Blog cards → `/blog/[slug]`
4. Newsletter signup → Resend API
5. "Book a Call" in nav → Calendly

---

### 2. About (`/about`)

**Purpose:** Full personal story. Build trust and connection. Show the career arc that connects all projects.

**URL:** `/about`

```
SECTIONS (top to bottom):
─────────────────────────────

1. HERO / INTRO
   - Headline: "About David" or similar
   - Headshot (large)
   - Opening paragraph from Origin Story (docs/brand-context.md § Origin Story)

2. THE STORY
   - Narrative prose (NOT a résumé or bullet list)
   - Flows chronologically through:
     • Growing up in northwest Germany, leaving to explore
     • Kitesurfing/surfing/travel year (Egypt → Brazil → Argentina → Fiji → Thailand → NZ)
     • Rotterdam School of Management (BSc + MSc, Cum Laude, EDHEC exchange, SMU Singapore)
     • ABN Amro internship (brief mention — financial analysis foundation)
     • Digital Partners — first business, IoT/Industry 4.0, 27 projects,
       built team, clients like Viessmann/Porsche/Körber
       (Porsche Digital Lab, Carly, Buena contracts woven into this narrative)
     • Antler EIR — Berlin founder community
     • DeRisk — institutional risk analytics, NBIM/Barings/CCLA
     • Ziggma — portfolio management, 35k users, co-founder & COO
       (Impactive consulting woven in)
     • The realization: expats can't get good financial advice
     • Alba Wealth — building AI-powered financial planning
     • Rootlocaly — side project, learning vibe coding
   - Each project name links to its /projects/[slug] page where applicable
   - Projects without pages (Cormo Energy, Antler, ISM eCompany) get brief inline mentions

3. WHAT I BELIEVE (values)
   - 5 core values from brand-context.md (Independence, Transparency, Systems Thinking,
     Freedom by Design, Active Living)
   - Short paragraph for each, not just bullet points

4. LANGUAGES & EDUCATION
   - Languages: German, English (professional), French, Spanish (fluent)
   - Education: RSM BSc/MSc (Cum Laude), EDHEC exchange, SMU Singapore exchange

5. CTA SECTION
   - Three paths:
     "Need financial coaching?" → /coaching
     "Need product leadership?" → /product
     "Need something built?" → /build
```

**Content cross-references:**

- Each project mention links to `/projects/[slug]`
- Alba Wealth link also goes to `alba-wealth.com` (external)
- "Financial coaching" links to `/coaching`
- "Product leadership" links to `/product`
- "Build" links to `/build`

---

### 3. Financial Coaching (`/coaching`)

**Purpose:** Sell the coaching service. Educate on the approach. Convert to Calendly booking.

**URL:** `/coaching`

**Target audience:** English-speaking professionals in Germany (€75k-200k)

```
SECTIONS:
─────────────────────────────

1. HERO
   - Headline: "Take control of your finances in Germany."
   - Subheadline: Positioning for expats. Fee-based, no commissions.
   - [Book a Free Consultation →] → Calendly

2. THE PROBLEM
   - German financial system is complex, opaque, in German
   - Most advisors earn commissions (misaligned incentives)
   - Expats face unique challenges (cross-border, temporary residency, etc.)

3. HOW I HELP
   - 3-step process: Understand → Plan → Implement
   - Each step with icon/visual and 2-3 sentence description
   - Scoped to pre-§34h language: coaching, planning support, education

4. WHAT MAKES THIS DIFFERENT
   - Fee-based (no commissions, no product-binding)
   - Expat perspective (lived in 15+ countries)
   - Technology-powered (Alba Wealth tools)
   - Systems thinking (full picture, not isolated products)

5. ALBA WEALTH
   - Brief section introducing the AI planning tool
   - "I'm also building Alba Wealth, an AI-powered financial planning platform."
   - Link to alba-wealth.com (external)
   - Positions David as practitioner + builder, not just advisor

6. WHO IT'S FOR
   - Bullet list of ideal client profiles:
     • Just moved to Germany, overwhelmed by the financial system
     • Earning well but not sure if saving/investing correctly
     • Want to understand German tax, pension, insurance in English
     • Looking for independent advice without commission conflicts

7. CTA / CALENDLY
   - "Ready to take the first step?"
   - Calendly embed (React island: CalendlyEmbed.tsx, client:visible)
   - Alternative: direct email link
```

**Regulatory notes:**

- NEVER use "financial advisor", "advisory", "investment advice"
- ALWAYS use "financial planning coach", "coaching", "planning support"
- No specific product recommendations on this page

---

### 4. Product Leadership (`/product`)

**Purpose:** Sell fractional CPO and product strategy services. Build trust through track record. Convert to Calendly booking.

**URL:** `/product`

**Target audience:** Startups and scaleups needing senior product leadership without a full-time hire. Likely fintech-adjacent or tech companies with existing engineering teams.

```
SECTIONS:
─────────────────────────────

1. HERO
   - Headline: "Senior product leadership, without the full-time hire."
   - Subheadline: Positions 8+ years of product experience, names recognizable companies.
   - [Book a Discovery Call →] → Calendly

2. WHEN THIS WORKS (and when it doesn't)
   - "When to hire me" framing (builds trust by showing selectivity)
   - Also: "When this is NOT the right fit"
   - Pattern borrowed from Harpal Singh — strongest trust-building structural element
     observed in competitive research

3. WHAT YOU GET
   - Structured service description (scannable, not narrative):
     • Product strategy and roadmapping
     • Team coaching and process design
     • Technical architecture guidance
     • Stakeholder alignment and prioritization
     • Go-to-market support
   - Engagement structure: typically 1-2 days/week, 3+ months

4. TRACK RECORD (inline proof)
   - 3-4 ProjectCards linking to relevant /projects/* pages
   - Focus: Porsche (brand), Ziggma (scale), DeRisk (institutional), Buena (results)
   - Specific metrics per project, not generic claims
   - "View full portfolio →" → /projects

5. HOW I WORK
   - 3-step process visualization:
     1. Assess — Understand your product, team, and market position
     2. Align — Define strategy, roadmap, and success metrics
     3. Execute — Embed with your team and ship
   - FAQ-style section for common questions:
     "What does a typical engagement look like?"
     "How is this different from a consultant?"
     "What's the time commitment?"

6. CTA
   - "Let's talk about your product."
   - Calendly embed or link to /contact
   - Secondary: newsletter for prospects not ready to talk
```

---

### 5. Build Services (`/build`)

**Purpose:** Sell app and website development services. Differentiate from agencies and freelance developers through product thinking + domain expertise. Convert to contact/Calendly.

**URL:** `/build`

**Target audience:** SMBs, financial services firms, and fintech companies that need a web presence, internal tool, or customer-facing app built. They value domain expertise and a thinking partner, not just a pair of hands.

```
SECTIONS:
─────────────────────────────

1. HERO
   - Headline: "I understand your business. And I build the software."
   - Subheadline: Product thinking + AI-native development. One person, end-to-end.
   - [Let's Talk About Your Project →] → /contact

2. HOW I WORK (3-step process)
   - Visual process section — the core differentiator:
     1. Discovery — We define what to build and why (product strategy hat)
     2. Build — I ship working software in weeks, not months (builder hat)
     3. Launch & Evolve — We put it in front of real users and iterate (product leader hat)
   - Key message: "Unlike a developer, I start with the problem.
     Unlike an agency, you work directly with me."

3. WHAT I BUILD
   - Deliverable types (scannable list):
     • Web applications and SaaS platforms
     • Marketing websites and landing pages
     • Internal tools and dashboards
     • AI-powered features and integrations
   - Tech stack: Astro, Next.js, React, Tailwind, TypeScript
   - "Built on production-grade stacks — modern, fast, maintainable."

4. WHY ME — NOT AN AGENCY
   - Differentiators tailored to SMB/financial services buyer:
     • Domain expertise: "I've built fintech products for 8 years.
       I understand financial services, compliance considerations, and user trust."
     • Product + Code: "You get a product strategist who writes the code himself."
     • Speed: "AI-native development — weeks, not months."
     • Transparent pricing: "Fixed build fee. No hourly billing, no scope creep."
     • Ongoing relationship: "Optional monthly retainer for hosting, updates, and new features."
     • Direct access: "You work with me — not a junior developer or a project manager."

5. SELECTED WORK (inline proof)
   - 3-4 ProjectCards linking to /projects/*
   - Focus: Alba Wealth (fintech, current), Rootlocaly (AI-native showcase),
     Digital Partners (scope), one client build
   - "View full portfolio →" → /projects

6. PRICING SIGNAL
   - Not full pricing, but engagement structure:
     "Fixed build fee + optional monthly retainer. Request a quote for your project."
   - Reduces tire-kickers without boxing into specific rates

7. CTA
   - "Let's talk about your project."
   - Calendly embed or link to /contact
   - Secondary: email link
```

---

### 6. Projects — Portfolio Grid (`/projects`)

**Purpose:** Showcase all projects. Prove the "practitioner who builds" positioning. Let visitors browse by interest.

**URL:** `/projects`

```
SECTIONS:
─────────────────────────────

1. HERO
   - Headline: "What I've built."
   - Subheadline: "8+ years of ventures, products, and consulting engagements."

2. FILTER/SORT (optional, can be v2)
   - Categories: All | Own Ventures | Consulting | Builds
   - Or: simple tags, no complex filtering for v1

3. PROJECT GRID
   - All 9 projects as cards (ProjectCard.astro)
   - Each card shows:
     • Project name
     • Company logo or placeholder
     • One-line description
     • Role (Co-Founder & CEO, Product Owner, etc.)
     • Period (e.g., "2023–2024")
     • Type badge: "Venture" / "Contract" / "Side Project"
     • Key metric (if applicable): "35k users", "€6.5M funding", etc.
   - Cards link to /projects/[slug]

   Display order (most impressive/recent first):
   1. Alba Wealth — own venture, current
   2. Ziggma — own venture, strong metrics
   3. Porsche Digital Lab — brand recognition
   4. DeRisk — institutional credibility
   5. Digital Partners — scope & longevity
   6. Buena — recent contract
   7. Carly — conversion results
   8. Impactive — consulting scope
   9. Rootlocaly — side project / build showcase
```

---

### 7. Individual Project Pages (`/projects/[slug]`)

**Purpose:** Case-study-like detail for each project. Demonstrate depth, results, and skills.

**URL pattern:** `/projects/alba-wealth`, `/projects/ziggma`, etc.

**Template structure (same for all 9 pages):**

```
SECTIONS:
─────────────────────────────

1. HEADER
   - Project name (h1)
   - One-line description
   - Metadata row: Role | Period | Type | Location
   - Company logo/screenshot (if available, placeholder if not)

2. OVERVIEW
   - 2-3 paragraphs: what the project is, the problem it solves, David's role

3. KEY ACHIEVEMENTS / METRICS
   - Bullet list or stat cards:
     e.g., "35k users", "€10k MRR", "€6.5M funding secured", "25% conversion increase"

4. WHAT I DID
   - Detailed breakdown of responsibilities and contributions
   - For ventures: strategy, product, engineering, fundraising, operations
   - For contracts: specific deliverables and outcomes

5. TECH & TOOLS (optional, for build-relevant projects)
   - Stack used, methodologies, team structure

6. NAVIGATION
   - "← Back to Projects" → /projects
   - "Next project: [Name] →" (sequential navigation)
   - CTA: "Want to work together?" → Calendly or /contact
```

**Per-project content sources:**

| Project                 | Key Content                                             | Metrics                                                         |
| ----------------------- | ------------------------------------------------------- | --------------------------------------------------------------- |
| **Alba Wealth**         | AI financial planning, coaching platform, founder story | Active, AI-powered                                              |
| **Ziggma**              | Portfolio management SaaS, retail investors             | 35k users, €10k MRR, €1.5bn linked                              |
| **DeRisk**              | Institutional risk analytics, shareholder engagement    | NBIM/Barings/CCLA, >€1.5tn AUM                                  |
| **Digital Partners**    | First business, IoT/Industry 4.0, consulting pivot      | 27 projects, 7 engineers + 3 partners, Viessmann/Porsche/Körber |
| **Porsche Digital Lab** | Blockchain app for classic cars                         | €6.5M funding, team of 12                                       |
| **Buena**               | Proptech marketplace, contract generation               | <5% → 100% automation, team of 9                                |
| **Carly**               | Car diagnostics e-commerce                              | +25% purchase conversion                                        |
| **Impactive**           | Asset management stewardship SaaS                       | Strategy & business development                                 |
| **Rootlocaly**          | Side project, vibe coding                               | Learning showcase, AI-native build                              |

---

### 8. Blog Listing (`/blog`)

**Purpose:** Browse all blog content. Filter by topic/pillar.

**URL:** `/blog`

```
SECTIONS:
─────────────────────────────

1. HERO
   - Headline: "Blog" or "Writing"
   - Subheadline: "Thoughts on money, building, and living abroad."

2. PILLAR FILTER
   - Horizontal pill/tag row:
     All | Expat Money | Systems & Money | Building Alba | Freedom by Design | Practitioner's Edge
   - Clicking a pillar filters the list (can be client-side JS or URL params)
   - Color-coded to match pillar identity

3. POST LIST
   - BlogCards in a list or grid
   - Each card: title, date, pillar tag, excerpt, read time
   - Sorted by date (newest first)
   - Pagination or infinite scroll (v2)

4. NEWSLETTER CTA (bottom)
   - Same component as homepage
```

**Content pillar → audience mapping:**

| Pillar                  | Audience                      | Service page link |
| ----------------------- | ----------------------------- | ----------------- |
| Expat Money Mastery     | Coaching prospects             | `/coaching`       |
| Systems & Money         | Coaching prospects + general   | `/coaching`       |
| Building Alba           | All audiences                  | Bridge            |
| Freedom by Design       | General / personal brand       | Personal          |
| The Practitioner's Edge | Product + build prospects      | `/product`, `/build` |

---

### 9. Blog Post (`/blog/[slug]`)

**Purpose:** Individual article. Deep content. Drive newsletter signups and related reading.

**URL pattern:** `/blog/how-german-pension-works`, etc.

```
SECTIONS:
─────────────────────────────

1. ARTICLE HEADER
   - Title (h1)
   - Metadata: Date · Pillar tag · Read time
   - Author: David Hamel (with small headshot)

2. ARTICLE BODY
   - MDX content (Astro Content Collections)
   - Supports: headings, code blocks, images, callouts, embeds

3. AUTHOR BIO (bottom)
   - Short bio (1-2 sentences)
   - Links to /about and relevant service page

4. NEWSLETTER CTA
   - Inline newsletter signup

5. RELATED POSTS
   - 2-3 posts from same pillar or related tags

6. NAVIGATION
   - "← Previous post" / "Next post →"
```

---

### 10. Adventures (`/adventures`)

**Purpose:** Personal brand building. Show the "Active Living" value. Photography showcase.

**URL:** `/adventures`

```
SECTIONS:
─────────────────────────────

1. HERO
   - Headline: "Adventures"
   - Subheadline: "When I'm not building or coaching, I'm in the ocean."

2. PHOTO GRID
   - Masonry or grid layout
   - Categories (can filter or just section): Surf, Dive, Travel
   - David's own photos only (never stock)
   - Lightbox on click (v2)

3. MINIMAL TEXT
   - Short captions or location tags
   - No long-form content — let photos speak
```

**v1 note:** Can launch with placeholder layout and 5-10 photos. Fill over time.

---

### 11. Contact (`/contact`)

**Purpose:** Catch-all contact point. Calendly booking + direct email + social links.

**URL:** `/contact`

```
SECTIONS:
─────────────────────────────

1. HERO
   - Headline: "Let's talk."
   - Subheadline: "Whether you need financial coaching, product leadership,
     or someone to build your next project."

2. CALENDLY EMBED
   - Full Calendly widget (React island: CalendlyEmbed.tsx, client:visible)
   - "Book a free 30-minute consultation"

3. DIRECT CONTACT
   - Email: david.ch.hamel@gmail.com (or professional domain once set up)
   - LinkedIn: linkedin.com/in/david-hamel-11baa841

4. NEWSLETTER SIGNUP
   - Same component as homepage/footer

5. SOCIAL LINKS
   - LinkedIn (primary)
   - GitHub (david-chh)
   - Others as added
```

---

### 12. Legal Pages

**`/impressum`** — Required German legal page (Impressum)

- David Hamel, address, contact info, VAT number if applicable
- Plain text, no design needed beyond basic layout

**`/datenschutz`** — Privacy policy (Datenschutzerklärung)

- Covers: Umami analytics (no cookies, no personal data), Resend email, Calendly, Vercel hosting
- In German (legal requirement) with optional English translation

---

## Content Relationships Map

```
                            ┌──────────┐
                            │ HOMEPAGE │
                            └────┬─────┘
                                 │
                    ┌────────────┼────────────┐
                    │            │            │
                    ▼            ▼            ▼
              ┌──────────┐ ┌──────────┐ ┌──────────┐
              │  ABOUT   │ │ 3 CARDS  │ │   BLOG   │
              │ (story)  │ │ (routes) │ │ (content)│
              └────┬─────┘ └────┬─────┘ └────┬─────┘
                   │            │            │
                   │     ┌──────┼──────┐     │
                   │     │      │      │     │
                   ▼     ▼      ▼      ▼     ▼
              ┌────────┐┌────────┐┌────────┐┌────────────┐
              │COACHING││PRODUCT ││ BUILD  ││ BLOG POST  │
              │(expats)││(starts)││(SMBs)  ││  [slug]    │
              └───┬────┘└───┬────┘└───┬────┘└────────────┘
                  │         │         │
                  ▼         ▼         ▼
              ┌─────────┐  Calendly
              │PROJECTS │◄─── (proof points from all 3 service pages)
              │ (grid)  │
              └────┬────┘
                   ▼
              ┌─────────┐
              │ PROJECT │
              │ [slug]  │
              └─────────┘

Cross-links:
  • Homepage → Coaching, Product, Build (three-card routing)
  • Homepage → Projects (selected work), Blog (latest posts)
  • About → Projects (inline links in career narrative)
  • About → Coaching, Product, Build (three-path CTA)
  • Product → Projects (proof: Porsche, Ziggma, DeRisk, Buena)
  • Build → Projects (proof: Alba, Rootlocaly, Digital Partners)
  • Coaching → Alba Wealth (external)
  • Blog posts → Related posts, Projects (where relevant)
  • Projects → Next/prev project, Contact
  • Every page → Calendly (via nav CTA), Newsletter (via footer)
```

---

## Shared Components

| Component              | Type         | Used On                           | Notes                                               |
| ---------------------- | ------------ | --------------------------------- | --------------------------------------------------- |
| `Nav.astro`            | Astro        | All pages                         | Sticky header, Services dropdown, mobile hamburger  |
| `Footer.astro`         | Astro        | All pages                         | 3-column links, newsletter signup, legal links      |
| `NewsletterSignup.tsx` | React island | Homepage, Blog, Footer, Contact   | `client:visible` on most, `client:load` on Contact  |
| `CalendlyEmbed.tsx`    | React island | Coaching, Product, Build, Contact | `client:visible`                                    |
| `BlogCard.astro`       | Astro        | Homepage, Blog listing            | Title, date, pillar tag, excerpt                    |
| `ServiceCard.astro`    | Astro        | Homepage                          | Three-card routing: icon, heading, description, CTA |
| `ProjectCard.astro`    | Astro        | Homepage, Projects, Product, Build | Name, description, role, period, type badge, metric |
| `CTABlock.astro`       | Astro        | Multiple pages                    | Reusable call-to-action section                     |
| `SectionWrapper.astro` | Astro        | All pages                         | Consistent max-width, padding, spacing              |
| `PillarTag.astro`      | Astro        | Blog cards, blog posts            | Color-coded content pillar label                    |

---

## URL Structure Summary

```
/                              Homepage
/about                         About / Story
/coaching                      Financial Coaching
/product                       Product Leadership (Fractional CPO)
/build                         Build Services (App & Web Development)
/projects                      Portfolio grid
/projects/alba-wealth          Project: Alba Wealth
/projects/ziggma               Project: Ziggma
/projects/derisk               Project: DeRisk
/projects/digital-partners     Project: Digital Partners
/projects/porsche-digital-lab  Project: Porsche Digital Lab
/projects/buena                Project: Buena
/projects/carly                Project: Carly
/projects/impactive            Project: Impactive
/projects/rootlocaly           Project: Rootlocaly
/blog                          Blog listing
/blog/[slug]                   Individual blog post
/adventures                    Photo gallery
/contact                       Contact / Calendly
/impressum                     Legal: Imprint (German law)
/datenschutz                   Legal: Privacy policy
```

**Total pages at launch:**

- 10 static pages (home, about, coaching, product, build, projects, blog, adventures, contact, impressum)
- 1 privacy page (datenschutz)
- 9 project pages
- N blog posts (start with 2-3)
- **= ~24 pages at launch** (EN) + ~24 DE = ~48 bilingual pages

---

## SEO & Meta

Every page gets:

- Unique `<title>` tag: `Page Name — David Hamel`
- Unique `<meta name="description">` (150-160 chars)
- Open Graph tags: `og:title`, `og:description`, `og:image`, `og:url`
- Twitter card tags
- Canonical URL
- Structured data (JSON-LD) where applicable:
  - Homepage: `Person` schema
  - Blog posts: `Article` schema
  - Coaching: `Service` schema
  - Product Leadership: `Service` schema
  - Build Services: `Service` schema

---

_This document is the source of truth for what goes where. Update it when IA changes are made._
