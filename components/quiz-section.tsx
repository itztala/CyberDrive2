"use client"

import { useState } from "react"
import { Brain, CheckCircle, XCircle, Lightbulb, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Attack, QuizQuestion } from "@/data/attacks"

interface QuizSectionProps {
  attack: Attack
}

interface QuestionState {
  selectedOption: number | null
  showExplanation: boolean
}

export function QuizSection({ attack }: QuizSectionProps) {
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

  // Determine the phase title based on the attack type
  const getPhaseTitle = (attackSlug: string) => {
    switch (attackSlug) {
      case "gps":
        return "Learning Mission: GPS Spoofing Detection & Mitigation"
      case "remote":
        return "Learning Mission: Defending Against Remote Hijacking"
      default:
        return `Learning Mission: Defending Against ${attack.title}`
    }
  }

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-8 border border-indigo-200">
      <div className="flex items-center mb-8">
        <Brain className="h-8 w-8 text-indigo-600 mr-4" />
        <div>
          <h2 className="text-3xl font-bold text-gray-900">{getPhaseTitle(attack.slug)}</h2>
          <p className="text-lg text-gray-600 mt-2">
            Each question below simulates a real-world situation a vehicle cybersecurity analyst might face. Read the
            scenario, choose your answer, and learn why it matters.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        {attack.quiz.map((question, questionIndex) => {
          const questionState = questionStates[questionIndex]
          return (
            <div key={questionIndex} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 leading-relaxed">
                    Q{questionIndex + 1}. {question.question}
                  </h3>
                  {questionState.showExplanation && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => resetQuestion(questionIndex)}
                      className="ml-4 text-gray-600 hover:text-gray-800"
                    >
                      Try Again
                    </Button>
                  )}
                </div>

                <div className="grid gap-3">
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
                          <span className="font-medium text-gray-700">{String.fromCharCode(65 + optionIndex)})</span>
                          <span className="text-gray-800">{option.text}</span>
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
                      <p className="text-blue-800 leading-relaxed">{question.explanation}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <Target className="h-8 w-8 text-white mr-3" />
          <h3 className="text-2xl font-bold text-white">🎯 Mission Summary</h3>
        </div>
        <p className="text-green-100 text-lg leading-relaxed max-w-3xl mx-auto">
          You now understand how attackers exploit {attack.title.toLowerCase()} vulnerabilities and the critical
          defenses needed to protect connected vehicles. You've learned to identify attack patterns, implement
          countermeasures, and respond to security incidents. You're one step closer to mastering automotive
          cybersecurity.
        </p>
        <div className="mt-6 text-green-200 text-sm">
          <p>Ready to put your knowledge into practice? Launch the simulation below!</p>
        </div>
      </div>
    </div>
  )
}
