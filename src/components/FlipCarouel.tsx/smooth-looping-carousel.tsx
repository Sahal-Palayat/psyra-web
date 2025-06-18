"use client"
import { useState, useEffect, useRef } from "react"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

const data = [
  {
    title: "Dr. Sarah Johnson",
    image: "/placeholder.svg?height=200&width=160",
    description: "Clinical Psychologist specializing in anxiety treatment.",
  },
  {
    title: "Dr. Michael Chen",
    image: "/placeholder.svg?height=200&width=160",
    description: "Cognitive Behavioral Therapist with trauma expertise.",
  },
  {
    title: "Dr. Priya Sharma",
    image: "/placeholder.svg?height=200&width=160",
    description: "Family Therapist helping build stronger relationships.",
  },
  {
    title: "Dr. James Wilson",
    image: "/placeholder.svg?height=200&width=160",
    description: "Trauma Specialist using evidence-based approaches.",
  },
  {
    title: "RAFNS Patel",
    image: "/placeholder.svg?height=200&width=160",
    description: "Child Psychologist specializing in development.",
  },
]

interface SmoothLoopingCarouselProps {
  onBookNow?: (psychologist: any) => void
}

export default function SmoothLoopingCarousel({ onBookNow }: SmoothLoopingCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout>()

  // Auto-play functionality with smooth transitions
  useEffect(() => {
    if (isAutoPlaying && !isTransitioning) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, 4000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, isTransitioning, activeIndex])

  const prevSlide = () => {
    if (isTransitioning) return // Prevent multiple clicks during transition

    setIsTransitioning(true)
    setActiveIndex((prev) => (prev - 1 + data.length) % data.length)

    // Reset transition lock after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 800) // Slightly longer than CSS transition
  }

  const nextSlide = () => {
    if (isTransitioning) return // Prevent multiple clicks during transition

    setIsTransitioning(true)
    setActiveIndex((prev) => (prev + 1) % data.length)

    // Reset transition lock after animation completes
    setTimeout(() => {
      setIsTransitioning(false)
    }, 800) // Slightly longer than CSS transition
  }

  const getPosition = (index: number) => {
    let position = index - activeIndex

    // Handle wrapping for smooth infinite loop
    if (position > Math.floor(data.length / 2)) {
      position -= data.length
    } else if (position < -Math.floor(data.length / 2)) {
      position += data.length
    }

    if (position === 0) return "center"
    if (position === -1) return "left"
    if (position === 1) return "right"
    return "hidden"
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#E8F9FC] overflow-hidden">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-[#005657] mb-4">Meet Our Expert Psychologists</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Professional mental health support with personalized care</p>
      </div>

      {/* Carousel Container - keeping your exact design */}
      <div className="relative w-[320px] h-[440px] perspective-1000">
        {data.map((item, index) => {
          const position = getPosition(index)
          const baseStyle =
            "absolute top-0 left-0 w-full h-full transition-all duration-700 ease-out transform rounded-xl p-6 flex flex-col items-center justify-center text-center"

          let transformStyle = ""
          let zIndex = 0
          let scale = "scale-100 opacity-100"

          if (position === "center") {
            transformStyle = "translate-x-0 rotate-y-0"
            zIndex = 30
            scale = "scale-105 opacity-100"
          } else if (position === "left") {
            transformStyle = "-translate-x-24 rotate-y-40"
            zIndex = 10
            scale = "scale-90 opacity-60"
          } else if (position === "right") {
            transformStyle = "translate-x-24 -rotate-y-40"
            zIndex = 10
            scale = "scale-90 opacity-60"
          } else {
            transformStyle = "scale-75 opacity-0"
            zIndex = 0
          }

          return (
            <div
              key={`${index}-${activeIndex}`} // Force re-render for smoother transitions
              className={`${baseStyle} bg-[#9EE0D6] shadow-xl ${transformStyle} ${scale}`}
              style={{
                zIndex,
                willChange: "transform, opacity", // Optimize for animations
                backfaceVisibility: "hidden", // Prevent flickering
              }}
            >
              <div className="flex flex-col items-center justify-center w-full h-full text-center">
                <div className="relative w-50 h-60 mb-4 flex items-center justify-center">
                  {/* Circular glow behind the image - keeping your exact design */}
                  <div className="absolute w-42 h-40 rounded-full bg-[#00989D] backdrop-blur-md shadow-2xl z-0 mt-[33px]"></div>
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-40 h-50 object-cover rounded-full relative z-10"
                    loading="lazy"
                  />
                </div>

                <h2 className="text-xl font-bold text-blue-700 mb-2">{item.title}</h2>
                <p className="text-gray-600 text-sm">{item.description}</p>

                {/* Book button - only show on center card */}
                {position === "center" && (
                  <button
                    onClick={() => onBookNow?.(item)}
                    className="mt-4 bg-blue-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition-colors duration-300 shadow-lg"
                  >
                    Book Consultation SLOPE
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Navigation Controls - keeping your exact design */}
      <div className="flex gap-4 mt-6 z-50">
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className={`bg-white p-3 rounded-full border shadow hover:bg-gray-100 transition-all duration-200 ${
            isTransitioning ? "opacity-50 cursor-not-allowed" : "hover:scale-110"
          }`}
        >
          <FaArrowLeft className={isTransitioning ? "opacity-50" : ""} />
        </button>

        {/* Auto-play control */}
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={`p-3 rounded-full border shadow transition-all duration-200 ${
            isAutoPlaying ? "bg-blue-700 text-white hover:bg-blue-800" : "bg-white text-gray-600 hover:bg-gray-100"
          }`}
        >
          {isAutoPlaying ? "⏸️" : "▶️"}
        </button>

        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className={`bg-white p-3 rounded-full border shadow hover:bg-gray-100 transition-all duration-200 ${
            isTransitioning ? "opacity-50 cursor-not-allowed" : "hover:scale-110"
          }`}
        >
          <FaArrowRight className={isTransitioning ? "opacity-50" : ""} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-2 mt-4">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true)
                setActiveIndex(index)
                setTimeout(() => setIsTransitioning(false), 800)
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-blue-700 scale-125" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Status indicator */}
      <div className="text-center mt-4 text-sm text-gray-500">
        <p>
          {activeIndex + 1} of {data.length} • {isAutoPlaying ? "Auto-playing" : "Paused"}
        </p>
      </div>
    </div>
  )
}
