"use client"

import Image from "next/image"

interface IntroProps {
  onStart: () => void
}

export default function Intro({ onStart }: IntroProps) {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-[76px] md:pt-[94px] pb-6 sm:pb-12 md:pb-20 bg-gray-100">
      <div className="w-full max-w-5xl">
        {/* Main card with rounded corners and soft shadow */}
        <div className="bg-white rounded-3xl shadow-lg shadow-gray-200/50 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Section - Illustration */}
          <div className="lg:w-2/5 relative bg-gradient-to-b from-[#FFE8E8] via-[#FFF0F0] to-[#FFE8E8] p-3 sm:p-6 md:p-8 lg:p-12 flex items-center justify-center min-h-[140px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
            {/* Illustration image - using contain to preserve couple and heart */}
            <div className="relative w-full h-full max-w-full max-h-full flex items-center justify-center">
              <Image
                src="/images/relationship-couple-image.webp"
                alt="Couple in warm embrace with hearts above"
                width={600}
                height={600}
                className="w-full h-full object-contain"
                priority
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* Right Section - Text Content */}
          <div className="lg:w-3/5 relative bg-gradient-to-br from-[#FFF5F0] to-[#FFE8E0] p-4 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center min-h-[200px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[500px]">
            {/* Decorative heart elements in background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-4 sm:top-6 md:top-8 right-6 sm:right-8 md:right-12 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 opacity-10">
                <div className="w-full h-full rounded-full border-2 border-[#E8A5A5] flex items-center justify-center">
                  <span className="text-[#E8A5A5] text-base sm:text-lg md:text-xl">❤️</span>
                </div>
              </div>
              <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 right-4 sm:right-6 md:right-8 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 opacity-8">
                <div className="w-full h-full rounded-full border-2 border-[#FF8C69] flex items-center justify-center">
                  <span className="text-[#FF8C69] text-xs sm:text-sm md:text-lg">💬</span>
                </div>
              </div>
              {/* Scattered small hearts */}
              <div className="absolute top-8 sm:top-12 md:top-16 left-4 sm:left-6 md:left-8 w-2 h-2 sm:w-3 sm:h-3 text-[#E8A5A5]/15">❤️</div>
              <div className="absolute top-14 sm:top-20 md:top-24 right-8 sm:right-12 md:right-16 w-2 h-2 text-[#E8A5A5]/12">❤️</div>
              <div className="absolute bottom-14 sm:bottom-20 md:bottom-24 left-6 sm:left-8 md:left-12 w-2 h-2 sm:w-3 sm:h-3 text-[#E8A5A5]/15">❤️</div>
              <div className="absolute bottom-20 sm:bottom-28 md:bottom-32 right-6 sm:right-8 md:right-12 w-2 h-2 text-[#E8A5A5]/12">❤️</div>
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-center">
              {/* Heading */}
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2C2C2C] leading-tight">
                Understand Your Relationship Better
              </h1>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#5A5A5A] leading-relaxed max-w-lg mx-auto">
                Answer a few thoughtful questions to see where you and your partner align in your wellness journey.
              </p>

              {/* CTA Button */}
              <div className="pt-0.5 sm:pt-1 md:pt-2 flex justify-center">
                <button
                  onClick={onStart}
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-[#FF6B4A] text-white font-semibold text-[10px] sm:text-xs md:text-sm uppercase tracking-wide rounded-full shadow-md shadow-[#FF6B4A]/30 hover:shadow-lg hover:shadow-[#FF6B4A]/40 transition-all duration-300"
                >
                  Start Wellness Check
                  <span className="text-sm sm:text-base md:text-lg">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
