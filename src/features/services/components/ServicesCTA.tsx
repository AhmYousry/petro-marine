import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, type Variants } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { cn } from '@/utils'
import { ROUTES } from '@config/routes'

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]

const container: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
}

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.60, ease: EASE } },
}

export function ServicesCTA() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.35 })

  return (
    <section
      ref={ref}
      className="relative bg-navy-900 overflow-hidden"
      aria-labelledby="services-cta-heading"
    >
      {/* ── Background ───────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #070E1E 0%, #0F1E3A 35%, #1B2B4B 70%, #1B3E6F 100%)',
          }}
        />
        <div className="absolute inset-0 bg-grid-dark opacity-[0.18]" />
        {/* Flame glow bottom-right */}
        <div
          className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(232,82,10,0.16) 0%, transparent 60%)',
          }}
        />
        {/* Ocean glow top-left */}
        <div
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(42,95,165,0.20) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="container-maritime py-24 md:py-28 lg:py-32 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-[820px] mx-auto text-center"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-3">
            <span className="w-8 h-px bg-flame-500" />
            <span className="text-[0.6875rem] font-display font-semibold uppercase tracking-[0.20em] text-ocean-300">
              Ready When You Are
            </span>
            <span className="w-8 h-px bg-flame-500" />
          </motion.div>

          {/* Headline */}
          <motion.h2
            id="services-cta-heading"
            variants={fadeUp}
            className={cn(
              'font-display font-extrabold leading-[1.06] tracking-[-0.018em]',
              'text-white',
              'text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.25rem]',
              'mb-6',
            )}
          >
            Your Next Port Call{' '}
            <span className="block sm:inline">
              <span className="text-ocean-300">Starts Here.</span>
            </span>
          </motion.h2>

          {/* Body */}
          <motion.p
            variants={fadeUp}
            className={cn(
              'text-white/70 font-body leading-[1.72]',
              'text-[1rem] md:text-[1.0625rem]',
              'max-w-[580px] mx-auto mb-10',
            )}
          >
            Get a tailored quote within 24 hours — or call our 24/7 operations center
            for immediate vessel support across all Egyptian ports.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to={ROUTES.CONTACT}
              className={cn(
                'group inline-flex items-center gap-2.5',
                'h-[54px] px-9 rounded',
                'bg-flame-500 hover:bg-flame-600 active:bg-flame-700',
                'text-white font-display font-semibold',
                'text-[0.8125rem] uppercase tracking-[0.12em]',
                'shadow-[0_4px_28px_rgba(232,82,10,0.40)] hover:shadow-[0_8px_36px_rgba(232,82,10,0.55)]',
                'transition-all duration-300',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900',
                'whitespace-nowrap',
              )}
            >
              Request a Quote
              <ArrowRight
                size={15}
                strokeWidth={2.5}
                className="flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <a
              href="tel:+1-800-555-0192"
              className={cn(
                'group inline-flex items-center gap-2.5',
                'h-[54px] px-7 rounded',
                'border border-white/22 hover:border-white/50',
                'bg-white/[0.05] hover:bg-white/[0.10]',
                'backdrop-blur-sm',
                'text-white/85 hover:text-white font-display font-semibold',
                'text-[0.8125rem] uppercase tracking-[0.12em]',
                'transition-all duration-300',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900',
                'whitespace-nowrap',
              )}
            >
              <Phone size={14} strokeWidth={2} className="flex-shrink-0 text-flame-400" />
              24/7 Operations
            </a>
          </motion.div>

          {/* Trust line */}
          <motion.p
            variants={fadeUp}
            className="text-white/40 font-body text-[0.8125rem] mt-8 tracking-wide"
          >
            ISO 9001:2015 · ISM Code · MARPOL Annex I, V · OHSAS 18001
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
