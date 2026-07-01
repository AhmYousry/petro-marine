# Petro Marine — Architecture

## Path Aliases

```
@/          → ./src/
@features/  → ./src/features/
@shared/    → ./src/shared/
@ui/        → ./src/ui/
@config/    → ./src/config/
@utils/     → ./src/utils/
@types/     → ./src/types/
```

## Dependency Flow (direction of imports)

```
  ┌────────┐
  │ main   │
  └───┬────┘
      │
  ┌───▼────┐      ┌───────────┐
  │ App    │──────│ router    │
  └───┬────┘      └─────┬─────┘
      │                  │
      │         ┌────────┼────────┐
      │         │        │        │
      │    ┌────▼──┐ ┌──▼───┐ ┌──▼─────┐
      │    │ Home  │ │About │ │Services│ │Contact│
      │    └───┬───┘ └──┬───┘ └───┬────┘ └───┬───┘
      │        │        │         │           │
      │        └────────┼─────────┼───────────┘
      ▼                 ▼        ▼
  ┌────────────┐   ┌─────────────┐
  │ RootLayout │───│  Navbar     │
  └──────┬─────┘   │  MobileDraw │
         │         │  Footer     │
    ┌────▼────┐    └──────┬──────┘
    │ ScrollTo│           │
    │ Top     │    ┌──────▼──────┐
    │ Route   │    │  config/    │
    │ Fallback│    │  routes.ts  │
    └─────────┘    │  brand.ts   │
                   └──────┬──────┘
                   ┌──────▼──────┐
                   │  utils/cn   │
                   └─────────────┘
```

## Layer 0 — Config & Shared Types

| File | Dependencies |
|---|---|
| `config/theme.ts` | standalone |
| `config/routes.ts` | `@/types` (NavItem) |
| `config/brand.ts` | `./theme` (palette, motion) |
| `types/index.ts` | standalone |
| `utils/cn.ts` | clsx, tailwind-merge |
| `utils/index.ts` | re-exports cn + helpers |

## Layer 1 — UI Primitives & Motion

| File | Dependencies |
|---|---|
| `ui/primitives/Button.tsx` | `@/utils`, cva, `@radix-ui/react-slot` |
| `ui/primitives/SectionLabel.tsx` | `@/utils` |
| `ui/primitives/ScrollToTop.tsx` | `@/utils`, framer-motion, lucide-react |
| `ui/primitives/RouteFallback.tsx` | framer-motion |
| `ui/primitives/SocialIcons.tsx` | standalone |
| `ui/motion/FadeIn.tsx` | framer-motion |
| `ui/motion/StaggerContainer.tsx` | framer-motion |
| `ui/motion/PageTransition.tsx` | framer-motion, react-router-dom |

## Layer 2 — Shared Layout

| File | Dependencies |
|---|---|
| `shared/navigation/Navbar.tsx` | `@/utils`, `@config/routes`, `./MobileDrawer` |
| `shared/navigation/MobileDrawer.tsx` | `@/utils`, `@config/routes`, `@config/brand` |
| `shared/footer/Footer.tsx` | `@/utils`, `@config/brand`, `@config/routes`, `@ui/primitives/SocialIcons` |
| `shared/layout/RootLayout.tsx` | `@shared/navigation`, `@shared/footer`, `@ui/primitives/ScrollToTop`, `@ui/primitives/RouteFallback` |

## Layer 3 — App Shell

| File | Dependencies |
|---|---|
| `app/App.tsx` | `./router`, framer-motion |
| `app/router.tsx` | `@shared/layout`, `@config/routes`; lazy → all 4 `@features/*` |

## Layer 4 — Feature Data

| File | Dependencies |
|---|---|
| `features/about/data/company.ts` | lucide-react (icon types only) |
| `features/services/data/services.ts` | lucide-react (icon types only) |
| `features/contact/data/contact.ts` | lucide-react (icon types only) |

## Layer 5 — Page Features

All 4 features follow the same pattern: `Page.tsx` composes local components from `./components/`, which import from `@/utils`, `@config/routes`, and feature-specific `../data/`.

| Feature | Local Components |
|---|---|
| **Home** | HeroSection, AboutPreview, ServicesPreview, WhyChooseUs |
| **About** | CompanyStory, Mission, Statistics, PortCoverage, TrustIndicators |
| **Services** | ServicesHero, ServicesOverview, ServiceSection, ServicesCTA |
| **Contact** | ContactHero, ContactForm, ContactInfo, MapPlaceholder, QuoteCTA |

## Key Rules

- Feature components never import from sibling features
- Feature components import config, utils, types, shared
- `@/utils/cn()` for all conditional classNames
- `@config/routes` ROUTES object — never hardcode paths
- `lazy()` loading for all route pages (chunked per feature)
- All framer-motion animations respect `prefers-reduced-motion` via `MotionConfig`
