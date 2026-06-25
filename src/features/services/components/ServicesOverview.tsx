import { FadeIn } from '@ui/motion/FadeIn'
import { SectionLabel } from '@ui/primitives/SectionLabel'
import { cn } from '@/utils'

// Overview band — full-width collage summarising the complete service offering.
// Sits directly below ServicesHero, before the detailed service sections.

export function ServicesOverview() {
  return (
    <section
      className="relative bg-smoke-50 py-20 md:py-24 overflow-hidden"
      aria-labelledby="services-overview-heading"
    >
      <div className="container-maritime">
        <FadeIn className="max-w-[760px] mb-12 md:mb-14">
          <SectionLabel accent="flame" className="mb-5">
            Complete Marine Solutions
          </SectionLabel>
          <h2
            id="services-overview-heading"
            className={cn(
              'font-display font-extrabold text-navy-900 leading-[1.08] tracking-[-0.02em]',
              'text-[1.875rem] sm:text-[2.25rem] md:text-[2.75rem]',
            )}
          >
            Everything your vessel needs,{' '}
            <span className="text-ocean-500">with one partner.</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} distance={28}>
          <figure
            className={cn(
              'relative rounded-2xl overflow-hidden bg-navy-900',
              'shadow-[0_28px_80px_-24px_rgba(7,14,30,0.55)]',
              'ring-1 ring-navy-900/5',
            )}
          >
            <img
              src="/services-overview.jpg"
              alt="Petromarine service overview — 24/7 support across all Egyptian ports, deck & engine stores supply, maintenance & repairs, marine electronics calibration, inspection, mechanical, electrical, piping & fabrication, safety equipment, and technical consultancy."
              width={1280}
              height={853}
              loading="lazy"
              decoding="async"
              className="block w-full h-auto"
            />
          </figure>
        </FadeIn>
      </div>
    </section>
  )
}
