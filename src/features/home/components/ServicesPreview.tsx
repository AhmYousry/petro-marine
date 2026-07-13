import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, type Variants } from 'framer-motion'
import {
  Anchor,
  Package,
  Droplets,
  Recycle,
  Filter,
  Wrench,
  Gauge,
  MoveRight,
} from 'lucide-react'
import { cn } from '@/utils'
import { ROUTES } from '@config/routes'

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    id:          'marine-supply',
    icon:        Anchor,
    title:       'Marine Supply',
    description: 'Deck, engine room, and safety equipment sourced and delivered to your berth — any class, any port.',
    accentBar:   'from-ocean-500 to-ocean-400',
    iconBg:      'bg-ocean-50 group-hover:bg-ocean-600',
    iconColor:   'text-ocean-600 group-hover:text-white',
  },
  {
    id:          'provisions',
    icon:        Package,
    title:       'Provisions & Bonded Stores',
    description: 'High-quality provisions, bonded goods, and ship\'s stores sourced and delivered vessel-side on schedule.',
    accentBar:   'from-flame-500 to-flame-400',
    iconBg:      'bg-flame-50 group-hover:bg-flame-500',
    iconColor:   'text-flame-600 group-hover:text-white',
  },
  {
    id:          'fresh-water',
    icon:        Droplets,
    title:       'Fresh Water Supply',
    description: 'Potable water meeting WHO and MARPOL standards, available across all 12 of our Egyptian port locations.',
    accentBar:   'from-ocean-400 to-sky-400',
    iconBg:      'bg-ocean-50 group-hover:bg-ocean-500',
    iconColor:   'text-ocean-500 group-hover:text-white',
  },
  {
    id:          'garbage',
    icon:        Recycle,
    title:       'Garbage Disposal',
    description: 'MARPOL Annex V-compliant waste collection, segregation, and certified shoreside disposal at every call.',
    accentBar:   'from-emerald-500 to-teal-400',
    iconBg:      'bg-emerald-50 group-hover:bg-emerald-600',
    iconColor:   'text-emerald-600 group-hover:text-white',
  },
  {
    id:          'sludge',
    icon:        Filter,
    title:       'Sludge & Bilge Removal',
    description: 'Certified oily water separation, bilge cleaning, and sludge extraction to maintain regulatory compliance.',
    accentBar:   'from-steel-500 to-steel-400',
    iconBg:      'bg-steel-50 group-hover:bg-steel-600',
    iconColor:   'text-steel-600 group-hover:text-white',
  },
  {
    id:          'repair',
    icon:        Wrench,
    title:       'Ship Repair',
    description: 'On-board technical repairs, dry-dock coordination, and 24/7 emergency response by qualified marine engineers.',
    accentBar:   'from-flame-500 to-gold-400',
    iconBg:      'bg-flame-50 group-hover:bg-flame-600',
    iconColor:   'text-flame-600 group-hover:text-white',
  },
  {
    id:          'inspection',
    icon:        Gauge,
    title:       'Inspection & Calibration',
    description: 'Class-approved safety equipment surveys, fire detection calibration, and certification renewal support.',
    accentBar:   'from-gold-500 to-gold-400',
    iconBg:      'bg-gold-50 group-hover:bg-gold-500',
    iconColor:   'text-gold-600 group-hover:text-white',
  },
] as const

// ─────────────────────────────────────────────────────────────────────────────
// ANIMATION VARIANTS
// ─────────────────────────────────────────────────────────────────────────────

const EASE   = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
const EASE_X = [0.16, 1.00, 0.30, 1.00] as [number, number, number, number]

const headerVariants: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.60, ease: EASE } },
}

const gridVariants: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.10 } },
}

const cardVariants: Variants = {
  hidden:  { opacity: 0, y: 32, scale: 0.97 },
  visible: { opacity: 1, y: 0,  scale: 1,   transition: { duration: 0.55, ease: EASE_X } },
}

