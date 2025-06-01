"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Brain, CheckCircle, XCircle, Lightbulb, GraduationCap } from "lucide-react"
import type { Attack, QuizQuestion } from "@/data/attacks"

interface QuizPageProps {
  attack: Attack
}

interface QuestionState {
  selectedOption: number | null
  showExplanation: boolean
}

export function QuizPage({ attack }: QuizPageProps) {
  const [questionStates, setQuestionStates] = useState<QuestionState[]>(
    attack.quiz.map(() => ({ selectedOption: null, showExplanation: false })),
  )

  const handleOptionSelect = (questionIndex: number, optionIndex: number) => {
    const newStates = [...questionStates]
    newStates[questionIndex] = {
      selectedOption: optionIndex,
      showExplanation: true,
    }
    setQuestionStates(newStates)
  }

  const resetQuestion = (questionIndex: number) => {
    const newStates = [...questionStates]
    newStates[questionIndex] = {
      selectedOption: null,
      showExplanation: false,
    }
    setQuestionStates(newStates)
  }

  const getOptionStyle = (question: QuizQuestion, optionIndex: number, questionState: QuestionState) => {
    if (!questionState.showExplanation) {
      return "border-gray-200 hover:border-blue-300 hover:bg-blue-50 cursor-pointer"
    }

    const isSelected = questionState.selectedOption === optionIndex
    const isCorrect = question.options[optionIndex].isCorrect

    if (isCorrect) {
      return "border-green-500 bg-green-50 text-green-800"
    }

    if (isSelected && !isCorrect) {
      return "border-red-500 bg-red-50 text-red-800"
    }

    return "border-gray-200 bg-gray-50 text-gray-500"
  }

  const getOptionIcon = (question: QuizQuestion, optionIndex: number, questionState: QuestionState) => {
    if (!questionState.showExplanation) return null

    const isSelected = questionState.selectedOption === optionIndex
    const isCorrect = question.options[optionIndex].isCorrect

    if (isCorrect) {
      return <CheckCircle className="h-5 w-5 text-green-600" />
    }

    if (isSelected && !isCorrect) {
      return <XCircle className="h-5 w-5 text-red-600" />
    }

    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-800" asChild>
                <Link href={`/simulation-lab/${attack.slug}`}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to {attack.title}
                </Link>
              </Button>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{attack.title} - Knowledge Assessment</h1>
                <p className="text-gray-600">Mission debrief and knowledge reinforcement</p>
              </div>
            </div>

            {/* Quiz Tip */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <Brain className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">🎓 Mission Debrief</h3>
                  <p className="text-blue-800 leading-relaxed">
                    This quiz is not a test — it's a mission debrief. Use it to reinforce what you just learned in the
                    simulation. Each question reflects real-world scenarios you might encounter as a cybersecurity
                    professional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {attack.quiz.map((question, questionIndex) => {
              const questionState = questionStates[questionIndex]
              return (
                <div key={questionIndex} className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 leading-relaxed">
                        <span className="text-indigo-600 font-bold">Q{questionIndex + 1}.</span> {question.question}
                      </h3>
                      {questionState.showExplanation && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => resetQuestion(questionIndex)}
                          className="ml-4 text-gray-600 hover:text-gray-800"
                        >
                          Reset
                        </Button>
                      )}
                    </div>

                    <div className="grid gap-4">
                      {question.options.map((option, optionIndex) => (
                        <div
                          key={optionIndex}
                          className={`p-4 rounded-lg border-2 transition-all duration-200 ${getOptionStyle(
                            question,
                            optionIndex,
                            questionState,
                          )}`}
                          onClick={() => {
                            if (!questionState.showExplanation) {
                              handleOptionSelect(questionIndex, optionIndex)
                            }
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <span className="font-semibold text-gray-700 text-lg">
                                {String.fromCharCode(65 + optionIndex)})
                              </span>
                              <span className="text-gray-800 text-lg">{option.text}</span>
                            </div>
                            {getOptionIcon(question, optionIndex, questionState)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {questionState.showExplanation && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
                      <div className="flex items-start space-x-3">
                        <Lightbulb className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-2">💡 Explanation:</h4>
                          <p className="text-blue-800 leading-relaxed text-lg">{question.explanation}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}

            {/* Completion Message */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <GraduationCap className="h-8 w-8 text-white mr-3" />
                <h3 className="text-2xl font-bold text-white">Mission Complete!</h3>
              </div>
              <p className="text-green-100 text-lg leading-relaxed max-w-3xl mx-auto mb-6">
                You've successfully completed the {attack.title} learning module. You now understand how these attacks
                work, how to detect them, and how to defend against them. This knowledge is essential for protecting
                connected vehicles in the real world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link href="/simulation-lab">Explore More Attacks</Link>
                </Button>
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" asChild>
                  <Link href={`/simulation-lab/${attack.slug}`}>Review Attack Details</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
