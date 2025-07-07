"use client"

interface OptionButtonsProps {
  options: string[]
  selectedAnswer: string | number | undefined
  onSelect: (option: string) => void
}

export const OptionButtons = ({ options, selectedAnswer, onSelect }: OptionButtonsProps) => {
  return (
    <div className="space-y-4">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(option)}
          className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-300 transform hover:scale-[1.02] group ${
            selectedAnswer === option
              ? "bg-gradient-to-r from-teal-50 to-emerald-50 border-teal-300 text-gray-800 shadow-lg shadow-teal-500/20"
              : "bg-white/60 backdrop-blur-sm border-gray-200 text-gray-700 hover:bg-gradient-to-r hover:from-teal-50/50 hover:to-emerald-50/50 hover:border-teal-200 hover:shadow-md"
          } disabled:cursor-not-allowed`}
          style={{
            animationDelay: `${index * 100}ms`,
          }}
        >
          <span className="text-base font-medium">{option}</span>
        </button>
      ))}
    </div>
  )
}
