// ─── Class Name Utility ───────────────────────────────────────────────────────
// Combines clsx + tailwind-merge for clean conditional classNames.
// Usage: cn('base-class', condition && 'conditional-class', { 'key': bool })

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
