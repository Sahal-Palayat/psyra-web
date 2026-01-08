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
  { label: "Always", value: 5, color: "from-white/90 to-white/80" },
  { label: "Often", value: 4, color: "from-white/80 to-white/70" },
  { label: "Sometimes", value: 3, color: "from-white/70 to-white/60" },
  { label: "Rarely", value: 2, color: "from-white/60 to-white/50" },
  { label: "Never", value: 1, color: "from-white/50 to-white/40" },
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

  useEffect(() => {
    setSelected(selectedValue ?? null);
  }, [selectedValue, question]);

  const [hovered, setHovered] = useState<string | null>(null);

  const handleSelect = (label: string) => {
    setSelected(label);
    setTimeout(() => onSelect(label), 200);
  };

  return (
    <div className="w-full px-4 py-12 sm:py-16">
      <div className="max-w-2xl mx-auto">
        {/* Navigation row */}
        {(canGoBack || canGoNext) && (
          <div className="mb-8 flex items-center justify-between">
            {canGoBack ? (
              <button
                onClick={onBack}
                className="text-sm text-white/80 hover:text-white transition"
              >
                ← Back
              </button>
            ) : (
              <div />
            )}

            {canGoNext && (
              <button
                onClick={onNext}
                className="text-sm text-white/80 hover:text-white transition"
              >
                Next →
              </button>
            )}
          </div>
        )}

        {/* Question text */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-12 leading-relaxed text-balance">
          {question}
        </h2>

        {/* Options grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {OPTIONS.map((option) => (
            <button
              key={option.label}
              onClick={() => handleSelect(option.label)}
              onMouseEnter={() => setHovered(option.label)}
              onMouseLeave={() => setHovered(null)}
              className={`
                relative group px-6 py-5 rounded-xl
                border-2 border-white/20
                transition-all duration-200 ease-out
                ${
                  selected === option.label
                    ? `bg-gradient-to-r ${option.color} border-white text-teal-900 shadow-lg scale-105`
                    : hovered === option.label
                    ? `border-white/40 bg-white/10 backdrop-blur-sm scale-102`
                    : "bg-white/5 backdrop-blur-sm hover:border-white/30 text-white"
                }
                ${
                  selected !== null && selected !== option.label
                    ? "opacity-50"
                    : ""
                }
                active:scale-95
              `}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-lg font-semibold">
                  {option.label}
                </span>

                <div
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    selected === option.label
                      ? "bg-teal-900 scale-150"
                      : hovered === option.label
                      ? "bg-white scale-100"
                      : "bg-white/40"
                  }`}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
