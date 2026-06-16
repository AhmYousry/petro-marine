import { HeroSection }      from './components/HeroSection'
import { AboutPreview }    from './components/AboutPreview'
import { ServicesPreview } from './components/ServicesPreview'
import { WhyChooseUs }     from './components/WhyChooseUs'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <WhyChooseUs />
    </>
  )
}
