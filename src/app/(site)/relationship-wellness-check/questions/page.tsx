"use client";

import Progress from "@/components/relationship-assessment/Progress";
import Question from "@/components/relationship-assessment/Question";
import { useRelationshipAssessment } from "@/hooks/use-relationship-assessment";

export default function RelationshipQuestionsPage() {
  const {
    loading,
    submitting,
    currentQuestion,
    currentIndex,
    totalQuestions,
    handleAnswerSelect,
  } = useRelationshipAssessment();

  // Loading state (initial fetch)
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-sm">
          Loading relationship check…
        </p>
      </div>
    );
  }

  // Safety fallback (should not happen, but good practice)
  if (!currentQuestion) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-sm">
          Something went wrong. Please refresh the page.
        </p>
      </div>
    );
  }

  return (
    <section className="pt-20 bg-gradient-to-b from-[#00989D] via-cyan-400 to-cyan-200">
      {/* Progress */}
      <Progress
        current={currentIndex + 1}
        total={totalQuestions}
      />

      {/* Question */}
      <Question
        question={currentQuestion.questionText}
        onSelect={handleAnswerSelect}
      />

      {/* Submitting overlay (after last question) */}
      {submitting && (
        <div className="fixed inset-0 bg-white/70 backdrop-blur-sm
                        flex items-center justify-center z-50">
          <p className="text-gray-600 text-sm">
            Understanding your responses…
          </p>
        </div>
      )}
    </section>
  );
}
