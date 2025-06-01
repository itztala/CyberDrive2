import { LandingHero } from "@/components/landing-hero"
import { AboutSection } from "@/components/about-section"
import { WhoWeAreForSection } from "@/components/who-we-are-for-section"
import { LandingCTA } from "@/components/landing-cta"

export default function LandingPage() {
  return (
    <>
      <LandingHero />
      <AboutSection />
      <WhoWeAreForSection />
      <LandingCTA />
    </>
  )
}
