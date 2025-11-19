"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Heart, Zap, Shield } from 'lucide-react';
import { useState } from "react";

interface IntroModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStart: () => void;
}

export function IntroModal({ isOpen, onClose, onStart }: IntroModalProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Welcome to Your Mental Health Journey 💚",
      description:
        "Take a moment for yourself. This assessment helps you understand your current mental wellness and provides personalized insights.",
      icon: Heart,
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "Quick & Insightful",
      description:
        "Just 13 questions. Takes about 5 minutes. Our AI therapist will provide personalized guidance based on your responses.",
      icon: Zap,
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "Completely Confidential",
      description:
        "Your responses are private and secure. We respect your mental health journey and protect your information with care.",
      icon: Shield,
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const step = steps[currentStep];
  const Icon = step.icon;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onStart();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <motion.div
              className="bg-white/85 backdrop-blur-xl rounded-3xl shadow-2xl shadow-emerald-500/20 border border-white/60 w-full max-w-2xl p-12"
              layout
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Content */}
              <div className="text-center space-y-8">
                {/* Icon */}
                <motion.div
                  key={`icon-${currentStep}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.4 }}
                  className="flex justify-center"
                >
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                </motion.div>

                {/* Title and description */}
                <motion.div
                  key={`text-${currentStep}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4"
                >
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    {step.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto">
                    {step.description}
                  </p>
                </motion.div>

                {/* Progress dots */}
                <motion.div
                  className="flex gap-2 justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {steps.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentStep(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentStep
                          ? "bg-gradient-to-r from-emerald-500 to-teal-500 w-8"
                          : "bg-gray-300 w-2 hover:bg-gray-400"
                      }`}
                      layoutId={`progress-${index}`}
                    />
                  ))}
                </motion.div>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex gap-4 justify-center pt-4"
                >
                  {currentStep > 0 && (
                    <button
                      onClick={handlePrev}
                      className="px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all"
                    >
                      Back
                    </button>
                  )}
                  <motion.button
                    onClick={handleNext}
                    className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {currentStep === steps.length - 1 ? (
                      <>
                        Start Assessment <ChevronRight className="w-5 h-5" />
                      </>
                    ) : (
                      <>
                        Next <ChevronRight className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </motion.div>

                {/* Skip option */}
                <motion.button
                  onClick={onClose}
                  className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Skip intro
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
