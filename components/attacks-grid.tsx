import { AttackCard } from "@/components/attack-card"
import { attacks } from "@/data/attacks"

export function AttacksGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Choose Your Attack Scenario</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each simulation provides hands-on experience with real-world attack vectors, complete with mitigation
            strategies and educational insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {attacks.map((attack) => (
            <AttackCard key={attack.slug} attack={attack} />
          ))}
        </div>
      </div>
    </section>
  )
}
