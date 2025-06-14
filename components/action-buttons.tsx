"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, Shield, Brain, AlertTriangle } from "lucide-react"
import type { Attack } from "@/data/attacks"

interface ActionButtonsProps {
  attack: Attack
}

export function ActionButtons({ attack }: ActionButtonsProps) {
  const handleStartAttack = () => {
    window.location.href = `http://127.0.0.1:5000/attack/${attack.slug}`
  }

  const handleStartMitigation = () => {window.location.href = `http://127.0.0.1:5000/mitigation/${attack.slug}`
    
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Begin Your Training?</h2>
            <p className="text-xl text-gray-600">Follow the 3-phase learning journey: Learn → Attack → Defend → Quiz</p>
          </div>

          {/* Action Buttons */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Attack Simulation */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-red-900 mb-3">Phase 1: Attack Simulation</h3>
              <p className="text-red-700 mb-6">
                Experience the attack from the attacker's perspective. Understand how {attack.title.toLowerCase()} works
                in practice.
              </p>
              <Button
                size="lg"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold"
                onClick={handleStartAttack}
              >
                <Play className="mr-2 h-5 w-5" />
                Start Attack Simulation
              </Button>
            </div>

            {/* Mitigation Training */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                 <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-3">Phase 2: Knowledge Assessment</h3>
              <p className="text-green-700 mb-6">
                Test your understanding with real-world scenarios and reinforce what you've learned through hands-on
                practice.
              </p>
              <Button size="lg" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold" asChild>
                <Link href={`/simulation-lab/${attack.slug}/quiz`}>
                  <Brain className="mr-2 h-5 w-5" />
                  Take the Quiz
                </Link>
              </Button>
            </div>
          </div>

          {/* External Simulation Note */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Attack and Mitigation simulations will open in a new environment at localhost:5000
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
