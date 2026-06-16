export { cn } from './cn'

export function formatPhone(phone: string): string {
  return phone.replace(/[^\d+]/g, '')
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .trim()
}

export function buildStaggerChildren(stagger = 0.1, delayStart = 0) {
  return {
    container: {
      hidden: {},
      show: {
        transition: {
          staggerChildren: stagger,
          delayChildren: delayStart,
        },
      },
    },
    item: {
      hidden:  { opacity: 0, y: 20 },
      show:    { opacity: 1, y: 0,  transition: { ease: 'easeOut' as const, duration: 0.5 } },
    },
  }
}

export function buildFadeInUp(delay = 0, duration = 0.5) {
  return {
    initial:    { opacity: 0, y: 24 },
    animate:    { opacity: 1, y: 0  },
    transition: { delay, duration, ease: 'easeOut' as const },
  }
}
