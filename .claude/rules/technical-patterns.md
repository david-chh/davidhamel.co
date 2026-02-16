# Technical Patterns

Battle-tested patterns that prevent common bugs.

---

## No Timeouts

**NEVER add `setTimeout`, `delay`, or artificial waits** unless explicitly requested by the user. These create race conditions and hide real bugs. If something needs time, use proper event handling or state management.

## Verify Root Cause

When debugging, **confirm the actual cause** before implementing fixes.

Red flags (haven't found root cause):

- "It could be..."
- "Probably..."
- "Let's try..."

Green flags (found root cause):

- "Looking at line X, I can see..."
- "The database shows..."
- "Tracing the execution reveals..."

## Input Validation

Always validate inputs at system boundaries using Zod:

```typescript
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
});
```

## Astro Content Collections

```typescript
// CORRECT: Use Astro Content Collections for type-safe content
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    pillar: z.enum([
      "expat-money-mastery",
      "systems-and-money",
      "building-alba",
      "freedom-by-design",
      "practitioners-edge",
    ]),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});
```

## React Islands in Astro

```astro
---
// CORRECT: Import React component and use client directive
import NewsletterSignup from "../components/NewsletterSignup.tsx";
---

<!-- client:load — loads immediately (above the fold, critical interactivity) -->
<NewsletterSignup client:load />

<!-- client:visible — loads when scrolled into view (below the fold) -->
<CalendlyEmbed client:visible />

<!-- client:only="react" — never SSR, client-only (browser APIs needed) -->
<AnalyticsWidget client:only="react" />
```

## Security Essentials

- Environment variables for all secrets (never commit `.env`)
- No secrets in client-side code (`PUBLIC_` prefix in Astro = client-visible)
- Sanitize user content before display
- Error messages don't leak internals
