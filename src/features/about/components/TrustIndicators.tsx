import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, type Variants } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { cn } from '@/utils'
import { ROUTES } from '@config/routes'
import { CERTIFICATIONS, PARTNERSHIPS } from '../data/company'

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.58, ease: EASE } },
}

const container: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
}

export function TrustIndicators() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      ref={ref}
      className="relative bg-white overflow-hidden"
      aria-labelledby="trust-heading"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -bottom-40 -right-20 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(27,43,75,0.04) 0%, transparent 65%)' }}
        />
      </div>

      <div className="container-maritime py-24 md:py-32 relative">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center max-w-[720px] mx-auto mb-14 md:mb-16"
        >
          <motion.div variants={fadeUp} className="mb-5 inline-flex items-center gap-3">
            <span className="w-8 h-px bg-flame-500" />
            <span className="text-[0.6875rem] font-display font-semibold uppercase tracking-[0.20em] text-ocean-600">
              Trust &amp; Compliance
            </span>
            <span className="w-8 h-px bg-flame-500" />
          </motion.div>

          <motion.h2
            id="trust-heading"
            variants={fadeUp}
            className={cn(
              'font-display font-extrabold text-navy-900 leading-[1.08] tracking-[-0.018em]',
              'text-[1.875rem] sm:text-[2.375rem] md:text-[2.75rem]',
              'mb-4',
            )}
          >
            Built on certification.{' '}
            <span className="text-ocean-600">Backed by audit.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-body text-steel-500 text-[1rem] leading-[1.72]"
          >
            Every Petromarine operation is governed by internationally recognized standards
            and audited by independent class societies — so your compliance exposure is
            protected at every touchpoint.
          </motion.p>
        </motion.div>

        {/* Certifications grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
        >
          {CERTIFICATIONS.map((c) => (
            <motion.div
              key={c.id}
              variants={fadeUp}
              className={cn(
                'group flex items-start gap-4 p-5 md:p-6 rounded-xl',
                'bg-smoke-50 border border-steel-100',
                'hover:bg-white hover:border-ocean-200',
                'hover:shadow-[0_8px_28px_rgba(27,43,75,0.08)]',
                'transition-all duration-300',
              )}
            >
              {/* Check mark */}
              <div className="flex-shrink-0 mt-0.5">
                <div className="w-10 h-10 rounded-lg bg-ocean-50 ring-1 ring-ocean-100 flex items-center justify-center group-hover:bg-ocean-600 group-hover:ring-ocean-600 transition-all duration-300">
                  <CheckCircle2 size={18} strokeWidth={1.75} className="text-ocean-600 group-hover:text-white transition-colors duration-300 flex-shrink-0" />
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-display font-extrabold text-navy-900 text-[0.9375rem] leading-tight mb-1">
                  {c.code}
                </h3>
                <p className="font-body text-steel-600 text-[0.8125rem] leading-snug mb-1.5">
                  {c.scope}
                </p>
                <p className="font-body text-steel-400 text-[0.6875rem] uppercase tracking-[0.10em] font-display font-medium">
                  {c.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partnership banner */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-12"
        >
          {PARTNERSHIPS.map((p) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.id}
                variants={fadeUp}
                className={cn(
                  'relative bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl overflow-hidden',
                  'p-7 md:p-8',
                  'shadow-[0_12px_40px_-12px_rgba(7,14,30,0.30)]',
                )}
              >
                {/* BG texture */}
                <div className="absolute inset-0 bg-grid-dark opacity-[0.18]" aria-hidden="true" />
                <div
                  className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 100% 0%, rgba(42,95,165,0.20) 0%, transparent 65%)' }}
                  aria-hidden="true"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-px"
                  style={{ background: 'linear-gradient(to right, transparent, rgba(232,82,10,0.55), transparent)' }}
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-flame-500/15 ring-1 ring-flame-500/25 flex items-center justify-center mb-5">
                    <Icon size={18} strokeWidth={1.6} className="text-flame-400 flex-shrink-0" />
                  </div>

                  <h3 className="font-display font-bold text-white text-[1.0625rem] mb-2.5 leading-tight">
                    {p.title}
                  </h3>

                  <p className="font-body text-white/65 text-[0.875rem] leading-[1.68]">
                    {p.body}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-steel-100"
        >
          <p className="font-body text-steel-500 text-[0.9375rem] text-center sm:text-left">
            Documentation and audit trails available on request.
          </p>
          <Link
            to={ROUTES.CONTACT}
            className={cn(
              'group inline-flex items-center gap-2',
              'text-[0.8125rem] font-display font-bold uppercase tracking-[0.12em]',
              'text-navy-900 hover:text-ocean-700',
              'border-b-2 border-flame-500 hover:border-ocean-500',
              'pb-0.5 transition-colors duration-250',
            )}
          >
            Request Certifications
            <ArrowRight
              size={13}
              strokeWidth={2.5}
              className="flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
