import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, type Variants } from 'framer-motion'
import { Navbar }      from '@shared/navigation'
import { Footer }      from '@shared/footer'
import { ScrollToTop } from '@ui/primitives/ScrollToTop'

const pageVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0  },
  exit:    { opacity: 0, y: -6 },
}

export function RootLayout() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.32, ease: 'easeInOut' }}
          className="flex-1"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
