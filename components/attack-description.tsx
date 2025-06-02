import { Shield, Target, AlertTriangle, Clock, BarChart3 } from "lucide-react"
import type { Attack } from "@/data/attacks"

interface AttackDescriptionProps {
  attack: Attack
}

export function AttackDescription({ attack }: AttackDescriptionProps) {

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

        <div className="container relative mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center text-slate-300 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  {attack.duration}
                </div>
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
            {/* What is it */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <Target className="h-6 w-6 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">What is {attack.title}?</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">{attack.summary}</p>
            </div>

            {/* How it Works */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <BarChart3 className="h-6 w-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">How it Works</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">{attack.technicalDetails}</p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Attack Process:</h3>
              <div className="space-y-4">
                {attack.actionBreakdown.map((action, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{action}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Real-World Impact */}
            <div className="bg-red-50 rounded-xl p-8 border border-red-200">
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-6 w-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-red-900">Real-World Impact</h2>
              </div>
              <p className="text-red-800 leading-relaxed text-lg">{attack.realWorldImpact}</p>
            </div>

            {/* Scenario */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <Shield className="h-6 w-6 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Your Mission Scenario</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">{attack.scenario}</p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Mission Objective:</h3>
                <p className="text-green-800 leading-relaxed">{attack.mission}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
