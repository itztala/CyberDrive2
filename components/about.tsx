import { Shield, Zap, Target } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">About CyberDrive</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  CyberDrive is a modern, simulation-based learning platform built to train the next wave of automotive
                  cybersecurity experts.
                </p>
                <p>
                  As vehicles evolve into intelligent, connected systems, the risks they face grow just as fast.
                  CyberDrive responds to this challenge by offering a safe, browser-accessible space where users can
                  explore realistic vehicle cyberattacks, understand how they work, and practice defending against them.
                </p>
                <p>
                  From CAN Bus spoofing to GPS signal attacks, LiDAR manipulation, Remote Hijacking, and Multimedia
                  System Exploits, each simulation is paired with live feedback, terminal-based mitigation steps, and
                  educational insights — making learning intuitive, visual, and impactful.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <Shield className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Realistic Simulations</h3>
                  <p className="text-sm text-gray-600">
                    Experience authentic cyber attack scenarios in a controlled environment
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-xl">
                  <Target className="h-8 w-8 text-green-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Hands-on Defense</h3>
                  <p className="text-sm text-gray-600">
                    Practice real mitigation techniques with terminal-based solutions
                  </p>
                </div>
              </div>
              <div className="space-y-6 pt-8">
                <div className="bg-purple-50 p-6 rounded-xl">
                  <Zap className="h-8 w-8 text-purple-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Live Feedback</h3>
                  <p className="text-sm text-gray-600">Get instant insights and educational guidance as you learn</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl">
                  <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-sm">CB</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Browser-Based</h3>
                  <p className="text-sm text-gray-600">No hardware needed - learn anywhere with just your browser</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
