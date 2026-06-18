import { motion } from 'framer-motion'
import { MapPin, Navigation, ExternalLink } from 'lucide-react'
import { cn } from '@/utils'
import { OFFICES } from '../data/contact'

export function MapPlaceholder() {
  return (
    <section className="relative bg-smoke-50 py-20 md:py-24 overflow-hidden" aria-labelledby="map-heading">
      <div className="container-maritime">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-5"
        >
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="w-8 h-px bg-flame-500" />
              <span className="text-[0.6875rem] font-display font-semibold uppercase tracking-[0.20em] text-ocean-600">
                Find Us
              </span>
            </div>
            <h2 id="map-heading" className="font-display font-extrabold text-navy-900 text-[1.75rem] md:text-[2.25rem] tracking-[-0.015em]">
              On Every Major Egyptian Coast
            </h2>
          </div>
          <a
            href="https://maps.google.com/?q=Alexandria+Port+Egypt"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[0.8125rem] font-display font-bold uppercase tracking-[0.12em] text-navy-900 hover:text-ocean-700 border-b-2 border-flame-500 hover:border-ocean-500 pb-0.5 transition-colors duration-250 self-start"
          >
            Open in Google Maps
            <ExternalLink size={13} strokeWidth={2.25} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* Map placeholder card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-2xl overflow-hidden border border-steel-200 shadow-[0_24px_70px_-30px_rgba(27,43,75,0.35)]"
        >
          {/* Stylized map surface */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] bg-navy-900">
            {/* Sea gradient */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(160deg, #0A1A33 0%, #112A4E 45%, #14365F 100%)' }}
            />
            {/* Bathymetric contour grid */}
            <div className="absolute inset-0 bg-grid-dark opacity-30" aria-hidden="true" />

            {/* Decorative concentric "sonar" rings on the HQ */}
            <div className="absolute left-[22%] top-[44%] -translate-x-1/2 -translate-y-1/2" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="absolute rounded-full border border-flame-400/40"
                  style={{ width: 60 + i * 60, height: 60 + i * 60, left: -(30 + i * 30), top: -(30 + i * 30) }}
                  animate={{ opacity: [0.5, 0.1, 0.5], scale: [0.92, 1.04, 0.92] }}
                  transition={{ duration: 3.2, repeat: Infinity, delay: i * 0.5, ease: 'easeInOut' }}
                />
              ))}
            </div>

            {/* Stylized coastline path */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 420" fill="none" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <path
                d="M-20 180 Q 180 150 300 200 T 560 220 Q 700 235 820 290 T 1040 320"
                stroke="rgba(138,155,181,0.35)" strokeWidth="2" strokeDasharray="2 7" fill="none"
              />
              <path
                d="M-20 140 Q 200 120 340 165 T 620 185 Q 780 200 900 250 T 1040 270"
                stroke="rgba(42,95,165,0.45)" strokeWidth="2" fill="none"
              />
            </svg>

            {/* Port pins */}
            {OFFICES.map((o, i) => {
              const positions = [
                { left: '22%', top: '44%' },   // Alexandria (HQ)
                { left: '40%', top: '40%' },   // Port Said
                { left: '52%', top: '54%' },   // Suez
                { left: '60%', top: '64%' },   // Ain Sokhna
              ]
              const pos = positions[i] ?? positions[0]
              return (
                <motion.div
                  key={o.id}
                  className="absolute -translate-x-1/2 -translate-y-full"
                  style={pos}
                  initial={{ opacity: 0, y: -8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.45 }}
                >
                  <div className="flex flex-col items-center group cursor-default">
                    <span className={cn(
                      'mb-1 px-2 py-0.5 rounded text-[0.625rem] font-display font-bold whitespace-nowrap',
                      'bg-white/95 text-navy-900 shadow-lg',
                      o.hub && 'ring-1 ring-flame-400',
                    )}>
                      {o.city}{o.hub && ' · HQ'}
                    </span>
                    <MapPin
                      size={o.hub ? 26 : 20}
                      strokeWidth={2}
                      className={o.hub ? 'text-flame-500 drop-shadow-lg' : 'text-ocean-300 drop-shadow'}
                      fill={o.hub ? 'rgba(232,82,10,0.25)' : 'rgba(42,95,165,0.25)'}
                    />
                  </div>
                </motion.div>
              )
            })}

            {/* Compass rose */}
            <div className="absolute bottom-5 right-5 w-14 h-14 opacity-50" aria-hidden="true">
              <Navigation size={56} strokeWidth={1} className="text-white/60" />
            </div>

            {/* Overlay note */}
            <div className="absolute bottom-5 left-5 flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/15">
              <MapPin size={14} strokeWidth={2} className="text-flame-400 flex-shrink-0" />
              <span className="text-white/90 font-display text-[0.75rem] font-medium">
                4 offices · 12 ports of operation
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
