/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // ─── Screens (Breakpoints) ──────────────────────────────────────────────
    screens: {
      'xs':  '480px',
      'sm':  '640px',
      'md':  '768px',
      'lg':  '1024px',
      'xl':  '1280px',
      '2xl': '1440px',
      '3xl': '1600px',
    },

    // ─── Container ──────────────────────────────────────────────────────────
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm:      '2rem',
        lg:      '3rem',
        xl:      '4rem',
        '2xl':   '5rem',
      },
    },

    extend: {
      // ─────────────────────────────────────────────────────────────────────
      // COLORS
      // ─────────────────────────────────────────────────────────────────────
      colors: {

        // ── Navy — Primary Brand ────────────────────────────────────────────
        // Deep Navy from logo shield + wordmark
        navy: {
          50:   '#EEF1F8',
          100:  '#D5DCEE',
          200:  '#AABADE',
          300:  '#7F97CD',
          400:  '#5475BC',
          500:  '#2A5FA5',
          600:  '#234F8A',
          700:  '#1B3E6F',
          800:  '#142E54',
          900:  '#1B2B4B',   // ← Primary brand navy
          950:  '#0D1628',
        },

        // ── Ocean — Secondary Brand ─────────────────────────────────────────
        // Mid ocean blue from ribbon & banner
        ocean: {
          50:   '#EBF3FF',
          100:  '#C8DFFF',
          200:  '#91BFFF',
          300:  '#5A9EFF',
          400:  '#4A82D4',
          500:  '#2A5FA5',   // ← Brand ocean blue
          600:  '#234D87',
          700:  '#1C3B69',
          800:  '#14294B',
          900:  '#0D172D',
          950:  '#060C18',
        },

        // ── Steel — Neutral Palette ─────────────────────────────────────────
        // From shield metallic gradient & logo typography
        steel: {
          50:   '#F4F7FA',
          75:   '#EDF1F7',
          100:  '#E4EAF2',
          200:  '#C4CDD8',
          300:  '#A0AEBF',
          400:  '#8A9BB5',   // ← Brand steel grey
          500:  '#6B7FA0',
          600:  '#556382',
          700:  '#404A64',
          800:  '#2B3246',
          900:  '#161928',
          950:  '#0A0C14',
        },

        // ── Flame — CTA / Accent ────────────────────────────────────────────
        // From the torch flame: hot orange core
        flame: {
          50:   '#FFF6EE',
          100:  '#FFE8D0',
          200:  '#FFD0A0',
          300:  '#FFB870',
          400:  '#FFA040',
          500:  '#E8520A',   // ← Brand flame orange
          600:  '#C44208',
          700:  '#A03206',
          800:  '#7C2204',
          900:  '#581202',
          950:  '#340901',
        },

        // ── Gold — Secondary Accent ─────────────────────────────────────────
        // From the torch flame: ember gold outer
        gold: {
          50:   '#FFFBEB',
          100:  '#FEF3C7',
          200:  '#FDE68A',
          300:  '#FCD34D',
          400:  '#FBBF24',
          500:  '#F7A81A',   // ← Brand ember gold
          600:  '#D97706',
          700:  '#B45309',
          800:  '#92400E',
          900:  '#78350F',
          950:  '#451A03',
        },

        // ── Smoke — Light Surface ───────────────────────────────────────────
        // Arctic white with navy undertone for light sections
        smoke: {
          50:   '#FAFBFE',
          100:  '#F4F6FC',
          200:  '#E8EDF8',
          300:  '#D6DCF0',
          400:  '#C4CBE8',
          500:  '#B2BAE0',
        },

        // ── Semantic States ─────────────────────────────────────────────────
        success: {
          50:   '#ECFDF5',
          500:  '#10B981',
          700:  '#047857',
        },
        warning: {
          50:   '#FFFBEB',
          500:  '#F59E0B',
          700:  '#B45309',
        },
        error: {
          50:   '#FEF2F2',
          500:  '#EF4444',
          700:  '#B91C1C',
        },
        info: {
          50:   '#EFF6FF',
          500:  '#3B82F6',
          700:  '#1D4ED8',
        },

        // ── shadcn/ui Semantic Tokens ───────────────────────────────────────
        border:      'hsl(var(--border))',
        input:       'hsl(var(--input))',
        ring:        'hsl(var(--ring))',
        background:  'hsl(var(--background))',
        foreground:  'hsl(var(--foreground))',
        primary: {
          DEFAULT:    'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT:    'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT:    'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT:    'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT:    'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT:    'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT:    'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
      },

      // ─────────────────────────────────────────────────────────────────────
      // TYPOGRAPHY
      // ─────────────────────────────────────────────────────────────────────
      fontFamily: {
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Menlo', 'monospace'],
      },

      fontSize: {
        // Display — Montserrat, tight tracking, used for hero/section headlines
        'display-2xl': ['4.5rem',    { lineHeight: '1.06', letterSpacing: '-0.025em', fontWeight: '800' }],
        'display-xl':  ['3.75rem',   { lineHeight: '1.10', letterSpacing: '-0.022em', fontWeight: '700' }],
        'display-lg':  ['3rem',      { lineHeight: '1.14', letterSpacing: '-0.018em', fontWeight: '700' }],
        'display-md':  ['2.25rem',   { lineHeight: '1.22', letterSpacing: '-0.015em', fontWeight: '600' }],
        'display-sm':  ['1.875rem',  { lineHeight: '1.30', letterSpacing: '-0.010em', fontWeight: '600' }],
        'display-xs':  ['1.5rem',    { lineHeight: '1.38', letterSpacing: '-0.008em', fontWeight: '600' }],

        // Body — Inter, comfortable reading
        'body-xl':  ['1.25rem',   { lineHeight: '1.70', letterSpacing: '-0.005em' }],
        'body-lg':  ['1.125rem',  { lineHeight: '1.70', letterSpacing: '-0.003em' }],
        'body-md':  ['1rem',      { lineHeight: '1.65' }],
        'body-sm':  ['0.9375rem', { lineHeight: '1.60' }],
        'body-xs':  ['0.875rem',  { lineHeight: '1.55' }],

        // Label — uppercase tracking, used for section eyebrows & tags
        'label-2xl': ['1rem',      { lineHeight: '1.5', letterSpacing: '0.18em' }],
        'label-xl':  ['0.875rem',  { lineHeight: '1.5', letterSpacing: '0.15em' }],
        'label-lg':  ['0.8125rem', { lineHeight: '1.5', letterSpacing: '0.12em' }],
        'label-md':  ['0.75rem',   { lineHeight: '1.5', letterSpacing: '0.10em' }],
        'label-sm':  ['0.6875rem', { lineHeight: '1.5', letterSpacing: '0.08em' }],

        // Data — JetBrains Mono, for specs/stats
        'data-xl': ['1.5rem',   { lineHeight: '1.3', fontWeight: '500' }],
        'data-lg': ['1.25rem',  { lineHeight: '1.3', fontWeight: '500' }],
        'data-md': ['1rem',     { lineHeight: '1.4', fontWeight: '400' }],
        'data-sm': ['0.875rem', { lineHeight: '1.4', fontWeight: '400' }],
      },

      lineHeight: {
        'snug-display': '1.06',
        'tight-display': '1.14',
        'normal-display': '1.22',
        'relaxed-body': '1.70',
      },

      letterSpacing: {
        'tightest':  '-0.025em',
        'tighter':   '-0.015em',
        'normal':    '0em',
        'wide':      '0.05em',
        'wider':     '0.08em',
        'widest':    '0.12em',
        'widest-2':  '0.18em',
        'widest-3':  '0.25em',
      },

      fontWeight: {
        'thin':       '100',
        'light':      '300',
        'regular':    '400',
        'medium':     '500',
        'semibold':   '600',
        'bold':       '700',
        'extrabold':  '800',
        'black':      '900',
      },

      // ─────────────────────────────────────────────────────────────────────
      // SPACING
      // ─────────────────────────────────────────────────────────────────────
      spacing: {
        // Sub-unit fine grain
        '0.5':  '0.125rem',   //  2px
        '1.5':  '0.375rem',   //  6px
        '2.5':  '0.625rem',   // 10px
        '3.5':  '0.875rem',   // 14px
        '4.5':  '1.125rem',   // 18px

        // Extended scale
        '13':   '3.25rem',    // 52px
        '15':   '3.75rem',    // 60px
        '17':   '4.25rem',    // 68px
        '18':   '4.5rem',     // 72px
        '19':   '4.75rem',    // 76px
        '21':   '5.25rem',    // 84px
        '22':   '5.5rem',     // 88px
        '23':   '5.75rem',    // 92px
        '25':   '6.25rem',    // 100px
        '26':   '6.5rem',     // 104px
        '27':   '6.75rem',    // 108px
        '28':   '7rem',       // 112px
        '30':   '7.5rem',     // 120px
        '34':   '8.5rem',     // 136px
        '38':   '9.5rem',     // 152px
        '42':   '10.5rem',    // 168px
        '46':   '11.5rem',    // 184px
        '50':   '12.5rem',    // 200px
        '54':   '13.5rem',    // 216px
        '58':   '14.5rem',    // 232px
        '62':   '15.5rem',    // 248px
        '66':   '16.5rem',    // 264px
        '70':   '17.5rem',    // 280px
        '80':   '20rem',      // 320px
        '88':   '22rem',      // 352px
        '96':   '24rem',      // 384px
        '104':  '26rem',      // 416px
        '112':  '28rem',      // 448px
        '120':  '30rem',      // 480px
        '128':  '32rem',      // 512px
        '144':  '36rem',      // 576px
        '160':  '40rem',      // 640px
        '192':  '48rem',      // 768px
        '224':  '56rem',      // 896px
        '256':  '64rem',      // 1024px

        // Named semantic spacers
        'section-xs': '3rem',
        'section-sm': '4.5rem',
        'section-md': '6rem',
        'section-lg': '8rem',
        'section-xl': '10rem',
      },

      // ─────────────────────────────────────────────────────────────────────
      // BORDER RADIUS
      // ─────────────────────────────────────────────────────────────────────
      borderRadius: {
        'none':    '0px',
        'xs':      '2px',     // Technical / sharp — spec tables, data cells
        'sm':      '4px',     // Input fields, small tags
        'DEFAULT': '4px',
        'md':      '6px',     // Buttons, chips
        'lg':      '8px',     // Cards, panels
        'xl':      '12px',    // Modal, featured card
        '2xl':     '16px',    // Hero card, media card
        '3xl':     '24px',    // Large decorative card
        '4xl':     '32px',    // Pill-card
        'full':    '9999px',  // Badge, pill button
      },

      // ─────────────────────────────────────────────────────────────────────
      // SHADOWS
      // ─────────────────────────────────────────────────────────────────────
      boxShadow: {
        // Elevation system — navy-tinted shadows
        'elevation-xs':  '0 1px 2px rgba(27,43,75,0.08)',
        'elevation-low': '0 1px 3px rgba(27,43,75,0.10), 0 1px 2px rgba(27,43,75,0.06)',
        'elevation-md':  '0 4px 6px rgba(27,43,75,0.07), 0 2px 4px rgba(27,43,75,0.05)',
        'elevation-medium': '0 4px 16px rgba(27,43,75,0.14), 0 2px 6px rgba(27,43,75,0.08)',
        'elevation-high':   '0 8px 32px rgba(27,43,75,0.18), 0 4px 12px rgba(27,43,75,0.10)',
        'elevation-xl':     '0 16px 48px rgba(27,43,75,0.22), 0 8px 24px rgba(27,43,75,0.12)',
        'elevation-2xl':    '0 24px 64px rgba(27,43,75,0.26), 0 12px 32px rgba(27,43,75,0.14)',

        // Brand glow effects
        'navy-glow':      '0 0 40px rgba(42,95,165,0.22), 0 0 80px rgba(27,43,75,0.12)',
        'navy-glow-sm':   '0 0 20px rgba(42,95,165,0.18)',
        'ocean-glow':     '0 0 30px rgba(42,95,165,0.30)',
        'flame-glow':     '0 0 30px rgba(232,82,10,0.30), 0 0 60px rgba(232,82,10,0.12)',
        'flame-glow-sm':  '0 0 16px rgba(232,82,10,0.25)',
        'gold-glow':      '0 0 30px rgba(247,168,26,0.30)',

        // Card states
        'card':          '0 2px 8px rgba(27,43,75,0.08), 0 1px 3px rgba(27,43,75,0.05)',
        'card-hover':    '0 8px 24px rgba(27,43,75,0.16), 0 4px 8px rgba(27,43,75,0.08)',
        'card-active':   '0 2px 6px rgba(27,43,75,0.12)',

        // Glass effect
        'glass':         '0 8px 32px rgba(27,43,75,0.12), inset 0 1px 0 rgba(255,255,255,0.15)',
        'glass-dark':    '0 8px 32px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.08)',

        // Inset
        'inset-navy':    'inset 0 2px 6px rgba(27,43,75,0.15)',
        'inset-subtle':  'inset 0 1px 3px rgba(27,43,75,0.08)',

        // Focus ring
        'focus-navy':    '0 0 0 3px rgba(42,95,165,0.35)',
        'focus-flame':   '0 0 0 3px rgba(232,82,10,0.30)',

        // Utility
        'none':          'none',
      },

      // ─────────────────────────────────────────────────────────────────────
      // Z-INDEX
      // ─────────────────────────────────────────────────────────────────────
      zIndex: {
        'below':    '-1',
        'base':      '0',
        'raised':    '10',
        'dropdown':  '20',
        'sticky':    '30',
        'overlay':   '40',
        'modal':     '50',
        'navbar':    '60',
        'drawer':    '70',
        'tooltip':   '80',
        'toast':     '90',
        'max':       '9999',
      },

      // ─────────────────────────────────────────────────────────────────────
      // TRANSITIONS
      // ─────────────────────────────────────────────────────────────────────
      transitionDuration: {
        '0':    '0ms',
        '75':   '75ms',
        '100':  '100ms',
        '150':  '150ms',
        '200':  '200ms',
        '250':  '250ms',
        '300':  '300ms',
        '350':  '350ms',
        '400':  '400ms',
        '500':  '500ms',
        '600':  '600ms',
        '700':  '700ms',
        '800':  '800ms',
        '1000': '1000ms',
      },

      transitionTimingFunction: {
        'maritime':     'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'out-expo':     'cubic-bezier(0.19, 1.00, 0.22, 1.00)',
        'out-quart':    'cubic-bezier(0.25, 1.00, 0.50, 1.00)',
        'in-expo':      'cubic-bezier(0.95, 0.05, 0.80, 0.04)',
        'in-out-quart': 'cubic-bezier(0.77, 0.00, 0.18, 1.00)',
        'spring':       'cubic-bezier(0.34, 1.56, 0.64, 1.00)',
      },

      // ─────────────────────────────────────────────────────────────────────
      // KEYFRAMES & ANIMATIONS
      // ─────────────────────────────────────────────────────────────────────
      keyframes: {
        // ── Entrance ────────────────────────────────────────────────────────
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%':   { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'fade-in-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%':   { opacity: '0', transform: 'translateY(-24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-left': {
          '0%':   { opacity: '0', transform: 'translateX(-32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-right': {
          '0%':   { opacity: '0', transform: 'translateX(32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%':   { opacity: '0', transform: 'scale(0.94)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'scale-in-spring': {
          '0%':   { opacity: '0', transform: 'scale(0.88)' },
          '65%':  { opacity: '1', transform: 'scale(1.03)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },

        // ── Reveal ──────────────────────────────────────────────────────────
        'reveal-line': {
          '0%':   { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        'reveal-mask': {
          '0%':   { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0% 0 0)' },
        },
        'counter-up': {
          '0%':   { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },

        // ── Maritime Themed ─────────────────────────────────────────────────
        'wave': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '25%':      { transform: 'translateY(-6px)' },
          '75%':      { transform: 'translateY(4px)' },
        },
        'anchor-float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%':      { transform: 'translateY(-10px) rotate(1.5deg)' },
        },
        'flame-flicker': {
          '0%, 100%': { transform: 'scaleY(1.00) scaleX(1.00)', opacity: '1' },
          '20%':      { transform: 'scaleY(1.06) scaleX(0.96)', opacity: '0.95' },
          '40%':      { transform: 'scaleY(0.97) scaleX(1.03)', opacity: '1' },
          '60%':      { transform: 'scaleY(1.04) scaleX(0.97)', opacity: '0.97' },
          '80%':      { transform: 'scaleY(0.99) scaleX(1.01)', opacity: '1' },
        },
        'ripple': {
          '0%':   { transform: 'scale(0.8)', opacity: '0.8' },
          '100%': { transform: 'scale(2.0)', opacity: '0' },
        },

        // ── Loaders & Skeletons ─────────────────────────────────────────────
        'shimmer': {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'pulse-navy': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.5' },
        },
        'spin-slow': {
          '0%':   { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },

        // ── Slide ───────────────────────────────────────────────────────────
        'slide-up': {
          '0%':   { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'marquee': {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },

        // ── Number Counter ──────────────────────────────────────────────────
        'count-up': {
          '0%':   { opacity: '0', transform: 'translateY(16px) scale(0.96)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },

      animation: {
        // Entrance
        'fade-in':           'fade-in 0.5s ease-out both',
        'fade-out':          'fade-out 0.3s ease-in both',
        'fade-in-up':        'fade-in-up 0.6s ease-out both',
        'fade-in-down':      'fade-in-down 0.6s ease-out both',
        'fade-in-left':      'fade-in-left 0.6s ease-out both',
        'fade-in-right':     'fade-in-right 0.6s ease-out both',
        'scale-in':          'scale-in 0.4s ease-out both',
        'scale-in-spring':   'scale-in-spring 0.55s ease both',

        // Reveal
        'reveal-line':       'reveal-line 0.7s cubic-bezier(0.25,0.46,0.45,0.94) both',
        'reveal-mask':       'reveal-mask 0.8s cubic-bezier(0.25,0.46,0.45,0.94) both',
        'count-up':          'count-up 0.5s ease-out both',

        // Maritime
        'wave':              'wave 4s ease-in-out infinite',
        'anchor-float':      'anchor-float 5s ease-in-out infinite',
        'flame-flicker':     'flame-flicker 2.5s ease-in-out infinite',
        'ripple':            'ripple 1.4s cubic-bezier(0,0,0.2,1) infinite',

        // Loaders
        'shimmer':           'shimmer 1.8s linear infinite',
        'pulse-navy':        'pulse-navy 2s cubic-bezier(0.4,0,0.6,1) infinite',
        'spin-slow':         'spin-slow 3s linear infinite',

        // Slides
        'slide-up':          'slide-up 0.35s cubic-bezier(0.25,0.46,0.45,0.94) both',
        'slide-down':        'slide-down 0.35s cubic-bezier(0.25,0.46,0.45,0.94) both',
        'marquee':           'marquee 30s linear infinite',
      },

      // ─────────────────────────────────────────────────────────────────────
      // BACKGROUND IMAGES / GRADIENTS
      // ─────────────────────────────────────────────────────────────────────
      backgroundImage: {
        // Brand gradients
        'gradient-navy':       'linear-gradient(135deg, #0D1628 0%, #1B2B4B 40%, #1B3E6F 100%)',
        'gradient-navy-soft':  'linear-gradient(180deg, #1B2B4B 0%, #1B3E6F 100%)',
        'gradient-ocean':      'linear-gradient(180deg, #0D172D 0%, #1B2B4B 100%)',
        'gradient-ocean-up':   'linear-gradient(to top, #0D172D 0%, #1B3E6F 100%)',
        'gradient-flame':      'linear-gradient(135deg, #E8520A 0%, #F7A81A 100%)',
        'gradient-flame-warm': 'linear-gradient(135deg, #C44208 0%, #E8520A 45%, #F7A81A 100%)',
        'gradient-steel':      'linear-gradient(180deg, #F4F7FA 0%, #E4EAF2 100%)',
        'gradient-steel-mid':  'linear-gradient(180deg, #EDF1F7 0%, #C4CDD8 100%)',

        // Surface gradients
        'gradient-card-light': 'linear-gradient(145deg, #FFFFFF 0%, #F4F7FA 100%)',
        'gradient-card-dark':  'linear-gradient(145deg, #1B3E6F 0%, #1B2B4B 100%)',
        'gradient-hero':       'linear-gradient(135deg, #0D1628 0%, #1B2B4B 50%, #1C3B69 100%)',

        // Text gradients (use with bg-clip-text)
        'gradient-text-navy':  'linear-gradient(135deg, #2A5FA5 0%, #1B3E6F 100%)',
        'gradient-text-flame': 'linear-gradient(135deg, #E8520A 0%, #F7A81A 100%)',
        'gradient-text-gold':  'linear-gradient(135deg, #F7A81A 0%, #FBBF24 100%)',

        // Overlay gradients
        'overlay-dark':        'linear-gradient(to bottom, rgba(13,22,40,0) 0%, rgba(13,22,40,0.85) 100%)',
        'overlay-dark-center': 'radial-gradient(ellipse at center, rgba(13,22,40,0.5) 0%, rgba(13,22,40,0.9) 100%)',
        'overlay-navy-left':   'linear-gradient(to right, rgba(27,43,75,0.95) 0%, rgba(27,43,75,0) 60%)',
        'overlay-navy-full':   'linear-gradient(180deg, rgba(27,43,75,0.7) 0%, rgba(27,43,75,0.95) 100%)',

        // Patterns
        'grid-pattern':        'linear-gradient(rgba(42,95,165,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(42,95,165,0.07) 1px, transparent 1px)',
        'grid-pattern-dark':   'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'dot-pattern':         'radial-gradient(rgba(42,95,165,0.15) 1px, transparent 1px)',
        'dot-pattern-dark':    'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
        'diagonal-lines':      'repeating-linear-gradient(45deg, rgba(42,95,165,0.04) 0px, rgba(42,95,165,0.04) 1px, transparent 1px, transparent 8px)',

        // Shimmer
        'shimmer-navy':        'linear-gradient(90deg, rgba(27,43,75,0) 0%, rgba(42,95,165,0.15) 50%, rgba(27,43,75,0) 100%)',
        'shimmer-white':       'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)',
      },

      // ─────────────────────────────────────────────────────────────────────
      // BACKDROP BLUR
      // ─────────────────────────────────────────────────────────────────────
      backdropBlur: {
        'xs':   '2px',
        'sm':   '4px',
        'md':   '8px',
        'DEFAULT': '8px',
        'lg':   '12px',
        'xl':   '16px',
        '2xl':  '24px',
        '3xl':  '40px',
      },

      // ─────────────────────────────────────────────────────────────────────
      // MAX WIDTH
      // ─────────────────────────────────────────────────────────────────────
      maxWidth: {
        'prose-narrow': '56ch',
        'prose':        '68ch',
        'prose-wide':   '80ch',
        'content-sm':   '40rem',
        'content-md':   '56rem',
        'content-lg':   '72rem',
        'content-xl':   '80rem',
        'site':         '90rem',
      },

      // ─────────────────────────────────────────────────────────────────────
      // ASPECT RATIOS
      // ─────────────────────────────────────────────────────────────────────
      aspectRatio: {
        'auto':    'auto',
        'square':  '1 / 1',
        'video':   '16 / 9',
        'cinema':  '21 / 9',
        'card':    '4 / 3',
        'portrait':'3 / 4',
        'hero':    '16 / 7',
      },
    },
  },
  plugins: [],
}
