import { Smile, HeartHandshake, Sparkles } from "lucide-react"

export default function PsyraSupportJourney() {
  return (
    <section className="bg-white rounded-2xl p-8 shadow-sm">
      <h2 className="text-2xl font-semibold text-center text-[#005657] mb-2">
        Psyra Support Journey
      </h2>

      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Healing doesn’t happen overnight — but with the right support,
        meaningful change is possible.
      </p>

      <div className="relative">

        {/* Horizontal Line */}
        <div className="absolute top-6 left-0 right-0 h-[2px] bg-[#E0E0E0]" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">

          {/* Step 1 */}
          <div className="text-center relative">
            <div className="mx-auto w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center z-10 relative">
              <Smile className="w-6 h-6 text-white" />
            </div>

            <h3 className="mt-4 font-semibold text-gray-800">
              Today
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Feeling emotionally overwhelmed or unsure about what you’re experiencing.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center relative">
            <div className="mx-auto w-12 h-12 rounded-full bg-[#00BEA5] flex items-center justify-center z-10 relative">
              <HeartHandshake className="w-6 h-6 text-white" />
            </div>

            <h3 className="mt-4 font-semibold text-gray-800">
              In the Coming Days
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              You connect with a psychologist who listens, understands,
              and guides you gently forward.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center relative">
            <div className="mx-auto w-12 h-12 rounded-full bg-[#4CAF50] flex items-center justify-center z-10 relative">
              <Sparkles className="w-6 h-6 text-white" />
            </div>

            <h3 className="mt-4 font-semibold text-gray-800">
              Over Time
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              You begin to feel more in control, emotionally resilient,
              and confident in everyday life.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
