# UI Design Specification — davidhamel.co

> Complete visual design system and page-by-page specifications.
> Informed by photo library review, brand docs, inspiration sites (Vilinskyy, Urban Finance), and copy deck.
>
> Last updated: 2026-02-16

---

## 1. Design Philosophy

### Professional First, Personal Second

David's photo library is gallery-quality — cenote freediving, big-wave surfing, van-life travel. It's tempting to build the site around these images. But this is a professional website for a financial planning coach and product leader. People decide whether to trust a financial professional within 7 seconds. What they see first must establish credibility, not showcase hobbies.

The design follows the brand archetype hierarchy: **Sage (analytical, trustworthy) primary, Explorer (adventurous, global) secondary**. Professional pages lead with typography, structure, and clean space. Personal pages (About, Adventures) earn the right to showcase lifestyle photography — but only after professional credibility is established.

The adventure photos are a genuine differentiator — no other financial coaching site has a dedicated Adventures page with professional surf and freedive photography. But they work as a _reward for exploration_, not as the front door.

### Design Principles

1. **Typography-driven** — Type does the heavy lifting on professional pages. Large, confident, clean headings. Photography as accent, not centerpiece.
2. **Credibility-first hierarchy** — Every page establishes professional value before any personal content. Headshot and credentials before travel stories.
3. **Generous negative space** — Let content breathe. The whitespace itself signals confidence and premium positioning.
4. **Warm sophistication** — Not corporate finance (navy + gold). Not surf brand (neon + grunge). The intersection: clean + alive + trustworthy.
5. **Photography earns its place** — Adventure photos are reserved for About (narrative context) and Adventures (dedicated showcase). Professional pages stay clean.
6. **Mobile-first** — Every design decision tested at 375px first. Majority of expat traffic is mobile.

### Page-Level Photo Hierarchy

| Page Type      | Photography Approach                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Homepage**   | Text-driven hero. Professional headshot in "Who I Am." NO adventure photos.                                                    |
| **Coaching**   | Minimal imagery. Text and process diagrams build trust. Headshot at most.                                                      |
| **Services**   | Professional-only. Optional: laptop-in-desert as subtle "work anywhere" signal.                                                |
| **Projects**   | Project screenshots/logos. No personal lifestyle photos.                                                                       |
| **About**      | Lifestyle photos EARN their place here — woven into narrative, after professional story is established. 2-3 inline photos max. |
| **Adventures** | Full photography showcase. The cenote freedive is the hero HERE. This page is the payoff.                                      |
| **Blog**       | Content-focused. No adventure imagery unless topically relevant to the post.                                                   |
| **Contact**    | Clean, professional. Headshot optional.                                                                                        |

### Visual Rhythm

Pages alternate between two visual modes:

- **Light sections** — White/off-white background, dark text, structured layouts. Used for: content, services, process steps, forms.
- **Dark/immersive sections** — Navy or photo-backed, light text. Used for: hero areas, CTAs, testimonial/trust sections, visual breaks.

This alternation creates visual breathing rhythm and prevents monotony on long pages.

---

## 2. Photography System

### 2.1 Photo Assignments

Photos are organized by placement tier:

**Tier 1 — Professional pages (Homepage, Coaching, Services, Projects, Contact):**
Only professional headshots and, sparingly, contextual work-related images.

| Photo                      | File                           | Placement                                               | Notes                                                                                                  |
| -------------------------- | ------------------------------ | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **Professional headshot**  | `Profile/DSC_3819.jpg`         | Homepage "Who I Am", Contact page, Blog author bio      | Primary headshot — clean white shirt, warm smile, direct eye contact. THE trust-building image.        |
| **Editorial B&W portrait** | `Profile/David_1_IMG_1787.jpg` | About page hero (Tier 2), or Services page as secondary | Leather jacket, glasses — creative/builder energy. More personal than headshot.                        |
| **Van life laptop**        | `Travel/DSC_1657.jpg`          | Services page only (optional, small)                    | Shows "work from anywhere" ethos relevant to build services. Use small and contextual, not hero-sized. |

**Tier 2 — Personal/narrative pages (About):**
Lifestyle photos woven into the career narrative, AFTER professional credibility is established in the opening paragraphs.

| Photo                | File                        | Placement                                           | Notes                                                                |
| -------------------- | --------------------------- | --------------------------------------------------- | -------------------------------------------------------------------- |
| **Driving van**      | `Travel/David_Photos-3.jpg` | About page, inline after Digital Partners paragraph | Shows personality. The teal shirt is a happy accident.               |
| **Van + rainbow**    | `Travel/SOA00795.jpg`       | About page, inline near "Freedom by Design" values  | Freedom personified — campervan, coast, double rainbow.              |
| **Surfer on cliff**  | `Landscape/SOA08158.JPG`    | About page, closing image before CTA section        | Golden hour, surfer walking — bridges adventure to professional CTA. |
| **Event networking** | `Profile/Ferrero_219.jpg`   | About page, near business narrative (optional)      | Professional event context. Establishes business-world credibility.  |

**Tier 3 — Adventures page (full showcase):**
This is where the photography shines. All adventure/landscape photos live here.

