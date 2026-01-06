"use client"

import { useState } from "react"

interface QuestionProps {
  question: string
  onSelect: (score: number) => void
}

const OPTIONS = [
  { label: "Always", value: 5, color: "from-white/90 to-white/80" },
  { label: "Often", value: 4, color: "from-white/80 to-white/70" },
  { label: "Sometimes", value: 3, color: "from-white/70 to-white/60" },
  { label: "Rarely", value: 2, color: "from-white/60 to-white/50" },
  { label: "Never", value: 1, color: "from-white/50 to-white/40" },
]

export default function Question({ question, onSelect }: QuestionProps) {
  const [selected, setSelected] = useState<number | null>(null)
  const [hovered, setHovered] = useState<number | null>(null)

  const handleSelect = (value: number) => {
    setSelected(value)
    setTimeout(() => onSelect(value), 200)
  }

  return (
    <div className="w-full px-4 py-12 sm:py-16">
      <div className="max-w-2xl mx-auto">
        {/* Question text with white color for contrast against gradient */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-12 leading-relaxed text-balance">
          {question}
        </h2>

        {/* Options grid - modern card-based approach */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {OPTIONS.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              onMouseEnter={() => setHovered(option.value)}
              onMouseLeave={() => setHovered(null)}
              className={`
                relative group px-6 py-5 rounded-xl
                border-2 border-white/20
                transition-all duration-200 ease-out
                ${
                  selected === option.value
                    ? `bg-gradient-to-r ${option.color} border-white text-teal-900 shadow-lg scale-105`
                    : hovered === option.value
                      ? `border-white/40 bg-white/10 backdrop-blur-sm scale-102`
                      : "bg-white/5 backdrop-blur-sm hover:border-white/30 text-white"
                }
                ${selected !== null && selected !== option.value ? "opacity-50" : ""}
                active:scale-95
              `}
            >
              <div className="flex items-center justify-between gap-3">
                <span className={`text-lg font-semibold transition-colors duration-200`}>{option.label}</span>
                {/* Animated indicator dot */}
                <div
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    selected === option.value
                      ? "bg-teal-900 scale-150"
                      : hovered === option.value
                        ? "bg-white scale-100"
                        : "bg-white/40"
                  }`}
                />
              </div>
            </button>
          ))}
        </div>

        {/* Visual progress feedback */}
        {selected !== null && (
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="text-sm font-medium text-white/80">Response recorded</div>
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          </div>
        )}
      </div>
    </div>
  )
}
