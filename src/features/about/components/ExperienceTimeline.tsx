import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { cn } from '@/utils'
import { TIMELINE } from '../data/company'

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

const lineGrow: Variants = {
  hidden:  { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 1.6, ease: EASE } },
}

// ── Individual milestone ─────────────────────────────────────────────────────

interface MilestoneProps {
  m:      typeof TIMELINE[number]
  index:  number
  total:  number
}

function Milestone({ m, index, total }: MilestoneProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.35 })
  const isLeft = index % 2 === 0
  const isLast = index === total - 1

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-[1fr_56px_1fr] md:grid-cols-[1fr_72px_1fr] gap-4 md:gap-6"
    >
      {/* ── LEFT column ────────────────────────────────── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className={cn(
          'min-h-[140px]',
          isLeft ? 'md:text-right md:pr-2' : 'hidden md:block',
        )}
      >
        {isLeft && <MilestoneCard m={m} alignRight />}
      </motion.div>

      {/* ── CENTER column: dot + line ──────────────────── */}
      <div className="relative flex flex-col items-center">
        {/* Dot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
          className={cn(
            'relative z-10 w-5 h-5 rounded-full flex-shrink-0',
            'bg-flame-500',
            'ring-4 ring-white',
            'shadow-[0_0_0_3px_rgba(232,82,10,0.18),0_4px_12px_rgba(232,82,10,0.35)]',
            'mt-2',
          )}
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-flame-500 animate-ping opacity-25" />
        </motion.div>

        {/* Vertical line connector — to next item */}
        {!isLast && (
          <motion.div
            variants={lineGrow}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="absolute top-7 bottom-[-2rem] w-[2px] bg-gradient-to-b from-flame-500/40 via-ocean-400/30 to-flame-500/30 origin-top"
            aria-hidden="true"
          />
        )}
      </div>

      {/* ── RIGHT column ───────────────────────────────── */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className={cn(
          'min-h-[140px]',
          !isLeft ? 'md:pl-2' : 'hidden md:block',
          isLeft && 'md:hidden',  // hide on desktop when on left side
        )}
      >
        {!isLeft && <MilestoneCard m={m} />}
      </motion.div>

      {/* ── MOBILE: always show on right of dot ────────── */}
      {isLeft && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="md:hidden col-start-3"
        >
          <MilestoneCard m={m} />
        </motion.div>
      )}
    </div>
  )
}

// ── Milestone card ───────────────────────────────────────────────────────────

interface CardProps {
  m: typeof TIMELINE[number]
  alignRight?: boolean
}

function MilestoneCard({ m, alignRight }: CardProps) {
  return (
    <div className={cn('inline-block', alignRight ? 'md:text-right' : 'md:text-left')}>
      {/* Year + badge row */}
      <div className={cn(
        'flex items-center gap-3 mb-3',
        alignRight ? 'md:justify-end' : 'md:justify-start',
      )}>
        <span className="font-display font-extrabold text-flame-500 text-[1.5rem] md:text-[1.75rem] leading-none tracking-tight tabular-nums">
          {m.year}
        </span>
        {m.badge && (
          <span className="px-2.5 py-1 rounded-full bg-ocean-50 ring-1 ring-ocean-100 text-[0.6875rem] font-display font-semibold uppercase tracking-[0.10em] text-ocean-700">
            {m.badge}
          </span>
        )}
      </div>

      <h3 className="font-display font-bold text-navy-900 text-[1.0625rem] mb-2 leading-snug">
        {m.title}
      </h3>

      <p className="font-body text-steel-600 text-[0.9375rem] leading-[1.72] max-w-[400px] inline-block">
        {m.body}
      </p>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION
// ─────────────────────────────────────────────────────────────────────────────

export function ExperienceTimeline() {
  const headerRef = useRef<HTMLDivElement>(null)
  const inView = useInView(headerRef, { once: true, amount: 0.4 })

  return (
    <section
      className="relative bg-white overflow-hidden"
      aria-labelledby="timeline-heading"
    >
      <div className="container-maritime py-24 md:py-32">
        <motion.div
          ref={headerRef}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center max-w-[680px] mx-auto mb-16 md:mb-20"
        >
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="w-8 h-px bg-flame-500" />
            <span className="text-[0.6875rem] font-display font-semibold uppercase tracking-[0.20em] text-ocean-600">
              Our Heritage
            </span>
            <span className="w-8 h-px bg-flame-500" />
          </div>

          <h2
            id="timeline-heading"
            className={cn(
              'font-display font-extrabold text-navy-900 leading-[1.08] tracking-[-0.018em]',
              'text-[1.875rem] sm:text-[2.375rem] md:text-[2.75rem]',
              'mb-4',
            )}
          >
            Five decades.{' '}
            <span className="text-ocean-600">One unbroken thread.</span>
          </h2>

          <p className="font-body text-steel-500 text-[1rem] leading-[1.72]">
            The milestones that built who we are today — from a single
            chandling office on Egypt&rsquo;s Mediterranean coast to the
            country&rsquo;s leading full-service marine partner.
          </p>
        </motion.div>

        {/* Timeline rail */}
        <div className="relative max-w-[1080px] mx-auto">
          <div className="flex flex-col gap-12 md:gap-16">
            {TIMELINE.map((m, i) => (
              <Milestone key={m.year} m={m} index={i} total={TIMELINE.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
