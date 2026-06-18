import { Link } from 'react-router-dom'
import { motion, type Variants } from 'framer-motion'
import { ChevronRight, Home as HomeIcon, Phone, Mail, Clock } from 'lucide-react'
import { cn } from '@/utils'
import { ROUTES } from '@config/routes'

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]

const container: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.10 } },
}

const item: Variants = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.60, ease: EASE } },
}

const QUICK = [
  { icon: Phone, label: '+20 3 555 0192', href: 'tel:+2035550192' },
  { icon: Mail,  label: 'info@petromarine.com', href: 'mailto:info@petromarine.com' },
  { icon: Clock, label: '24/7 Operations', href: undefined },
]

export function ContactHero() {
  return (
    <section
      className="relative min-h-[520px] md:min-h-[560px] bg-navy-900 overflow-hidden flex flex-col"
      aria-labelledby="contact-hero-heading"
    >
      {/* ── Background ─────────────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(150deg, #070E1E 0%, #0F1E3A 32%, #1B2B4B 68%, #1B3E6F 100%)' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 60% -5%, rgba(42,95,165,0.42) 0%, transparent 60%)' }}
        />
        <div className="absolute inset-0 bg-grid-dark opacity-[0.22]" />
        {/* Diagonal accent lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -right-20 top-0 w-px h-full rotate-[14deg] origin-top"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(42,95,165,0.28) 35%, rgba(42,95,165,0.14) 70%, transparent)' }}
          />
          <div
            className="absolute right-32 top-0 w-px h-full rotate-[14deg] origin-top"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.04) 50%, transparent)' }}
          />
        </div>
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(7,14,30,0.55))' }}
        />
      </div>

      {/* Navbar spacer */}
      <div className="h-[72px] flex-shrink-0" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container-maritime w-full py-16 md:py-20">
          <motion.div variants={container} initial="hidden" animate="visible" className="max-w-[760px]">
            {/* Breadcrumb */}
            <motion.nav
              variants={item}
              aria-label="Breadcrumb"
              className="mb-8 flex items-center gap-2 text-[0.75rem] font-display tracking-wider"
            >
              <Link to={ROUTES.HOME} className="flex items-center gap-1.5 text-white/55 hover:text-white transition-colors duration-200">
                <HomeIcon size={12} strokeWidth={1.75} />
                Home
              </Link>
              <ChevronRight size={12} className="text-white/30" strokeWidth={2} />
              <span className="text-white/85 font-medium">Contact</span>
            </motion.nav>

            {/* Eyebrow */}
            <motion.div variants={item} className="mb-6 flex items-center gap-3">
              <span className="w-10 h-px bg-flame-500" />
              <span className="text-[0.6875rem] font-display font-semibold uppercase tracking-[0.20em] text-ocean-300">
                Let&rsquo;s Talk
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              id="contact-hero-heading"
              variants={item}
              className={cn(
                'font-display font-extrabold text-white leading-[1.05] tracking-[-0.022em]',
                'text-[2.25rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem]',
                'mb-6',
              )}
            >
              Get Your Vessel{' '}
              <span className="block sm:inline"><span className="text-ocean-300">Served Faster.</span></span>
            </motion.h1>

            {/* Body */}
            <motion.p
              variants={item}
              className="text-white/72 font-body leading-[1.72] text-[1rem] md:text-[1.125rem] max-w-[600px] mb-9"
            >
              Whether you need an urgent quote, port coordination, or technical support —
              our team responds within 24 hours, and our operations center never closes.
            </motion.p>

            {/* Quick contact chips */}
            <motion.div variants={item} className="flex flex-wrap gap-3">
              {QUICK.map(({ icon: Icon, label, href }) => {
                const inner = (
                  <>
                    <Icon size={14} strokeWidth={1.85} className="text-flame-400 flex-shrink-0" />
                    {label}
                  </>
                )
                const cls = cn(
                  'inline-flex items-center gap-2 h-10 px-4 rounded-full',
                  'bg-white/[0.06] border border-white/12 backdrop-blur-sm',
                  'text-[0.8125rem] font-display font-medium text-white/80',
                  href && 'hover:bg-white/[0.12] hover:border-white/30 hover:text-white transition-all duration-250',
                )
                return href ? (
                  <a key={label} href={href} className={cls}>{inner}</a>
                ) : (
                  <span key={label} className={cls}>{inner}</span>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
