"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function StepTwo({
  message,
  onMessageChange,
  onSubmit,
  isSubmitting,
}: {
  message: string
  onMessageChange: (v: string) => void
  onSubmit: (e: React.FormEvent) => void
  isSubmitting: boolean
}) {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const headingRef = useRef<HTMLHeadingElement | null>(null)
  const descRef = useRef<HTMLParagraphElement | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null)
  const floatingShapesRef = useRef<HTMLDivElement | null>(null)
  const [mounted, setMounted] = useState(false)

  // Background animation
  useEffect(() => {
    setMounted(true)
    if (!floatingShapesRef.current) return

    const shapes = floatingShapesRef.current.querySelectorAll(".floating-shape")
    const particles = floatingShapesRef.current.querySelectorAll(".particle")

    // Animate floating shapes
    shapes.forEach((shape, i) => {
      gsap.to(shape, {
        y: "random(-50, 50)",
        x: "random(-30, 30)",
        rotation: "random(-15, 15)",
        duration: "random(4, 8)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.3,
      })

      gsap.to(shape, {
        scale: "random(0.9, 1.1)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.2,
      })
    })

    // Animate particles
    particles.forEach((particle, i) => {
      gsap.to(particle, {
        y: "random(-100, 100)",
        x: "random(-100, 100)",
        opacity: "random(0.3, 0.8)",
        duration: "random(5, 10)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.5,
      })
    })
  }, [])

  // Main content animation
  useEffect(() => {
    if (!rootRef.current || !headingRef.current || !descRef.current || !formRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      // Handwriting animation for "Hey There"
      tl.from(headingRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: "back.out(1.7)",
      })
        .from(
          headingRef.current,
          {
            strokeDashoffset: 100,
            duration: 1.2,
            ease: "power2.inOut",
          },
          "-=0.4",
        )
        .from(
          descRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          formRef.current,
          {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4",
        )
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={rootRef}
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center p-4"
    >
      {/* Animated Background Elements */}
      <div ref={floatingShapesRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Gradient Blobs */}
        <div className="floating-shape absolute top-[10%] left-[10%] w-64 h-64 bg-gradient-to-br from-pink-200/40 to-pink-300/30 rounded-full blur-3xl" />
        <div className="floating-shape absolute top-[60%] right-[15%] w-80 h-80 bg-gradient-to-br from-cyan-200/40 to-cyan-300/30 rounded-full blur-3xl" />
        <div className="floating-shape absolute bottom-[10%] left-[20%] w-72 h-72 bg-gradient-to-br from-purple-200/30 to-purple-300/25 rounded-full blur-3xl" />
        <div className="floating-shape absolute top-[30%] right-[30%] w-56 h-56 bg-gradient-to-br from-teal-200/30 to-teal-300/25 rounded-full blur-3xl" />

        {/* Vector Shapes */}
        <svg className="floating-shape absolute top-[20%] right-[10%] w-32 h-32 text-cyan-300/30" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="currentColor" />
        </svg>
        <svg
          className="floating-shape absolute bottom-[30%] left-[15%] w-24 h-24 text-purple-300/30"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="40" fill="currentColor" />
        </svg>
        <svg className="floating-shape absolute top-[50%] left-[5%] w-28 h-28 text-pink-300/30" viewBox="0 0 100 100">
          <rect x="20" y="20" width="60" height="60" fill="currentColor" transform="rotate(45 50 50)" />
        </svg>

        {/* Glowing Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-cyan-400/60 rounded-full shadow-lg shadow-cyan-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content Card with Glassmorphism */}
      <div className="relative z-10 max-w-2xl w-full mx-auto">
        <div className="backdrop-blur-xl bg-white/70 border border-white/40 shadow-2xl shadow-teal-500/10 rounded-3xl p-4 md:p-12 space-y-8">
          {/* Handwritten Heading with Animation */}
          <div className="text-center space-y-4">
          <h2
              ref={headingRef}
              className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 relative inline-block"
              style={{
                fontFamily: "'Caveat', cursive",
                textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              Hey There
              <Sparkles className="inline-block ml-2 w-8 h-8 text-amber-400 animate-pulse" />
            </h2>

            {/* Decorative underline */}
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-teal-400 to-transparent rounded-full" />
          </div>

          <p ref={descRef} className="text-lg md:text-xl leading-relaxed text-balance text-center text-slate-700">
            {"Is there something you've wanted to share for a long time but couldn't? This is a"}{" "}
            <span className="font-semibold text-teal-600">safe, anonymous space</span>.
          </p>

          <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-3">
              <label htmlFor="message" className="text-sm font-medium text-slate-700 flex items-center gap-2">
                <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                Share your thoughts anonymously.
              </label>

              <div className="relative group">
                <Textarea
                  id="message"
                  placeholder="Write whatever is on your mind... No one will know it's you."
                  value={message}
                  onChange={(e) => onMessageChange(e.target.value)}
                  className="min-h-[200px] text-base resize-none backdrop-blur-sm bg-white/80 border-2 border-teal-200/50 focus:border-teal-400 focus:ring-4 focus:ring-teal-400/20 rounded-2xl transition-all duration-300 shadow-lg shadow-teal-500/5 group-hover:shadow-xl group-hover:shadow-teal-500/10"
                  required
                />
                {/* Glow effect on focus */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400/0 via-cyan-400/0 to-emerald-400/0 group-focus-within:from-teal-400/10 group-focus-within:via-cyan-400/10 group-focus-within:to-emerald-400/10 pointer-events-none transition-all duration-500 -z-10 blur-xl" />
              </div>

              <p className="text-xs text-slate-600 flex items-center gap-2">
                <svg className="w-4 h-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {"Your submission is completely anonymous. We don't collect any identifying information."}
              </p>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full text-lg h-14 bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 hover:from-teal-700 hover:via-cyan-700 hover:to-emerald-700 text-white font-semibold rounded-2xl shadow-xl shadow-teal-500/30 hover:shadow-2xl hover:shadow-teal-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group"
              disabled={isSubmitting || !message.trim()}
            >
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />

              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting...
                </span>
              ) : (
                <>
                  Share Anonymously
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>

      {/* Add Google Fonts for handwriting */}
      {mounted && (
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap" rel="stylesheet" />
      )}
    </div>
  )
}
