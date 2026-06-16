import { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { AnimatePresence, motion, type Variants, type Transition } from 'framer-motion'
import { X, Phone, Mail } from 'lucide-react'
import { cn } from '@/utils'
import { NAV_ITEMS, ROUTES } from '@/config/routes'
import { BRAND } from '@/config/brand'

interface MobileDrawerProps {
  open: boolean
  onClose: () => void
}

const EASE = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]

const backdropVariants: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1 },
  exit:    { opacity: 0 },
}

const drawerVariants: Variants = {
  hidden:  { x: '100%' },
  visible: {
    x: 0,
    transition: { type: 'tween', ease: EASE, duration: 0.35 } as Transition,
  },
  exit: {
    x: '100%',
    transition: { type: 'tween', ease: EASE, duration: 0.28 } as Transition,
  },
}

const linkContainerVariants: Variants = {
  hidden:  {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.15 } as Transition,
  },
}

const linkVariants: Variants = {
  hidden:  { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { ease: EASE, duration: 0.4 } as Transition,
  },
}

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (open) document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* ── Backdrop ──────────────────────────────────────────── */}
          <motion.div
            key="backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-navy-950/70 backdrop-blur-sm md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* ── Drawer Panel ──────────────────────────────────────── */}
          <motion.div
            key="drawer"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-y-0 right-0 z-[70] w-full max-w-sm bg-navy-900 flex flex-col md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-steel-700/40 flex-shrink-0">
              <Link
                to={ROUTES.HOME}
                onClick={onClose}
                className="flex items-center gap-2"
              >
                <img
                  src="/logo.png"
                  alt="Petro Marine"
                  className="h-8 w-auto object-contain"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
                <span className="font-display font-bold text-sm tracking-widest uppercase text-white">
                  Petro Marine
                </span>
              </Link>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex items-center justify-center w-9 h-9 rounded text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-200"
              >
                <X size={20} strokeWidth={1.75} />
              </button>
            </div>

            {/* Nav Links */}
            <motion.nav
              variants={linkContainerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col pt-4 overflow-y-auto"
              aria-label="Mobile navigation"
            >
              {NAV_ITEMS.map((item) => (
                <motion.div key={item.href} variants={linkVariants}>
                  <NavLink
                    to={item.href}
                    end={item.href === ROUTES.HOME}
                    onClick={onClose}
                    className={({ isActive }) =>
                      cn(
                        'flex items-center gap-4 px-8 py-[18px]',
                        'border-b border-steel-700/30 border-l-4',
                        'font-display font-bold text-xl uppercase tracking-wider',
                        'transition-all duration-200',
                        isActive
                          ? 'text-white border-l-flame-500 pl-6 bg-white/5'
                          : 'text-steel-300 hover:text-white hover:bg-white/5 border-l-transparent',
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </motion.nav>

            {/* Spacer — pushes bottom section to the bottom */}
            <div className="flex-1" />

            {/* Bottom section: CTA + contact — anchored to drawer bottom */}
            <div className="flex-shrink-0 px-8 pb-8 pt-6 space-y-5 border-t border-steel-700/40">
              {/* CTA */}
              <motion.div
                variants={linkVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  to={ROUTES.CONTACT}
                  onClick={onClose}
                  className={cn(
                    'flex items-center justify-center w-full py-4 rounded',
                    'bg-flame-500 hover:bg-flame-600 active:bg-flame-700',
                    'text-white font-display font-bold text-sm uppercase tracking-[0.18em]',
                    'transition-colors duration-200',
                  )}
                >
                  Get In Touch
                </Link>
              </motion.div>
              {/* Contact links */}
              <div className="space-y-3">
                <a
                  href={`tel:${BRAND.contact.phone}`}
                  className="flex items-center gap-3 text-steel-400 hover:text-white text-sm transition-colors duration-200"
                >
                  <Phone size={15} strokeWidth={1.75} className="flex-shrink-0 text-flame-500" />
                  <span className="font-body">{BRAND.contact.phone}</span>
                </a>
                <a
                  href={`mailto:${BRAND.contact.email}`}
                  className="flex items-center gap-3 text-steel-400 hover:text-white text-sm transition-colors duration-200"
                >
                  <Mail size={15} strokeWidth={1.75} className="flex-shrink-0 text-flame-500" />
                  <span className="font-body">{BRAND.contact.email}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
