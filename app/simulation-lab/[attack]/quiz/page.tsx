import { notFound } from "next/navigation"
import { QuizPage } from "@/components/quiz-page"
import { attacks } from "@/data/attacks"

interface QuizPageProps {
  params: Promise<{ attack: string }>
}

export default async function AttackQuizPage({ params }: QuizPageProps) {
  const { attack: attackSlug } = await params

  const attack = attacks.find((a) => a.slug === attackSlug)

  if (!attack) {
    notFound()
  }

  return <QuizPage attack={attack} />
}

export async function generateStaticParams() {
  return attacks.map((attack) => ({
    attack: attack.slug,
  }))
}

export async function generateMetadata({ params }: QuizPageProps) {
  const { attack: attackSlug } = await params
  const attack = attacks.find((a) => a.slug === attackSlug)

  if (!attack) {
    return {
      title: "Quiz Not Found - CyberDrive",
    }
  }

  return {
    title: `${attack.title} Quiz - CyberDrive`,
    description: `Test your knowledge of ${attack.title} attacks and mitigation strategies`,
  }
}
