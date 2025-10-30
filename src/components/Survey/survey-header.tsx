"use client";

import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

interface SurveyHeaderProps {
  currentQuestion: number;
  totalQuestions: number;
  showBackButton: boolean;
  onPrevious: () => void;
  // isTransitioning: boolean
  showProgress: boolean;
}

export function SurveyHeader({
  currentQuestion,
  totalQuestions,
  showBackButton,
  onPrevious,
  // isTransitioning,
  showProgress,
}: SurveyHeaderProps) {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="mb-8 space-y-4">
      <div className="flex items-center justify-between">
        {showBackButton ? (
          <motion.button
            onClick={onPrevious}
            className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
            whileHover={{ x: -4 }}
          >
            <ChevronLeft size={20} />
            Back
          </motion.button>
        ) : (
          <div />
        )}

        {showProgress && (
          <motion.span
            className="text-sm font-semibold text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Question {currentQuestion + 1} of {totalQuestions}
          </motion.span>
        )}
      </div>

      {showProgress && (
        <motion.div
          className="w-full h-2 bg-gray-200 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      )}
    </div>
  );
}
