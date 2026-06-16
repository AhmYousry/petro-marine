import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { MapPin, Anchor as AnchorIcon } from 'lucide-react'
import { cn } from '@/utils'
import { PORTS, REGION_META } from '../data/company'

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.58, ease: EASE } },
}

const container: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.10 } },
}

// ── Group ports by region ────────────────────────────────────────────────────

const PORTS_BY_REGION = {
  mediterranean: PORTS.filter(p => p.region === 'mediterranean'),
  canal:         PORTS.filter(p => p.region === 'canal'),
  'red-sea':     PORTS.filter(p => p.region === 'red-sea'),
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export function PortCoverage() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section
      ref={ref}
      className="relative bg-smoke-50 overflow-hidden"
      aria-labelledby="ports-heading"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(42,95,165,0.05) 0%, transparent 65%)' }}
        />
      </div>

      <div className="container-maritime py-24 md:py-32 relative">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-14 md:mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <motion.div variants={fadeUp} className="mb-5 flex items-center gap-3">
                <span className="w-8 h-px bg-flame-500" />
                <span className="text-[0.6875rem] font-display font-semibold uppercase tracking-[0.20em] text-ocean-600">
                  Egyptian Port Coverage
                </span>
              </motion.div>

              <motion.h2
                id="ports-heading"
                variants={fadeUp}
                className={cn(
                  'font-display font-extrabold text-navy-900 leading-[1.08] tracking-[-0.018em]',
                  'text-[1.875rem] sm:text-[2.375rem] md:text-[2.75rem]',
                  'max-w-[640px]',
                )}
              >
                12 ports. 3 coastlines.{' '}
                <span className="text-ocean-600">One unified network.</span>
              </motion.h2>
            </div>

            {/* Legend */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 md:gap-5 md:flex-shrink-0"
            >
              {(['mediterranean','canal','red-sea'] as const).map((r) => (
                <div key={r} className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ background: REGION_META[r].color }}
                  />
                  <span className="text-[0.75rem] font-display font-medium uppercase tracking-wider text-steel-600">
                    {REGION_META[r].label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Region groups */}
        <div className="space-y-12 md:space-y-14">
          {(['mediterranean','canal','red-sea'] as const).map((region) => (
            <RegionBlock
              key={region}
              region={region}
              ports={PORTS_BY_REGION[region]}
            />
          ))}
        </div>

        {/* Bottom summary band */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-14 md:mt-16 p-6 md:p-8 rounded-2xl bg-navy-900 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-dark opacity-[0.15]" aria-hidden="true" />
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 60% 100% at 100% 50%, rgba(232,82,10,0.10) 0%, transparent 60%)',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div className="flex items-start md:items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-flame-500/15 ring-1 ring-flame-500/25 flex items-center justify-center flex-shrink-0">
                <MapPin size={20} strokeWidth={1.6} className="text-flame-400" />
              </div>
              <div>
                <p className="font-display font-bold text-white text-[1.0625rem] mb-1">
                  Always closer than you think.
                </p>
                <p className="font-body text-white/65 text-[0.9375rem] leading-snug max-w-[560px]">
                  Every Egyptian port is within 6 hours of a Petromarine operations centre — no
                  outsourcing, no third-party hops, no delay.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// REGION BLOCK
// ─────────────────────────────────────────────────────────────────────────────

interface RegionBlockProps {
  region: 'mediterranean' | 'canal' | 'red-sea'
  ports:  typeof PORTS
}

function RegionBlock({ region, ports }: RegionBlockProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  const meta = REGION_META[region]

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {/* Region label */}
      <motion.div variants={fadeUp} className="mb-5 flex items-center gap-3">
        <span
          className="w-1 h-7 rounded-full flex-shrink-0"
          style={{ background: meta.color }}
        />
        <h3 className="font-display font-bold text-navy-900 text-[0.9375rem] uppercase tracking-[0.14em]">
          {meta.label}
        </h3>
        <span className="text-steel-400 font-mono text-[0.75rem] tabular-nums">
          {String(ports.length).padStart(2,'0')} {ports.length === 1 ? 'port' : 'ports'}
        </span>
      </motion.div>

      {/* Port cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ports.map((p) => (
          <motion.div
            key={p.id}
            variants={fadeUp}
            className={cn(
              'group relative bg-white rounded-xl p-5 md:p-6',
              'border border-steel-100',
              'shadow-[0_1px_4px_rgba(27,43,75,0.04)]',
              'hover:shadow-[0_12px_36px_rgba(27,43,75,0.10)]',
              'hover:-translate-y-1 transition-all duration-300',
              p.featured && 'ring-1 ring-flame-100',
            )}
          >
            {/* Region color stripe top */}
            <div
              className="absolute top-0 left-5 right-5 h-[2px] rounded-full"
              style={{ background: meta.color, opacity: 0.7 }}
              aria-hidden="true"
            />

            {/* Featured pin */}
            {p.featured && (
              <span
                className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-flame-500/10 border border-flame-500/30 text-[0.625rem] font-display font-semibold uppercase tracking-[0.10em] text-flame-600"
                aria-label="Featured port"
              >
                Hub
              </span>
            )}

            {/* Icon */}
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-ocean-50 ring-1 ring-ocean-100 flex items-center justify-center">
                <AnchorIcon size={14} strokeWidth={1.75} className="text-ocean-600 flex-shrink-0" />
              </div>
              <span className="font-mono text-[0.625rem] font-medium uppercase tracking-[0.14em] text-steel-400">
                {meta.short} · {p.yearJoined}
              </span>
            </div>

            <h4 className="font-display font-extrabold text-navy-900 text-[1.0625rem] mb-1 leading-tight">
              {p.name}
            </h4>

            <p className="font-body text-steel-500 text-[0.8125rem] leading-snug mb-3 min-h-[2.5rem]">
              {p.type}
            </p>

            <div className="flex items-center justify-between pt-3 border-t border-steel-100">
              <span className="font-body text-steel-400 text-[0.75rem]">Services</span>
              <span className="font-display font-bold text-navy-900 text-[0.9375rem] tabular-nums">
                {p.services}+
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
