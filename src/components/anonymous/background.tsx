"use client"

import { useEffect, useRef } from "react"
import type { PropsWithChildren } from "react"
import { gsap } from "gsap"

type BackgroundProps = PropsWithChildren<{
  className?: string
}>

export function Background({ children, className }: BackgroundProps) {
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!rootRef.current) return
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(rootRef)
      // gentle rotations / drifts
      gsap.to(q(".dec-1"), { rotate: 6, y: -10, duration: 4, yoyo: true, repeat: -1, ease: "sine.inOut" })
      gsap.to(q(".dec-2"), { rotate: -6, y: 10, duration: 5, yoyo: true, repeat: -1, ease: "sine.inOut" })
      gsap.to(q(".dec-3"), { rotate: 5, x: -5, duration: 6, yoyo: true, repeat: -1, ease: "sine.inOut" })
      gsap.to(q(".dec-4"), { rotate: -6, x: 5, duration: 4.5, yoyo: true, repeat: -1, ease: "sine.inOut" })
      gsap.to(q(".dec-5"), { rotate: -3, y: -8, duration: 5.5, yoyo: true, repeat: -1, ease: "sine.inOut" })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={rootRef}
      className={`min-h-screen bg-[#B1DFAE] flex items-center justify-center relative overflow-hidden ${className || ""}`}
    >
      {/* Decorative boxes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left */}
        <div className="dec-1 absolute top-12 left-8 w-16 h-16 border-4 border-white/30 rounded-lg" />
        <div className="absolute top-32 left-32 w-12 h-12 border-3 border-white/20 rounded-lg -rotate-6" />
        {/* Top right */}
        <div className="dec-2 absolute top-20 right-16 w-20 h-20 border-4 border-white/25 rounded-lg" />
        <div className="absolute top-48 right-48 w-14 h-14 border-3 border-white/30 rounded-lg rotate-6" />
        {/* Bottom left */}
        <div className="dec-3 absolute bottom-24 left-16 w-18 h-18 border-4 border-white/20 rounded-lg" />
        <div className="absolute bottom-48 left-48 w-10 h-10 border-3 border-white/25 rounded-lg -rotate-12" />
        {/* Bottom right */}
        <div className="dec-4 absolute bottom-16 right-24 w-16 h-16 border-4 border-white/30 rounded-lg" />
        <div className="absolute bottom-40 right-40 w-12 h-12 border-3 border-white/20 rounded-lg rotate-12" />
        {/* Center */}
        <div className="absolute top-1/3 left-1/4 w-10 h-10 border-3 border-white/15 rounded-lg rotate-3" />
        <div className="dec-5 absolute top-2/3 right-1/3 w-14 h-14 border-3 border-white/15 rounded-lg" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">{children}</div>

      {/* Blur accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#005657]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#005657]/5 rounded-full blur-3xl" />
      </div>
    </div>
  )
}
