import { Shield, Target, Zap } from "lucide-react"

export function SimulationHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 sm:py-32">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

      <div className="container relative mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              CyberDrive <span className="text-cyan-400">Simulation Lab</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Welcome to the heart of CyberDrive — where theory meets reality. Below are the attack scenarios you can
              simulate to understand, analyze, and mitigate real-world cyber threats in modern vehicles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <Shield className="h-8 w-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Safe Environment</h3>
              <p className="text-slate-300 text-sm">Practice without risk to real vehicles</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <Target className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Realistic Scenarios</h3>
              <p className="text-slate-300 text-sm">Based on actual attack vectors</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Instant Feedback</h3>
              <p className="text-slate-300 text-sm">Learn from every action</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
