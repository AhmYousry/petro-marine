import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import {
  Award,
  Layers,
  Clock,
  Navigation,
  Users,
  ShieldCheck,
} from 'lucide-react'
import { cn } from '@/utils'

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

interface Feature {
  id:          string
  icon:        React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>
  title:       string
  description: string
  featured?:   boolean
  iconBg:      string
  iconColor:   string
  hoverBorder: string
  hoverBg:     string
  accentLine:  string
}

const FEATURES: Feature[] = [
  {
    id:          'experience',
    icon:        Award,
    title:       '50+ Years Experience',
    description: 'Half a century of maritime operations across Egyptian and international waters. Reliability earned through five decades of real-world performance — not claimed.',
    featured:    true,
    iconBg:      'bg-flame-500/15',
    iconColor:   'text-flame-400',
    hoverBorder: 'hover:border-flame-400/35',
    hoverBg:     'hover:bg-flame-500/[0.09]',
    accentLine:  'from-flame-500/0 via-flame-500/70 to-flame-500/0',
  },
  {
    id:          'one-stop',
    icon:        Layers,
    title:       'One Stop Solution',
    description: 'Supply, repair, provisions, waste removal, and inspection — every marine service under a single contract, single invoice, and one point of accountability.',
    iconBg:      'bg-ocean-400/12',
    iconColor:   'text-ocean-300',
    hoverBorder: 'hover:border-ocean-400/30',
    hoverBg:     'hover:bg-ocean-500/[0.07]',
    accentLine:  'from-ocean-500/0 via-ocean-400/60 to-ocean-500/0',
  },
  {
    id:          'operations',
    icon:        Clock,
    title:       '24/7 Operations',
    description: 'Our operations center is staffed at all hours, every day of the year. When a vessel needs support, senior engineers respond — not a call centre, not a queue.',
    iconBg:      'bg-gold-500/12',
    iconColor:   'text-gold-400',
    hoverBorder: 'hover:border-gold-400/30',
    hoverBg:     'hover:bg-gold-500/[0.07]',
    accentLine:  'from-gold-500/0 via-gold-400/60 to-gold-500/0',
  },
  {
    id:          'ports',
    icon:        Navigation,
    title:       '12 Port Coverage',
    description: 'Ground assets and response teams already deployed across 12 Egyptian ports — Alexandria, Port Said, Suez, Ain Sokhna, and beyond. No delay. No distance penalty.',
    iconBg:      'bg-ocean-400/12',
    iconColor:   'text-ocean-300',
    hoverBorder: 'hover:border-ocean-400/30',
    hoverBg:     'hover:bg-ocean-500/[0.07]',
    accentLine:  'from-ocean-500/0 via-ocean-400/60 to-ocean-500/0',
  },
  {
    id:          'engineers',
    icon:        Users,
    title:       'Qualified Engineers',
    description: 'Our marine engineers hold international certifications and carry an average of 15+ years hands-on shipboard experience across tanker, bulk, and offshore classes.',
    iconBg:      'bg-steel-400/12',
    iconColor:   'text-steel-300',
    hoverBorder: 'hover:border-steel-400/30',
    hoverBg:     'hover:bg-steel-500/[0.07]',
    accentLine:  'from-steel-400/0 via-steel-300/60 to-steel-400/0',
  },
  {
    id:          'compliance',
    icon:        ShieldCheck,
    title:       'MARPOL & ISO Compliant',
    description: 'ISO 9001:2015, ISM Code, MARPOL Annex V, and OHSAS 18001 certified across all operations. Your compliance exposure is protected at every service touchpoint.',
    iconBg:      'bg-emerald-500/12',
    iconColor:   'text-emerald-400',
    hoverBorder: 'hover:border-emerald-400/30',
    hoverBg:     'hover:bg-emerald-500/[0.06]',
    accentLine:  'from-emerald-500/0 via-emerald-400/55 to-emerald-500/0',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// ANIMATION VARIANTS
// ─────────────────────────────────────────────────────────────────────────────

const EASE   = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
const EASE_X = [0.16, 1.00, 0.30, 1.00] as [number, number, number, number]

const headerVariants: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
}

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.58, ease: EASE } },
}

const gridVariants: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } },
}

