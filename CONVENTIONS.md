# Petro Marine — Developer Conventions

## Folder Structure

```
src/
├── app/                    # App shell: router, App.tsx, providers
├── features/               # Feature modules (one folder per page/domain)
│   ├── home/
│   │   ├── components/     # Sections & sub-components specific to this page
│   │   ├── hooks/          # Feature-local hooks (e.g. useHeroAnimation)
│   │   ├── types/          # Feature-local types
│   │   ├── HomePage.tsx    # Page root component
│   │   └── index.ts        # Barrel — export only what router needs
│   ├── about/
│   ├── services/
│   └── contact/
├── shared/                 # Reused across multiple pages
│   ├── layout/             # RootLayout, PageWrapper
│   ├── navigation/         # Navbar, MobileDrawer
│   ├── footer/             # Footer, FooterLinks
│   └── seo/                # useSeo hook, MetaTags component
├── ui/                     # Pure UI components — zero business logic
│   ├── primitives/         # Button, Badge, SectionLabel, Card, Input…
│   ├── maritime/           # Brand-specific: AnchorIcon, WavePattern, StatCard…
│   ├── motion/             # FadeIn, StaggerContainer, PageTransition
│   ├── forms/              # FormField, FormLabel, ContactForm structure
│   ├── data-display/       # Table, Stat, ServiceCard, TestimonialCard…
│   └── index.ts            # Barrel — re-exports all ui/*
├── config/
│   ├── routes.ts           # ROUTES constant + NAV_ITEMS + PAGE_META
│   └── brand.ts            # BRAND, COLORS, MOTION constants
├── hooks/                  # Global reusable hooks
├── types/                  # Global TypeScript types/interfaces
├── utils/                  # Pure functions (cn, slugify, animation helpers)
├── styles/
│   └── globals.css         # Tailwind directives + CSS variables + utilities
└── assets/
    ├── images/
    ├── icons/
    └── fonts/
```

---

## Naming Conventions

### Files & Folders
| Item | Convention | Example |
|------|-----------|---------|
| React component file | PascalCase + `.tsx` | `HeroSection.tsx` |
| Non-component file | camelCase + `.ts` | `useScrollPosition.ts` |
| Folder | kebab-case | `data-display/` |
| Barrel file | always `index.ts` | `index.ts` |
| Page component | `[Name]Page.tsx` | `AboutPage.tsx` |
| Section component | `[Name]Section.tsx` | `ServicesSection.tsx` |
| Shared layout | descriptive PascalCase | `RootLayout.tsx` |
| Hook | `use[Name].ts` | `useActiveSection.ts` |
| Type file | `[name].types.ts` or `types/index.ts` | `service.types.ts` |

### Component Conventions
```tsx
// ✅ Named export (not default)
export function HeroSection({ ... }: HeroSectionProps) { ... }

// ✅ Props interface above component
interface HeroSectionProps {
  className?: string
  headline: string
}

// ✅ cn() for conditional classes
className={cn('base-class', condition && 'extra', className)}

// ✅ Framer Motion via ui/motion wrappers — not inline motion.div
<FadeIn delay={0.1}><HeadlineText /></FadeIn>
```

---

## Import Paths

Always use path aliases. Never use relative `../../` beyond one level.

```ts
// ✅ Use aliases
import { Button }     from '@ui/primitives'
import { FadeIn }     from '@ui/motion'
import { ROUTES }     from '@config/routes'
import { cn }         from '@utils'
import type { Service } from '@/types'

// ❌ Avoid
import { Button } from '../../../../ui/primitives/Button'
```

### Alias Map
| Alias | Resolves to |
|-------|-------------|
| `@/` | `src/` |
| `@features/` | `src/features/` |
| `@shared/` | `src/shared/` |
| `@ui/` | `src/ui/` |
| `@config/` | `src/config/` |
| `@hooks/` | `src/hooks/` |
| `@types/` | `src/types/` |
| `@utils/` | `src/utils/` |
| `@styles/` | `src/styles/` |
| `@assets/` | `src/assets/` |

---

## Component Architecture Rules

1. **Page components** (`HomePage`, `AboutPage`) are **composition only** — they import and arrange sections. No logic inside page files.
2. **Section components** hold the layout and motion for one visual block. They may call hooks.
3. **UI primitives** (`Button`, `SectionLabel`, etc.) are **zero-business-logic**. No API calls, no routing, no feature data.
4. **Barrel files** (`index.ts`) export only what other modules need. Don't export implementation details.
5. **Types** — global types in `src/types/index.ts`. Feature-local types in `features/[name]/types/`.

---

## Tailwind Usage Rules

- Use brand tokens: `text-navy-900`, `bg-ocean-500`, `border-steel-200`
- Use `cn()` for all conditional classes
- Use utility classes from `globals.css`: `container-maritime`, `label-maritime`, `section-navy`
- Accent color (flame orange) max **10% of visible surface area**
- Border radius: max `rounded-lg` (8px) — prefer `rounded` (4px) or `rounded-sm` (2px)

---

## Motion Rules

- All scroll-reveal animations via `<FadeIn>` or `<StaggerContainer>`
- Page transitions via `<PageTransition>` in RootLayout
- Duration: 350–500ms standard, 800ms for hero elements
- Easing: `[0.25, 0.46, 0.45, 0.94]` (maritime ease)
- No bounce or spring — maritime brand = controlled, deliberate motion
- `viewport={{ once: true }}` on all scroll animations

---

## Magic MCP Usage

Components built with Magic MCP are placed in:
- `src/ui/maritime/` — brand-specific reusable components
- `src/features/[name]/components/` — page-specific sections

After generation, always:
1. Replace hardcoded colors with Tailwind brand tokens
2. Replace hardcoded strings with `BRAND` config constants
3. Add `className?: string` prop + `cn()` merge
4. Wrap motion in `<FadeIn>` or `<StaggerContainer>` wrappers
