interface QuestionDisplayProps {
    question: string
    isTransitioning: boolean
  }
  
  export const QuestionDisplay = ({ question, isTransitioning }: QuestionDisplayProps) => {
    return (
      <div
        className={`transition-all duration-500 ${
          isTransitioning ? "opacity-0 transform translate-y-4" : "opacity-100 transform translate-y-0"
        }`}
      >
        <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mb-8 leading-relaxed text-center">{question}</h2>
      </div>
    )
  }
  