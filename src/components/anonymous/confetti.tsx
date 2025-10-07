"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

type ConfettiProps = {
  count?: number
  duration?: number
}

export default function Confetti({ count = 60, duration = 4 }: ConfettiProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current) return
    const nodes = Array.from(ref.current.children) as HTMLDivElement[]

    nodes.forEach((node) => {
      const startX = gsap.utils.random(0, 100)
      const endY = gsap.utils.random(110, 140)
      const rot = gsap.utils.random(-180, 180)
      const scale = gsap.utils.random(0.8, 1.2)

      gsap.set(node, {
        left: `${startX}vw`,
        top: `-10vh`,
        rotate: rot,
        scale,
        opacity: gsap.utils.random(0.7, 1),
      })

      gsap.to(node, {
        top: `${endY}vh`,
        rotate: rot + gsap.utils.random(-120, 120),
        duration: duration + gsap.utils.random(-0.6, 0.6),
        ease: "power2.in",
        repeat: -1,            // 🔁 loop forever
        delay: gsap.utils.random(0, 2), // staggered start
      })
    })

    return () => {
      nodes.forEach((n) => gsap.killTweensOf(n))
    }
  }, [count, duration])

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 z-20">
      {Array.from({ length: count }).map((_, i) => {
        const colorClass =
          i % 5 === 0
            ? "bg-primary"
            : i % 5 === 1
              ? "bg-foreground"
              : i % 5 === 2
                ? "bg-primary/70"
                : i % 5 === 3
                  ? "bg-foreground/70"
                  : "bg-primary/50"
        return (
          <div
            key={i}
            className={`absolute h-2 w-1 rounded-sm ${colorClass}`}
            style={{ left: "0", top: "0" }}
          />
        )
      })}
    </div>
  )
}
