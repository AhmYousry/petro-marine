/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║  PETRO MARINE — Brand Configuration                                     ║
 * ║  Central brand constants: identity, contact, social, certifications.    ║
 * ║  For design tokens, import from @config/theme.                          ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

import { palette, motion as motionTokens } from './theme'

// ═══════════════════════════════════════════════════════════════════════════════
// BRAND IDENTITY
// ═══════════════════════════════════════════════════════════════════════════════

export const BRAND = {
  name:        'Petro Marine',
  shortName:   'Petro Marine',
  legalName:   'Egyptian Cypriot for Marine & Petroleum Services Co. (Petromarine)',
  tagline:     'Marine Services & Solutions',
  description: 'World-class marine services across offshore operations, vessel management, fuel supply, and maritime logistics.',
  founded:     1987,
  logoPath:    '/site-logo.png',

  contact: {
    email:    'petromarine@petromarine-alex.com',
    phone:    '+20 3 484 1211',
    address:  '95, 26th July Avenue',
    city:     'Azarita',
    state:    'Alexandria',
    zip:      '',
    country:  'Egypt',
    mapQuery: '95, 26th July Avenue, Azarita, Alexandria, Egypt',
  },

  social: {
    linkedin: 'https://linkedin.com/company/petro-marine',
    twitter:  'https://twitter.com/petromarine',
    youtube:  'https://youtube.com/@petromarine',
  },

  certifications: [
    { id: 'iso-9001',    label: 'ISO 9001:2015', description: 'Quality Management'       },
    { id: 'iso-14001',   label: 'ISO 14001',     description: 'Environmental Management' },
    { id: 'ism-code',    label: 'ISM Code',       description: 'Safety Management'        },
    { id: 'ohsas-18001', label: 'OHSAS 18001',   description: 'Occupational Health'      },
  ],
} as const

// ═══════════════════════════════════════════════════════════════════════════════
// BRAND COLORS  (quick-access — full palette in @config/theme)
// ═══════════════════════════════════════════════════════════════════════════════

export const COLORS = {
  // Primary brand
  navyPrimary:  palette.navy[900],   // #1B2B4B — Deep Navy (logo shield, wordmark)
  oceanBlue:    palette.ocean[500],  // #2A5FA5 — Ocean Blue (ribbon, banner)
  steelGrey:    palette.steel[400],  // #8A9BB5 — Steel Grey (shield gradient, neutral)

  // Accent brand
  flameOrange:  palette.flame[500],  // #E8520A — Flame Orange (torch core, CTAs)
  emberGold:    palette.gold[500],   // #F7A81A — Ember Gold (torch outer glow)

  // Surfaces
  arcticWhite:  palette.smoke[50],   // #FAFBFE — Primary light background
  white:        palette.white,       // #FFFFFF

  // Shorthands
  primary:      palette.navy[900],
  secondary:    palette.ocean[500],
  accent:       palette.flame[500],
  accentAlt:    palette.gold[500],
  neutral:      palette.steel[400],
} as const

// ═══════════════════════════════════════════════════════════════════════════════
// MOTION  (Framer Motion ready)
// ═══════════════════════════════════════════════════════════════════════════════

export const MOTION = motionTokens

// ═══════════════════════════════════════════════════════════════════════════════
// STATISTICS  (used in Hero/About sections)
// ═══════════════════════════════════════════════════════════════════════════════

export const STATS = [
  { id: 'experience',  value: '25+',  unit: '',    label: 'Years Experience',    description: 'Operating since 1998' },
  { id: 'vessels',     value: '120+', unit: '',    label: 'Vessels Managed',     description: 'Across global waters'  },
  { id: 'ports',       value: '40',   unit: '',    label: 'Ports Covered',       description: 'Worldwide network'     },
  { id: 'uptime',      value: '99.8', unit: '%',   label: 'Operational Uptime',  description: 'Industry-leading'      },
] as const

// ═══════════════════════════════════════════════════════════════════════════════
// SERVICES  (used in Navbar, Footer, Services page)
// ═══════════════════════════════════════════════════════════════════════════════

export const SERVICE_CATEGORIES = [
  { id: 'vessel-operations', label: 'Vessel Operations',  icon: 'Anchor'    },
  { id: 'offshore-support',  label: 'Offshore Support',   icon: 'Waves'     },
  { id: 'marine-logistics',  label: 'Marine Logistics',   icon: 'Container' },
  { id: 'fuel-supply',       label: 'Fuel Supply',        icon: 'Fuel'      },
  { id: 'maintenance',       label: 'Maintenance & Repair', icon: 'Wrench'  },
  { id: 'consultancy',       label: 'Maritime Consultancy', icon: 'Award'   },
] as const

// ═══════════════════════════════════════════════════════════════════════════════
// SEO DEFAULTS
// ═══════════════════════════════════════════════════════════════════════════════

export const SEO = {
  titleTemplate: '%s | Petro Marine',
  defaultTitle:  'Petro Marine — Marine Services & Solutions',
  description:   'World-class marine services across offshore operations, vessel management, fuel supply, and maritime logistics. Trusted since 1998.',
  keywords: [
    'marine services', 'offshore support', 'vessel management',
    'maritime logistics', 'fuel supply', 'marine consultancy',
    'petro marine', 'shipping', 'maritime',
  ],
  ogImage: '/og-image.jpg',
} as const
