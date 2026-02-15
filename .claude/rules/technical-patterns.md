# Technical Patterns

Battle-tested patterns that prevent common bugs.

---

## Next.js 15+ Async Params

```typescript
// CORRECT: Await params in Next.js 15+
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
}

// CORRECT: Await searchParams too
export default async function Page({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page } = await searchParams
}
```

## Server Actions for Mutations

```typescript
// CORRECT: Use Server Actions, not API routes
'use server'
export async function createItem(formData: FormData) {
  // ... mutation logic
  revalidatePath('/items')
}
```

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
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
})

export async function createUser(formData: FormData) {
  'use server'
  const validated = schema.parse(Object.fromEntries(formData))
  // Safe to use validated data
}
```

## Security Essentials

- Environment variables for all secrets (never commit `.env`)
- No secrets in client-side code (`NEXT_PUBLIC_` prefix = client-visible)
- Parameterized database queries (ORMs handle this)
- Sanitize user content before display
- Error messages don't leak internals
