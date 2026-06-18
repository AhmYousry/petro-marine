import { Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, type Variants } from 'framer-motion'
import { Navbar }        from '@shared/navigation'
import { Footer }        from '@shared/footer'
import { ScrollToTop }   from '@ui/primitives/ScrollToTop'
import { RouteFallback } from '@ui/primitives/RouteFallback'

const pageVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0  },
  exit:    { opacity: 0, y: -6 },
}

export function RootLayout() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Skip link — first focusable element, visible only on keyboard focus */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-navy-900 focus:px-4 focus:py-2.5 focus:font-display focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-flame-500"
      >
        Skip to content
      </a>

      <Navbar />

      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={location.pathname}
          id="main-content"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.32, ease: 'easeInOut' }}
          className="flex-1"
        >
          <Suspense fallback={<RouteFallback />}>
            <Outlet />
          </Suspense>
        </motion.main>
      </AnimatePresence>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
