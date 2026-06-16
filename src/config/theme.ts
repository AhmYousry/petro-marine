/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║  PETRO MARINE — TypeScript Design Tokens                                ║
 * ║  Typed JS exports of the design system for use in components,           ║
 * ║  Framer Motion variants, and dynamic styling.                           ║
 * ║  Mirrors tailwind.config.js and tokens.css exactly.                     ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

// ═══════════════════════════════════════════════════════════════════════════════
// COLOR PALETTE
// ═══════════════════════════════════════════════════════════════════════════════

export const palette = {
  navy: {
    50:  '#EEF1F8',
    100: '#D5DCEE',
    200: '#AABADE',
    300: '#7F97CD',
    400: '#5475BC',
    500: '#2A5FA5',
    600: '#234F8A',
    700: '#1B3E6F',
    800: '#142E54',
    900: '#1B2B4B',
    950: '#0D1628',
  },
  ocean: {
    50:  '#EBF3FF',
    100: '#C8DFFF',
    200: '#91BFFF',
    300: '#5A9EFF',
    400: '#4A82D4',
    500: '#2A5FA5',
    600: '#234D87',
    700: '#1C3B69',
    800: '#14294B',
    900: '#0D172D',
    950: '#060C18',
  },
  steel: {
    50:  '#F4F7FA',
    75:  '#EDF1F7',
    100: '#E4EAF2',
    200: '#C4CDD8',
    300: '#A0AEBF',
    400: '#8A9BB5',
    500: '#6B7FA0',
    600: '#556382',
    700: '#404A64',
    800: '#2B3246',
    900: '#161928',
    950: '#0A0C14',
  },
  flame: {
    50:  '#FFF6EE',
    100: '#FFE8D0',
    200: '#FFD0A0',
    300: '#FFB870',
    400: '#FFA040',
    500: '#E8520A',
    600: '#C44208',
    700: '#A03206',
    800: '#7C2204',
    900: '#581202',
    950: '#340901',
  },
  gold: {
    50:  '#FFFBEB',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#F7A81A',
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F',
    950: '#451A03',
  },
  smoke: {
    50:  '#FAFBFE',
    100: '#F4F6FC',
    200: '#E8EDF8',
    300: '#D6DCF0',
    400: '#C4CBE8',
    500: '#B2BAE0',
  },
  white: '#FFFFFF',
  black: '#000000',
} as const

// ═══════════════════════════════════════════════════════════════════════════════
// SEMANTIC COLOR TOKENS
// ═══════════════════════════════════════════════════════════════════════════════

export const colors = {
  // Brand primaries
  brand: {
    primary:   palette.navy[900],    // #1B2B4B — Deep Navy
    secondary: palette.ocean[500],   // #2A5FA5 — Ocean Blue
    accent:    palette.flame[500],   // #E8520A — Flame Orange
    accentAlt: palette.gold[500],    // #F7A81A — Ember Gold
    neutral:   palette.steel[400],   // #8A9BB5 — Steel Grey
  },

  // Text
  text: {
    primary:      palette.navy[900],
    secondary:    palette.steel[600],
    tertiary:     palette.steel[400],
    disabled:     palette.steel[300],
    inverse:      palette.white,
    inverseMuted: 'rgba(255,255,255,0.72)',
    inverseFaint: 'rgba(255,255,255,0.45)',
    flame:        palette.flame[500],
    gold:         palette.gold[500],
    ocean:        palette.ocean[500],
  },

  // Surfaces
  surface: {
    base:       palette.white,
    raised:     palette.smoke[50],
    overlay:    palette.smoke[100],
    sunken:     palette.smoke[200],
    dark:       palette.navy[900],
    darkRaised: palette.navy[700],
    darkMuted:  palette.navy[950],
  },

  // Borders
  border: {
    light:      palette.smoke[200],
    default:    palette.steel[200],
    strong:     palette.steel[300],
    navy:       'rgba(42,95,165,0.20)',
    dark:       'rgba(255,255,255,0.10)',
    darkStrong: 'rgba(255,255,255,0.18)',
    flame:      palette.flame[500],
    gold:       palette.gold[500],
  },
} as const

// ═══════════════════════════════════════════════════════════════════════════════
// TYPOGRAPHY
// ═══════════════════════════════════════════════════════════════════════════════

