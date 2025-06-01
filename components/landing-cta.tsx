import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield } from "lucide-react"

export function LandingCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />

      <div className="container relative mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready To Take Control of Cybersecurity on the Road?
            </h2>
            <div className="space-y-4 text-xl text-blue-100 leading-relaxed">
              <p>
                Join CyberDrive and dive into an immersive simulation where learning meets real-world defense. Whether
                you're a student, an enthusiast, or just curious — defend the virtual car, close the vulnerable ports,
                and challenge yourself to stop cyber attacks before they strike.
              </p>
              <p className="text-lg text-blue-200 font-medium">
                Let's shift gears toward a safer digital future — Start your journey now!
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold" asChild>
              <Link href="/simulation-lab">
                <Shield className="mr-2 h-5 w-5" />
                Start Simulating
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-blue-200 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span>Free to start</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full" />
              <span>No installation required</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full" />
              <span>Instant access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
