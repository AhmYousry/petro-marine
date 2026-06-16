// ─── Section Label ────────────────────────────────────────────────────────────
// The "MARINE SERVICES & SOLUTIONS" treatment — uppercase, wide-tracked label
// used above section headings throughout the site.

import { cn } from '@/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  /** 'flame' = flame-orange accent bar | 'ocean' = ocean-blue | 'steel' = muted */
  accent?: 'flame' | 'ocean' | 'steel'
  /** 'dark' for use on navy backgrounds */
  theme?: 'light' | 'dark'
}

export function SectionLabel({
  children,
  className,
  accent = 'flame',
  theme = 'light',
}: SectionLabelProps) {
  const accentColors = {
    flame: 'bg-flame-500',
    ocean: 'bg-ocean-500',
    steel: 'bg-steel-400',
  }

  const textColors = {
    light: 'text-steel-500',
    dark:  'text-steel-300',
  }

  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span className={cn('h-0.5 w-10 flex-shrink-0', accentColors[accent])} />
      <span
        className={cn(
          'label-maritime',
          textColors[theme],
        )}
      >
        {children}
      </span>
    </div>
  )
}
