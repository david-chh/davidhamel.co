# Coding Conventions

General code style and patterns.

---

## TypeScript

- Strict mode enabled
- Prefer `interface` over `type` for objects
- Use explicit return types on functions
- No `any` - use `unknown` if type is truly unknown

## React/Next.js

- Server Components by default
- `"use client"` only when needed (hooks, browser APIs)
- Co-locate components with routes when page-specific
- Use Server Actions for mutations, not API routes

## Styling

- TailwindCSS utility classes only
- Custom components in `src/components/ui/`
- Design system colors defined in `tailwind.config.ts`

## Database

- Use migrations for all schema changes
- Soft deletes where applicable
- Timestamps on all tables (createdAt, updatedAt)

## UI Components

Before creating any UI component, check if shadcn/ui has it:
```bash
npx shadcn@latest add [component]
```
Never build custom buttons, inputs, dialogs, cards, etc. when shadcn/ui provides them.

## File Organization

```
src/
├── app/                    # Next.js App Router pages
│   └── [route]/
│       ├── page.tsx        # Page component
│       ├── actions.ts      # Server Actions
│       └── components/     # Page-specific components
├── components/
│   ├── ui/                 # shadcn/ui components
│   └── [feature]/          # Feature-specific shared components
├── lib/
│   ├── db/                 # Database utilities
│   └── utils/              # Shared utilities
└── types/                  # TypeScript types
```
