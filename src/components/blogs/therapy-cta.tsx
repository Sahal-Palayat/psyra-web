import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function TherapyCtaSidebar() {
  return (
    <div className="sticky top-32 space-y-6">
      {/* Main CTA Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#00B5B8] to-[#00989D] p-8">
        {/* Decorative elements */}
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full blur-xl" />

        {/* Content */}
        <div className="relative space-y-4">
          <h3 className="text-2xl font-bold text-white leading-tight text-balance">
            You are not meant to carry everything alone.
            <span className="block italic font-serif mt-5 text-base">
              Let someone help you carry it.
            </span>
          </h3>

          <p className="text-white/90 text-sm leading-relaxed">
            Therapy provides a confidential environment where you can safely
            pause, articulate your thoughts, and find support.
          </p>

          <Link
            href="/psychologists"
            className="group inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
          >
            Get Therapy
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Secondary quick link card */}
      <div className="rounded-2xl bg-[#F0FAF9] border border-[#00B5B8]/20 p-6">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#00B5B8]/10 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-[#00989D]" />
          </div>

          <div>
            <h4 className="font-semibold text-[#1A1A1A] mb-1">
              Quick Emotional Check-In
            </h4>

            <p className="text-sm text-[#5A5A5A] leading-relaxed">
              Feeling low today? <br />Take a 1-minute self-assessment and understand
              what your mind is trying to tell you.
            </p>

            <Link
              href="/how-is-mind" 
              className="inline-flex items-center gap-1 text-sm font-medium text-[#00989D] hover:text-[#005657] mt-2 transition-colors"
            >
              Start Now
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
