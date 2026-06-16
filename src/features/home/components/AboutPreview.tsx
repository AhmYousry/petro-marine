import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  type Variants,
} from 'framer-motion'
import { ArrowRight, Shield, MapPin, Clock } from 'lucide-react'
import { cn } from '@/utils'
import { ROUTES } from '@config/routes'

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

interface StatItem {
  id:          string
  value:       number | null   // null → use display string as-is
  display?:    string          // e.g. '24/7'
  suffix:      string
  label:       string
  description: string
}

interface HighlightItem {
  id:    string
  icon:  React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>
  title: string
  body:  string
}

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const STATS: StatItem[] = [
  {
    id:          'experience',
    value:       50,
    suffix:      '+',
    label:       'Years of Experience',
    description: 'Building maritime excellence since the early years of Egypt\'s oil industry.',
  },
  {
    id:          'ports',
    value:       12,
    suffix:      '',
    label:       'Egyptian Ports Covered',
    description: 'From Alexandria to Ain Sokhna, Port Said to Suez — we\'re already there.',
  },
  {
    id:          'services',
    value:       10,
    suffix:      '+',
    label:       'Services Offered',
    description: 'Vessel management to crew support, all delivered under one roof.',
  },
  {
    id:          'support',
    value:       null,
    display:     '24/7',
    suffix:      '',
    label:       'Customer Availability',
    description: 'Our operations center never sleeps — your fleet is always covered.',
  },
]

const HIGHLIGHTS: HighlightItem[] = [
  {
    id:    'certified',
    icon:  Shield,
    title: 'ISO-Certified Excellence',
    body:  'Holding ISO 9001:2015, ISM Code, and OHSAS 18001 certifications — quality and safety embedded into every operation.',
  },
  {
    id:    'network',
    icon:  MapPin,
    title: 'Egypt-Wide Port Network',
    body:  'A seamless operational network across 12 major Egyptian ports, with shore-based response teams for rapid vessel turnaround.',
  },
  {
    id:    'support',
    icon:  Clock,
    title: '24/7 Operations Center',
    body:  'Direct access to senior marine engineers around the clock — no hold times, no re-routing, just answers.',
  },
]

// Accent color scheme per stat card (bar + suffix tint)
const STAT_ACCENTS = [
  { bar: 'bg-ocean-500',  num: 'text-white',      suffix: 'text-ocean-300'  },
  { bar: 'bg-flame-500',  num: 'text-white',      suffix: 'text-white/40'   },
  { bar: 'bg-gold-400',   num: 'text-white',      suffix: 'text-gold-300'   },
  { bar: 'bg-ocean-400',  num: 'text-white',      suffix: 'text-white/40'   },
] as const

// ─────────────────────────────────────────────────────────────────────────────
// ANIMATED COUNTER
// ─────────────────────────────────────────────────────────────────────────────

interface CounterProps {
  value:       number | null
  display?:    string
  suffix:      string
  suffixClass: string
  inView:      boolean
}

function AnimatedCounter({ value, display, suffix, suffixClass, inView }: CounterProps) {
  const count   = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    if (!inView || value === null) return
    const ctrl = animate(count, value, {
      duration: 2.4,
      ease:     [0.16, 1, 0.3, 1] as [number, number, number, number],
    })
    return () => ctrl.stop()
  }, [inView, value, count])

  return (
    <>
      {display ? display : <motion.span>{rounded}</motion.span>}
      {suffix && <span className={cn('ml-0.5 text-[0.62em] align-baseline', suffixClass)}>{suffix}</span>}
    </>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// ANIMATION VARIANTS
// ─────────────────────────────────────────────────────────────────────────────

const EASE   = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
const EASE_X = [0.16, 1.00, 0.30, 1.00] as [number, number, number, number]

const stagger = (delay = 0.05, children = 0.09): Variants => ({
  hidden:  {},
  visible: { transition: { staggerChildren: children, delayChildren: delay } },
})

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.64, ease: EASE } },
}

const fadeRight: Variants = {
  hidden:  { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.60, ease: EASE } },
}

