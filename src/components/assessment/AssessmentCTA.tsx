"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AssessmentCTAProps {
  className?: string;
}

export default function AssessmentCTA({ className }: AssessmentCTAProps) {
  return (
    <section
  className={cn(
    "relative overflow-hidden rounded-3xl",
    "bg-[radial-gradient(120%_120%_at_0%_0%,#12C6C3_0%,#00989D_55%,#00888C_100%)]",
    "px-6 py-5 md:px-10 md:py-7",
    className
  )}
>

      {/* Ambient depth */}
      <div className="absolute -top-16 -right-16 w-56 h-56 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-16 -left-16 w-44 h-44 bg-black/10 rounded-full blur-3xl" />

      {/* MAIN LAYOUT */}
      <div className="relative grid gap-4 md:gap-6 items-center md:grid-cols-[1fr_auto]">

        {/* LEFT: CONTENT */}
        <div className="space-y-3 max-w-xl">
          <h3 className="text-xl md:text-2xl font-semibold text-white leading-tight">
            Not sure where to start?
            <span className="block mt-2 italic font-serif text-sm md:text-base text-white/90">
              Understand what you’re feeling - gently.
            </span>
          </h3>

          <p className="text-white/90 text-sm md:text-base leading-relaxed">
            Take a short self-assessment to reflect on your thoughts and
            emotions. Get clear, supportive insights in just a few minutes.
          </p>
        </div>

        {/* RIGHT: CTA */}
        <div className="flex justify-center">
          <Link
            href="/assessments"
           className="group inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
          >
            Understand your mind
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
