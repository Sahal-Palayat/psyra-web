"use client"

import { ArrowLeft } from "lucide-react"

interface SurveyHeaderProps {
  currentQuestion: number
  totalQuestions: number
  showBackButton: boolean
  onPrevious: () => void
  isTransitioning: boolean
  showProgress: boolean
}

export const SurveyHeader = ({
  currentQuestion,
  totalQuestions,
  showBackButton,
  onPrevious,
  isTransitioning,
  showProgress,
}: SurveyHeaderProps) => {
  return (
    <header className="mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {showBackButton && (
            <button
              onClick={onPrevious}
              disabled={isTransitioning}
              className="p-3 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:from-teal-600 hover:to-emerald-600 transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          )}
        </div>
        {showProgress && (
          <div className="px-4 py-2 rounded-full bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-700 font-medium text-sm border border-teal-200/50">
            {currentQuestion + 1} / {totalQuestions}
          </div>
        )}
      </div>
    </header>
  )
}
