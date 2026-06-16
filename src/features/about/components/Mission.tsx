import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { cn } from '@/utils'
import { MISSION_VALUES } from '../data/company'

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]

const container: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.10, delayChildren: 0.08 } },
}

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.60, ease: EASE } },
}

export function Mission() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      ref={ref}
      className="relative bg-smoke-50 overflow-hidden"
      aria-labelledby="mission-heading"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(27,43,75,0.04) 0%, transparent 65%)' }}
        />
      </div>

      <div className="container-maritime py-24 md:py-32 relative">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center max-w-[760px] mx-auto mb-14 md:mb-16"
        >
          <motion.div variants={fadeUp} className="mb-5 inline-flex items-center gap-3">
            <span className="w-8 h-px bg-flame-500" />
            <span className="text-[0.6875rem] font-display font-semibold uppercase tracking-[0.20em] text-ocean-600">
              Our Compass
            </span>
            <span className="w-8 h-px bg-flame-500" />
          </motion.div>

          <motion.h2
            id="mission-heading"
            variants={fadeUp}
            className={cn(
              'font-display font-extrabold text-navy-900 leading-[1.08] tracking-[-0.018em]',
              'text-[1.875rem] sm:text-[2.375rem] md:text-[2.75rem]',
            )}
          >
            What we stand for —{' '}
            <span className="text-ocean-600">on every voyage.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
        >
          {MISSION_VALUES.map((v) => {
            const Icon = v.icon
            return (
              <motion.div
                key={v.id}
                variants={fadeUp}
                className={cn(
                  'group relative bg-white rounded-2xl overflow-hidden',
                  'p-8 md:p-9',
                  'border border-steel-100',
                  'shadow-[0_2px_6px_rgba(27,43,75,0.04)]',
                  'hover:shadow-[0_18px_48px_rgba(27,43,75,0.10)] hover:-translate-y-1.5',
                  'transition-all duration-350',
                )}
              >
                {/* Top accent line - reveals on hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-flame-500/0 via-flame-500 to-flame-500/0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-ocean-50 ring-1 ring-ocean-100 flex items-center justify-center mb-6 group-hover:bg-ocean-600 group-hover:ring-ocean-600 transition-all duration-300">
                  <Icon
                    size={24}
                    strokeWidth={1.6}
                    className="text-ocean-600 group-hover:text-white transition-colors duration-300 flex-shrink-0"
                  />
                </div>

                <h3 className="font-display font-extrabold text-navy-900 text-[1.25rem] mb-3 leading-tight">
                  {v.title}
                </h3>

                <p className="font-body text-steel-600 text-[0.9375rem] leading-[1.72]">
                  {v.body}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
