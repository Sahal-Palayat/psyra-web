"use client"
import { AnimatedButton } from "./ui/animated-button"

interface BookNowButtonProps {
  onClick: () => void
  className?: string
}

export function BookNowButton({ onClick, className }: BookNowButtonProps) {
  return (
    <AnimatedButton variant="animated" size="bookNow" className={className} onClick={onClick}>
      BOOK NOW
    </AnimatedButton>
  )
}
