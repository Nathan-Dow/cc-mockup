# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server at http://localhost:8080
npm run build        # Production build
npm run lint         # Run ESLint
npm run test         # Run Vitest once
npm run test:watch   # Run Vitest in watch mode
npm run preview      # Preview production build
```

## Architecture

**Customers Cradle** is a single-page React/TypeScript landing page for a Philippines-based automotive service center. There is no backend — form submissions are mocked with toast notifications.

### Page Composition

`src/pages/Index.tsx` is the main page, composing domain components from `src/components/cradle/` in order:

`Nav → Hero → Marquee → Services → Featured → Process → Stats → About → Booking → Footer → FloatingBook`

`App.tsx` wraps everything in `QueryClientProvider`, `TooltipProvider`, `Toaster`, and `BrowserRouter`. Navigation uses anchor links (`#services`, `#book`, etc.) for smooth scrolling within the SPA — no additional routes exist beyond `/` and a `*` catch-all `NotFound`.

### Component Layers

- `src/components/cradle/` — domain-specific page sections (all business logic lives here)
- `src/components/ui/` — Shadcn/Radix UI primitives (30+ components, treat as a library)
- `src/hooks/` — `use-toast.ts` (Sonner) and `use-mobile.tsx` (viewport detection)
- `src/lib/utils.ts` — `cn()` helper for merging Tailwind classes

### Styling

Design tokens are defined as HSL CSS custom properties in `src/index.css`. Key brand tokens:
- `--primary`: Racing Red (`#E10600`)
- `--background`: Deep Charcoal (`#0E0E10`)
- `--foreground`: Off-White (`#F5F5F5`)

Custom Tailwind utilities defined in `index.css`: `.eyebrow`, `.red-bar`, `.hero-vignette`, `.grain`. Responsive display font sizes use clamp() and are configured in `tailwind.config.ts` as `display-xl`, `display-lg`, `display-md`.

The path alias `@/` maps to `src/`. Dark mode is class-based.

### Design Reference

`.lovable/plan.md` is the source-of-truth design document covering the full palette, typography scale, motion principles, and all page sections. Consult it when making visual or layout decisions.

### Animation

Framer Motion `whileInView` triggers scroll-based entry animations on most sections. The `Nav` component uses a scroll event listener to toggle a sticky/transparent state.
