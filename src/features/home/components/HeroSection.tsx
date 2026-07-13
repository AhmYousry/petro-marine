import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import { cn } from '@/utils'
import { ROUTES } from '@config/routes'

// ─────────────────────────────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────────────────────────────

const SLIDE_DURATION  = 7000
const EASE_MARITIME   = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
const EASE_OUT_EXPO   = [0.19, 1.00, 0.22, 1.00] as [number, number, number, number]

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE DATA
// ─────────────────────────────────────────────────────────────────────────────

interface Slide {
  id:           string
  eyebrow:      string
  headline:     string[]
  body:         string
  cta:          { label: string; href: string }
  ctaSecondary: { label: string; href: string }
  accentWord?:  string
  accentColor:  string
  badge?:       string
}

const SLIDES: Slide[] = [
  {
    id:           'solutions',
    eyebrow:      'FULL-SERVICE CAPABILITY',
    headline:     ['Complete Marine', 'Solutions,', 'One Partner'],
    body:         'From offshore support to fuel supply, technical maintenance to strategic consultancy — every maritime requirement served with precision under one roof.',
    cta:          { label: 'View All Services', href: ROUTES.SERVICES },
    ctaSecondary: { label: 'Our Capabilities',  href: ROUTES.ABOUT },
    accentWord:   'Solutions,',
    accentColor:  'text-flame-400',
  },
  {
    id:           'support',
    eyebrow:      'ALWAYS OPERATIONAL',
    headline:     ['24/7 Support,', 'Wherever You Dock'],
    body:         'Round-the-clock operations response across 40+ ports worldwide. Our global network means when you need us, we\'re already on-site and ready.',
    cta:          { label: 'Contact Operations', href: ROUTES.CONTACT },
    ctaSecondary: { label: 'Global Network',     href: ROUTES.ABOUT },
    accentWord:   '24/7',
    accentColor:  'text-gold-400',
    badge:        '40+ Ports Worldwide',
  },
  {
    id:           'heritage',
    eyebrow:      'TRUSTED SINCE 1973',
    headline:     ['Over 50 Years', 'Serving the Sea'],
    body:         'Setting the gold standard in offshore operations, vessel management, and maritime solutions across global waters — for over five decades.',
    cta:          { label: 'Explore Our Services', href: ROUTES.SERVICES },
    ctaSecondary: { label: 'Our Story',            href: ROUTES.ABOUT },
    accentWord:   'Serving',
    accentColor:  'text-ocean-300',
    badge:        '50+ Years of Excellence',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// BACKGROUND CONFIGS  (brighten slides 2 & 3 for visible depth)
// ─────────────────────────────────────────────────────────────────────────────

const SLIDE_BACKGROUNDS = [
  // Slide 1 — solutions — ocean blue, strong left-column sweep, more visible depth
  {
    base:    'linear-gradient(150deg, #0A1525 0%, #122444 30%, #1A3260 60%, #1F4880 100%)',
    overlay: 'radial-gradient(ellipse 70% 90% at -8% 50%, rgba(42,95,165,0.55) 0%, transparent 55%)',
  },
  // Slide 2 — support — deep night with ember glow, warm bottom-right accent
  {
    base:    'linear-gradient(135deg, #070E1E 0%, #0D1628 35%, #182440 65%, #1B2B4B 100%)',
    overlay: [
      'radial-gradient(ellipse 65% 45% at 100% 100%, rgba(232,82,10,0.24) 0%, transparent 52%)',
      'radial-gradient(ellipse 55% 55% at 55% 108%, rgba(42,95,165,0.32) 0%, transparent 55%)',
    ].join(', '),
  },
  // Slide 3 — heritage — deep midnight navy, radial ocean sweep from top
  {
    base:    'linear-gradient(160deg, #070E1E 0%, #0F1E3A 30%, #1B2B4B 65%, #1B3E6F 100%)',
    overlay: 'radial-gradient(ellipse 90% 55% at 50% -5%, rgba(42,95,165,0.55) 0%, transparent 58%)',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// DECORATIVE SVGs
// ─────────────────────────────────────────────────────────────────────────────

function AnchorDecor({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 280" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="110" cy="36" r="28" strokeWidth="5" stroke="currentColor" />
      <circle cx="110" cy="36" r="14" strokeWidth="3" stroke="currentColor" />
      <line x1="110" y1="64"  x2="110" y2="244" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <line x1="34"  y1="108" x2="186" y2="108" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <circle cx="34"  cy="108" r="7" fill="currentColor" />
      <circle cx="186" cy="108" r="7" fill="currentColor" />
      <path d="M110 244 Q42 224 18 188"  stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M110 244 Q178 224 202 188" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M18 188  Q8 172 22 165"   stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M202 188 Q212 172 198 165" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

function CompassDecor({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="110" cy="110" r="104" strokeWidth="2"   stroke="currentColor" />
      <circle cx="110" cy="110" r="76"  strokeWidth="1.5" stroke="currentColor" />
      <circle cx="110" cy="110" r="46"  strokeWidth="1.5" stroke="currentColor" />
      <circle cx="110" cy="110" r="8"   strokeWidth="2"   stroke="currentColor" />
      <circle cx="110" cy="110" r="3"   fill="currentColor" />
      <line x1="110" y1="6"   x2="110" y2="214" stroke="currentColor" strokeWidth="1" />
      <line x1="6"   y1="110" x2="214" y2="110" stroke="currentColor" strokeWidth="1" />
      <line x1="37"  y1="37"  x2="183" y2="183" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" />
      <line x1="183" y1="37"  x2="37"  y2="183" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" />
      <polygon points="110,18 104,58 116,58" fill="currentColor" />
      <polygon points="110,202 104,162 116,162" stroke="currentColor" strokeWidth="1.5" />
      <rect x="202" y="107" width="12" height="6" rx="1" fill="currentColor" />
      <rect x="6"   y="107" width="12" height="6" rx="1" fill="currentColor" />
      {[...Array(16)].map((_, i) => {
        const angle = (i * 22.5 - 90) * (Math.PI / 180)
        const x1 = 110 + 104 * Math.cos(angle)
        const y1 = 110 + 104 * Math.sin(angle)
        const x2 = 110 + 94  * Math.cos(angle)
        const y2 = 110 + 94  * Math.sin(angle)
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth={i % 4 === 0 ? '2' : '1'} />
      })}
    </svg>
  )
}

function RadarDecor({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <circle cx="110" cy="110" r="104" strokeWidth="1.5" stroke="currentColor" />
      <circle cx="110" cy="110" r="80"  strokeWidth="1.5" stroke="currentColor" />
      <circle cx="110" cy="110" r="56"  strokeWidth="1.5" stroke="currentColor" />
      <circle cx="110" cy="110" r="32"  strokeWidth="1.5" stroke="currentColor" />
      <circle cx="110" cy="110" r="5"   fill="currentColor" />
      <line x1="110" y1="6"   x2="110" y2="214" stroke="currentColor" strokeWidth="1" />
      <line x1="6"   y1="110" x2="214" y2="110" stroke="currentColor" strokeWidth="1" />
      <line x1="110" y1="110" x2="47"  y2="23"  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M110 110 L47 23 A104 104 0 0 1 110 6 Z" fill="currentColor" fillOpacity="0.05" />
      <circle cx="158" cy="54"  r="4"   fill="currentColor" />
      <circle cx="62"  cy="148" r="3"   fill="currentColor" />
      <circle cx="168" cy="142" r="3.5" fill="currentColor" />
      <circle cx="90"  cy="70"  r="2.5" fill="currentColor" />
      <circle cx="158" cy="54"  r="9"   strokeWidth="1" stroke="currentColor" strokeOpacity="0.4" />
      <circle cx="168" cy="142" r="8"   strokeWidth="1" stroke="currentColor" strokeOpacity="0.35" />
    </svg>
  )
}

const SLIDE_DECORATIVES = [CompassDecor, RadarDecor, AnchorDecor]

// ─────────────────────────────────────────────────────────────────────────────
// FRAMER MOTION VARIANTS  (timing tuned for snappy transitions)
// ─────────────────────────────────────────────────────────────────────────────

const bgVariants: Variants = {
  enter:  { opacity: 0, scale: 1.06 },
  center: { opacity: 1, scale: 1.00, transition: { duration: 1.0, ease: EASE_OUT_EXPO } },
  exit:   { opacity: 0,              transition: { duration: 0.55, ease: 'easeIn' } },
}

const decorVariants: Variants = {
  enter:  { opacity: 0, scale: 0.90, rotate: -5 },
  center: { opacity: 1, scale: 1.00, rotate: 0, transition: { duration: 1.1, ease: EASE_OUT_EXPO, delay: 0.1 } },
  exit:   { opacity: 0, scale: 1.05, rotate: 3, transition: { duration: 0.40, ease: 'easeIn' } },
}

// ── Content stagger — tightened for visible sub-second entrance ───────────
const contentContainerVariants: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.08 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.20, ease: 'easeIn' },
  },
}

const itemVariants: Variants = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.48, ease: EASE_MARITIME } },
}

