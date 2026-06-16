// ─── Route Configuration ─────────────────────────────────────────────────────
// Single source of truth for all application routes.
// Import from here — never hardcode paths in components.

export const ROUTES = {
  HOME:     '/',
  ABOUT:    '/about',
  SERVICES: '/services',
  CONTACT:  '/contact',
} as const

export type AppRoute = typeof ROUTES[keyof typeof ROUTES]

// ── Navigation Items ──────────────────────────────────────────────────────────
import type { NavItem } from '@/types'

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Home',
    href: ROUTES.HOME,
  },
  {
    label: 'About',
    href: ROUTES.ABOUT,
  },
  {
    label: 'Services',
    href: ROUTES.SERVICES,
  },
  {
    label: 'Contact',
    href: ROUTES.CONTACT,
  },
]

// ── Page Meta Defaults ────────────────────────────────────────────────────────
export const PAGE_META = {
  [ROUTES.HOME]: {
    title: 'Petro Marine — Marine Services & Solutions',
    description:
      'Petro Marine delivers world-class marine services and solutions across offshore operations, vessel management, fuel supply, and maritime logistics.',
  },
  [ROUTES.ABOUT]: {
    title: 'About Us — Petro Marine',
    description:
      'Decades of maritime expertise. Petro Marine is a trusted partner for energy and marine industries worldwide.',
  },
  [ROUTES.SERVICES]: {
    title: 'Our Services — Petro Marine',
    description:
      'Comprehensive marine services: offshore support, vessel operations, logistics, fuel supply, and technical consultancy.',
  },
  [ROUTES.CONTACT]: {
    title: 'Contact — Petro Marine',
    description:
      'Reach our team of maritime specialists. Offices available across key port locations worldwide.',
  },
} as const
