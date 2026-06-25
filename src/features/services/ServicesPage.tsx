import { useEffect } from 'react'
import { ServicesHero }     from './components/ServicesHero'
import { ServicesOverview } from './components/ServicesOverview'
import { ServiceSection }   from './components/ServiceSection'
import { ServicesCTA }      from './components/ServicesCTA'
import { SERVICES_DETAIL } from './data/services'

export function ServicesPage() {
  // Smooth-scroll to hash on initial mount (for direct deep-links)
  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
      }
    }
  }, [])

  return (
    <>
      <ServicesHero />

      <ServicesOverview />

      {/* Detailed service sections — alternating zigzag, alternating bg */}
      {SERVICES_DETAIL.map((service, i) => (
        <ServiceSection key={service.id} service={service} index={i} />
      ))}

      <ServicesCTA />
    </>
  )
}