export const typography = {
  fonts: {
    display: "'Montserrat', system-ui, sans-serif",
    body:    "'Inter', system-ui, sans-serif",
    mono:    "'JetBrains Mono', Menlo, monospace",
  },

  // Font size scale (rem)
  size: {
    display: {
      '2xl': '4.5rem',     // 72px
      xl:    '3.75rem',    // 60px
      lg:    '3rem',       // 48px
      md:    '2.25rem',    // 36px
      sm:    '1.875rem',   // 30px
      xs:    '1.5rem',     // 24px
    },
    body: {
      xl: '1.25rem',       // 20px
      lg: '1.125rem',      // 18px
      md: '1rem',          // 16px
      sm: '0.9375rem',     // 15px
      xs: '0.875rem',      // 14px
    },
    label: {
      '2xl': '1rem',       // 16px
      xl:    '0.875rem',   // 14px
      lg:    '0.8125rem',  // 13px
      md:    '0.75rem',    // 12px
      sm:    '0.6875rem',  // 11px
    },
    data: {
      xl: '1.5rem',
      lg: '1.25rem',
      md: '1rem',
      sm: '0.875rem',
    },
  },

  // Font weights
  weight: {
    regular:   400,
    medium:    500,
    semibold:  600,
    bold:      700,
    extrabold: 800,
    black:     900,
  },

  // Line heights
  leading: {
    displayTight:  1.06,
    displayNormal: 1.22,
    heading:       1.30,
    body:          1.65,
    bodyRelaxed:   1.70,
    label:         1.50,
  },

  // Letter spacings
  tracking: {
    displayTight:  '-0.025em',
    displayNormal: '-0.010em',
    bodyTight:     '-0.005em',
    body:           '0em',
    labelSm:        '0.08em',
    labelMd:        '0.12em',
    labelLg:        '0.18em',
    labelXl:        '0.25em',
  },

  // Fluid (clamp-based) sizes
  fluid: {
    hero:    'clamp(2.5rem, 5vw + 1rem, 4.5rem)',
    title:   'clamp(1.875rem, 3vw + 0.5rem, 3rem)',
    heading: 'clamp(1.5rem, 2.5vw + 0.25rem, 2.25rem)',
    sub:     'clamp(1.125rem, 1.5vw, 1.5rem)',
    body:    'clamp(0.9375rem, 1vw + 0.25rem, 1.125rem)',
  },
} as const

// ═══════════════════════════════════════════════════════════════════════════════
// SPACING
// ═══════════════════════════════════════════════════════════════════════════════

export const spacing = {
  // Base 4px grid
  0:    '0px',
  px:   '1px',
  0.5:  '0.125rem',
  1:    '0.25rem',
  2:    '0.5rem',
  3:    '0.75rem',
  4:    '1rem',
  5:    '1.25rem',
  6:    '1.5rem',
  7:    '1.75rem',
  8:    '2rem',
  10:   '2.5rem',
  12:   '3rem',
  14:   '3.5rem',
  16:   '4rem',
  18:   '4.5rem',
  20:   '5rem',
  24:   '6rem',
  28:   '7rem',
  32:   '8rem',
  40:   '10rem',
  48:   '12rem',
  64:   '16rem',

  // Semantic section padding
  section: {
    xs: '3rem',
    sm: '4.5rem',
    md: '6rem',
    lg: '8rem',
    xl: '10rem',
  },

  // Container padding
  container: {
    mobile:  '1.5rem',
    tablet:  '2rem',
    desktop: '3rem',
    wide:    '4rem',
  },
} as const

// ═══════════════════════════════════════════════════════════════════════════════
// BORDER RADIUS
// ═══════════════════════════════════════════════════════════════════════════════

export const radius = {
  none: '0px',
  xs:   '2px',
  sm:   '4px',
  md:   '6px',
  lg:   '8px',
  xl:   '12px',
  '2xl': '16px',
  '3xl': '24px',
  '4xl': '32px',
  full: '9999px',

  // Component-specific
  button: '6px',
  input:  '4px',
  card:   '8px',
  cardLg: '12px',
  badge:  '4px',
  modal:  '12px',
} as const

// ═══════════════════════════════════════════════════════════════════════════════
// SHADOWS
// ═══════════════════════════════════════════════════════════════════════════════

