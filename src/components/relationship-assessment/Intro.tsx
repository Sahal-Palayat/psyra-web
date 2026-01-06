"use client";

interface IntroProps {
  onStart: () => void;
}

export default function Intro({ onStart }: IntroProps) {
  return (
    <section className="flex justify-center px-4 py-20">
      <div className="w-full max-w-xl text-center space-y-8">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#1a3c34] leading-tight">
          How healthy does your relationship feel right now?
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          This short relationship wellness check helps you reflect on emotional
          safety, communication, and balance — privately and without judgement.
        </p>

        {/* Trust indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-gray-500">
          <span>⏱ Takes 3–4 minutes</span>
          <span className="hidden sm:block">•</span>
          <span>🔒 Private & confidential</span>
          <span className="hidden sm:block">•</span>
          <span>🧠 Psychology-informed</span>
        </div>

        {/* CTA */}
        <button
          onClick={onStart}
          className="mt-6 w-full sm:w-auto px-10 py-3 rounded-xl
                     bg-[#00989D] text-white font-medium text-base
                     hover:bg-[#007C80] transition-colors"
        >
          Start Relationship Wellness Check
        </button>

        {/* Subtle reassurance */}
        <p className="text-xs text-gray-400">
          This is a self-reflection tool, not a diagnosis.
        </p>
      </div>
    </section>
  );
}
