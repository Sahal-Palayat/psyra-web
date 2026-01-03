"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface AssessmentCTAProps {
  title: string
  description?: string
  buttonText?: string
  href: string
  variant?: "inline" | "sidebar" | "sticky"
  align?: "left" | "center"
  showIcon?: boolean
  className?: string
}

export default function AssessmentCTA({
  title,
  description,
  buttonText = "Start Assessment",
  href,
  variant = "inline",
  align = "left",
  showIcon = true,
  className,
}: AssessmentCTAProps) {
  return (
    <section
      className={cn(
        "group relative overflow-hidden rounded-xl border border-teal-100 bg-white/90 p-8 shadow-sm transition-all duration-300 hover:shadow-md",
        {
          "sticky top-24": variant === "sidebar",
          "fixed bottom-0 left-0 right-0 z-50 rounded-none border-x-0 border-b-0 border-t border-teal-100 bg-white/95 p-6 backdrop-blur-sm":
            variant === "sticky",
          "text-center": align === "center",
        },
        className
      )}
    >
      {/* Top accent bar */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#7ED6D0] via-[#007C80] to-[#7ED6D0]" />

      <div className="relative">
        <h3 className="text-balance text-xl font-semibold leading-tight tracking-tight text-[#00989D]">
          {title}
        </h3>

        {description && (
          <p className="mt-3 text-pretty text-sm leading-relaxed text-[#00989D]/70">
            {description}
          </p>
        )}

        <Link
          href={href}
          className={cn(
            "mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-[#00989D] px-6 py-3 text-sm font-medium text-white shadow-sm transition-all duration-200  hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007C80]/40 focus-visible:ring-offset-2",
            {
              "w-full": variant === "sticky",
            }
          )}
        >
          {buttonText}
          {showIcon && (
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          )}
        </Link>
      </div>
    </section>
  )
}
