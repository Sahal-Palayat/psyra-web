"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface AssessmentSidebarCTAProps {
  title: string
  description: string
  href: string
  className?: string
}

export default function AssessmentSidebarCTA({
  title,
  description,
  href,
  className,
}: AssessmentSidebarCTAProps) {
  return (
    <section
      className={cn(
        "relative",
        "lg:sticky lg:top-32",
        "rounded-3xl",
        "bg-gradient-to-br from-[#00B5B8] to-[#00989D]",
        "p-6 md:p-8",
        "shadow-[0_16px_40px_rgba(0,0,0,0.15)]",
        className
      )}
    >
      {/* subtle glow */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl" />

      <div className="relative space-y-3 text-center">
        <h3 className="text-lg md:text-xl font-semibold text-white leading-tight">
          {title}
        </h3>

        <p className="text-sm md:text-base text-white/90 leading-relaxed">
          {description}
        </p>

        {/* CTA — CENTERED */}
        <div className="pt-3 flex justify-center">
          <Link
            href={href}
            className="
              inline-flex items-center gap-2
              bg-[#1A1A1A] hover:bg-[#2A2A2A]
              text-white font-medium
              px-5 py-2.5
              rounded-full
              text-sm md:text-base
              transition-all duration-300
              shadow-lg hover:shadow-xl
              hover:-translate-y-0.5
              active:scale-95
            "
          >
            Start assessment
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
