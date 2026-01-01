"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import clsx from "clsx"

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
      className={clsx(
        "mt-2 rounded-xl border border-teal-100 bg-gradient-to-br from-teal-50 to-white p-6 shadow-sm",
        {
          "sticky top-24": variant === "sidebar",
          "fixed bottom-0 left-0 right-0 z-50 rounded-none border-t bg-white p-4":
            variant === "sticky",
          "text-center": align === "center",
        },
        className
      )}
    >
      <h3 className="text-lg font-semibold text-[#007C80]">
        {title}
      </h3>

      {description && (
        <p className="mt-2 text-sm text-gray-600">
          {description}
        </p>
      )}

      <Link
        href={href}
        className={clsx(
          "mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-[#007C80] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#00666a]",
          {
            "w-full": variant === "sticky",
          }
        )}
      >
        {buttonText}
        {showIcon && <ArrowRight size={16} />}
      </Link>
    </section>
  )
}
