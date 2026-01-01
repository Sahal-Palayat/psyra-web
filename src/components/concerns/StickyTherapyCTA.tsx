import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function StickyTherapyCTA() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-600 via-cyan-600 to-teal-700 text-white shadow-lg">
      
      {/* Decorative glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.12),transparent_45%)]" />

      <div className="relative z-10 p-6 flex flex-col items-center text-center space-y-4">
        
        {/* Heading – emotional */}
        <h3 className="text-[22px] font-semibold leading-snug tracking-tight font-serif">
          You do not have to go through this alone
        </h3>

       

        {/* Supporting text */}
        <p className="text-sm text-white/85 leading-relaxed max-w-[260px]">
          Our psychologists provide personalized support in a safe, confidential environment.
        </p>

        {/* CTA button */}
        <Link
          href="/psychologists"
          className="inline-flex items-center justify-center gap-2 w-full bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-3 rounded-xl font-semibold text-sm hover:bg-white/30 transition-all group"
        >
          Find a Therapist
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>

        {/* Trust cues */}
        <div className="flex items-center justify-center gap-2 text-[11px] text-white/85 pt-1">
          <span>Confidential</span>
          <span>•</span>
          <span>Professional</span>
          <span>•</span>
          <span>Compassionate</span>
        </div>
      </div>
    </div>
  )
}
