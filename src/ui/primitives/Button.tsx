// ─── Button Primitive ─────────────────────────────────────────────────────────
// shadcn/ui-style button with Petro Marine brand variants.
// Variants: primary (navy) | secondary (ocean) | cta (flame) | ghost | outline

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils'

const buttonVariants = cva(
  // ── Base ──
  [
    'inline-flex items-center justify-center gap-2',
    'font-display font-semibold text-sm tracking-wider uppercase',
    'rounded transition-all duration-350',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'select-none',
  ],
  {
    variants: {
      variant: {
        // Deep Navy fill — primary authority action
        primary: [
          'bg-navy-900 text-white',
          'hover:bg-navy-700',
          'active:bg-navy-900',
        ],
        // Ocean Blue fill — secondary action
        secondary: [
          'bg-ocean-500 text-white',
          'hover:bg-ocean-600',
          'active:bg-ocean-700',
        ],
        // Flame Orange fill — CTA / attention
        cta: [
          'bg-flame-500 text-white',
          'hover:bg-flame-600',
          'active:bg-flame-700',
          'shadow-flame-glow/40',
        ],
        // Outline — bordered, transparent
        outline: [
          'border border-navy-900 text-navy-900 bg-transparent',
          'hover:bg-navy-900 hover:text-white',
        ],
        // Ghost — text only
        ghost: [
          'text-navy-900 bg-transparent',
          'hover:bg-steel-100',
        ],
        // Outline on dark backgrounds
        'outline-white': [
          'border border-white text-white bg-transparent',
          'hover:bg-white hover:text-navy-900',
        ],
      },
      size: {
        sm: 'h-8  px-4  text-xs',
        md: 'h-10 px-6  text-sm',
        lg: 'h-12 px-8  text-sm',
        xl: 'h-14 px-10 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size:    'md',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading && (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {children}
      </Comp>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
