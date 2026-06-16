import { useRef, useEffect } from 'react'
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  type Variants,
} from 'framer-motion'
import { cn } from '@/utils'
import { STATS } from '../data/company'

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.58, ease: EASE } },
}

const container: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.10 } },
}

// ── Animated counter ─────────────────────────────────────────────────────────

interface CounterProps {
  value:    number | null
  display?: string
  inView:   boolean
}

function Counter({ value, display, inView }: CounterProps) {
  const count   = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    if (!inView || value === null) return
    const ctrl = animate(count, value, {
      duration: 2.4,
      ease:     [0.16, 1, 0.30, 1] as [number, number, number, number],
    })
    return () => ctrl.stop()
  }, [inView, value, count])

  if (display) return <>{display}</>
  return <motion.span>{rounded}</motion.span>
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION
// ─────────────────────────────────────────────────────────────────────────────

export function Statistics() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      className="relative bg-navy-900 overflow-hidden"
      aria-labelledby="statistics-heading"
    >
      {/* BG */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(140deg, #070E1E 0%, #0F1E3A 35%, #1B2B4B 75%, #1B3E6F 100%)',
          }}
        />
        <div className="absolute inset-0 bg-grid-dark opacity-[0.18]" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 110%, rgba(42,95,165,0.22) 0%, transparent 55%)',
          }}
        />
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(232,82,10,0.08) 0%, transparent 60%)' }}
        />
      </div>

      <div ref={ref} className="container-maritime py-24 md:py-32 relative z-10">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center max-w-[680px] mx-auto mb-16"
        >
          <motion.div variants={fadeUp} className="mb-5 inline-flex items-center gap-3">
            <span className="w-8 h-px bg-flame-500" />
            <span className="text-[0.6875rem] font-display font-semibold uppercase tracking-[0.20em] text-ocean-300">
              By the Numbers
            </span>
            <span className="w-8 h-px bg-flame-500" />
          </motion.div>

          <motion.h2
            id="statistics-heading"
            variants={fadeUp}
            className={cn(
              'font-display font-extrabold text-white leading-[1.08] tracking-[-0.018em]',
              'text-[1.875rem] sm:text-[2.375rem] md:text-[2.75rem]',
              'mb-4',
            )}
          >
            Decades of trust, in numbers.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-body text-white/65 text-[1rem] leading-[1.72]"
          >
            The metrics that matter to vessel operators who rely on
            us across Egypt&rsquo;s ports — every day, every season, every voyage.
          </motion.p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {STATS.map((stat) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.id}
                variants={fadeUp}
                className={cn(
                  'group relative overflow-hidden rounded-xl',
                  'bg-white/[0.04] border border-white/[0.08]',
                  'p-7 md:p-8',
                  'hover:bg-white/[0.07] hover:border-flame-500/30',
                  'transition-all duration-300',
                  'hover:-translate-y-1',
                  'hover:shadow-[0_18px_56px_rgba(0,0,0,0.4)]',
                )}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-flame-500/0 via-flame-500/70 to-flame-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-flame-500/12 ring-1 ring-flame-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={18} strokeWidth={1.6} className="text-flame-400 flex-shrink-0" />
                </div>

                {/* Number */}
                <div className="font-display font-extrabold text-white text-[2.75rem] md:text-[3rem] leading-none tracking-[-0.025em] mb-3">
                  <Counter value={stat.value} display={stat.display} inView={inView} />
                  {stat.suffix && (
                    <span className="text-[0.62em] text-flame-400 ml-0.5">{stat.suffix}</span>
                  )}
                </div>

                {/* Label */}
                <p className="font-display font-bold text-white/90 text-[0.9375rem] mb-1.5">
                  {stat.label}
                </p>

                {/* Detail */}
                <p className="font-body text-white/50 text-[0.8125rem] leading-[1.62]">
                  {stat.detail}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