const ctaVariants: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.55, ease: EASE, delay: 0.25 } },
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export function ServicesPreview() {
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef   = useRef<HTMLDivElement>(null)
  const ctaRef    = useRef<HTMLDivElement>(null)

  const headerInView = useInView(headerRef, { once: true, amount: 0.4  })
  const gridInView   = useInView(gridRef,   { once: true, amount: 0.08 })
  const ctaInView    = useInView(ctaRef,    { once: true, amount: 0.8  })

  return (
    <section
      className="relative bg-smoke-50 overflow-hidden"
      aria-labelledby="services-preview-heading"
    >
      {/* ── Subtle wave pattern background ────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        {/* Top-left gradient blob */}
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-[0.035]"
          style={{ background: 'radial-gradient(circle, #1B2B4B 0%, transparent 65%)' }}
        />
        {/* Bottom-right accent */}
        <div
          className="absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #2A5FA5 0%, transparent 65%)' }}
        />
      </div>

      <div className="container-maritime py-24 md:py-32">

        {/* ══════════════════════════════════════════════════════════════
            SECTION HEADER
        ══════════════════════════════════════════════════════════════ */}
        <motion.div
          ref={headerRef}
          variants={headerVariants}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          className="mb-14 md:mb-16"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-flame-500 flex-shrink-0" />
            <span className="text-[0.6875rem] font-display font-semibold uppercase tracking-[0.20em] text-ocean-600">
              Our Services
            </span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-12">
            {/* Headline */}
            <motion.h2
              id="services-preview-heading"
              variants={fadeUp}
              className={cn(
                'font-display font-extrabold leading-[1.08] tracking-[-0.018em]',
                'text-navy-900',
                'text-[1.875rem] sm:text-[2.375rem] md:text-[2.75rem] lg:text-[3rem]',
                'max-w-[560px]',
              )}
            >
              Everything Your{' '}
              <span className="text-ocean-600">Vessel</span>{' '}
              Needs at Port
            </motion.h2>

            {/* Subtext — aligned bottom-right on desktop */}
            <motion.p
              variants={fadeUp}
              className="text-steel-500 font-body text-[0.9375rem] leading-[1.72] max-w-[360px] md:text-right md:flex-shrink-0 md:mb-1"
            >
              Integrated marine services from a single trusted partner —
              reducing turnaround time and eliminating vendor complexity.
            </motion.p>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════════════════════════
            SERVICE CARDS GRID
        ══════════════════════════════════════════════════════════════ */}
        <motion.div
          ref={gridRef}
          variants={gridVariants}
          initial="hidden"
          animate={gridInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.id}
                variants={cardVariants}
                className={cn(
                  // Base layout
                  'group relative bg-white rounded-xl overflow-hidden',
                  // Border & shadow
                  'border border-steel-100 hover:border-steel-200',
                  'shadow-[0_1px_4px_rgba(27,43,75,0.06)]',
                  'hover:shadow-[0_12px_40px_rgba(27,43,75,0.14)]',
                  // Lift on hover
                  'transition-all duration-300 ease-out',
                  'hover:-translate-y-2',
                  // Inner padding
                  'p-6 md:p-7',
                  'flex flex-col',
                )}
              >
                {/* ── Accent sweep line (top) ───────────────────────── */}
                <div
                  className={cn(
                    'absolute top-0 left-0 right-0 h-[3px]',
                    'bg-gradient-to-r',
                    service.accentBar,
                    // Reveal on hover: scale from 0 → 1 (left origin)
                    'scale-x-0 group-hover:scale-x-100',
                    'transition-transform duration-[380ms] ease-out origin-left',
                  )}
                  aria-hidden="true"
                />

                {/* ── Icon ──────────────────────────────────────────── */}
                <div
                  className={cn(
                    'w-12 h-12 rounded-xl mb-5 flex-shrink-0',
                    'flex items-center justify-center',
                    'transition-colors duration-300',
                    service.iconBg,
                  )}
                >
                  <Icon
                    size={22}
                    strokeWidth={1.75}
                    className={cn('transition-colors duration-300 flex-shrink-0', service.iconColor)}
                  />
                </div>

                {/* ── Title ─────────────────────────────────────────── */}
                <h3 className={cn(
                  'font-display font-bold text-navy-900 mb-2.5',
                  'text-[0.9375rem] leading-snug',
                  'group-hover:text-navy-800 transition-colors duration-200',
                )}>
                  {service.title}
                </h3>

                {/* ── Description ───────────────────────────────────── */}
                <p className="font-body text-steel-500 text-sm leading-[1.68] flex-1">
                  {service.description}
                </p>
              </motion.article>
            )
          })}
        </motion.div>

        {/* ══════════════════════════════════════════════════════════════
            CTA
        ══════════════════════════════════════════════════════════════ */}
        <motion.div
          ref={ctaRef}
          variants={ctaVariants}
          initial="hidden"
          animate={ctaInView ? 'visible' : 'hidden'}
          className="mt-12 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to={ROUTES.SERVICES}
            className={cn(
              'group inline-flex items-center gap-3',
              'h-[52px] px-8 md:px-10 rounded',
              'bg-navy-900 hover:bg-ocean-700',
              'text-white font-display font-semibold',
              'text-[0.8125rem] uppercase tracking-[0.12em]',
              'shadow-[0_4px_20px_rgba(27,43,75,0.25)] hover:shadow-[0_8px_32px_rgba(27,43,75,0.35)]',
              'transition-all duration-300',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-500 focus-visible:ring-offset-2',
              'whitespace-nowrap',
            )}
          >
            View All Services
            <MoveRight
              size={16}
              strokeWidth={2}
              className="flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <p className="text-steel-400 font-body text-sm">
            10+ specialized marine services available
          </p>
        </motion.div>

      </div>
    </section>
  )
}