export const shadows = {
  // Elevation
  xs:    '0 1px 2px rgba(27,43,75,0.08)',
  sm:    '0 1px 3px rgba(27,43,75,0.10), 0 1px 2px rgba(27,43,75,0.06)',
  md:    '0 4px 6px rgba(27,43,75,0.07), 0 2px 4px rgba(27,43,75,0.05)',
  lg:    '0 4px 16px rgba(27,43,75,0.14), 0 2px 6px rgba(27,43,75,0.08)',
  xl:    '0 8px 32px rgba(27,43,75,0.18), 0 4px 12px rgba(27,43,75,0.10)',
  '2xl': '0 16px 48px rgba(27,43,75,0.22), 0 8px 24px rgba(27,43,75,0.12)',
  '3xl': '0 24px 64px rgba(27,43,75,0.26), 0 12px 32px rgba(27,43,75,0.14)',

  // Cards
  card:      '0 2px 8px rgba(27,43,75,0.08), 0 1px 3px rgba(27,43,75,0.05)',
  cardHover: '0 8px 24px rgba(27,43,75,0.16), 0 4px 8px rgba(27,43,75,0.08)',

  // Brand glows
  navyGlow:   '0 0 40px rgba(42,95,165,0.22), 0 0 80px rgba(27,43,75,0.12)',
  navyGlowSm: '0 0 20px rgba(42,95,165,0.18)',
  flameGlow:  '0 0 30px rgba(232,82,10,0.30), 0 0 60px rgba(232,82,10,0.12)',
  flameGlowSm:'0 0 16px rgba(232,82,10,0.25)',
  goldGlow:   '0 0 30px rgba(247,168,26,0.30)',

  // Glass
  glass:     '0 8px 32px rgba(27,43,75,0.12), inset 0 1px 0 rgba(255,255,255,0.15)',
  glassDark: '0 8px 32px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.08)',

  // Focus
  focusNavy:  '0 0 0 3px rgba(42,95,165,0.35)',
  focusFlame: '0 0 0 3px rgba(232,82,10,0.30)',

  none: 'none',
} as const

// ═══════════════════════════════════════════════════════════════════════════════
// MOTION / ANIMATION
// ═══════════════════════════════════════════════════════════════════════════════

export const motion = {
  // Easing functions
  easing: {
    linear:     'linear',
    in:         [0.4, 0, 1, 1]          as [number, number, number, number],
    out:        [0, 0, 0.2, 1]          as [number, number, number, number],
    inOut:      [0.4, 0, 0.2, 1]        as [number, number, number, number],
    maritime:   [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    outExpo:    [0.19, 1.00, 0.22, 1.00] as [number, number, number, number],
    outQuart:   [0.25, 1.00, 0.50, 1.00] as [number, number, number, number],
    spring:     [0.34, 1.56, 0.64, 1.00] as [number, number, number, number],
    // String forms (Framer Motion)
    easeOut:    'easeOut'    as const,
    easeIn:     'easeIn'     as const,
    easeInOut:  'easeInOut'  as const,
  },

  // Duration (seconds — Framer Motion)
  duration: {
    instant:  0,
    fast:     0.1,
    normal:   0.2,
    moderate: 0.35,
    slow:     0.5,
    slower:   0.7,
    slowest:  1.0,
  },

  // Stagger delays (seconds — Framer Motion)
  stagger: {
    fastest: 0.04,
    fast:    0.06,
    normal:  0.10,
    slow:    0.15,
    slower:  0.20,
  },

  // Common transition presets
  transition: {
    base:     { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] },
    fast:     { duration: 0.15, ease: 'easeOut' as const },
    slow:     { duration: 0.60, ease: 'easeOut' as const },
    spring:   { type: 'spring' as const, stiffness: 300, damping: 30 },
    page:     { duration: 0.32, ease: 'easeInOut' as const },
    drawer:   { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] },
  },
} as const

// ═══════════════════════════════════════════════════════════════════════════════
// Z-INDEX
// ═══════════════════════════════════════════════════════════════════════════════

export const zIndex = {
  below:    -1,
  base:      0,
  raised:   10,
  dropdown: 20,
  sticky:   30,
  overlay:  40,
  modal:    50,
  navbar:   60,
  drawer:   70,
  tooltip:  80,
  toast:    90,
  max:      9999,
} as const

// ═══════════════════════════════════════════════════════════════════════════════
// BREAKPOINTS (px values for JS logic)
// ═══════════════════════════════════════════════════════════════════════════════

export const breakpoints = {
  xs:   480,
  sm:   640,
  md:   768,
  lg:   1024,
  xl:   1280,
  '2xl': 1440,
  '3xl': 1600,
} as const

// ═══════════════════════════════════════════════════════════════════════════════
// COMPONENT TOKENS
// ═══════════════════════════════════════════════════════════════════════════════

