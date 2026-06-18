import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { FileText, Phone, ArrowRight } from 'lucide-react'
import { cn } from '@/utils'

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]

const container: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
}

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

export function QuoteCTA() {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  const scrollToForm = () => {
    document.getElementById('contact-name')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    setTimeout(() => document.getElementById('contact-name')?.focus(), 600)
  }

  return (
    <section ref={ref} className="relative bg-navy-900 overflow-hidden" aria-labelledby="quote-cta-heading">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #070E1E 0%, #0F1E3A 35%, #1B2B4B 70%, #1B3E6F 100%)' }}
        />
        <div className="absolute inset-0 bg-grid-dark opacity-[0.18]" />
        <div
          className="absolute -bottom-32 -right-24 w-[560px] h-[560px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(232,82,10,0.18) 0%, transparent 60%)' }}
        />
        <div
          className="absolute -top-40 -left-40 w-[680px] h-[680px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(42,95,165,0.20) 0%, transparent 60%)' }}
        />
      </div>

      <div className="container-maritime py-20 md:py-24 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-[860px] mx-auto text-center"
        >
          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-3">
            <span className="w-8 h-px bg-flame-500" />
            <span className="text-[0.6875rem] font-display font-semibold uppercase tracking-[0.20em] text-ocean-300">
              No Obligation
            </span>
            <span className="w-8 h-px bg-flame-500" />
          </motion.div>

          <motion.h2
            id="quote-cta-heading"
            variants={fadeUp}
            className={cn(
              'font-display font-extrabold text-white leading-[1.06] tracking-[-0.018em]',
              'text-[1.875rem] sm:text-[2.375rem] md:text-[2.875rem]',
              'mb-5',
            )}
          >
            Need a Quote for Your{' '}
            <span className="text-ocean-300">Next Port Call?</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-white/70 font-body leading-[1.72] text-[1rem] md:text-[1.0625rem] max-w-[560px] mx-auto mb-9"
          >
            Send us your vessel details and requirements — you&rsquo;ll have a tailored,
            itemized quote back within 24 hours. No commitment, no pressure.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToForm}
              className={cn(
                'group inline-flex items-center gap-2.5 h-[54px] px-9 rounded',
                'bg-flame-500 hover:bg-flame-600 active:bg-flame-700',
                'text-white font-display font-semibold text-[0.8125rem] uppercase tracking-[0.12em]',
                'shadow-[0_4px_28px_rgba(232,82,10,0.40)] hover:shadow-[0_8px_36px_rgba(232,82,10,0.55)]',
                'transition-all duration-300',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900',
              )}
            >
              <FileText size={16} strokeWidth={2} className="flex-shrink-0" />
              Request a Quote
              <ArrowRight size={15} strokeWidth={2.5} className="flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <a
              href="tel:+2035550192"
              className={cn(
                'group inline-flex items-center gap-2.5 h-[54px] px-7 rounded',
                'border border-white/22 hover:border-white/50',
                'bg-white/[0.05] hover:bg-white/[0.10] backdrop-blur-sm',
                'text-white/85 hover:text-white font-display font-semibold text-[0.8125rem] uppercase tracking-[0.12em]',
                'transition-all duration-300',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900',
              )}
            >
              <Phone size={14} strokeWidth={2} className="flex-shrink-0 text-flame-400" />
              Call Operations
            </a>
          </motion.div>

          <motion.p variants={fadeUp} className="text-white/40 font-body text-[0.8125rem] mt-8 tracking-wide">
            ISO 9001:2015 · ISM Code · MARPOL Annex I, V · OHSAS 18001
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
