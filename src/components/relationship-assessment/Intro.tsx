"use client"

interface IntroProps {
  onStart: () => void
}

export default function Intro({ onStart }: IntroProps) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:py-20 bg-gradient-to-b from-[#00989D] to-[#17A2B8]">
      <div className="w-full max-w-2xl">
      

        {/* Main content card with subtle shadow */}
        <div className="text-center space-y-8">
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-pretty">
            How healthy does your{" "}
            <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">relationship</span>{" "}
            feel right now?
          </h1>

          {/* Subheading description */}
          <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-xl mx-auto">
            This short wellness check helps you reflect on emotional safety, communication, and balance — privately and
            without judgement.
          </p>

    
          {/* CTA Button */}
          <button
            onClick={onStart}
            className="inline-flex px-10 sm:px-14 py-4 rounded-xl
                       bg-white text-[#00989D] font-semibold text-base sm:text-lg
                       hover:shadow-2xl hover:shadow-black/30 hover:scale-105
                       transition-all duration-300 active:scale-95"
          >
            Start Wellness Check
          </button>

          {/* Subtle reassurance */}
          <p className="text-xs sm:text-sm text-white/80 pt-4">
            This is a self-reflection tool, not a diagnosis or professional mental health advice.
          </p>
        </div>
      </div>
    </section>
  )
}
