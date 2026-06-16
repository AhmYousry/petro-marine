import { Link } from 'react-router-dom'
import { motion, type Variants } from 'framer-motion'
import { ChevronRight, Home as HomeIcon, ArrowDown } from 'lucide-react'
import { cn } from '@/utils'
import { ROUTES } from '@config/routes'
import { SERVICES_DETAIL } from '../data/services'

// ─────────────────────────────────────────────────────────────────────────────
// VARIANTS
// ─────────────────────────────────────────────────────────────────────────────

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]

const container: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.10 },
  },
}

const item: Variants = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.60, ease: EASE } },
}

const chipContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.55 } },
}

const chip: Variants = {
  hidden:  { opacity: 0, y: 14, scale: 0.94 },
  visible: { opacity: 1, y: 0,  scale: 1,    transition: { duration: 0.45, ease: EASE } },
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export function ServicesHero() {
  return (
    <section
      className="relative min-h-[640px] md:min-h-[680px] bg-navy-900 overflow-hidden flex flex-col"
      aria-labelledby="services-hero-heading"
    >
      {/* ── Background ─────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(155deg, #070E1E 0%, #0F1E3A 30%, #1B2B4B 65%, #1B3E6F 100%)',
          }}
        />
        {/* Radial sweep */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 90% 60% at 50% 0%, rgba(42,95,165,0.45) 0%, transparent 62%)',
          }}
        />
        {/* Fine grid */}
        <div className="absolute inset-0 bg-grid-dark opacity-[0.22]" />
        {/* Diagonal accent lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -right-20 top-0 w-px h-full rotate-[14deg] origin-top"
            style={{
              background:
                'linear-gradient(to bottom, transparent, rgba(42,95,165,0.28) 30%, rgba(42,95,165,0.14) 70%, transparent)',
            }}
          />
          <div
            className="absolute right-32 top-0 w-px h-full rotate-[14deg] origin-top"
            style={{
              background:
                'linear-gradient(to bottom, transparent, rgba(255,255,255,0.04) 50%, transparent)',
            }}
          />
        </div>
        {/* Bottom fade for section transition */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(7,14,30,0.55))' }}
        />
      </div>

      {/* ── Navbar spacer ─────────────────────────────────────────────── */}
      <div className="h-[72px] flex-shrink-0" aria-hidden="true" />

      {/* ── Hero content ──────────────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container-maritime w-full py-20 md:py-24">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-[820px]"
          >
            {/* Breadcrumb */}
            <motion.nav
              variants={item}
              aria-label="Breadcrumb"
              className="mb-8 flex items-center gap-2 text-[0.75rem] font-display tracking-wider"
            >
              <Link
                to={ROUTES.HOME}
                className="flex items-center gap-1.5 text-white/55 hover:text-white transition-colors duration-200"
              >
                <HomeIcon size={12} strokeWidth={1.75} />
                Home
              </Link>
              <ChevronRight size={12} className="text-white/30" strokeWidth={2} />
              <span className="text-white/85 font-medium">Services</span>
            </motion.nav>

            {/* Eyebrow */}
            <motion.div variants={item} className="mb-6 flex items-center gap-3">
              <span className="w-10 h-px bg-flame-500" />
              <span className="text-[0.6875rem] font-display font-semibold uppercase tracking-[0.20em] text-ocean-300">
                Full-Service Marine Capability
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              id="services-hero-heading"
              variants={item}
              className={cn(
                'font-display font-extrabold text-white leading-[1.04] tracking-[-0.022em]',
                'text-[2.25rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4.25rem] xl:text-[4.75rem]',
                'mb-7',
              )}
            >
              Seven Services.{' '}
              <span className="block sm:inline">
                <span className="text-ocean-300">One Partner.</span>
              </span>
            </motion.h1>

            {/* Body */}
            <motion.p
              variants={item}
              className={cn(
                'text-white/72 font-body leading-[1.72]',
                'text-[1rem] md:text-[1.125rem]',
                'max-w-[640px] mb-10',
              )}
            >
              From the moment your vessel approaches an Egyptian port until it sails again,
              Petromarine delivers every supply, service, and certification you need —
              under a single agreement, with one team accountable end-to-end.
            </motion.p>

            {/* ── Anchor chips: jump-links to each service ──────────── */}
            <motion.div
              variants={chipContainer}
              className="flex flex-wrap gap-2 max-w-[720px]"
              aria-label="Jump to service"
            >
              {SERVICES_DETAIL.map((s) => {
                const Icon = s.icon
                return (
                  <motion.a
                    key={s.id}
                    variants={chip}
                    href={`#${s.slug}`}
                    className={cn(
                      'group inline-flex items-center gap-2 pl-3 pr-3.5 h-9',
                      'rounded-full',
                      'bg-white/[0.06] hover:bg-white/[0.12]',
                      'border border-white/12 hover:border-white/30',
                      'backdrop-blur-sm',
                      'text-[0.75rem] font-display font-medium',
                      'text-white/70 hover:text-white',
                      'transition-all duration-250',
                    )}
                  >
                    <Icon
                      size={13}
                      strokeWidth={1.8}
                      className="text-ocean-300 group-hover:text-flame-400 transition-colors duration-250"
                    />
                    {s.title}
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ──────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 pointer-events-none"
        aria-hidden="true"
      >
        <span className="text-[0.625rem] font-display font-medium uppercase tracking-[0.20em] text-white/40">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-white/50" strokeWidth={1.75} />
        </motion.div>
      </motion.div>
    </section>
  )
}