const statCard: Variants = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.60, ease: EASE_X } },
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export function AboutPreview() {
  const contentRef = useRef<HTMLDivElement>(null)
  const statsRef   = useRef<HTMLDivElement>(null)

  const contentInView = useInView(contentRef, { once: true, amount: 0.15 })
  const statsInView   = useInView(statsRef,   { once: true, amount: 0.25 })

  return (
    <section
      className="relative bg-white overflow-hidden"
      aria-labelledby="about-preview-heading"
    >

      {/* ── Decorative background blobs ────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div
          className="absolute -top-48 -right-48 w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(42,95,165,0.055) 0%, transparent 65%)' }}
        />
        <div
          className="absolute top-1/2 -left-32 w-[500px] h-[500px] rounded-full -translate-y-1/2"
          style={{ background: 'radial-gradient(circle, rgba(27,43,75,0.03) 0%, transparent 65%)' }}
        />
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          CONTENT ZONE — white background
      ══════════════════════════════════════════════════════════════════ */}
      <div ref={contentRef} className="container-maritime pt-24 md:pt-32 pb-20 md:pb-24">
        <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px] gap-14 xl:gap-20 items-start">

          {/* ─── Left: Eyebrow · Headline · Body · CTA ─────────────────── */}
          <motion.div
            variants={stagger(0.04, 0.10)}
            initial="hidden"
            animate={contentInView ? 'visible' : 'hidden'}
          >
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="mb-5 flex items-center gap-3">
              <span className="w-8 h-px bg-flame-500 flex-shrink-0" />
              <span className="text-[0.6875rem] font-display font-semibold uppercase tracking-[0.20em] text-ocean-600">
                Who We Are
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              id="about-preview-heading"
              variants={fadeUp}
              className={cn(
                'font-display font-extrabold leading-[1.07] tracking-[-0.018em]',
                'text-navy-900',
                'text-[1.875rem] sm:text-[2.375rem] md:text-[2.875rem]',
                'lg:text-[2.625rem] xl:text-[3.125rem]',
                'mb-7',
              )}
            >
              Your Vessel Is an Asset.
              <span className="block sm:inline">
                {' '}
                <span className="text-ocean-600">We Make Sure</span>
                {' '}It&rsquo;s Well Served.
              </span>
            </motion.h2>

            {/* Primary body copy */}
            <motion.p
              variants={fadeUp}
              className={cn(
                'text-steel-600 font-body leading-[1.78]',
                'text-[1rem] md:text-[1.0625rem]',
                'max-w-[560px] mb-4',
              )}
            >
              Petromarine is Egypt&rsquo;s premier marine services group — a trusted, full-service
              partner for ship operators, offshore contractors, and energy companies across the
              Eastern Mediterranean and Red Sea. For over 50 years, we have delivered vessel
              management, port services, fuel supply, and technical support with the precision
              the maritime industry demands.
            </motion.p>

            {/* Secondary body copy */}
            <motion.p
              variants={fadeUp}
              className={cn(
                'text-steel-500 font-body leading-[1.78]',
                'text-[0.9375rem] md:text-[1rem]',
                'max-w-[520px] mb-10',
              )}
            >
              Our unified platform eliminates the complexity of managing multiple vendors —
              one contract, one point of accountability, complete Egyptian port coverage.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUp}>
              <Link
                to={ROUTES.ABOUT}
                className={cn(
                  'group inline-flex items-center gap-2.5',
                  'text-[0.8125rem] font-display font-bold uppercase tracking-[0.12em]',
                  'text-navy-900 hover:text-ocean-700',
                  'border-b-2 border-flame-500 hover:border-ocean-500',
                  'pb-0.5 transition-colors duration-250',
                )}
              >
                Discover Our Story
                <ArrowRight
                  size={14}
                  strokeWidth={2.5}
                  className="flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* ─── Right: Company Highlights ─────────────────────────────── */}
          <motion.div
            variants={stagger(0.20, 0.11)}
            initial="hidden"
            animate={contentInView ? 'visible' : 'hidden'}
            className="flex flex-col"
          >
            {HIGHLIGHTS.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.id}
                  variants={fadeRight}
                  className={cn(
                    'flex gap-4 py-6',
                    i === 0 && 'lg:pt-1',
                    i < HIGHLIGHTS.length - 1 && 'border-b border-steel-100',
                  )}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-10 h-10 rounded bg-ocean-50 flex items-center justify-center ring-1 ring-ocean-100">
                      <Icon size={18} strokeWidth={1.75} className="text-ocean-600" />
                    </div>
                  </div>

                  {/* Copy */}
                  <div className="pt-0.5">
                    <p className="font-display font-bold text-navy-900 text-[0.9375rem] mb-1.5 leading-snug">
                      {item.title}
                    </p>
                    <p className="font-body text-steel-500 text-sm leading-[1.65]">
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          STATS BAND — dark navy, full-bleed
      ══════════════════════════════════════════════════════════════════ */}
      <div ref={statsRef} data-section="stats" className="relative bg-navy-900 overflow-hidden">

        {/* Background texture — matches hero */}
        <div className="absolute inset-0 bg-grid-dark opacity-[0.18] pointer-events-none" aria-hidden="true" />

        {/* Radial depth glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: [
              'radial-gradient(ellipse 80% 140% at 50% 110%, rgba(42,95,165,0.22) 0%, transparent 58%)',
              'radial-gradient(ellipse 40% 60% at 0% 50%, rgba(27,43,75,0.35) 0%, transparent 55%)',
            ].join(', '),
          }}
          aria-hidden="true"
        />

        {/* Diagonal accent lines — brand motif */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div
            className="absolute right-0 top-0 w-px h-full rotate-[12deg] origin-top-right"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(42,95,165,0.20) 35%, rgba(42,95,165,0.10) 70%, transparent)' }}
          />
          <div
            className="absolute right-20 top-0 w-px h-full rotate-[12deg] origin-top-right"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.03) 50%, transparent)' }}
          />
        </div>

        <div className="container-maritime">
          <motion.div
            variants={stagger(0, 0.10)}
            initial="hidden"
            animate={statsInView ? 'visible' : 'hidden'}
            className="grid grid-cols-2 lg:grid-cols-4"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.id}
                variants={statCard}
                className={cn(
                  'relative flex flex-col px-7 md:px-8 xl:px-10 py-12 md:py-14',
                  // ── Mobile 2-col borders ────────────────────────────
                  // Right divider for left-column items (0, 2)
                  i % 2 === 0 && 'border-r border-white/[0.08] lg:border-r-0',
                  // Bottom divider for top-row items (0, 1)
                  i < 2       && 'border-b border-white/[0.08] lg:border-b-0',
                  // ── Desktop 4-col borders ───────────────────────────
                  // Left divider for all except first
                  i > 0       && 'lg:border-l lg:border-white/[0.08]',
                )}
              >
                {/* Accent top bar */}
                <div
                  className={cn('w-8 h-[3px] rounded-full mb-6', STAT_ACCENTS[i].bar)}
                  aria-hidden="true"
                />

                {/* Number + suffix */}
                <div
                  className={cn(
                    'font-display font-extrabold leading-none mb-4',
                    'text-[3rem] md:text-[3.5rem] xl:text-[4rem] tracking-[-0.025em]',
                    STAT_ACCENTS[i].num,
                  )}
                >
                  <AnimatedCounter
                    value={stat.value}
                    display={stat.display}
                    suffix={stat.suffix}
                    suffixClass={STAT_ACCENTS[i].suffix}
                    inView={statsInView}
                  />
                </div>

                {/* Label */}
                <p className="font-display font-semibold text-white/90 text-[0.9rem] md:text-[0.9375rem] mb-2 leading-tight">
                  {stat.label}
                </p>

                {/* Description */}
                <p className="font-body text-steel-400 text-[0.8125rem] leading-[1.62] max-w-[180px]">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  )
}
