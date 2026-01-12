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
        "p-6 md:p-10",
        className
      )}
    >
      {/* Ambient depth */}
      <div className="absolute -top-16 -right-16 w-56 h-56 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-16 -left-16 w-44 h-44 bg-black/10 rounded-full blur-3xl" />

      {/* MAIN LAYOUT */}
      <div className="relative grid gap-6 items-center text-center md:text-left md:grid-cols-[1fr_auto]">
        {/* LEFT: CONTENT */}
        <div className="space-y-3 max-w-xl mx-auto md:mx-0">
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
            className="
    group inline-flex items-center gap-2
    rounded-full
    px-6 py-3
    text-sm md:text-base font-medium
    text-white

    bg-white/15
    backdrop-blur-md
    border border-white/25

    shadow-[0_12px_32px_rgba(0,0,0,0.25)]
    transition-all duration-300

    hover:bg-white/25
    hover:border-white/40
    hover:-translate-y-0.5
    hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]

    active:scale-95
  "
          >
            Understand your mind
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
