import { Smile, HeartHandshake, Sparkles } from "lucide-react"

export default function PsyraSupportJourney() {
  return (
    <section className="bg-gradient-to-br from-[#F0FFFE] to-white rounded-xl p-6 md:p-8 shadow-lg border border-[#E0F5F4]">
      <h2 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-[#005657] to-[#00BEA5] bg-clip-text text-transparent mb-2">
        Psyra Support Journey
      </h2>

      <p className="text-center text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
        Healing does not happen overnight — but with the right support, meaningful change is possible.
      </p>

      <div className="relative max-w-5xl mx-auto">
        {/* Enhanced Gradient Line */}
        <div className="absolute top-8 left-[10%] right-[10%] h-1 bg-gradient-to-r from-gray-200 via-[#00BEA5] to-[#4CAF50] rounded-full opacity-60 hidden md:block" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 relative">
          {/* Step 1 - Today */}
          <div className="text-center relative group">
            <div className="mx-auto w-14 h-14 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center z-10 relative shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl">
              <Smile className="w-7 h-7 text-white" />
            </div>

            <div className="mt-4 space-y-2">
              <h3 className="text-lg md:text-xl font-bold text-gray-800">Today</h3>
              <p className="text-sm text-gray-600 leading-relaxed md:px-4">
                Feeling emotionally overwhelmed or unsure about what you are experiencing.
              </p>
            </div>
          </div>

          {/* Step 2 - Coming Days */}
          <div className="text-center relative group">
            <div className="mx-auto w-14 h-14 rounded-full bg-gradient-to-br from-[#00BEA5] to-[#008B7A] flex items-center justify-center z-10 relative shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl ring-4 ring-[#00BEA5]/20">
              <HeartHandshake className="w-7 h-7 text-white" />
            </div>

            <div className="mt-4 space-y-2">
              <h3 className="text-lg md:text-xl font-bold text-[#005657]">In the Coming Days</h3>
              <p className="text-sm text-gray-600 leading-relaxed md:px-4">
                You connect with a psychologist who listens, understands, and guides you gently forward.
              </p>
            </div>
          </div>

          {/* Step 3 - Over Time */}
          <div className="text-center relative group">
            <div className="mx-auto w-14 h-14 rounded-full bg-gradient-to-br from-[#4CAF50] to-[#2E7D32] flex items-center justify-center z-10 relative shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl ring-4 ring-[#4CAF50]/20">
              <Sparkles className="w-7 h-7 text-white" />
            </div>

            <div className="mt-4 space-y-2">
              <h3 className="text-lg md:text-xl font-bold text-[#005657]">Over Time</h3>
              <p className="text-sm text-gray-600 leading-relaxed md:px-4">
                You begin to feel more in control, emotionally resilient, and confident in everyday life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
