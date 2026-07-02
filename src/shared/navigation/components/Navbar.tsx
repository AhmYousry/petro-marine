import { useState, useEffect, useCallback } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { cn } from '@/utils'
import { NAV_ITEMS, ROUTES } from '@/config/routes'
import { MobileDrawer } from './MobileDrawer'

export function Navbar() {
  const [isScrolled, setIsScrolled]     = useState(false)
  const [drawerOpen, setDrawerOpen]     = useState(false)

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 60)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out',
          isScrolled
            ? 'bg-white border-b border-steel-200'
            : 'bg-transparent border-b border-transparent',
        )}
      >
        <div className="container-maritime flex h-[72px] items-center justify-between">

          {/* ── Logo ───────────────────────────────────────────────── */}
          <Link
            to={ROUTES.HOME}
            className="flex-shrink-0 flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean-500 rounded"
            aria-label="Petro Marine — Home"
          >
            <img
              src="/site-logo.png"
              alt="Petro Marine"
              className={cn(
                'h-28 w-auto object-contain transition-[filter] duration-300',
                !isScrolled && 'brightness-0 invert',
              )}
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
            <div className={cn(
              'hidden lg:flex flex-col leading-none transition-colors duration-300',
              isScrolled ? 'text-navy-900' : 'text-white',
            )}>
              <span className="font-display font-bold text-base tracking-widest uppercase">
                Petro Marine
              </span>
              <span className={cn(
                'text-[9px] tracking-[0.22em] uppercase font-display font-medium transition-colors duration-300',
                isScrolled ? 'text-steel-400' : 'text-white/60',
              )}>
                Marine Services &amp; Solutions
              </span>
            </div>
          </Link>

          {/* ── Desktop Nav Links ───────────────────────────────────── */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === ROUTES.HOME}
                className={({ isActive }) =>
                  cn(
                    'relative px-4 py-2 text-[11px] font-display font-semibold uppercase tracking-[0.16em]',
                    'transition-colors duration-300 rounded-sm',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-ocean-500',
                    'group',
                    isScrolled
                      ? isActive ? 'text-navy-900' : 'text-steel-500 hover:text-navy-900'
                      : isActive ? 'text-white'    : 'text-white/70 hover:text-white',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {/* Active / hover underline */}
                    <span
                      className={cn(
                        'absolute bottom-0 left-4 right-4 h-[2px] bg-flame-500',
                        'transition-transform duration-300 origin-left',
                        isActive
                          ? 'scale-x-100'
                          : 'scale-x-0 group-hover:scale-x-100',
                      )}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* ── CTA + Mobile Toggle ─────────────────────────────────── */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <Link
              to={ROUTES.CONTACT}
              className={cn(
                'hidden md:inline-flex items-center whitespace-nowrap px-5 py-2.5 rounded',
                'bg-flame-500 hover:bg-flame-600 active:bg-flame-700',
                'text-white text-[11px] font-display font-semibold uppercase tracking-[0.14em]',
                'transition-colors duration-200',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-flame-500 focus-visible:ring-offset-2',
              )}
            >
              Get In Touch
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={drawerOpen}
              className={cn(
                'md:hidden flex items-center justify-center w-10 h-10 rounded',
                'transition-colors duration-200',
                isScrolled
                  ? 'text-navy-900 hover:bg-steel-100'
                  : 'text-white hover:bg-white/10',
              )}
            >
              <Menu size={22} strokeWidth={1.75} />
            </button>
          </div>

        </div>
      </header>

      {/* ── Mobile Drawer ─────────────────────────────────────────── */}
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  )
}
