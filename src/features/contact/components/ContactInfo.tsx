import { motion, type Variants } from 'framer-motion'
import { MapPin, ChevronRight } from 'lucide-react'
import { cn } from '@/utils'
import { CONTACT_METHODS, OFFICES, HOURS } from '../data/contact'

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]

const container: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const item: Variants = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

export function ContactInfo() {
  const HoursIcon = HOURS.icon

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      className="flex flex-col"
    >
      {/* Section intro */}
      <motion.div variants={item} className="mb-7">
        <div className="mb-3 flex items-center gap-3">
          <span className="w-8 h-px bg-flame-500" />
          <span className="text-[0.6875rem] font-display font-semibold uppercase tracking-[0.20em] text-ocean-600">
            Reach Us Directly
          </span>
        </div>
        <h2 className="font-display font-extrabold text-navy-900 text-[1.5rem] md:text-[1.75rem] tracking-[-0.01em]">
          Talk to a Marine Specialist
        </h2>
      </motion.div>

      {/* ── Primary contact methods ─────────────────────────────────── */}
      <div className="space-y-3 mb-9">
        {CONTACT_METHODS.map((m) => {
          const Icon = m.icon
          const external = m.href.startsWith('http')
          return (
            <motion.a
              key={m.id}
              variants={item}
              href={m.href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className={cn(
                'group flex items-center gap-4 p-4 rounded-xl',
                'bg-white border border-steel-100',
                'shadow-[0_1px_4px_rgba(27,43,75,0.05)]',
                'hover:border-steel-200 hover:shadow-[0_10px_30px_-12px_rgba(27,43,75,0.20)]',
                'hover:-translate-y-0.5 transition-all duration-250',
              )}
            >
              <div className={cn('w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 ring-1', m.iconBg)}>
                <Icon size={19} strokeWidth={1.85} className={m.accent} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[0.6875rem] font-display font-semibold uppercase tracking-[0.12em] text-steel-400 mb-0.5">
                  {m.label}
                </p>
                <p className="font-display font-bold text-navy-900 text-[0.9375rem] truncate">{m.primary}</p>
                <p className="text-steel-500 font-body text-[0.8125rem] truncate">{m.secondary}</p>
              </div>
              <ChevronRight
                size={16}
                strokeWidth={2}
                className="text-steel-300 group-hover:text-flame-500 group-hover:translate-x-1 transition-all duration-250 flex-shrink-0"
              />
            </motion.a>
          )
        })}
      </div>

      {/* ── Operating hours ─────────────────────────────────────────── */}
      <motion.div
        variants={item}
        className="mb-9 p-5 rounded-xl bg-navy-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-dark opacity-[0.15]" aria-hidden="true" />
        <div
          className="absolute -top-16 -right-16 w-40 h-40 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(232,82,10,0.18) 0%, transparent 65%)' }}
          aria-hidden="true"
        />
        <div className="relative">
          <div className="flex items-center gap-2.5 mb-4">
            <HoursIcon size={16} strokeWidth={2} className="text-flame-400" />
            <h3 className="font-display font-bold text-white text-[0.9375rem] uppercase tracking-[0.10em]">
              When We&rsquo;re Available
            </h3>
          </div>
          <dl className="space-y-2.5">
            {HOURS.lines.map((line) => (
              <div key={line.label} className="flex items-center justify-between gap-4">
                <dt className="text-steel-400 font-body text-[0.8125rem]">{line.label}</dt>
                <dd className="text-white font-display font-semibold text-[0.8125rem] text-right">{line.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>

      {/* ── Regional offices ────────────────────────────────────────── */}
      <motion.div variants={item}>
        <h3 className="font-display font-bold text-navy-900 text-[0.9375rem] uppercase tracking-[0.10em] mb-4 flex items-center gap-2.5">
          <MapPin size={16} strokeWidth={2} className="text-ocean-600" />
          Our Egyptian Offices
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {OFFICES.map((o) => (
            <div
              key={o.id}
              className={cn(
                'p-4 rounded-xl border bg-white',
                o.hub ? 'border-flame-200 ring-1 ring-flame-100' : 'border-steel-100',
              )}
            >
              <div className="flex items-center gap-2 mb-1">
                <p className="font-display font-bold text-navy-900 text-[0.9375rem]">{o.city}</p>
                {o.hub && (
                  <span className="text-[0.5625rem] font-display font-bold uppercase tracking-[0.08em] text-flame-600 bg-flame-50 px-1.5 py-0.5 rounded">
                    HQ
                  </span>
                )}
              </div>
              <p className="text-[0.6875rem] font-display font-semibold uppercase tracking-[0.10em] text-ocean-600 mb-2">
                {o.role}
              </p>
              <p className="text-steel-500 font-body text-[0.75rem] leading-[1.5] mb-2">{o.address}</p>
              <a
                href={`tel:${o.phone.replace(/[^\d+]/g, '')}`}
                className="text-navy-800 font-display font-semibold text-[0.75rem] hover:text-flame-600 transition-colors duration-200"
              >
                {o.phone}
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
