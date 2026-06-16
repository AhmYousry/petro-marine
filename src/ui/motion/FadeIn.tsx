import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
  once?: boolean
}

function buildVariants(direction: FadeInProps['direction'], distance: number): Variants {
  const axes: Record<NonNullable<FadeInProps['direction']>, object> = {
    up:    { y: distance },
    down:  { y: -distance },
    left:  { x: distance },
    right: { x: -distance },
    none:  {},
  }
  return {
    hidden:  { opacity: 0, ...axes[direction ?? 'up'] },
    visible: { opacity: 1, y: 0, x: 0 },
  }
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
  direction = 'up',
  distance = 20,
  once = true,
}: FadeInProps) {
  const variants = buildVariants(direction, distance)

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      transition={{ delay, duration, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
