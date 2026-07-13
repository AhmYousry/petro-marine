import { useEffect } from 'react'
import { ContactHero }     from './components/ContactHero'
import { ContactInfo }     from './components/ContactInfo'
import { ContactForm }     from './components/ContactForm'
import { QuoteCTA }        from './components/QuoteCTA'

export function ContactPage() {
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
      <ContactHero />

      {/* Main: contact info (left) + form (right) */}
      <section
        id="contact-form"
        className="relative bg-white overflow-hidden scroll-mt-24"
        aria-label="Contact details and form"
      >
        {/* Decorative blob */}
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <div
            className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-[0.04]"
            style={{ background: 'radial-gradient(circle, #2A5FA5 0%, transparent 65%)' }}
          />
        </div>

        <div className="container-maritime py-20 md:py-24 relative">
          <div className="grid lg:grid-cols-[1fr_1.1fr] xl:grid-cols-[1fr_1.05fr] gap-12 xl:gap-16 items-start">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      <QuoteCTA />
    </>
  )
}
