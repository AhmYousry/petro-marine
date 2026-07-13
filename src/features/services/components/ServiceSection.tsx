import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '@/utils'
import { ROUTES } from '@config/routes'
import type { ServiceDetail } from '../data/services'

// ─────────────────────────────────────────────────────────────────────────────
// VARIANTS
// ─────────────────────────────────────────────────────────────────────────────

const EASE   = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
const EASE_X = [0.16, 1.00, 0.30, 1.00] as [number, number, number, number]

const containerVariants: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
}

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.62, ease: EASE } },
}

const fadeIn: Variants = {
  hidden:  { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.50, ease: EASE } },
}

const imageVariants: Variants = {
  hidden:  { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.85, ease: EASE_X },
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// IMAGE PLACEHOLDER
// ─────────────────────────────────────────────────────────────────────────────

interface ImageAreaProps {
  gradient:    string
  icon:        React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>
  serviceNum:  number
  image?:      string
  imageAlt?:   string
}

function ImageArea({ gradient, icon: Icon, serviceNum, image, imageAlt }: ImageAreaProps) {
  return (
    <div
      className={cn(
        'relative w-full aspect-[5/4] rounded-2xl overflow-hidden',
        'shadow-[0_28px_80px_-24px_rgba(7,14,30,0.55)]',
      )}
    >
      {image ? (
        <>
          {/* Photo */}
          <img
            src={image}
            alt={imageAlt ?? ''}
            width={1250}
            height={1000}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Bottom scrim for badge legibility */}
          <div
            className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, rgba(7,14,30,0.55), transparent)',
            }}
          />
        </>
      ) : (
        <>
          {/* Gradient base */}
          <div className="absolute inset-0" style={{ background: gradient }} />

          {/* Subtle grid overlay */}
          <div className="absolute inset-0 bg-grid-dark opacity-25" />

          {/* Radial glow */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 50% at 50% 35%, rgba(255,255,255,0.10) 0%, transparent 60%)',
            }}
          />

          {/* Diagonal accent line */}
          <div
            className="absolute -right-10 top-0 w-px h-full rotate-[18deg] origin-top opacity-60"
            style={{
              background:
                'linear-gradient(to bottom, transparent, rgba(255,255,255,0.4) 50%, transparent)',
            }}
          />

          {/* Large center icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon
              size={140}
              strokeWidth={0.85}
              className="text-white/15"
            />
          </div>
        </>
      )}

      {/* Service number badge — bottom-left */}
      <div className="absolute bottom-5 left-5 flex items-center gap-3">
        <div className="px-2.5 py-1 bg-white/12 backdrop-blur-md border border-white/25 rounded">
          <span className="font-mono text-[0.6875rem] font-medium tracking-wider text-white/85 tabular-nums">
            {String(serviceNum).padStart(2, '0')} / 07
          </span>
        </div>
      </div>

      {/* Corner shimmer (placeholder only) */}
      {!image && (
        <div
          className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 100% 0%, rgba(255,255,255,0.18) 0%, transparent 65%)',
          }}
        />
      )}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION
// ─────────────────────────────────────────────────────────────────────────────

interface ServiceSectionProps {
  service: ServiceDetail
  index:   number
}

