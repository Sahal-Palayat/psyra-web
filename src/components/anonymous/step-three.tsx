"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function StepThree({ onTakeTherapy }: { onTakeTherapy: () => void }) {
  const rootRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!rootRef.current) return
    const ctx = gsap.context(() => {
      gsap.from(rootRef.current, { opacity: 0, y: 16, duration: 0.6, ease: "power2.out" })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={rootRef} className="max-w-2xl mx-auto text-center space-y-10">
      <div className="flex flex-col items-center justify-center min-h-[40vh] space-y-8">
        <div className="text-center space-y-6 max-w-2xl">
          <div className="mx-auto w-20 h-20 bg-[#005657] rounded-full flex items-center justify-center">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-balance">Thank You for Sharing</h1>
          <p className="text-xl text-muted-foreground text-balance">
            We’re proud of you for taking this step. Sharing your feelings is the first step toward healing.
          </p>
        </div>
      </div>

      <div className="bg-[#005657]/5 rounded-lg p-6 space-y-4 border-2 border-[#005657]/20 max-w-xl mx-auto">
        <div className="text-center">
          <div className="inline-block bg-[#005657] text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
            Special Offer Gift
          </div>
          <h3 className="text-3xl font-bold mb-2">10% OFF</h3>
          <p className="text-lg font-semibold">Take Therapy Now</p>
          <p className="text-sm text-muted-foreground mt-2">Start your healing journey with professional support</p>
        </div>

        <div className="space-y-2">
          <Button onClick={onTakeTherapy} size="lg" className="w-full text-base h-12 bg-[#005657] hover:bg-[#004546]">
            Claim Your 10% Discount
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
