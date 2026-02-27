"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface QuestionProps {
  question: string;
  onSelect: (answerLabel: string) => void;
  onBack?: () => void;
  onNext?: () => void;
  selectedValue?: string;
  canGoBack?: boolean;
  canGoNext?: boolean;
  current?: number;
  total?: number;
  description?: string;
}

const OPTIONS = [
  { label: "Always", color: "from-emerald-400/25 to-emerald-300/10" },
  { label: "Often", color: "from-blue-400/25 to-blue-300/10" },
  { label: "Sometimes", color: "from-amber-400/25 to-amber-300/10" },
  { label: "Rarely", color: "from-orange-400/25 to-orange-300/10" },
  { label: "Never", color: "from-red-400/25 to-red-300/10" },
];

export default function Question({
  question,
  onSelect,
  onBack,
  onNext,
  canGoBack,
  canGoNext,
  selectedValue,
  current,
  total,
  description,
}: QuestionProps) {
  const [selected, setSelected] = useState<string | null>(
    selectedValue ?? null
  );
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setSelected(selectedValue ?? null);
  }, [selectedValue, question]);

  const handleSelect = (label: string) => {
    setSelected(label);

    setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onSelect(label);
        setIsVisible(true);
      }, 150);
    }, 200);
  };

  // Progress logic (reused from Progress component)
  const percentage = current && total ? Math.round((current / total) * 100) : 0;

  return (
    <section className="min-h-screen flex flex-col items-center px-4 sm:px-5 md:px-6
  pt-24 sm:pt-28 lg:pt-24
  pb-8 sm:pb-12 lg:pb-8
  bg-gray-100">

      <div className="w-full max-w-[900px] lg:max-w-[1100px]">
        {/* Main card */}
        <div
          className={`transition-all duration-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <div className="bg-gradient-to-b from-[#FFF5F0] to-[#FFE8E8] rounded-3xl lg:rounded-5xl shadow-lg shadow-gray-200/50 p-4 sm:p-6 md:p-8 lg:p-5 xl:p-6">
            {/* Mobile back arrow (visual only) */}
            {canGoBack && (
              <div className="md:hidden mb-4">
                <button
                  onClick={onBack}
                  className="text-[#E49DA9] text-lg font-light"
                  aria-label="Go back"
                >
                  ←
                </button>
              </div>
            )}

            {/* Top Section - Progress */}
            {current && total && (
              <div className="mb-6 sm:mb-8 lg:mb-4">
                {/* Progress bar UI (reused from Progress component) */}
                <div className="flex justify-between items-center mb-4 lg:mb-3">
                  <span className="text-sm font-semibold text-[#E49DA9]">
                    Question {current} of {total}
                  </span>
                  <span className="text-sm font-semibold text-[#E49DA9]/90">{percentage}%</span>
                </div>

                <div className="flex gap-2">
                  {Array.from({ length: total }).map((_, index) => (
                    <div
                      key={index}
                      className="flex-1 h-1.5 rounded-full transition-all duration-300"
                      style={{
                        backgroundColor:
                          index < current
                            ? "#6B9E8F" // Completed - muted teal (matching Question theme)
                            : index <= current ? "#5F8F82" : "#FFE8E8", // Remaining - light pink
                              opacity: index === current ? 1 : 0.4,
                      }}
                    />
                  ))}
                </div>

                <div className="mt-3 lg:mt-2 text-xs text-[#E49DA9]/80 font-medium">
                  {percentage === 100 ? "Almost there! 🎉" : `${Math.ceil(((total - current) / total) * 100)}% remaining`}
                </div>
              </div>
            )}

            {/* Question Section */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-2 mb-8 sm:mb-10 lg:mb-4">
              {/* Decorative illustration */}
              <div className="flex justify-center mb-4 sm:mb-6 lg:mb-1">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-28 lg:h-28 lg:max-h-[80px] opacity-30 lg:opacity-20">
                  <Image
                    src="/images/relationship-couple-illustration.webp"
                    alt=""
                    width={200}
                    height={200}
                    className="w-full h-full object-contain"
                    aria-hidden="true"
                  />
                </div>
              </div>

              {/* Question heading */}
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-semibold text-[#2C2C2C] text-center leading-tight lg:leading-tight">
                {question}
              </h2>

              {/* Description */}
              {description && (
                <p className="text-sm sm:text-base lg:text-xs xl:text-sm text-[#5A5A5A] text-center leading-relaxed lg:leading-normal max-w-2xl mx-auto">
                  {description}
                </p>
              )}
            </div>

            {/* Options Section */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-2 mb-6 sm:mb-8 lg:mb-3">
              {OPTIONS.map((option) => (
                <button
                  key={option.label}
                  onClick={() => handleSelect(option.label)}
                  className={`
                    w-full relative px-4 sm:px-5 md:px-6 lg:px-4 xl:px-5 py-3 sm:py-4 md:py-5 lg:py-2 xl:py-2.5 rounded-xl
                    border transition-all duration-200 ease-out
                    text-left flex items-center justify-between
                    ${
                      selected === option.label
                        ? "bg-[#FADCDC] border-[#E8D2D7] shadow-sm"
                        : "bg-[#FDEFEF] border-[#F5E0E0]"
                    }
                    ${
                      selected !== null && selected !== option.label
                        ? "opacity-60"
                        : ""
                    }
                    hover:shadow-md active:scale-[0.98]
                  `}
                >
                  <span className="text-sm sm:text-base md:text-lg lg:text-sm xl:text-base font-medium text-[#2C2C2C]">
                    {option.label}
                  </span>

                  {/* Check icon for selected option */}
                  {selected === option.label && (
                    <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-6 lg:h-6 rounded-full bg-[#6B9E8F] flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 lg:w-4 lg:h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Continue Button */}
            {selected && (
              <div className="flex justify-center lg:mt-1">
                <button
                  onClick={() => {
                    if (onNext && canGoNext) {
                      onNext();
                    }
                  }}
                  disabled={!canGoNext}
                  className={`
                    px-8 sm:px-10 md:px-12 lg:px-8 xl:px-10 py-3 sm:py-4 lg:py-2 xl:py-2.5 rounded-full
                    font-semibold text-sm sm:text-base lg:text-xs xl:text-sm uppercase tracking-wide
                    shadow-md transition-all duration-300
                    ${
                      canGoNext
                        ? "bg-[#6B9E8F] text-white hover:shadow-lg active:scale-95"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }
                  `}
                >
                  Continue
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