export function ServiceSection({ service, index }: ServiceSectionProps) {
  const ref    = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  const Icon       = service.icon
  const isReversed = index % 2 === 1
  const serviceNum = index + 1

  return (
    <section
      id={service.slug}
      ref={ref}
      className={cn(
        'relative overflow-hidden scroll-mt-24',
        service.bg === 'white' ? 'bg-white' : 'bg-smoke-50',
      )}
      aria-labelledby={`${service.slug}-heading`}
    >
      {/* ── Decorative background blob ─────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div
          className={cn(
            'absolute w-[600px] h-[600px] rounded-full opacity-[0.04]',
            isReversed ? '-top-32 -left-32' : '-top-32 -right-32',
          )}
          style={{ background: 'radial-gradient(circle, #1B2B4B 0%, transparent 65%)' }}
        />
      </div>

      <div className="container-maritime py-20 md:py-28 lg:py-32 relative">
        <div
          className={cn(
            'grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center',
          )}
        >

          {/* ═══ CONTENT BLOCK ════════════════════════════════════════ */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className={cn(
              'order-2',
              isReversed ? 'lg:order-2' : 'lg:order-1',
            )}
          >
            {/* Service marker: number + icon */}
            <motion.div variants={fadeUp} className="mb-7 flex items-center gap-4">
              <span className="font-mono text-[0.6875rem] font-medium tracking-[0.20em] text-flame-600 tabular-nums">
                {String(serviceNum).padStart(2, '0')}
              </span>
              <span className="w-10 h-px bg-steel-200" />
              <div className="w-10 h-10 rounded-lg bg-ocean-50 ring-1 ring-ocean-100 flex items-center justify-center">
                <Icon size={18} strokeWidth={1.75} className="text-ocean-600 flex-shrink-0" />
              </div>
            </motion.div>

            {/* Title */}
            <motion.h2
              id={`${service.slug}-heading`}
              variants={fadeUp}
              className={cn(
                'font-display font-extrabold leading-[1.07] tracking-[-0.018em]',
                'text-navy-900',
                'text-[1.875rem] sm:text-[2.25rem] md:text-[2.625rem]',
                'mb-3',
              )}
            >
              {service.title}
            </motion.h2>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              className="font-display font-medium text-ocean-700 text-[0.9375rem] md:text-base leading-snug mb-6 italic"
            >
              {service.tagline}
            </motion.p>

            {/* Intro paragraph */}
            <motion.p
              variants={fadeUp}
              className={cn(
                'text-steel-600 font-body leading-[1.78]',
                'text-[0.9375rem] md:text-[1rem]',
                'mb-8',
              )}
            >
              {service.intro}
            </motion.p>

            {/* Highlights bullet list */}
            <motion.ul
              variants={containerVariants}
              className="space-y-2.5 mb-9"
              aria-label="Service highlights"
            >
              {service.highlights.map((h) => (
                <motion.li
                  key={h}
                  variants={fadeIn}
                  className="flex items-start gap-3 text-[0.9375rem] text-steel-700 font-body leading-snug"
                >
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-flame-50 ring-1 ring-flame-100 flex items-center justify-center">
                    <Check size={11} strokeWidth={3} className="text-flame-600" />
                  </span>
                  <span>{h}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Capability chips */}
            <motion.div
              variants={containerVariants}
              className="flex flex-wrap gap-3 mb-9"
              aria-label="Service capabilities"
            >
              {service.capabilities.map((cap) => (
                <motion.div
                  key={cap.label}
                  variants={fadeIn}
                  className={cn(
                    'flex flex-col gap-0.5 px-4 py-2.5 rounded-lg',
                    'bg-white border border-steel-100',
                    'shadow-[0_1px_3px_rgba(27,43,75,0.04)]',
                  )}
                >
                  <span className="text-[0.625rem] font-display font-semibold uppercase tracking-[0.14em] text-steel-400">
                    {cap.label}
                  </span>
                  <span className="font-display font-bold text-navy-900 text-[0.9375rem] tabular-nums">
                    {cap.value}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA link */}
            <motion.div variants={fadeUp}>
              <Link
                to={ROUTES.CONTACT}
                className={cn(
                  'group inline-flex items-center gap-2.5',
                  'text-[0.8125rem] font-display font-bold uppercase tracking-[0.12em]',
                  'text-navy-900 hover:text-ocean-700',
                  'border-b-2 border-flame-500 hover:border-ocean-500',
                  'pb-0.5 transition-colors duration-250',
                )}
              >
                Request {service.title}
                <ArrowRight
                  size={14}
                  strokeWidth={2.5}
                  className="flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* ═══ IMAGE BLOCK ══════════════════════════════════════════ */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className={cn(
              'order-1',
              isReversed ? 'lg:order-1' : 'lg:order-2',
            )}
          >
            <ImageArea
              gradient={service.imageAccent}
              icon={Icon}
              serviceNum={serviceNum}
              image={service.image}
              imageAlt={`${service.title} — Petromarine crew at work`}
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
