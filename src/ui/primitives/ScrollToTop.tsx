import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { cn } from '@/utils'

interface ScrollToTopProps {
  /** px scroll distance before button appears. Default: 400 */
  threshold?: number
}

export function ScrollToTop({ threshold = 400 }: ScrollToTopProps) {
  const [visible, setVisible] = useState(false)

  const handleScroll = useCallback(() => {
    setVisible(window.scrollY > threshold)
  }, [threshold])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          animate={{ opacity: 1, y: 0,  scale: 1 }}
          exit={{    opacity: 0, y: 16, scale: 0.85 }}
          transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className={cn(
            'fixed bottom-8 right-6 z-40',
            'flex items-center justify-center w-11 h-11 rounded-sm',
            'bg-navy-900 hover:bg-ocean-500 active:bg-navy-900',
            'text-white shadow-elevation-high',
            'border border-steel-700/30',
            'transition-colors duration-200',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean-500 focus-visible:ring-offset-2',
          )}
        >
          <ArrowUp size={18} strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