export const components = {
  navbar: {
    height:          72,
    heightScrolled:  64,
    scrollThreshold: 60,
    zIndex:          zIndex.navbar,
  },

  button: {
    height: { sm: 36, md: 44, lg: 52, xl: 60 },
    paddingX: { sm: '1rem', md: '1.5rem', lg: '2rem', xl: '2.5rem' },
    radius: radius.button,
  },

  card: {
    radius:  radius.card,
    radiusLg: radius.cardLg,
    shadow:  shadows.card,
    shadowHover: shadows.cardHover,
  },

  input: {
    height: 48,
    paddingX: '1rem',
    radius: radius.input,
  },

  scrollToTop: {
    scrollThreshold: 400,
    zIndex: zIndex.raised,
  },
} as const

// ═══════════════════════════════════════════════════════════════════════════════
// COMMON FRAMER MOTION VARIANTS
// ═══════════════════════════════════════════════════════════════════════════════

export const variants = {
  fadeInUp: {
    hidden:  { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
  },
  fadeInDown: {
    hidden:  { opacity: 0, y: -24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
  },
  fadeInLeft: {
    hidden:  { opacity: 0, x: -32 },
    visible: { opacity: 1, x: 0,  transition: { duration: 0.5, ease: 'easeOut' as const } },
  },
  fadeInRight: {
    hidden:  { opacity: 0, x: 32 },
    visible: { opacity: 1, x: 0,  transition: { duration: 0.5, ease: 'easeOut' as const } },
  },
  scaleIn: {
    hidden:  { opacity: 0, scale: 0.94 },
    visible: { opacity: 1, scale: 1,   transition: { duration: 0.4, ease: 'easeOut' as const } },
  },

  // Stagger container
  staggerContainer: {
    hidden:  {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren:   0.1,
      },
    },
  },

  // Stagger item
  staggerItem: {
    hidden:  { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
  },

  // Page transition
  page: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit:    { opacity: 0, y: -6 },
  },

  // Drawer (from right)
  drawer: {
    hidden:  { x: '100%' },
    visible: { x: '0%', transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] } },
    exit:    { x: '100%', transition: { duration: 0.28, ease: [0.55, 0.0, 1, 0.45] as [number,number,number,number] } },
  },

  // Backdrop
  backdrop: {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
    exit:    { opacity: 0, transition: { duration: 0.2 } },
  },
} as const

// ═══════════════════════════════════════════════════════════════════════════════
// GRADIENTS (CSS string values for inline styles)
// ═══════════════════════════════════════════════════════════════════════════════

export const gradients = {
  navy:         'linear-gradient(135deg, #0D1628 0%, #1B2B4B 40%, #1B3E6F 100%)',
  navySoft:     'linear-gradient(180deg, #1B2B4B 0%, #1B3E6F 100%)',
  ocean:        'linear-gradient(180deg, #0D172D 0%, #1B2B4B 100%)',
  flame:        'linear-gradient(135deg, #E8520A 0%, #F7A81A 100%)',
  flameWarm:    'linear-gradient(135deg, #C44208 0%, #E8520A 45%, #F7A81A 100%)',
  steel:        'linear-gradient(180deg, #F4F7FA 0%, #E4EAF2 100%)',
  hero:         'linear-gradient(135deg, #0D1628 0%, #1B2B4B 50%, #1C3B69 100%)',
  textNavy:     'linear-gradient(135deg, #2A5FA5 0%, #1B3E6F 100%)',
  textFlame:    'linear-gradient(135deg, #E8520A 0%, #F7A81A 100%)',
  overlayDark:  'linear-gradient(to bottom, rgba(13,22,40,0) 0%, rgba(13,22,40,0.85) 100%)',
  overlayLeft:  'linear-gradient(to right, rgba(27,43,75,0.95) 0%, rgba(27,43,75,0) 60%)',
} as const

// ═══════════════════════════════════════════════════════════════════════════════
// MASTER THEME EXPORT
// ═══════════════════════════════════════════════════════════════════════════════

export const theme = {
  palette,
  colors,
  typography,
  spacing,
  radius,
  shadows,
  motion,
  zIndex,
  breakpoints,
  components,
  variants,
  gradients,
} as const

export type Theme         = typeof theme
export type PaletteKey    = keyof typeof palette
export type ColorToken    = typeof colors
export type MotionEasing  = typeof motion.easing
export type ZIndexToken   = typeof zIndex
export type BreakpointKey = keyof typeof breakpoints
