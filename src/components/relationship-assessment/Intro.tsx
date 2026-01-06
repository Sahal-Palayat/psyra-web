"use client"

interface IntroProps {
  onStart: () => void
}

export default function Intro({ onStart }: IntroProps) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:py-20 bg-gradient-to-b from-[#00989D] via-[#2DB8C4] to-[#A8E6ED]">
      <div className="w-full max-w-2xl">
        {/* Decorative accent line */}
        <div className="mb-12 flex justify-center">
          <div className="h-1.5 w-20 bg-white/80 rounded-full shadow-lg" />
        </div>

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

          {/* Trust indicators with enhanced styling */}
          <div className="py-8 px-6 sm:px-8 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
              <div className="flex flex-col items-center gap-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white">
                  <span className="text-xl">⏱</span>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-white text-sm">Quick Check</p>
                  <p className="text-xs text-white/80">3–4 minutes</p>
                </div>
              </div>

              <div className="hidden sm:block w-px h-12 bg-white/20" />

              <div className="flex flex-col items-center gap-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white">
                  <span className="text-xl">🔒</span>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-white text-sm">Completely Private</p>
                  <p className="text-xs text-white/80">Your data is yours</p>
                </div>
              </div>

              <div className="hidden sm:block w-px h-12 bg-white/20" />

              <div className="flex flex-col items-center gap-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white">
                  <span className="text-xl">🧠</span>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-white text-sm">Science-Based</p>
                  <p className="text-xs text-white/80">Psychology-informed</p>
                </div>
              </div>
            </div>
          </div>

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
