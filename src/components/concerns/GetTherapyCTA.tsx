import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function GetTherapyCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-cyan-600 to-teal-700 text-white rounded-2xl p-8 md:p-12 text-center shadow-xl">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_50%)]" />

      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">You don't have to go through this alone</h2>

        <p className="text-white/95 text-lg max-w-2xl mx-auto mb-8 text-pretty leading-relaxed">
          Our licensed psychologists are here to support you at your own pace, with care that feels safe and
          confidential.
        </p>

        <Link
          href="/psychologists"
          className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all hover:scale-105 hover:shadow-lg group"
        >
          Find a Therapist
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 mt-6 text-xs md:text-sm text-white/90">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
            Confidential
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
            Compassionate
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
            Professional
          </span>
        </div>
      </div>
    </section>
  )
}
