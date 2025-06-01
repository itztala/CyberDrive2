import { SimulationHero } from "@/components/simulation-hero"
import { AttacksGrid } from "@/components/attacks-grid"
import { SimulationCTA } from "@/components/simulation-cta"

export default function SimulationLabPage() {
  return (
    <>
      <SimulationHero />
      <AttacksGrid />
      <SimulationCTA />
    </>
  )
}
