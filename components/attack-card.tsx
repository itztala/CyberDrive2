import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, BarChart3 } from "lucide-react"
import type { Attack } from "@/data/attacks"

interface AttackCardProps {
  attack: Attack
}

export function AttackCard({ attack }: AttackCardProps) {

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="p-6 space-y-4">
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-bold text-gray-900">{attack.title}</h3>
          </div>

          <blockquote className="text-sm italic text-gray-600 border-l-4 border-gray-200 pl-4">
            "{attack.tagline}"
          </blockquote>
        </div>

        <p className="text-gray-700 leading-relaxed">{attack.summary}</p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
          </div>
        </div>

        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
          <Link href={`/simulation-lab/${attack.slug}`}>
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