const badgeVariants: Variants = {
  hidden:  { opacity: 0, x: -16, scale: 0.94 },
  visible: { opacity: 1, x: 0,  scale: 1.00, transition: { duration: 0.42, ease: EASE_OUT_EXPO } },
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying]     = useState(true)
  const [isHovered, setIsHovered]     = useState(false)

  const slide = SLIDES[activeIndex]
  const bg    = SLIDE_BACKGROUNDS[activeIndex]
  const Decor = SLIDE_DECORATIVES[activeIndex]

  // ── Auto-advance ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (!isPlaying || isHovered) return
    const timer = setInterval(() => {
      setActiveIndex(i => (i + 1) % SLIDES.length)
    }, SLIDE_DURATION)
    return () => clearInterval(timer)
  }, [isPlaying, isHovered, activeIndex])

  // ── Keyboard navigation ───────────────────────────────────────────────────
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  handlePrev()
      if (e.key === 'ArrowRight') handleNext()
      if (e.key === ' ') { e.preventDefault(); setIsPlaying(p => !p) }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handlePrev = useCallback(() => setActiveIndex(i => (i - 1 + SLIDES.length) % SLIDES.length), [])
  const handleNext = useCallback(() => setActiveIndex(i => (i + 1) % SLIDES.length), [])
  const handleDot  = useCallback((i: number) => setActiveIndex(i), [])

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <section
      className="relative h-screen min-h-[680px] overflow-hidden flex flex-col"
      aria-label="Hero carousel"
      aria-roledescription="carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      {/* ════════════════════════════════════════════════════════════════════
          LAYER 1 — BACKGROUNDS
      ════════════════════════════════════════════════════════════════════ */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`bg-${slide.id}`}
          className="absolute inset-0 z-0"
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <div className="absolute inset-0" style={{ background: bg.base }} />
          <div className="absolute inset-0" style={{ background: bg.overlay }} />
          {/* Permanent fine grid */}
          <div className="absolute inset-0 bg-grid-dark opacity-25" />
          {/* Diagonal accent lines */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div
              className="absolute -right-16 top-0 w-px h-full rotate-[16deg] origin-top"
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(42,95,165,0.22) 30%, rgba(42,95,165,0.12) 70%, transparent)' }}
            />
            <div
              className="absolute right-24 top-0 w-px h-full rotate-[16deg] origin-top"
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.04) 40%, transparent)' }}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ════════════════════════════════════════════════════════════════════
          LAYER 2 — DECORATIVE SVG  (desktop-only: lg+)
      ════════════════════════════════════════════════════════════════════ */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`decor-${slide.id}`}
          className={cn(
            // Hidden on mobile/tablet — only lg and up
            'hidden lg:block',
            'absolute right-0 top-1/2 -translate-y-1/2 z-10 pointer-events-none',
            'w-[480px] h-[480px] xl:w-[560px] xl:h-[560px] 2xl:w-[640px] 2xl:h-[640px]',
            'translate-x-[22%] xl:translate-x-[20%]',
          )}
          variants={decorVariants}
          initial="enter"
          animate="center"
          exit="exit"
          aria-hidden="true"
        >
          <Decor className="w-full h-full text-white opacity-[0.065]" />
        </motion.div>
      </AnimatePresence>

      {/* ════════════════════════════════════════════════════════════════════
          LAYER 3 — SLIDE CONTENT
          Navbar spacer sits OUTSIDE flex-center so items-center
          truly centres the text block in the remaining viewport height.
      ════════════════════════════════════════════════════════════════════ */}

      {/* Navbar height spacer — pushes flex content below the fixed bar */}
      <div className="h-[72px] flex-shrink-0 relative z-20" aria-hidden="true" />

      {/* Vertically centred content zone */}
      <div className="relative z-20 flex-1 flex items-center">
        <div className="container-maritime w-full">
          <div className="max-w-[680px] xl:max-w-[780px]">

            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${slide.id}`}
                variants={contentContainerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                aria-live="polite"
                aria-atomic="true"
              >

                {/* ── Badge ─────────────────────────────────────────── */}
                {slide.badge && (
                  <motion.div variants={badgeVariants} className="mb-5 md:mb-6">
                    <span className={cn(
                      'inline-flex items-center gap-2 px-3.5 py-1.5',
                      'bg-white/10 backdrop-blur-sm',
                      'border border-white/14 rounded-sm',
                      'text-[0.6875rem] font-display font-semibold tracking-[0.14em] uppercase',
                      'text-white/70',
                    )}>
                      <span className="w-1.5 h-1.5 rounded-full bg-flame-500 flex-shrink-0" />
                      {slide.badge}
                    </span>
                  </motion.div>
                )}

                {/* ── Eyebrow ───────────────────────────────────────── */}
                <motion.div variants={itemVariants} className="mb-4 md:mb-5">
                  <span className="font-display font-semibold uppercase text-white/55 tracking-[0.18em] text-[0.6875rem] md:text-[0.75rem]">
                    {slide.eyebrow}
                  </span>
                </motion.div>

                {/* ── Headline ──────────────────────────────────────── */}
                <motion.h1
                  variants={itemVariants}
                  className={cn(
                    'font-display font-extrabold text-white leading-[1.04]',
                    // Mobile: 1.85rem keeps "Wherever You Dock" on one line at 375px
                    'text-[1.85rem]',
                    'sm:text-[2.9rem]',
                    'md:text-[3.5rem]',
                    'lg:text-[4rem]',
                    'xl:text-[4.5rem]',
                    'tracking-[-0.022em] mb-6 md:mb-7',
                  )}
                >
                  {slide.headline.map((line, i) => (
                    <span key={i} className="block">
                      {slide.accentWord && line.includes(slide.accentWord)
                        ? line.split(slide.accentWord).map((part, j, arr) => (
                            <span key={j}>
                              {part}
                              {j < arr.length - 1 && (
                                <em className={cn(slide.accentColor, 'not-italic')}>{slide.accentWord}</em>
                              )}
                            </span>
                          ))
                        : line
                      }
                    </span>
                  ))}
                </motion.h1>

                {/* ── Body ──────────────────────────────────────────── */}
                <motion.p
                  variants={itemVariants}
                  className={cn(
                    'text-white/70 font-body leading-relaxed',
                    'max-w-[520px]',
                    'text-[0.9375rem] md:text-[1rem] lg:text-[1.0625rem]',
                    'mb-8 md:mb-10',
                  )}
                >
                  {slide.body}
                </motion.p>

                {/* ── CTAs ──────────────────────────────────────────── */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col xs:flex-row items-start gap-3 xs:gap-4"
                >
                  {/* Primary — Flame CTA */}
                  <Link
                    to={slide.cta.href}
                    className={cn(
                      'group inline-flex items-center gap-2.5',
                      'h-12 md:h-[52px] px-6 md:px-8',
                      'bg-flame-500 hover:bg-flame-600 active:bg-flame-700',
                      'text-white font-display font-semibold',
                      'text-[0.75rem] md:text-[0.8125rem] tracking-[0.10em] uppercase',
                      'rounded transition-all duration-300',
                      'shadow-[0_4px_24px_rgba(232,82,10,0.35)] hover:shadow-[0_6px_32px_rgba(232,82,10,0.45)]',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flame-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
                      'whitespace-nowrap',
                    )}
                  >
                    {slide.cta.label}
                    <ArrowRight
                      size={15}
                      className="flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                      strokeWidth={2.5}
                    />
                  </Link>

                  {/* Secondary — Glass outline */}
                  <Link
                    to={slide.ctaSecondary.href}
                    className={cn(
                      'group inline-flex items-center gap-2',
                      'h-12 md:h-[52px] px-5 md:px-7',
                      'border border-white/22 hover:border-white/50',
                      'bg-white/[0.06] hover:bg-white/[0.11]',
                      'backdrop-blur-sm',
                      'text-white/80 hover:text-white font-display font-semibold',
                      'text-[0.75rem] md:text-[0.8125rem] tracking-[0.10em] uppercase',
                      'rounded transition-all duration-300',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
                      'whitespace-nowrap',
                    )}
                  >
                    {slide.ctaSecondary.label}
                    <ArrowRight
                      size={14}
                      className="flex-shrink-0 opacity-45 group-hover:opacity-90 transition-all duration-300 group-hover:translate-x-0.5"
                      strokeWidth={2}
                    />
                  </Link>
                </motion.div>

              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          LAYER 4 — BOTTOM NAVIGATION HUD
      ════════════════════════════════════════════════════════════════════ */}
      <div className="relative z-30 flex-shrink-0 pt-4 pb-6 md:pb-8">

        {/* Progress bar — full width at section bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`progress-${activeIndex}-${isPlaying}`}
              className="h-full bg-flame-500 origin-left"
              initial={{ scaleX: 0 }}
              animate={isPlaying && !isHovered ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
            />
          </AnimatePresence>
        </div>

        <div className="container-maritime">
          <div className="flex items-center justify-between gap-4">

            {/* Slide counter */}
            <div className="hidden sm:flex items-center gap-2.5 min-w-[64px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={`counter-${activeIndex}`}
                  className="font-mono text-[0.6875rem] text-white/65 font-medium tracking-wider tabular-nums"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {String(activeIndex + 1).padStart(2, '0')}
                </motion.span>
              </AnimatePresence>
              <div className="w-6 h-px bg-white/20" />
              <span className="font-mono text-[0.6875rem] text-white/28 font-medium tracking-wider">
                {String(SLIDES.length).padStart(2, '0')}
              </span>
            </div>

            {/* Dot indicators */}
            <div
              className="flex items-center gap-2"
              role="tablist"
              aria-label="Slide navigation"
            >
              {SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`Slide ${i + 1}: ${s.headline.join(' ')}`}
                  onClick={() => handleDot(i)}
                  className="group relative flex items-center justify-center p-1.5 focus-visible:outline-none rounded"
                >
                  <motion.span
                    layout
                    className={cn(
                      'block rounded-full h-[6px] transition-colors duration-300',
                      i === activeIndex
                        ? 'bg-flame-500'
                        : 'bg-white/30 group-hover:bg-white/55',
                    )}
                    animate={{ width: i === activeIndex ? 26 : 7 }}
                    transition={{ duration: 0.32, ease: EASE_MARITIME }}
                  />
                </button>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setIsPlaying(p => !p)}
                aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
                className={cn(
                  'w-8 h-8 flex items-center justify-center rounded-sm',
                  'border border-white/14 bg-white/[0.05] hover:bg-white/10',
                  'text-white/45 hover:text-white/85',
                  'transition-all duration-200',
                  'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/35',
                )}
              >
                {isPlaying
                  ? <Pause size={11} strokeWidth={2.5} />
                  : <Play  size={11} strokeWidth={2.5} />
                }
              </button>

              <div className="w-px h-4 bg-white/12 mx-0.5" />

              <button
                onClick={handlePrev}
                aria-label="Previous slide"
                className={cn(
                  'w-8 h-8 flex items-center justify-center rounded-sm',
                  'border border-white/14 bg-white/[0.05]',
                  'text-white/55 hover:text-white hover:bg-white/10 hover:border-white/28',
                  'transition-all duration-200',
                  'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/35',
                )}
              >
                <ChevronLeft size={15} strokeWidth={2} />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next slide"
                className={cn(
                  'w-8 h-8 flex items-center justify-center rounded-sm',
                  'border border-white/14 bg-white/[0.05]',
                  'text-white/55 hover:text-white hover:bg-flame-500 hover:border-flame-500',
                  'transition-all duration-200',
                  'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-flame-400',
                )}
              >
                <ChevronRight size={15} strokeWidth={2} />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Gradient fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(11,18,34,0.55) 100%)' }}
        aria-hidden="true"
      />

      {/* Screen-reader live region */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        Slide {activeIndex + 1} of {SLIDES.length}: {slide.headline.join(' ')}
      </div>

    </section>
  )
}
