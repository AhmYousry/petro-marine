import { motion } from 'framer-motion'

/**
 * Suspense fallback shown while a lazy-loaded route chunk is fetched.
 * Branded, minimal, and sized to the viewport so navigation doesn't jump.
 */
export function RouteFallback() {
  return (
    <div
      className="flex min-h-[70vh] w-full items-center justify-center bg-navy-900"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="flex flex-col items-center gap-5">
        {/* Compass-style rotating ring */}
        <div className="relative h-12 w-12">
          <span className="absolute inset-0 rounded-full border-2 border-white/12" />
          <motion.span
            className="absolute inset-0 rounded-full border-2 border-transparent border-t-flame-500"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        <span className="font-display text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-white/45">
          Petro Marine
        </span>
      </div>
    </div>
  )
}
