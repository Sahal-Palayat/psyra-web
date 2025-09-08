"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useEffect, useRef, useState, useMemo } from "react"

interface AnimationStep {
  filter?: string
  opacity?: number
  y?: number
  x?: number
  scale?: number
  rotate?: number
  [key: string]: any
}

interface BlurTextProps {
  text?: string
  delay?: number
  className?: string
  animateBy?: "words" | "characters"
  direction?: "top" | "bottom"
  threshold?: number
  rootMargin?: string
  animationFrom?: AnimationStep
  animationTo?: AnimationStep[]
  easing?: (t: number) => number
  onAnimationComplete?: () => void
  stepDuration?: number
}

const buildKeyframes = (from: AnimationStep, steps: AnimationStep[]): Record<string, any[]> => {
  const keys = new Set([...Object.keys(from), ...steps.flatMap((s) => Object.keys(s))])

  const keyframes: Record<string, any[]> = {}
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])]
  })
  return keyframes
}

const BlurText: React.FC<BlurTextProps> = ({
  text = "",
  delay = 400,
  className = "",
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  rootMargin = "0px",
  animationFrom,
  animationTo,
  easing = (t: number): number => t,
  onAnimationComplete,
  stepDuration = 0.8,
}) => {
  const elements: string[] = animateBy === "words" ? text.split(" ") : text.split("")
  const [inView, setInView] = useState<boolean>(false)
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(ref.current!)
        }
      },
      { threshold, rootMargin },
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold, rootMargin])

  const defaultFrom: AnimationStep = useMemo(
    () =>
      direction === "top" ? { filter: "blur(10px)", opacity: 0, y: -50 } : { filter: "blur(10px)", opacity: 0, y: 50 },
    [direction],
  )

  const defaultTo: AnimationStep[] = useMemo(
    () => [
      {
        filter: "blur(5px)",
        opacity: 0.5,
        y: direction === "top" ? 5 : -5,
      },
      { filter: "blur(0px)", opacity: 1, y: 0 },
    ],
    [direction],
  )

  const fromSnapshot: AnimationStep = animationFrom ?? defaultFrom
  const toSnapshots: AnimationStep[] = animationTo ?? defaultTo

  const stepCount: number = toSnapshots.length + 1
  const totalDuration: number = stepDuration * (stepCount - 1)
  const times: number[] = Array.from({ length: stepCount }, (_, i) => (stepCount === 1 ? 0 : i / (stepCount - 1)))

  return (
    <p
      ref={ref}
      className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight ${className}`}
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {elements.map((segment: string, index: number) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots)

        const spanTransition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
        }
        spanTransition.ease = easing

        return (
          <motion.span
            className="inline-block will-change-[transform,filter,opacity]"
            key={index}
            initial={fromSnapshot}
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={spanTransition}
            onAnimationComplete={index === elements.length - 1 ? onAnimationComplete : undefined}
          >
            {segment === " " ? "\u00A0" : segment}
            {animateBy === "words" && index < elements.length - 1 && "\u00A0"}
          </motion.span>
        )
      })}
    </p>
  )
}

export default BlurText