| Photo                       | File                                      | Category                                                                                           |
| --------------------------- | ----------------------------------------- | -------------------------------------------------------------------------------------------------- |
| **Cenote freedive**         | `Freedive/DSC_1622.jpg`                   | **Adventures hero image.** Signature shot — teal light beam, freediver silhouette. Brand-defining. |
| **Cave freedive**           | `Freedive/1 DSC_8035 taak bi ha dive.jpg` | Freedive                                                                                           |
| **Surfing action (Coxos)**  | `Surf/Matt David-Coxos.jpeg`              | Surf                                                                                               |
| **Big barrel wave**         | `Surf/2023-02-08 03.46.17-2.jpg`          | Surf                                                                                               |
| **Massive wave wall**       | `Surf/2023-02-08 04.03.28.jpg`            | Surf                                                                                               |
| **Green wave + rocks**      | `Surf/DSC05345.JPG`                       | Surf                                                                                               |
| **Ocean Beach surf**        | `Surf/DSC_3376 OB Surf 2019.jpg`          | Surf                                                                                               |
| **Boat in surf**            | `Surf/IMG_1344.jpg`                       | Surf                                                                                               |
| **Kite Portugal**           | `Kite/Portugal-6.jpeg`                    | Kite                                                                                               |
| **Kite South Africa**       | `Kite/SA wave top.JPG`                    | Kite                                                                                               |
| **Powder skiing**           | `Snow/998AAF0F...JPG`                     | Snow                                                                                               |
| **Coastal sunset**          | `Landscape/SOA01123.jpeg`                 | Travel                                                                                             |
| **Portuguese bay**          | `Landscape/SOA08148.JPG`                  | Travel                                                                                             |
| **Coastline panoramic**     | `Landscape/SOA08567.JPG`                  | Travel                                                                                             |
| **Joshua Tree**             | `Landscape/DSC_1773.jpg`                  | Travel                                                                                             |
| **Hiker overlooking coast** | `Travel/SOA01246.jpg`                     | Travel                                                                                             |

**Not recommended for the site:**
| Photo | File | Reason |
|-------|------|--------|
| **Event with friend** | `Profile/Ferrero_483.jpg` | Contains another person — consent/privacy concern |
| **Event B&W** | `Profile/Ferrero_484.jpg` | Same as above. Only usable if cropped to David alone |

### 2.2 Photo Treatment Guidelines

**Full-bleed hero images:**

- Apply a subtle dark gradient overlay (from bottom: `rgba(26, 26, 46, 0.6)` to transparent) so white text remains legible
- For dark images (cenote, night surf): lighter overlay or none
- Never apply color filters that compete with the ocean teal natural tones

**Inline content images:**

- Rounded corners: `border-radius: 12px` (or 16px)
- Optional subtle box shadow: `0 4px 24px rgba(0, 0, 0, 0.08)`
- Aspect ratios: 16:9 for landscapes, 3:4 or 4:5 for portraits, 1:1 for thumbnails in grids

**Adventures grid images:**

- Masonry layout with varied aspect ratios (see page spec)
- Subtle hover: scale 1.02, slight shadow increase
- Lazy-load all below-the-fold images (`loading="lazy"`)

**Image optimization (Astro `<Image>` component):**

- Serve WebP with JPEG fallback
- Responsive srcsets: 640w, 960w, 1280w, 1920w
- Quality: 80 for heroes, 75 for grid images
- All images get descriptive `alt` text

---

## 3. Color System

### 3.1 Refined Palette

The photo library validates and enriches the original palette. The ocean teals in the surf/freedive shots are the exact brand color. Added: warmer accent tones drawn from the golden-hour landscape photography.

#### Primary Colors

| Token      | Hex       | RGB           | Usage                                                   |
| ---------- | --------- | ------------- | ------------------------------------------------------- |
| `teal-700` | `#085858` | 8, 88, 88     | Dark variant — hover states, borders                    |
| `teal-600` | `#0A6E6E` | 10, 110, 110  | **Primary brand color** — headings, CTAs, links, key UI |
| `teal-500` | `#0D8585` | 13, 133, 133  | Active/focus states                                     |
| `teal-100` | `#E0F2F2` | 224, 242, 242 | Tinted backgrounds, tags, subtle highlights             |
| `teal-50`  | `#F0F9F9` | 240, 249, 249 | Section backgrounds (alternating)                       |

#### Neutral Colors

| Token      | Hex       | Usage                                         |
| ---------- | --------- | --------------------------------------------- |
| `navy-900` | `#1A1A2E` | Primary body text, dark sections background   |
| `navy-800` | `#2D2D44` | Secondary text, headings on light backgrounds |
| `navy-700` | `#44445E` | Tertiary text, captions                       |
| `navy-400` | `#8888A0` | Muted text, placeholders                      |
| `navy-200` | `#C4C4D4` | Borders, dividers                             |
| `navy-100` | `#E8E8F0` | Light borders, subtle separators              |
| `navy-50`  | `#F5F5F8` | Alternate section background (cool grey)      |

#### Background Colors

| Token        | Hex       | Usage                                              |
| ------------ | --------- | -------------------------------------------------- |
| `white`      | `#FFFFFF` | Primary background                                 |
| `off-white`  | `#FAFAFA` | Subtle background variant                          |
| `warm-white` | `#FAF9F7` | Warm background variant (for sections near photos) |

#### Accent Colors

| Token         | Hex       | Usage                                                           |
| ------------- | --------- | --------------------------------------------------------------- |
| `coral-500`   | `#E07A5F` | Secondary CTA, highlights, warm accent (use sparingly)          |
| `coral-400`   | `#E8967E` | Hover state for coral elements                                  |
| `coral-100`   | `#FBE8E2` | Coral tinted backgrounds                                        |
| `seafoam-300` | `#B8D8D8` | Card surfaces, info boxes, subtle backgrounds                   |
| `seafoam-100` | `#E4F0F0` | Lightest seafoam                                                |
| `golden-500`  | `#D4A843` | Optional — star ratings, premium feel (from golden-hour photos) |

#### Semantic Colors

| Token     | Hex       | Usage                       |
| --------- | --------- | --------------------------- |
| `success` | `#0A6E6E` | Form success (reuse teal)   |
| `error`   | `#D64545` | Form errors                 |
| `warning` | `#E07A5F` | Warnings (reuse coral)      |
| `info`    | `#B8D8D8` | Info states (reuse seafoam) |

### 3.2 Dark Section Palette

Used for hero sections, CTA blocks, and alternating visual breaks:

