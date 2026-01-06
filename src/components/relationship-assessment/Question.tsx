"use client";

interface QuestionProps {
  question: string;
  onSelect: (score: number) => void;
}

const OPTIONS = [
  { label: "Always", value: 5 },
  { label: "Often", value: 4 },
  { label: "Sometimes", value: 3 },
  { label: "Rarely", value: 2 },
  { label: "Never", value: 1 },
];

export default function Question({ question, onSelect }: QuestionProps) {
  return (
    <div className="w-full max-w-xl mx-auto px-4">
      {/* Question text */}
      <h2 className="text-xl sm:text-2xl font-medium text-[#1a3c34] mb-10 leading-relaxed">
        {question}
      </h2>

      {/* Options */}
      <div className="space-y-4">
        {OPTIONS.map((option) => (
          <button
            key={option.value}
            onClick={() => onSelect(option.value)}
            className="w-full px-6 py-4 rounded-xl border border-gray-300
                       text-left text-gray-700 font-medium
                       hover:border-[#00989D] hover:bg-[#00989D]/5
                       active:scale-[0.98]
                       transition-all"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
