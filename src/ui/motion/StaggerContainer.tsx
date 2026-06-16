import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  stagger?: number
  delayStart?: number
  once?: boolean
}

export function StaggerContainer({
  children,
  className,
  stagger = 0.1,
  delayStart = 0,
  once = true,
}: StaggerContainerProps) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delayStart,
      },
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  )
}

export const staggerItemVariants: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}
