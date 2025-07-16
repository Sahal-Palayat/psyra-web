"use client"

interface CarouselDotsProps {
  total: number
  current: number
  onDotClick: (index: number) => void
}

export function CarouselDots({ total, current, onDotClick }: CarouselDotsProps) {
  return (
    <div className="flex gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === current ? "bg-[#00989D] scale-125" : "bg-gray-300 hover:bg-gray-400"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  )
}
