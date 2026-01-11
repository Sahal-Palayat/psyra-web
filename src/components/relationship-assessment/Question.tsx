"use client";

import { useState, useEffect } from "react";

interface QuestionProps {
  question: string;
  onSelect: (answerLabel: string) => void;
  onBack?: () => void;
  onNext?: () => void;
  selectedValue?: string;
  canGoBack?: boolean;
  canGoNext?: boolean;
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

  return (
    <div className="w-full px-4 py-12 sm:py-16">
      <div className="max-w-2xl mx-auto">
        {(canGoBack || canGoNext) && (
          <div className="mb-8 flex items-center justify-between">
            {canGoBack ? (
              <button
                onClick={onBack}
                className="text-xs sm:text-sm text-white/70"
              >
                ← Back
              </button>
            ) : (
              <div />
            )}

            {canGoNext && (
              <button
                onClick={onNext}
                className="text-xs sm:text-sm text-white/70"
              >
                Next →
              </button>
            )}
          </div>
        )}

        <div
          className={`transition-all duration-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <div className="rounded-2xl border border-white/15 bg-gradient-to-br from-white/8 to-white/3 backdrop-blur-lg p-8 sm:p-10 shadow-xl">
            {/* Question */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-10 leading-relaxed text-balance">
              {question}
            </h2>

            {/* Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {OPTIONS.map((option) => (
                <button
                  key={option.label}
                  onClick={() => handleSelect(option.label)}
                  className={`
                    relative px-4 py-3 sm:px-5 sm:py-4 rounded-lg
                    border-2 transition-all duration-200 ease-out
                    ${
                      selected === option.label
                        ? `bg-gradient-to-r ${option.color} border-white/70 text-white shadow-xl scale-105 ring-2 ring-white/25`
                        : "bg-white/15 border-white/40 backdrop-blur-md text-white/95"
                    }
                    ${
                      selected !== null && selected !== option.label
                        ? "opacity-40"
                        : ""
                    }
                    active:scale-95
                  `}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm sm:text-base font-semibold">
                      {option.label}
                    </span>

                    <div
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                        selected === option.label
                          ? "bg-white scale-150 shadow-md"
                          : "bg-white/60"
                      }`}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
