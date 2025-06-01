import { notFound } from "next/navigation"
import { AttackDescription } from "@/components/attack-description"
import { ActionButtons } from "@/components/action-buttons"
import { attacks } from "@/data/attacks"

interface AttackPageProps {
  params: Promise<{ attack: string }>
}

export default async function AttackPage({ params }: AttackPageProps) {
  const { attack: attackSlug } = await params

  const attack = attacks.find((a) => a.slug === attackSlug)

  if (!attack) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AttackDescription attack={attack} />
      <ActionButtons attack={attack} />
    </div>
  )
}

export async function generateStaticParams() {
  return attacks.map((attack) => ({
    attack: attack.slug,
  }))
}

export async function generateMetadata({ params }: AttackPageProps) {
  const { attack: attackSlug } = await params
  const attack = attacks.find((a) => a.slug === attackSlug)

  if (!attack) {
    return {
      title: "Attack Not Found - CyberDrive",
    }
  }

  return {
    title: `${attack.title} - CyberDrive Simulation Lab`,
    description: attack.summary,
  }
}
