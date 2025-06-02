import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { CyberCarAnimation } from "@/components/cyber-car-animation"

export function LandingHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 sm:py-32">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                CyberDrive: <span className="text-green-600">Green Light</span> to Learn,{" "}
                <span className="text-red-600">Red Light</span> to Threats
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl">
                Master automotive cybersecurity through immersive simulations. Learn to defend connected vehicles
                against real-world cyber threats in a safe, browser-based environment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                <Link href="/simulation-lab">
                  Start Simulating
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span>Browser-based</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full" />
                <span>Real-time feedback</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full" />
                <span>Hands-on learning</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <CyberCarAnimation />
          </div>
        </div>
      </div>
    </section>
  )
}
