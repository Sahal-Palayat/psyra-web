"use client";

import Question from "@/components/relationship-assessment/Question";
import PersonalDetailsUI from "@/components/relationship-assessment/personal-details";
import { useRelationshipAssessment } from "@/hooks/use-relationship-assessment";

export default function RelationshipQuestionsPage() {
  const {
    loading,
    submitting,
    step,

    currentQuestion,
    currentIndex,
    totalQuestions,

    questionAnswers,
    personalDetails,
    setPersonalDetails,

    handleAnswerSelect,
    goBack,
    goNext,
    submitAssessment,
  } = useRelationshipAssessment();

  // Initial loading
  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg px-6 py-5 flex flex-col items-center gap-3">
          <div className="w-6 h-6 border-2 border-[#00989D]/30 border-t-[#00989D] rounded-full animate-spin" />
          <p className="text-sm text-gray-600 text-center">
            Preparing your relationship check…
          </p>
        </div>
      </div>
    );
  }


  // PERSONAL DETAILS STEP

  if (step === "personalDetails") {
    return (
      <PersonalDetailsUI
        personalDetails={personalDetails}
        setPersonalDetails={setPersonalDetails}
        submitting={submitting}
        onSubmit={submitAssessment}
      />
    );
  }

  // Safety fallback
  if (!currentQuestion) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg px-6 py-6 max-w-sm text-center space-y-4">
          <p className="text-sm text-gray-700">
            We couldn’t load the next question right now.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="text-sm font-medium text-[#00989D] hover:underline"
          >
            Refresh the page
          </button>
        </div>
      </div>
    );
  }


  // QUESTIONS STEP

  return (
    <>
      {/* Question */}
      <Question
        key={currentQuestion._id}
        question={currentQuestion.questionText}
        onSelect={handleAnswerSelect}
        onBack={goBack}
        onNext={goNext}
        canGoBack={currentIndex > 0}
        selectedValue={questionAnswers[currentQuestion.questionText]}
        canGoNext={
          questionAnswers[currentQuestion.questionText] !== undefined
        }
        current={currentIndex + 1}
        total={totalQuestions}
      />

      {/* Submitting overlay */}
      {submitting && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl px-8 py-6 flex flex-col items-center gap-4">
            <div className="w-6 h-6 border-2 border-[#00989D]/30 border-t-[#00989D] rounded-full animate-spin" />
            <p className="text-sm text-gray-600 text-center">
              Understanding your responses…
            </p>
          </div>
        </div>
      )}
    </>
  );
}