| Element       | Value                             |
| ------------- | --------------------------------- |
| Background    | `navy-900` (#1A1A2E)              |
| Heading text  | `#FFFFFF`                         |
| Body text     | `rgba(255, 255, 255, 0.85)`       |
| Muted text    | `rgba(255, 255, 255, 0.6)`        |
| Primary CTA   | `teal-600` background, white text |
| Secondary CTA | White outline, white text         |
| Dividers      | `rgba(255, 255, 255, 0.12)`       |

### 3.3 Content Pillar Colors

Each blog content pillar gets a distinctive color for its tag:

| Pillar              | Color     | Hex       |
| ------------------- | --------- | --------- |
| Expat Money Mastery | Teal      | `#0A6E6E` |
| Systems & Money     | Navy      | `#1A1A2E` |
| Building Alba       | Coral     | `#E07A5F` |
| Freedom by Design   | Seafoam   | `#0D8585` |
| Practitioner's Edge | Warm Gold | `#B8860B` |

---

## 4. Typography System

### 4.1 Font Stack

**Primary (headings + UI):** Inter

- Weights: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- Source: Google Fonts or self-hosted for performance
- Rationale: Clean, modern, excellent readability at all sizes, large x-height, professional without being sterile

**Secondary (long-form body / blog):** Source Serif 4 (updated name of Source Serif Pro)

- Weights: 400 (Regular), 600 (Semibold)
- Source: Google Fonts or self-hosted
- Usage: Blog post body text, long-form About narrative, blockquotes
- Rationale: Warm serif with excellent screen rendering, pairs naturally with Inter

**Monospace (code, data):** JetBrains Mono

- Weight: 400
- Usage: Code blocks in blog posts, metrics/stats display (optional)

### 4.2 Type Scale

Based on a 1.250 (Major Third) ratio, with manual adjustments for optical balance.

| Token        | Size (px) | Size (rem) | Line Height | Weight | Letter Spacing | Usage                                  |
| ------------ | --------- | ---------- | ----------- | ------ | -------------- | -------------------------------------- |
| `display-xl` | 72        | 4.5        | 1.05        | 700    | -0.03em        | Homepage hero headline (desktop)       |
| `display-lg` | 56        | 3.5        | 1.1         | 700    | -0.025em       | Page hero headlines (desktop)          |
| `display-md` | 44        | 2.75       | 1.15        | 700    | -0.02em        | Hero headlines (tablet)                |
| `heading-1`  | 36        | 2.25       | 1.2         | 700    | -0.015em       | Section headings                       |
| `heading-2`  | 28        | 1.75       | 1.25        | 600    | -0.01em        | Subsection headings                    |
| `heading-3`  | 22        | 1.375      | 1.3         | 600    | -0.005em       | Card titles, list headings             |
| `heading-4`  | 18        | 1.125      | 1.35        | 600    | 0              | Small headings, labels                 |
| `body-lg`    | 20        | 1.25       | 1.7         | 400    | 0              | Lead paragraphs, hero subtext          |
| `body`       | 18        | 1.125      | 1.7         | 400    | 0              | Primary body text                      |
| `body-sm`    | 16        | 1          | 1.6         | 400    | 0              | Secondary body, card descriptions      |
| `caption`    | 14        | 0.875      | 1.5         | 400    | 0.01em         | Captions, metadata, dates              |
| `overline`   | 12        | 0.75       | 1.4         | 600    | 0.08em         | Category labels, overlines (uppercase) |

### 4.3 Responsive Type Scaling

| Token        | Mobile (< 640px) | Tablet (640-1024px) | Desktop (> 1024px) |
| ------------ | ---------------- | ------------------- | ------------------ |
| `display-xl` | 36px             | 48px                | 72px               |
| `display-lg` | 32px             | 40px                | 56px               |
| `heading-1`  | 28px             | 32px                | 36px               |
| `heading-2`  | 24px             | 26px                | 28px               |
| `body-lg`    | 18px             | 19px                | 20px               |
| `body`       | 17px             | 18px                | 18px               |

### 4.4 Typography Rules

- **Headings**: Inter, `navy-900` on light, white on dark
- **Body text**: Inter for pages, Source Serif 4 for blog post content
- **Max line width**: 680px for body text (optimal readability ~65-75 characters)
- **No ALL CAPS** except `overline` style (category tags, small labels)
- **Bold** for emphasis within body text, never underline (reserve for links)
- **Links**: `teal-600`, no underline by default, underline on hover
- **Blockquotes**: Source Serif 4 italic, 20px, left border 3px `teal-600`, `navy-700` text

---

## 5. Spacing & Layout System

### 5.1 Spacing Scale

Based on 4px base unit:

| Token      | Value | Usage                                   |
| ---------- | ----- | --------------------------------------- |
| `space-1`  | 4px   | Tight gaps (icon + label)               |
| `space-2`  | 8px   | Inline spacing, tag padding             |
| `space-3`  | 12px  | Small gaps                              |
| `space-4`  | 16px  | Card padding (compact), list item gap   |
| `space-5`  | 20px  | Standard padding                        |
| `space-6`  | 24px  | Card padding (standard)                 |
| `space-8`  | 32px  | Between content blocks within a section |
| `space-10` | 40px  | Between subsections                     |
| `space-12` | 48px  | Section padding vertical (mobile)       |
| `space-16` | 64px  | Section padding vertical (tablet)       |
| `space-20` | 80px  | Section padding vertical (desktop)      |
| `space-24` | 96px  | Large section gaps (desktop)            |
| `space-32` | 128px | Hero section vertical padding (desktop) |

### 5.2 Layout Grid

| Property            | Mobile  | Tablet     | Desktop     | Wide            |
| ------------------- | ------- | ---------- | ----------- | --------------- |
| Breakpoint          | < 640px | 640-1024px | 1024-1280px | > 1280px        |
| Container max-width | 100%    | 100%       | 1024px      | 1200px          |
| Side padding        | 20px    | 32px       | 40px        | auto (centered) |
| Column grid         | 4 cols  | 8 cols     | 12 cols     | 12 cols         |
| Gutter              | 16px    | 20px       | 24px        | 24px            |

**Content widths:**

- Full-width: 100% of container (1200px max)
- Content: 800px (about/blog text content)
- Narrow: 680px (max line width for reading)
- Wide: 1040px (project grids, card layouts)

### 5.3 Section Structure

Every major page section follows this structure:

```
<section> (full viewport width — can have background color/image)
  <div class="container"> (max-width: 1200px, centered, side padding)
    <div class="section-header"> (optional: overline, heading, subtext)
    <div class="section-content"> (the actual content)
  </div>
</section>
```

Section vertical padding:

- Mobile: 48px top/bottom
- Tablet: 64px
- Desktop: 80-96px
- Hero sections: 96-128px on desktop

---

## 6. Component Design

### 6.1 Buttons

**Primary Button (teal filled)**

```
Background: teal-600 (#0A6E6E)
Text: white
Font: Inter 16px/600
Padding: 14px 28px
Border-radius: 8px
Hover: teal-700 (#085858), subtle translateY(-1px), shadow
Active: teal-700, translateY(0)
Transition: all 150ms ease
Min-width: none (content-driven)
```

**Secondary Button (outlined)**

```
Background: transparent
Border: 1.5px solid navy-200 (#C4C4D4)
Text: navy-900
Font: Inter 16px/600
Padding: 14px 28px
Border-radius: 8px
Hover: border navy-900, background navy-50
```

**Secondary Button (on dark backgrounds)**

```
Border: 1.5px solid rgba(255,255,255,0.4)
Text: white
Hover: border white, background rgba(255,255,255,0.1)
```

**Ghost/Text Button (links with arrow)**

```
Background: none
Text: teal-600
Font: Inter 16px/500
Padding: 0
Arrow: " →" appended
Hover: teal-700, arrow translateX(4px)
```

**Button Sizes:**

- Small: 12px padding, 14px font
- Default: 14px 28px padding, 16px font
- Large: 18px 36px padding, 18px font (hero CTAs)

### 6.2 Navigation

**Desktop Navigation (sticky)**

```
Height: 72px
Background: white (transparent at top on homepage, becomes white on scroll)
Border-bottom: 1px solid navy-100 (appears on scroll)
Backdrop-filter: blur(12px) (when semi-transparent)
Z-index: 50
Transition: background 200ms, border 200ms
```

Layout:

```
┌──────────────────────────────────────────────────────────────────┐
│  David Hamel          About  Services▾  Projects  Blog  Adventures   EN/DE  [Book a Call]  │
│  (Inter 18px/600)     (Inter 15px/500)                          (teal btn)  │
└──────────────────────────────────────────────────────────────────┘
```

- Logo: "David Hamel" in Inter 18px/600, `navy-900`, no decoration
- Nav links: Inter 15px/500, `navy-700`, hover `teal-600`
- Active page: `teal-600` text, subtle bottom border or dot indicator
- "Services" has dropdown arrow, shows dropdown on hover
- Language switcher: "EN / DE" — active locale bold, inactive 60% opacity
- CTA: "Book a Call" primary button (small size)
- Transition to opaque white: triggers after 80px scroll

**Services Dropdown**

```
Width: 240px
Background: white
Border: 1px solid navy-100
Border-radius: 12px
Shadow: 0 8px 30px rgba(0,0,0,0.1)
Padding: 8px
Items: 48px height each, 16px padding, rounded 8px hover background
```

**Mobile Navigation**

```
Header: 64px height, logo left, hamburger right, "Book a Call" button visible
Hamburger: 3 horizontal lines, animates to X on open
Menu: Full-screen overlay, navy-900 background, white text
Links: Inter 28px/600, stacked vertically, 24px gap
Services: shows both sub-items indented
Close: X icon or tap outside
```

### 6.3 Cards

**ProjectCard**

```
Background: white
Border: 1px solid navy-100
Border-radius: 16px
Padding: 0 (image top, content bottom)
Shadow: 0 2px 12px rgba(0,0,0,0.04)
Hover: shadow 0 8px 30px rgba(0,0,0,0.08), translateY(-2px)
Transition: all 200ms ease

Image area: aspect-ratio 16/10, border-radius 16px 16px 0 0, overflow hidden
  - If no project image: solid teal-50 background with project initial letter (48px, teal-600)
Content area: padding 24px

Structure:
  [Badge] ← "Venture" | "Contract" | "Side Project" (overline style, teal-100 bg, teal-700 text)
  [Project Name] ← heading-3
  [One-liner] ← body-sm, navy-700
  [Metadata row] ← caption, navy-400: "Co-Founder & CEO · 2015–2022"
  [Metric] ← body-sm/600, teal-600: "35k users · €1.5bn linked"
```

**BlogCard**

```
Background: white
Border: 1px solid navy-100
Border-radius: 16px
Padding: 24px
Shadow: same as ProjectCard
Hover: same as ProjectCard

Structure:
  [Pillar Tag] ← PillarTag component (colored dot + label)
  [Title] ← heading-3, navy-900
  [Excerpt] ← body-sm, navy-700, 2-line clamp
  [Meta row] ← caption, navy-400: "Feb 15, 2026 · 8 min read"
```

**ServiceCard (used on /services for the two tiers)**

```
Background: white
Border: 1px solid navy-100
Border-radius: 20px
Padding: 40px
Shadow: 0 4px 20px rgba(0,0,0,0.06)

Structure:
  [Icon area] ← optional, subtle teal icon or number
  [Title] ← heading-2
  [Description] ← body, navy-700
  [Feature list] ← checkmark items (teal checkmark icon + body-sm text)
  [Pricing note] ← caption, navy-400, italic
  [CTA link] ← ghost button "See my work →"
```

### 6.4 PillarTag

```
Display: inline-flex, align-items center
Gap: 6px
Padding: 4px 12px
Border-radius: 100px (pill)
Background: pillar color at 10% opacity
Font: overline style (12px, 600, 0.08em letter-spacing, uppercase)
Color: pillar color (full)

Before pseudo-element: 6px circle in pillar color (the dot)
```

### 6.5 CTABlock (Reusable section)

```
Background: navy-900
Border-radius: 24px (when used inside container) or 0 (full-bleed)
Padding: 64px (mobile), 80px (desktop)
Text-align: center

Structure:
  [Heading] ← display-md or heading-1, white
  [Subtext] ← body-lg, white/85%
  [Buttons] ← flex row, gap 16px, centered
```

### 6.6 Newsletter Signup (React Island)

```
Background: teal-50 or navy-900 (depending on context)
Border-radius: 16px (when boxed)
Padding: 40px

Structure:
  [Heading] ← heading-2
  [Subtext] ← body-sm
  [Form row] ← flex row
    [Input] ← flex-grow, height 52px, border-radius 8px (left), border navy-200
    [Button] ← primary button, border-radius 8px (right)

  Mobile: form stacks vertically, full-width input + full-width button
  States: loading (spinner), success ("You're in! Check your email."), error (red border + message)
```

### 6.7 Calendly Embed (React Island)

```
Container: max-width 720px, centered
Min-height: 680px (Calendly inline widget height)
Border-radius: 16px
Overflow: hidden
Background: white
Border: 1px solid navy-100
Loading state: skeleton pulse animation
```

### 6.8 Language Switcher

```
Display: inline-flex
Gap: 2px
Font: Inter 14px/500

Active locale: navy-900 (on light) or white (on dark)
Inactive locale: navy-400 (on light) or white/50% (on dark)
Separator: " / " in navy-400

Hover on inactive: teal-600 (on light), white/80% (on dark)
```

### 6.9 Footer

```
Background: navy-900
Padding: 80px 0 40px (desktop), 48px 0 32px (mobile)
Color: white

Layout (desktop): 4-column grid
  Col 1: "David Hamel" wordmark + 1-sentence tagline (body-sm, white/60%)
  Col 2: "Services" links
  Col 3: "Explore" links
  Col 4: "Connect" links

Link style: body-sm, white/70%, hover white

Newsletter row: full-width below columns, separated by thin white/10% border
  Same component as NewsletterSignup but dark variant

Legal row: bottom, separated by white/10% border
  Left: © 2026 David Hamel
  Right: Imprint · Privacy Policy
  Font: caption, white/50%
```

---

## 7. Page-by-Page Design Specifications

### 7.1 Homepage (`/`)

The homepage establishes who David is, presents both service tracks, showcases credibility, and captures leads. It's the highest-traffic page and needs to work for two distinct audiences (expat coaching prospects + product/build clients).

#### Hero Section

The homepage hero must establish professional credibility instantly. No adventure photos. Typography carries the visual weight.

**Desktop layout:**

```
┌─────────────────────────────────────────────────────────────────────┐
│  [NAV — white background from the start on homepage]                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│                                                                      │
│     Financial planning coach.                                        │
│     Product leader. Builder.                                         │
│                                                                      │
│     I help expats in Germany make confident                          │
│     financial decisions — and I build products                       │
│     that ship. No commissions, no complexity,                        │
│     no corporate filler.                                             │
│                                                                      │
│     [Financial Coaching →]  [Product & Build Services →]             │
│                                                                      │
│                                                                      │
├─────────────────────────────────────────────────────────────────────┤
```

**Design approach — Text-focused hero (recommended):**

- Background: white or off-white (`warm-white` #FAF9F7)
- Optional: very subtle decorative element — a thin teal gradient line, or faint topographic/wave pattern at 3-5% opacity. Nothing photographic.
- Headline: `display-xl` (72px desktop), `navy-900`. The headline IS the visual.
- Subheadline: `body-lg` (20px), `navy-700`, max-width 580px
- CTAs: Primary (teal) + Secondary (outlined), large size, side by side
- Padding: 128px top, 96px bottom (desktop)
- Content: left-aligned or centered — test both during development
- No hero image. The "Who I Am" section immediately below provides the first visual (headshot).

**Why no hero photo:** The target audience (expats seeking financial help, or founders seeking a product partner) needs to read and understand the value proposition immediately. A large photo competes for attention and delays comprehension. The headline "Financial planning coach. Product leader. Builder." at 72px on white is visually striking on its own.

**Mobile layout:**

```
┌──────────────────────────┐
│  [NAV]                    │
├──────────────────────────┤
│                           │
│  Financial planning       │
│  coach. Product leader.   │
│  Builder.                 │
│                           │
│  I help expats in Germany │
│  make confident financial │
│  decisions...             │
│                           │
│  [Financial Coaching →]   │
│  [Product & Build →]      │
│                           │
├──────────────────────────┤
```

Clean, immediate, professional. The About page and Adventures page are where the personality unfolds.

#### Who I Am Section

```
Background: white
Padding: 80px (desktop)

Layout (desktop): 2 columns — 40% image, 60% text
  Image: DSC_3819.jpg (headshot), border-radius 16px, aspect 3:4
  Text: body text + "More about me →" ghost link

Layout (mobile): image above text, image full-width, max-height 400px, object-fit cover
```

#### Selected Work Section

```
Background: navy-50 (#F5F5F8)
Padding: 96px (desktop)

Header: "Selected Work" overline + heading
Cards: 4-column grid on desktop, 2-column on tablet, single on mobile
  Cards: ProjectCard component (Alba, Ziggma, Porsche, Digital Partners)
  Gap: 24px

Below cards: "View all projects →" ghost link, centered
```

#### Latest from the Blog Section

```
Background: white
Padding: 80px (desktop)

Header: "Latest from the Blog" heading
Cards: 3-column grid desktop, single mobile
  Cards: BlogCard component
  Gap: 24px

Below cards: "Read all posts →" ghost link
```

#### Newsletter CTA Section

```
Background: navy-900 (dark section)
Padding: 80px (desktop)
Border-radius: 0 (full-bleed)

Content: centered, max-width 640px
  Heading: white, heading-1
  Subtext: white/85%, body
  Form: NewsletterSignup (dark variant)
```

---

### 7.2 About (`/about`)

The most personal page — but it still leads with professional credibility. Lifestyle photos are woven into the narrative, not splashed across the hero.

#### Hero

```
Background: white
Layout: Heading left, B&W portrait right (or below on mobile)
  Image: David_1_IMG_1787.jpg (B&W editorial portrait), max-height 480px, rounded 16px
  Heading: "About" (display-lg, navy-900)
  No subheadline — the opening paragraph of the story serves this purpose
```

The B&W portrait is editorial but still professional (leather jacket, composed pose). It signals "this is a real person with depth" without being an adventure photo.

#### The Story Section

```
Background: white
Max-width: 680px (narrow reading width)
Font: Source Serif 4 for body text (blog-like reading experience)
Font size: 18px, line-height 1.8

Inline images break up the text (max 2-3, placed AFTER professional story is established):
  - After Digital Partners / Porsche narrative (professional credibility established):
    → Insert: Travel/David_Photos-3.jpg (driving van) — full-width within content column, rounded, caption below
    → This signals the "adventurous entrepreneur" without undermining the business story

  - After "When I'm not working on money, I'm most likely in the ocean." closing:
    → Insert: Landscape/SOA08158.JPG (surfer on cliff at golden hour) — full-width, rounded
    → Natural bridge to the CTA section and implicitly to the Adventures page

  NO lifestyle photos in the first half of the narrative. Let the RSM, ABN Amro, Digital Partners, Porsche credentials land first.

Project name links: teal-600, underline on hover
```

#### What I Believe Section

```
Background: teal-50
Padding: 96px (desktop)

Layout: 5 value cards in a vertical list (not grid — values deserve breathing room)
  Each card:
    [Value name] ← heading-3, teal-600
    [Description] ← body, navy-700
    Gap between cards: 40px
    Optional left border: 3px teal-600
```

#### Background Section (Languages & Education)

```
Background: white
Compact section, max-width 680px
Two items: Languages, Education
Style: simple body text with bold labels
```

#### CTA Section

```
CTABlock (dark variant, full-bleed)
Two CTA buttons: "Financial Coaching →" and "Product & Build Services →"
```

---

### 7.3 Financial Coaching (`/coaching`)

Clean, trust-building, conversion-focused.

#### Hero

```
Background: white
Layout: text-only hero (no photo — clean and focused for conversion)
  Heading: display-lg, navy-900
  Subheadline: body-lg, navy-700
  CTA: "Book a Free Consultation →" large primary button

Optional: subtle background pattern (very light teal topographic lines at 3% opacity)
```

#### The Problem Section

```
Background: navy-900 (dark section — creates gravitas)
Text: white
Max-width: 680px, centered
Body text: body-lg, white/85%
```

#### How I Help (3-Step Process)

```
Background: white
Layout: 3 columns on desktop, stacked on mobile

Each step:
  [Number circle] ← 48px circle, teal-600 bg, white number (1, 2, 3)
  [Step name] ← heading-2 (Understand / Plan / Implement)
  [Description] ← body, navy-700

Connecting element: subtle dashed line between circles on desktop (horizontal)
```

#### Why Me Section

```
Background: teal-50
Layout: 2x2 grid of feature cards

Each card:
  Padding: 32px
  Background: white
  Border-radius: 16px
  Shadow: subtle
  [Feature title] ← heading-3
  [Description] ← body-sm, navy-700
```

#### Alba Wealth Section

```
Background: white
Layout: image left (Alba screenshot placeholder), text right
  Text: heading + description + external link to alba-wealth.com
```

#### Is This For You? Section

```
Background: navy-50
Checklist style:
  Each item: teal checkmark icon + body text
  Indent left, generous spacing
```

#### CTA / Calendly Section

```
Background: white
Heading centered, then CalendlyEmbed (React island, client:visible)
Below: "Prefer email? Reach me at..." with email link
```

---

### 7.4 Product & Build Services (`/services`)

More dynamic, slightly tech-forward feel.

#### Hero

```
Background: white
Layout: text-focused, no hero image (same approach as homepage — let the headline carry it)
  Heading: "Product leader who ships code." (display-lg)
  Subheadline: body-lg, the elevator pitch
  CTA: "Let's Talk About Your Project →"

  Note: The B&W portrait (David_1_IMG_1787.jpg) can optionally appear here as a small
  secondary element if the page feels too text-heavy, but the hero should be type-driven.
```

#### Service Tiers (2 cards)

```
Background: navy-50
Layout: 2-column grid, equal width

Each ServiceCard:
  Fractional CPO | App & Website Builds
  Full details as per copy deck
  Bottom: relevant project links as ghost buttons
```

#### Differentiators

```
Background: white
5 items in a vertical list with icons or numbers

Each item:
  [Bold title] ← heading-3
  [Description] ← body, navy-700
  Separator: thin navy-100 line between items
```

#### Selected Work

```
Background: teal-50
3-4 ProjectCards (Porsche, Ziggma, Alba, Rootlocaly)
"View full portfolio →"
```

#### CTA

```
CTABlock (dark variant)
"Let's talk about your project."
```

---

### 7.5 Projects Grid (`/projects`)

#### Hero

```
Background: white
Heading: "What I've built." (display-lg)
Subheadline: body-lg
```

#### Project Grid

```
Background: white
Layout: 3-column grid (desktop), 2-column (tablet), single (mobile)
Gap: 24px
9 ProjectCards in specified order (Alba first, Rootlocaly last)

Optional filter row above grid:
  All | Ventures | Contracts | Builds
  Pill/tag style, horizontal scroll on mobile
```

---

### 7.6 Individual Project Pages (`/projects/[slug]`)

#### Header

```
Background: white or project-specific tint
Layout:
  [← All Projects] ghost link (top left)
  [Project name] ← display-lg
  [Tagline] ← body-lg, navy-700
  [Metadata row] ← badges: Role · Period · Type · Location
  [Project image] ← if available, full-width rounded, aspect 16:9
```

#### Content

```
Max-width: 800px
Sections: Overview, Key Metrics (stat cards or list), What I Did, Tech & Tools
Metrics displayed as:
  Inline stat blocks: number in heading-1 teal-600, label in caption below
  Arranged in a flex row, 3-4 items
```

#### Navigation

```
Bottom:
  Flex row: "← Previous Project" | "Next: [Name] →"
  Below: CTABlock "Want to work together?"
```

---

### 7.7 Blog Listing (`/blog`)

#### Hero

```
Heading: "Writing" (display-lg)
Subheadline: "Thoughts on money, building, and living abroad."
```

#### Pillar Filter

```
Horizontal row of pills (PillarTag style but larger, clickable)
Active: filled background, white text
Inactive: outline, pillar color text
Scrollable horizontally on mobile
```

#### Post List

```
BlogCards in a list layout (not grid — editorial feel):
  Desktop: 2-column grid OR single-column with image-left/text-right layout
  Mobile: single column, stacked cards
  Gap: 24px
```

#### Bottom: Newsletter CTA

---

### 7.8 Blog Post (`/blog/[slug]`)

#### Article Header

```
Max-width: 800px, centered
  [Pillar Tag]
  [Title] ← display-lg, navy-900
  [Meta] ← caption: "Feb 15, 2026 · 8 min read"
  [Author] ← small headshot (40px circle) + "David Hamel" caption
  Optional: hero image (full article width, rounded)
```

#### Article Body

```
Max-width: 680px, centered
Font: Source Serif 4, 18px, line-height 1.8
Headings: Inter (switch back for structure)
Code blocks: JetBrains Mono, navy-900 bg, rounded, padded
Images: full content width, rounded 12px
Blockquotes: left border teal-600, Source Serif 4 italic
```

#### Bottom Section

```
Author bio: headshot + short bio + links
Newsletter CTA (inline)
Related posts: 2-3 BlogCards
Post navigation: ← Previous / Next →
```

---

### 7.9 Adventures (`/adventures`)

**The photography showcase.** This is the ONE page where images dominate. Everything restrained on the professional pages pays off here — the contrast makes the Adventures page feel like discovering a hidden side of someone you already trust. The cenote freedive, big-wave surf, and travel photos finally get their moment.

#### Hero

```
Full-bleed hero image: DSC_1622.jpg (cenote freedive) OR 2023-02-08 03.46.17-2.jpg (barrel wave)
  Height: 70vh (desktop), 50vh (mobile)
  Dark gradient overlay (bottom)
  Text: "Adventures" display-lg, white
  Subtext: "When I'm not building or coaching, I'm in the ocean." body-lg, white/85%
```

#### Category Filter

```
Horizontal pills: All | Surf | Freedive | Kite | Snow | Travel
Sticky below nav on scroll (optional)
```

#### Photo Grid

```
Masonry layout (CSS columns or grid with varying row spans):
  Desktop: 3 columns
  Tablet: 2 columns
  Mobile: single column (or 2 narrow columns)

Each image:
  Border-radius: 12px
  Hover: slight scale (1.02), overlay with location caption
  Click: expand to lightbox (Phase 2 — for v1 just larger view)

Gap: 12px (tight grid for visual density — photos should feel like a collection)
```

#### Minimal Text

```
Small captions under images or as hover overlay:
  Location + activity type
  Caption style, white/80% on dark overlay
```

---

### 7.10 Contact (`/contact`)

#### Hero

```
Background: white
Heading: "Let's talk." (display-lg)
Subheadline: body-lg
```

#### Calendly Section

```
Heading: "Book a 30-minute consultation"
CalendlyEmbed (React island), max-width 720px, centered
```

#### Direct Contact

```
"Or reach me directly"
Email + LinkedIn as styled links with icons
```

#### Newsletter at bottom

---

### 7.11 Legal Pages (`/impressum`, `/datenschutz`)

```
Simple, clean layout
Max-width: 680px
Body text in Inter (not serif — legal content)
No hero image, just heading + content
Minimal styling
```

---

## 8. Responsive Design

### 8.1 Breakpoints

| Name       | Min-width | Tailwind prefix |
| ---------- | --------- | --------------- |
| Mobile     | 0px       | (default)       |
| Tablet     | 640px     | `sm:`           |
| Desktop    | 1024px    | `lg:`           |
| Wide       | 1280px    | `xl:`           |
| Ultra-wide | 1536px    | `2xl:`          |

### 8.2 Key Responsive Behaviors

| Element         | Mobile                     | Tablet           | Desktop              |
| --------------- | -------------------------- | ---------------- | -------------------- |
| Nav             | Hamburger + "Book a Call"  | Full horizontal  | Full horizontal      |
| Hero            | Stacked (text, then image) | Stacked or split | Split (text + image) |
| Card grids      | 1 column                   | 2 columns        | 3-4 columns          |
| Section padding | 48px vertical              | 64px             | 80-96px              |
| Headings        | Scaled down 40-50%         | Scaled down ~20% | Full size            |
| Footer          | Stacked columns            | 2x2 grid         | 4 columns            |
| Masonry grid    | 1-2 columns                | 2 columns        | 3 columns            |
| Content width   | Full - 40px                | Full - 64px      | 800-1200px centered  |

### 8.3 Mobile-Specific Design Notes

- Touch targets: minimum 44x44px for all interactive elements
- No hover-dependent interactions (dropdowns trigger on tap instead)
- "Book a Call" button always visible in header (not inside hamburger)
- Card shadows reduced on mobile (performance)
- Hero photos: use art-directed crops (taller aspect ratio for mobile)
- Scroll-based animations: reduced or disabled (prefers-reduced-motion)

---

## 9. Motion & Interaction

### 9.1 Philosophy

Motion should be subtle and purposeful — never decorative. The site should feel snappy and responsive, not animated for animation's sake.

### 9.2 Transitions

| Element                   | Property                      | Duration | Easing   |
| ------------------------- | ----------------------------- | -------- | -------- |
| Buttons (hover)           | background, transform, shadow | 150ms    | ease     |
| Cards (hover)             | transform, shadow             | 200ms    | ease     |
| Nav (scroll)              | background, border            | 200ms    | ease     |
| Links (hover)             | color                         | 100ms    | ease     |
| Page sections (scroll-in) | opacity, translateY           | 400ms    | ease-out |
| Mobile menu               | opacity, transform            | 250ms    | ease-out |
| Dropdown                  | opacity, translateY           | 150ms    | ease-out |

### 9.3 Scroll Animations (Optional — Progressive Enhancement)

Sections fade in on scroll (reveal from below):

```css
.section-reveal {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 400ms ease-out,
    transform 400ms ease-out;
}
.section-reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

**Rules:**

- Only apply to elements below the fold (first viewport is instant)
- Respect `prefers-reduced-motion` — disable all animations
- Use Intersection Observer, not scroll event listeners
- Never delay content that's already visible
- Stagger cards in grids: 50ms delay between each

### 9.4 Interactions

- **Nav scroll behavior**: Smooth transition from transparent to white background
- **Cards**: Lift on hover (translateY(-2px) + shadow increase)
- **Ghost links with arrows**: Arrow slides right 4px on hover
- **Image hover (adventures grid)**: Slight zoom (scale 1.02) + overlay fade in
- **Newsletter form**: Success state animates from button → checkmark
- **Language switcher**: No animation, instant swap
- **Calendly embed**: Show skeleton loader until iframe loads

---

## 10. Iconography

### 10.1 Icon Set

Use **Lucide Icons** (open source, consistent with shadcn/ui):

- Arrow icons: `arrow-right`, `arrow-left`, `arrow-up-right` (external links)
- Navigation: `menu` (hamburger), `x` (close), `chevron-down` (dropdown)
- Social: `linkedin`, `github`, `mail`
- Features: `check` (checkmark lists), `circle-check` (success)
- Content: `clock` (read time), `calendar` (date)

### 10.2 Icon Sizing

| Context          | Size    | Stroke Width |
| ---------------- | ------- | ------------ |
| Inline with text | 16px    | 2px          |
| Navigation       | 20px    | 2px          |
| Feature cards    | 24px    | 1.5px        |
| Large decorative | 32-48px | 1.5px        |

### 10.3 Icon Color

- Default: `navy-700`
- On dark backgrounds: `white/80%`
- Accent: `teal-600`
- Interactive hover: `teal-600` (matches link color)

---

## 11. Accessibility

- **Color contrast**: All text meets WCAG AA minimum (4.5:1 for body, 3:1 for large text)
  - `navy-900` on white: ~15:1 (pass)
  - `teal-600` on white: ~4.7:1 (pass AA)
  - White on `navy-900`: ~15:1 (pass)
  - White/85% on `navy-900`: ~11:1 (pass)
- **Focus states**: Visible focus ring (2px `teal-600` outline, 2px offset) on all interactive elements
- **Skip to content**: Hidden link that appears on focus
- **Alt text**: All images get descriptive alt text
- **ARIA labels**: All interactive elements, especially icon-only buttons
- **Semantic HTML**: Proper heading hierarchy (h1 → h2 → h3), landmark regions, nav, main, footer
- **Reduced motion**: `prefers-reduced-motion: reduce` disables all animations
- **Language attributes**: `lang="en"` or `lang="de"` on `<html>` element per locale

---

## 12. Favicon & OG Images

### Favicon

- Simple monogram "DH" in Inter Bold on teal-600 background
- Sizes: 16x16, 32x32, 180x180 (Apple touch), SVG preferred
- Background: `teal-600`, text: white

### Open Graph Image (default)

- Size: 1200x630px
- Background: navy-900
- Text: "David Hamel" in Inter Bold 48px, white
- Subtext: "Financial Planning Coach & Product Builder" in Inter 24px, white/70%
- Subtle teal gradient accent
- Used when no page-specific OG image is set

### Per-page OG Images

Blog posts and project pages should generate unique OG images (can use a template with dynamic text — Phase 2 enhancement).

---

## 13. Photo-Specific Design Decisions

### Homepage: No Hero Photo

The homepage hero is text-only. The professional headshot (`DSC_3819.jpg`) appears in the "Who I Am" section directly below — this is the first image a visitor sees, and it establishes trust through a professional, approachable portrait.

Adventure photos do NOT appear on the homepage. The homepage serves two audiences (coaching prospects + build clients) who both need professional credibility first.

### Adventures Page: Cenote Freedive as Hero

The cenote photo (`DSC_1622.jpg`) is the strongest visual asset in the collection. The teal light beam against black, the lone freediver in the deep — it's a powerful image that belongs as the Adventures page hero. This is the _reward_ for visitors who explore the site and discover the personal side.

### About Page: Photography as Narrative

The About page is the only professional page where lifestyle photos appear, and they're woven into the story as contextual illustrations — not decorative elements. They appear AFTER the professional introduction and career narrative establish credibility. Max 2-3 inline photos.

### Adventures Page Category Mapping

| Category     | Photos                                                                                                                              |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Surf**     | Matt David-Coxos.jpeg, DSC05345.JPG, DSC_3376.jpg, IMG_1344.jpg, 2023-02-08 03.46.17-2.jpg, 2023-02-08 04.03.28.jpg                 |
| **Freedive** | DSC_1622.jpg, 1 DSC_8035 taak bi ha dive.jpg                                                                                        |
| **Kite**     | Portugal-6.jpeg, SA wave top.JPG                                                                                                    |
| **Snow**     | 998AAF0F...JPG                                                                                                                      |
| **Travel**   | DSC_1657.jpg, David_Photos-3.jpg, SOA00795.jpg, SOA01246.jpg, DSC_1773.jpg, SOA01123.jpeg, SOA08148.JPG, SOA08158.JPG, SOA08567.JPG |

---

_This document is the UI design source of truth. Update when design decisions change. Reference alongside `docs/copy-deck.md` for content and `docs/information-architecture.md` for page structure._
