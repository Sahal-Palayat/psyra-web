"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

function GoBackButton() {
  const router = useRouter()

  return (
    <Button
      size="lg"
      variant="outline"
      className="min-w-[180px]"
      onClick={() => router.back()}
    >
      Go Back
    </Button>
  )
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-3xl w-full text-center">

        {/* 404 */}
        <h1 className="text-[clamp(4.5rem,18vw,10rem)] font-bold leading-none tracking-tight text-foreground/10">
          404
        </h1>

        {/* Page Not Found pill — SAME everywhere */}
        <div className="mt-4 flex justify-center">
          <span className="px-4 py-1.5 rounded-full bg-muted  text-xs font-medium">
            Page Not Found
          </span>
        </div>

        {/* Content */}
        <div className="mt-8 space-y-5">
          <h2 className="text-2xl md:text-4xl font-bold text-balance">
            Oops! This page seems to be unavailable
          </h2>

          <p className="text-sm md:text-lg text-muted-foreground max-w-xl mx-auto">
            The page you are looking for does not exist or may have been moved.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-6">
            <Button size="lg" asChild className="min-w-[180px]">
              <Link href="/">Take Me Home</Link>
            </Button>

            <GoBackButton />
          </div>
        </div>

      </div>
    </div>
  )
}
