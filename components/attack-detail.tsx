"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Play, Shield, BarChart3, Target, AlertTriangle } from "lucide-react"
import Link from "next/link"
import type { Attack } from "@/data/attacks"
import { QuizSection } from "@/components/quiz-section"

interface AttackDetailProps {
  attack: Attack
}

export function AttackDetail({ attack }: AttackDetailProps) {
  const handleStartAttack = () => {
    window.location.href = `http://127.0.0.1:5000/${attack.slug}`
  }

  const handleStartMitigation = () => {
    window.location.href = `http://127.0.0.1:5000/${attack.slug}`
  }

  const difficultyColors = {
    Beginner: "bg-green-100 text-green-800 border-green-200",
    Intermediate: "bg-yellow-100 text-yellow-800 border-yellow-200",
    Advanced: "bg-orange-100 text-orange-800 border-orange-200",
    Expert: "bg-red-100 text-red-800 border-red-200",
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Button variant="ghost" className="text-white hover:bg-white/10" asChild>
                <Link href="/simulation-lab">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Simulation Lab
                </Link>
              </Button>
            </div>

            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium border ${
                    difficultyColors[attack.difficulty as keyof typeof difficultyColors]
                  }`}
                >
                  {attack.difficulty}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-white">{attack.title}</h1>

              <blockquote className="text-xl italic text-cyan-300 border-l-4 border-cyan-400 pl-6">
                "{attack.tagline}"
              </blockquote>

              <p className="text-xl text-slate-300 leading-relaxed">{attack.summary}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Scenario */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <Target className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Scenario</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{attack.scenario}</p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <Shield className="h-6 w-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Your Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{attack.mission}</p>
            </div>

            {/* Action Breakdown */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <BarChart3 className="h-6 w-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Action Breakdown</h2>
              </div>
              <div className="space-y-4">
                {attack.actionBreakdown.map((action, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{action}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Details */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-6 w-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Technical Details</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{attack.technicalDetails}</p>
            </div>

            {/* Real-World Impact */}
            <div className="bg-red-50 rounded-xl p-8 border border-red-200">
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-6 w-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-red-900">Real-World Impact</h2>
              </div>
              <p className="text-red-800 leading-relaxed text-lg">{attack.realWorldImpact}</p>
            </div>

            {/* Learning Quiz Section */}
            <QuizSection attack={attack} />

            {/* CTA Buttons */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Begin?</h2>
              <p className="text-blue-100 mb-8 text-lg">
                Choose your path: Launch the attack simulation to understand the threat, or jump straight to mitigation
                training.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold"
                  onClick={handleStartAttack}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Start Attack Simulation
                </Button>
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold"
                  onClick={handleStartMitigation}
                >
                  <Shield className="mr-2 h-5 w-5" />
                  Start Mitigation
                </Button>
              </div>

              <div className="mt-6 text-blue-200 text-sm">
                <p>External simulations will open in a new environment</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
