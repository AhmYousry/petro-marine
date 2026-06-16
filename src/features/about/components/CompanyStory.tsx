import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, type Variants } from 'framer-motion'
import { ChevronRight, Home as HomeIcon, Anchor } from 'lucide-react'
import { cn } from '@/utils'
import { ROUTES } from '@config/routes'

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]

const container: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.10 } },
}

const item: Variants = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.62, ease: EASE } },
}

export function CompanyStory() {
  const narrativeRef = useRef<HTMLDivElement>(null)
  const inView = useInView(narrativeRef, { once: true, amount: 0.2 })

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-[640px] bg-navy-900 overflow-hidden flex flex-col"
        aria-labelledby="about-hero-heading"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(150deg, #070E1E 0%, #0F1E3A 30%, #1B2B4B 70%, #1B3E6F 100%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 75% 60% at 70% -5%, rgba(42,95,165,0.40) 0%, transparent 60%)',
            }}
          />
          <div className="absolute inset-0 bg-grid-dark opacity-[0.22]" />
          {/* Diagonal lines */}
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

        <div className="relative z-10 flex-1 flex items-center">
          <div className="container-maritime w-full py-16 md:py-20">
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="max-w-[820px]"
            >
              {/* Breadcrumb */}
              <motion.nav
                variants={item}
                aria-label="Breadcrumb"
                className="mb-8 flex items-center gap-2 text-[0.75rem] font-display tracking-wider"
              >
                <Link
                  to={ROUTES.HOME}
                  className="flex items-center gap-1.5 text-white/55 hover:text-white transition-colors duration-200"
                >
                  <HomeIcon size={12} strokeWidth={1.75} />
                  Home
                </Link>
                <ChevronRight size={12} className="text-white/30" strokeWidth={2} />
                <span className="text-white/85 font-medium">About</span>
              </motion.nav>

              {/* Eyebrow */}
              <motion.div variants={item} className="mb-6 flex items-center gap-3">
                <span className="w-10 h-px bg-flame-500" />
                <span className="text-[0.6875rem] font-display font-semibold uppercase tracking-[0.20em] text-ocean-300">
                  Since 1973 · Established Maritime Heritage
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                id="about-hero-heading"
                variants={item}
                className={cn(
                  'font-display font-extrabold text-white leading-[1.04] tracking-[-0.022em]',
                  'text-[2.25rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4.25rem] xl:text-[4.5rem]',
                  'mb-7',
                )}
              >
                Half a Century at the{' '}
                <span className="text-ocean-300">Service of the Sea.</span>
              </motion.h1>

              {/* Body */}
              <motion.p
                variants={item}
                className={cn(
                  'text-white/72 font-body leading-[1.72]',
                  'text-[1rem] md:text-[1.125rem]',
                  'max-w-[640px]',
                )}
              >
                From a single chandling office on Alexandria&rsquo;s waterfront in 1973
                to Egypt&rsquo;s most trusted full-service marine partner today —
                Petromarine&rsquo;s story is the story of Egypt&rsquo;s modern maritime industry.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          NARRATIVE BLOCK
      ══════════════════════════════════════════════════════════════ */}
      <section
        ref={narrativeRef}
        className="relative bg-white overflow-hidden"
        aria-labelledby="company-story-heading"
      >
        {/* Decorative blobs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(42,95,165,0.05) 0%, transparent 65%)' }}
          />
        </div>

        <div className="container-maritime py-24 md:py-32 relative">
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-14 xl:gap-20 items-start"
          >
            {/* Left: narrative */}
            <div>
              <motion.div variants={item} className="mb-5 flex items-center gap-3">
                <span className="w-8 h-px bg-flame-500" />
                <span className="text-[0.6875rem] font-display font-semibold uppercase tracking-[0.20em] text-ocean-600">
                  Our Story
                </span>
              </motion.div>

              <motion.h2
                id="company-story-heading"
                variants={item}
                className={cn(
                  'font-display font-extrabold text-navy-900',
                  'leading-[1.08] tracking-[-0.018em]',
                  'text-[1.875rem] sm:text-[2.375rem] md:text-[2.75rem]',
                  'mb-8 max-w-[600px]',
                )}
              >
                From the docks of Alexandria to the deck of every ship.
              </motion.h2>

              <motion.p
                variants={item}
                className="font-body text-steel-600 leading-[1.78] text-[1.0625rem] mb-5 max-w-[640px]"
              >
                Petromarine began in 1973 with a single mission — to give visiting vessels a
                trustworthy local partner who could be relied on to deliver, on time, every time.
                Over five decades, we have grown that promise into a national operational network
                spanning twelve Egyptian ports across three coastlines.
              </motion.p>

              <motion.p
                variants={item}
                className="font-body text-steel-600 leading-[1.78] text-[1.0625rem] mb-5 max-w-[640px]"
              >
                Today, we serve the world&rsquo;s largest shipowners, charterers, and offshore
                operators — supplying everything from deck stores and provisions to marine
                engineering, technical repair, and MARPOL-certified waste management. We have
                done it through political change, through industry downturns, and through the
                steady rise of Egypt as one of the world&rsquo;s most strategically important
                maritime crossroads.
              </motion.p>

              <motion.p
                variants={item}
                className="font-body text-steel-600 leading-[1.78] text-[1.0625rem] max-w-[640px]"
              >
                What hasn&rsquo;t changed is the principle that built the company: a vessel calling
                at our ports is more than a commercial transaction — it&rsquo;s a responsibility.
                We treat every ship like it carries our own family aboard.
              </motion.p>
            </div>

            {/* Right: signature panel */}
            <motion.aside
              variants={item}
              className={cn(
                'relative rounded-2xl overflow-hidden',
                'bg-navy-900',
                'p-9 md:p-10',
                'shadow-[0_24px_64px_-20px_rgba(7,14,30,0.45)]',
                'lg:sticky lg:top-28',
              )}
            >
              {/* BG texture */}
              <div className="absolute inset-0 bg-grid-dark opacity-[0.18]" aria-hidden="true" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(ellipse 90% 60% at 100% 0%, rgba(42,95,165,0.30) 0%, transparent 65%)',
                }}
                aria-hidden="true"
              />
              {/* Bottom flame line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[3px]"
                style={{ background: 'linear-gradient(to right, transparent, #E8520A, transparent)' }}
                aria-hidden="true"
              />

              <div className="relative z-10">
                {/* Anchor mark */}
                <div className="w-14 h-14 rounded-xl bg-flame-500/15 ring-1 ring-flame-500/30 flex items-center justify-center mb-6">
                  <Anchor size={24} strokeWidth={1.5} className="text-flame-400" />
                </div>

                <p className="text-[0.6875rem] font-display font-semibold uppercase tracking-[0.20em] text-ocean-300 mb-3">
                  A Word from Our Founder
                </p>

                <blockquote className="font-display font-medium text-white text-[1.0625rem] leading-[1.6] mb-6 italic">
                  &ldquo;The sea is the most patient teacher you&rsquo;ll ever meet. It rewards
                  preparation, punishes shortcuts, and never forgets a lesson. We&rsquo;ve
                  spent fifty years listening.&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ocean-500 to-navy-800 flex items-center justify-center flex-shrink-0">
                    <span className="font-display font-bold text-white text-[0.75rem]">PM</span>
                  </div>
                  <div className="leading-tight">
                    <p className="font-display font-bold text-white text-[0.8125rem]">Captain M. El-Sayed</p>
                    <p className="font-body text-white/55 text-[0.75rem]">Founder &amp; Chairman</p>
                  </div>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        </div>
      </section>
    </>
  )
}
