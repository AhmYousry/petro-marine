import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, ShieldCheck } from 'lucide-react'
import { BRAND } from '@/config/brand'
import { ROUTES } from '@/config/routes'
import { cn } from '@/utils'

/* ── Data ─────────────────────────────────────────────────────────────── */
const quickLinks = [
  { label: 'Home',        href: ROUTES.HOME     },
  { label: 'About Us',    href: ROUTES.ABOUT    },
  { label: 'Services',    href: ROUTES.SERVICES },
  { label: 'Contact Us',  href: ROUTES.CONTACT  },
]

const servicesLinks = [
  { label: 'Marine Supplies',            href: `${ROUTES.SERVICES}#marine-supply` },
  { label: 'Provisions & Bonded Stores', href: `${ROUTES.SERVICES}#provisions`    },
  { label: 'Repair & Maintenance',       href: `${ROUTES.SERVICES}#repair`        },
  { label: 'Inspection & Calibration',   href: `${ROUTES.SERVICES}#inspection`    },
  { label: 'Sludge Removal',             href: `${ROUTES.SERVICES}#sludge`        },
]

const legalLinks = [
  { label: 'Privacy Policy',    href: '#' },
  { label: 'Terms of Service',  href: '#' },
]

/* ── Subcomponents ────────────────────────────────────────────────────── */
function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-6 text-[10px] font-display font-semibold uppercase tracking-[0.22em] text-white flex items-center gap-3">
      <span className="block w-6 h-px bg-flame-500 flex-shrink-0" />
      {children}
    </h3>
  )
}

function FooterLink({
  href,
  children,
  external,
}: {
  href: string
  children: React.ReactNode
  external?: boolean
}) {
  const cls =
    'block text-sm font-body text-steel-300 hover:text-white transition-colors duration-200'

  if (external || href === '#') {
    return (
      <a
        href={href}
        className={cls}
        target={external ? '_blank' : undefined}
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }
  return (
    <Link to={href} className={cls}>
      {children}
    </Link>
  )
}

/* ── Main Component ───────────────────────────────────────────────────── */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-white">

      {/* ── Main Grid ─────────────────────────────────────────────── */}
      <div className="container-maritime pt-20 pb-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Col 1 — Brand ─────────────────────────────────────────── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to={ROUTES.HOME} className="inline-block mb-5" aria-label="Petro Marine home">
              <img
                src="/logo-mark.png"
                alt="Petro Marine"
                className="h-24 w-auto object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
            </Link>

            <p className="text-[10px] font-display font-medium uppercase tracking-[0.22em] text-steel-400 mb-4">
              Marine Services &amp; Solutions
            </p>

            <p className="text-sm font-body text-steel-300 leading-relaxed max-w-xs">
              {BRAND.legalName} — Your trusted marine partner in Egypt
              since {BRAND.founded}.
            </p>
          </div>

          {/* Col 2 — Quick Links ───────────────────────────────────── */}
          <div>
            <FooterHeading>Quick Links</FooterHeading>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <FooterLink href={href}>{label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services ──────────────────────────────────────── */}
          <div>
            <FooterHeading>Our Services</FooterHeading>
            <ul className="space-y-3">
              {servicesLinks.map(({ label, href }) => (
                <li key={label}>
                  <FooterLink href={href}>{label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact ───────────────────────────────────────── */}
          <div>
            <FooterHeading>Contact</FooterHeading>
            <ul className="space-y-4">
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(BRAND.contact.mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm font-body text-steel-300 hover:text-white transition-colors duration-200 group"
                >
                  <MapPin
                    size={15}
                    strokeWidth={1.75}
                    className="flex-shrink-0 mt-0.5 text-flame-500 group-hover:text-flame-400"
                  />
                  <span>
                    {BRAND.contact.address}
                    <br />
                    {BRAND.contact.city}, {BRAND.contact.state}
                    <br />
                    {BRAND.contact.country}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BRAND.contact.phone}`}
                  className="flex items-center gap-3 text-sm font-body text-steel-300 hover:text-white transition-colors duration-200 group"
                >
                  <Phone size={15} strokeWidth={1.75} className="flex-shrink-0 text-flame-500 group-hover:text-flame-400" />
                  {BRAND.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.contact.email}`}
                  className="flex items-center gap-3 text-sm font-body text-steel-300 hover:text-white transition-colors duration-200 group"
                >
                  <Mail size={15} strokeWidth={1.75} className="flex-shrink-0 text-flame-500 group-hover:text-flame-400" />
                  {BRAND.contact.email}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Certifications Strip ──────────────────────────────────── */}
      <div className="border-t border-steel-700/50">
        <div className="container-maritime py-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[9px] font-display font-semibold uppercase tracking-[0.2em] text-steel-500 mr-2">
              Certified:
            </span>
            {BRAND.certifications.map((cert) => (
              <span
                key={cert.id}
                className={cn(
                  'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm',
                  'bg-navy-800 border border-steel-700/60',
                  'text-[10px] font-display font-semibold uppercase tracking-wider text-steel-300',
                )}
              >
                <ShieldCheck size={11} className="text-flame-500" strokeWidth={2} />
                {cert.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ────────────────────────────────────────────── */}
      <div className="border-t border-steel-700/50">
        <div className="container-maritime py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-body text-steel-500 text-center sm:text-left">
            © {year} {BRAND.legalName}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            {legalLinks.map(({ label, href }, i) => (
              <span key={label} className="flex items-center gap-4">
                <a
                  href={href}
                  className="text-xs font-body text-steel-500 hover:text-steel-300 transition-colors duration-200"
                >
                  {label}
                </a>
                {i < legalLinks.length - 1 && (
                  <span className="text-steel-700 select-none">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}
