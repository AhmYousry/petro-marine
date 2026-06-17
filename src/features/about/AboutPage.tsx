import { CompanyStory }       from './components/CompanyStory'
import { Mission }            from './components/Mission'
import { ExperienceTimeline } from './components/ExperienceTimeline'
import { Statistics }         from './components/Statistics'
import { PortCoverage }       from './components/PortCoverage'
import { TrustIndicators }    from './components/TrustIndicators'

export function AboutPage() {
  return (
    <>
      <CompanyStory />
      <Mission />
      <ExperienceTimeline />
      <Statistics />
      <PortCoverage />
      <TrustIndicators />
    </>
  )
}