const cardVariants: Variants = {
  hidden:  { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.55, ease: EASE_X },
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export function WhyChooseUs() {
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef   = useRef<HTMLDivElement>(null)

  const headerInView = useInView(headerRef, { once: true, amount: 0.3  })
  const gridInView   = useInView(gridRef,   { once: true, amount: 0.08 })

  return (
    <section
      className="relative bg-navy-900 overflow-hidden"
      aria-labelledby="why-choose-us-heading"
    >
      {/* ── Background layers ─────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        {/* Fine grid texture */}
        <div className="absolute inset-0 bg-grid-dark opacity-[0.18]" />

        {/* Top-center radial — ocean depth */}
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px]"
          style={{
            background: 'radial-gradient(ellipse 70% 55% at 50% 0%, rgba(42,95,165,0.22) 0%, transparent 65%)',
          }}
        />

        {/* Bottom-right ember — contrasts navy */}
        <div
          className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(232,82,10,0.07) 0%, transparent 60%)',
          }}
        />

        {/* Diagonal accent lines — brand motif */}
        <div
          className="absolute right-0 top-0 w-px h-full rotate-[10deg] origin-top-right"
          style={{
            background:
              'linear-gradient(to bottom, transparent, rgba(42,95,165,0.18) 35%, rgba(42,95,165,0.09) 70%, transparent)',
          }}
        />
        <div
          className="absolute right-24 top-0 w-px h-full rotate-[10deg] origin-top-right"
          style={{
            background:
              'linear-gradient(to bottom, transparent, rgba(255,255,255,0.025) 50%, transparent)',
          }}
        />
      </div>

      <div className="container-maritime py-24 md:py-32 relative z-10">

        {/* ══════════════════════════════════════════════════════════════
            HEADER
        ══════════════════════════════════════════════════════════════ */}
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          className="mb-14 md:mb-16"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-flame-500 flex-shrink-0" />
            <span className="text-[0.6875rem] font-display font-semibold uppercase tracking-[0.20em] text-ocean-300">
              Why Choose Us
            </span>
          </motion.div>

          {/* Headline + descriptor row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-16">
            <motion.h2
              id="why-choose-us-heading"
              variants={fadeUp}
              className={cn(
                'font-display font-extrabold leading-[1.07] tracking-[-0.020em]',
                'text-white',
                'text-[2rem] sm:text-[2.5rem] md:text-[2.875rem] lg:text-[3.25rem]',
              )}
            >
              The Petromarine{' '}
              <span className="text-ocean-300">Standard.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className={cn(
                'text-steel-400 font-body leading-[1.72] text-[0.9375rem]',
                'max-w-[340px] md:text-right md:flex-shrink-0 md:mb-1',
              )}
            >
              Six commitments that make Petromarine the preferred partner
              for Egypt&rsquo;s most demanding vessel operators.
            </motion.p>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════════════════════════
            FEATURE CARDS GRID
        ══════════════════════════════════════════════════════════════ */}
        <motion.div
          ref={gridRef}
          variants={gridVariants}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.id}
                variants={cardVariants}
                className={cn(
                  // Base glass card
                  'group relative overflow-hidden rounded-xl',
                  'p-7 md:p-8',
                  'border transition-all duration-350',
                  // Default state
                  feature.featured
                    ? 'bg-flame-500/[0.065] border-flame-500/20'
                    : 'bg-white/[0.04] border-white/[0.08]',
                  // Hover state — border brightens, bg deepens
                  feature.hoverBorder,
                  feature.hoverBg,
                  'hover:-translate-y-1',
                  'hover:shadow-[0_12px_48px_rgba(0,0,0,0.45)]',
                )}
              >
                {/* ── Top accent line (reveals on hover) ──────────── */}
                <div
                  className={cn(
                    'absolute top-0 left-0 right-0 h-px',
                    'bg-gradient-to-r',
                    feature.accentLine,
                    'opacity-0 group-hover:opacity-100',
                    'transition-opacity duration-500',
                  )}
                  aria-hidden="true"
                />

                {/* ── Featured corner glow (always on) ────────────── */}
                {feature.featured && (
                  <div
                    className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
                    style={{
                      background:
                        'radial-gradient(circle at 100% 0%, rgba(232,82,10,0.12) 0%, transparent 60%)',
                    }}
                    aria-hidden="true"
                  />
                )}

                {/* ── Icon ────────────────────────────────────────── */}
                <div
                  className={cn(
                    'w-11 h-11 rounded-xl mb-6 flex items-center justify-center flex-shrink-0',
                    'transition-transform duration-300 group-hover:scale-110',
                    feature.iconBg,
                  )}
                >
                  <Icon
                    size={20}
                    strokeWidth={1.75}
                    className={cn('flex-shrink-0', feature.iconColor)}
                  />
                </div>

                {/* ── Feature title ────────────────────────────────── */}
                <h3
                  className={cn(
                    'font-display font-bold leading-snug mb-3',
                    'text-[1rem] md:text-[1.0625rem]',
                    feature.featured ? 'text-white' : 'text-white/90',
                    'group-hover:text-white transition-colors duration-200',
                  )}
                >
                  {feature.title}
                </h3>

                {/* ── Description ─────────────────────────────────── */}
                <p className="font-body text-steel-400 text-[0.875rem] leading-[1.70] group-hover:text-steel-300 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* ── Bottom accent bar for featured ──────────────── */}
                {feature.featured && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-flame-600/0 via-flame-500/50 to-flame-600/0" />
                )}
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
