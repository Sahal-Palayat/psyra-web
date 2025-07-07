"use client"

import { BackgroundElements } from "@/components/Survey/background-elements";
import CompletionModal from "@/components/Survey/completion-modal";
import { QuestionContent } from "@/components/Survey/question-content";
import { QuestionDisplay } from "@/components/Survey/question-display";
import { SurveyHeader } from "@/components/Survey/survey-header";
import { useSurveyLogic } from "@/hooks/use-survey-logic";
import { basicQuestions } from "@/components/Survey/data/survey-questions";

export default function SurveyQuestions() {
  const {
    value,
    setValue,
    surveyQuestions,
    showCompletionModal,
    setShowCompletionModal,
    currentQuestion,
    answers,
    isTransitioning,
    handleOptionSelect,
    handlePrevious,
    router,
  } = useSurveyLogic()

  const question = surveyQuestions[currentQuestion]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 relative overflow-hidden">
      <BackgroundElements />

      <main className="p-14 flex items-center justify-center min-h-screen px-4 relative z-10">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-teal-500/10 border border-white/50 w-full max-w-4xl min-h-[600px] p-8">
          <SurveyHeader
            currentQuestion={currentQuestion}
            totalQuestions={surveyQuestions.length}
            showBackButton={currentQuestion > 0}
            onPrevious={handlePrevious}
            isTransitioning={isTransitioning}
            showProgress={surveyQuestions.length > basicQuestions.length}
          />

          <QuestionDisplay question={question.question} isTransitioning={isTransitioning} />

          <div className="space-y-4">
            <QuestionContent
              question={question}
              answers={answers}
              value={value}
              setValue={setValue}
              onOptionSelect={handleOptionSelect}
            />
          </div>
        </div>
      </main>

      <CompletionModal
        isOpen={showCompletionModal}
        onClose={() => {
          router.push("/")
          setShowCompletionModal(false)
        }}
      />
    </div>
  )
}
