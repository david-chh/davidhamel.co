# Coding Conventions

Code style and patterns for davidhamel.co (Astro + React islands).

---

## TypeScript

- Strict mode enabled
- Prefer `interface` over `type` for objects
- Use explicit return types on functions
- No `any` - use `unknown` if type is truly unknown

## Astro

- Use `.astro` files for all static pages and components
- Use `.tsx` React components ONLY for interactive islands (forms, embeds)
- Always specify client directives on React islands: `client:load`, `client:visible`, or `client:only="react"`
- Use Astro Content Collections for blog posts (type-safe frontmatter)
- Prefer Astro's built-in `<Image>` component for optimized images

## Styling

- TailwindCSS utility classes only
- Custom components in `src/components/`
- Brand colors defined in `tailwind.config.mjs`
- Colors: teal `#0A6E6E`, navy `#1A1A2E`, coral `#E07A5F`, seafoam `#B8D8D8`

## UI Components

Before creating any UI component, check if shadcn/ui has it:

```bash
npx shadcn@latest add [component]
```

Never build custom buttons, inputs, dialogs, cards, etc. when shadcn/ui provides them.
Use as React islands with appropriate `client:` directive.

## File Organization

```
src/
├── layouts/
│   ├── BaseLayout.astro           # HTML shell, meta tags, nav, footer
│   └── BlogPostLayout.astro       # Blog post template
├── pages/
│   ├── index.astro                # Homepage
│   ├── about.astro
│   ├── coaching.astro
│   ├── services.astro             # Product & Build Services (sells)
│   ├── adventures.astro
│   ├── contact.astro
│   ├── projects/
│   │   ├── index.astro            # Portfolio grid (proves)
│   │   ├── alba-wealth.astro
│   │   ├── ziggma.astro
│   │   ├── derisk.astro
│   │   ├── digital-partners.astro
│   │   ├── porsche-digital-lab.astro
│   │   ├── buena.astro
│   │   ├── carly.astro
│   │   ├── impactive.astro
│   │   └── rootlocaly.astro
│   └── blog/
│       ├── index.astro            # Blog listing
│       └── [...slug].astro        # Dynamic blog post route
├── content/
│   ├── config.ts                  # Astro content collections schema
│   └── blog/                      # MDX blog posts
├── components/
│   ├── Nav.astro                  # Site navigation
│   ├── Footer.astro               # Site footer
│   ├── BlogCard.astro             # Blog post preview card
│   ├── ProjectCard.astro          # Project preview card
│   ├── NewsletterSignup.tsx       # React island — Resend integration
│   └── CalendlyEmbed.tsx          # React island — Calendly widget
├── styles/
│   └── global.css                 # Tailwind imports + CSS custom properties
└── lib/
    └── utils.ts                   # Utility functions
```
