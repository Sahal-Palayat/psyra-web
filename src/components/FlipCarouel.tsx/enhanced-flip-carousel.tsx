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
    title: "Dr. Unais Patel",
    image: "/placeholder.svg?height=200&width=160",
    description: "Child Psychologist specializing in development.",
  },
  {
    title: "Dr. Robert Martinez",
    image: "/placeholder.svg?height=200&width=160",
    description: "Addiction Counselor with group therapy expertise.",
  },
  {
    title: "Dr. Lisa Thompson",
    image: "/placeholder.svg?height=200&width=160",
    description: "Marriage Counselor specializing in relationship therapy.",
  },
]

interface EnhancedFlipCarouselProps {
  onBookNow?: (psychologist: any) => void
}

export default function EnhancedFlipCarousel({ onBookNow }: EnhancedFlipCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState<"left" | "right">("right")
  const autoPlayRef = useRef<NodeJS.Timeout>()

  // Auto-play functionality
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
    if (isTransitioning) return

    setDirection("left")
    setIsTransitioning(true)
    setActiveIndex((prev) => (prev - 1 + data.length) % data.length)

    setTimeout(() => {
      setIsTransitioning(false)
    }, 900)
  }

  const nextSlide = () => {
    if (isTransitioning) return

    setDirection("right")
    setIsTransitioning(true)
    setActiveIndex((prev) => (prev + 1) % data.length)

    setTimeout(() => {
      setIsTransitioning(false)
    }, 900)
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
    if (position === -2) return "far-left"
    if (position === 2) return "far-right"
    if (position === -3) return "far-far-left"
    if (position === 3) return "far-far-right"
    return "hidden"
  }

  const getCardStyles = (position: string, index: number) => {
    const baseStyle =
      "absolute top-0 left-0 w-full h-full transition-all duration-800 ease-out transform rounded-xl p-6 flex flex-col items-center justify-center text-center"

    let transformStyle = ""
    let zIndex = 0
    let scale = "scale-100 opacity-100"
    let filter = ""
    let animationDelay = ""

    // Add staggered animation delays based on direction
    const delayMultiplier = Math.abs(index - activeIndex) * 100
    animationDelay = `${delayMultiplier}ms`

    switch (position) {
      case "center":
        transformStyle = "translate-x-0 rotateY(0deg) rotateX(0deg)"
        zIndex = 50
        scale = "scale-110 opacity-100"
        filter = "brightness(1.1) saturate(1.2)"
        break
      case "left":
        transformStyle = "-translate-x-20 rotateY(45deg) rotateX(5deg)"
        zIndex = 40
        scale = "scale-95 opacity-85"
        filter = "brightness(0.9)"
        break
      case "right":
        transformStyle = "translate-x-20 rotateY(-45deg) rotateX(5deg)"
        zIndex = 40
        scale = "scale-95 opacity-85"
        filter = "brightness(0.9)"
        break
      case "far-left":
        transformStyle = "-translate-x-32 rotateY(60deg) rotateX(10deg)"
        zIndex = 30
        scale = "scale-85 opacity-70"
        filter = "brightness(0.8) blur(1px)"
        break
      case "far-right":
        transformStyle = "translate-x-32 rotateY(-60deg) rotateX(10deg)"
        zIndex = 30
        scale = "scale-85 opacity-70"
        filter = "brightness(0.8) blur(1px)"
        break
      case "far-far-left":
        transformStyle = "-translate-x-40 rotateY(75deg) rotateX(15deg)"
        zIndex = 20
        scale = "scale-75 opacity-50"
        filter = "brightness(0.7) blur(2px)"
        break
      case "far-far-right":
        transformStyle = "translate-x-40 rotateY(-75deg) rotateX(15deg)"
        zIndex = 20
        scale = "scale-75 opacity-50"
        filter = "brightness(0.7) blur(2px)"
        break
      default:
        transformStyle = "scale-50 opacity-0"
        zIndex = 0
        filter = "blur(3px)"
    }

    return {
      className: `${baseStyle} bg-[#9EE0D6] shadow-xl ${transformStyle} ${scale}`,
      style: {
        zIndex,
        filter,
        willChange: "transform, opacity, filter",
        backfaceVisibility: "hidden" as const,
        transitionDelay: animationDelay,
        transformStyle: "preserve-3d" as const,
      },
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#E8F9FC] overflow-hidden">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-[#005657] mb-4">Meet Our Expert Psychologists</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Professional mental health support with personalized care</p>
      </div>

      {/* Enhanced Carousel Container */}
      <div className="relative w-[500px] h-[440px] perspective-1000" style={{ perspective: "1200px" }}>
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-radial from-[#9EE0D6]/20 to-transparent rounded-3xl blur-xl"></div>

        {data.map((item, index) => {
          const position = getPosition(index)
          const cardStyles = getCardStyles(position, index)

          return (
            <div key={`${index}-${activeIndex}-${direction}`} className={cardStyles.className} style={cardStyles.style}>
              <div className="flex flex-col items-center justify-center w-full h-full text-center">
                <div className="relative w-50 h-60 mb-4 flex items-center justify-center">
                  {/* Enhanced circular glow with animation */}
                  <div
                    className={`absolute w-42 h-40 rounded-full bg-[#00989D] backdrop-blur-md shadow-2xl z-0 mt-[33px] transition-all duration-800 ${
                      position === "center" ? "animate-pulse shadow-[#00989D]/50" : ""
                    }`}
                  ></div>
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className={`w-40 h-50 object-cover rounded-full relative z-10 transition-all duration-800 ${
                      position === "center" ? "ring-4 ring-white/50 ring-offset-2" : ""
                    }`}
                    loading="lazy"
                  />

                  {/* Floating particles effect for center card */}
                  {position === "center" && (
                    <>
                      <div
                        className="absolute top-4 right-4 w-2 h-2 bg-white/60 rounded-full animate-bounce"
                        style={{ animationDelay: "0s" }}
                      ></div>
                      <div
                        className="absolute top-8 left-6 w-1 h-1 bg-white/40 rounded-full animate-bounce"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <div
                        className="absolute bottom-6 right-8 w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce"
                        style={{ animationDelay: "1s" }}
                      ></div>
                    </>
                  )}
                </div>

                <h2
                  className={`text-xl font-bold text-blue-700 mb-2 transition-all duration-800 ${
                    position === "center" ? "text-2xl" : ""
                  }`}
                >
                  {item.title}
                </h2>
                <p
                  className={`text-gray-600 text-sm transition-all duration-800 ${
                    position === "center" ? "text-base" : ""
                  }`}
                >
                  {item.description}
                </p>

                {/* Enhanced book button for center card */}
                {position === "center" && (
                  <button
                    onClick={() => onBookNow?.(item)}
                    className="mt-4 bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-pulse"
                  >
                    Book Consultation SLOPE 1
                  </button>
                )}
              </div>
            </div>
          )
        })}

        {/* Direction indicator arrows */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 transition-all duration-500 ${
            direction === "right" ? "right-4 animate-bounce" : "left-4 animate-bounce"
          }`}
        >
          <div className="text-[#005657]/30 text-2xl">{direction === "right" ? "→" : "←"}</div>
        </div>
      </div>

      {/* Enhanced Navigation Controls */}
      <div className="flex items-center gap-6 mt-8 z-50">
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className={`bg-white p-4 rounded-full border shadow-lg hover:shadow-xl transition-all duration-300 group ${
            isTransitioning ? "opacity-50 cursor-not-allowed" : "hover:scale-110 hover:bg-gray-50"
          }`}
        >
          <FaArrowLeft
            className={`transition-transform duration-300 ${
              isTransitioning ? "opacity-50" : "group-hover:-translate-x-1"
            }`}
          />
        </button>

        {/* Enhanced auto-play control */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`p-3 rounded-full border shadow-lg transition-all duration-300 ${
              isAutoPlaying
                ? "bg-blue-700 text-white hover:bg-blue-800 shadow-blue-200"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            {isAutoPlaying ? "⏸️" : "▶️"}
          </button>
          <span className="text-sm text-gray-600 font-medium">{isAutoPlaying ? "Auto" : "Manual"}</span>
        </div>

        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className={`bg-white p-4 rounded-full border shadow-lg hover:shadow-xl transition-all duration-300 group ${
            isTransitioning ? "opacity-50 cursor-not-allowed" : "hover:scale-110 hover:bg-gray-50"
          }`}
        >
          <FaArrowRight
            className={`transition-transform duration-300 ${
              isTransitioning ? "opacity-50" : "group-hover:translate-x-1"
            }`}
          />
        </button>
      </div>

      {/* Enhanced Pagination Dots */}
      <div className="flex gap-3 mt-6">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setDirection(index > activeIndex ? "right" : "left")
                setIsTransitioning(true)
                setActiveIndex(index)
                setTimeout(() => setIsTransitioning(false), 900)
              }
            }}
            className={`transition-all duration-300 rounded-full ${
              index === activeIndex
                ? "w-8 h-3 bg-blue-700 shadow-lg"
                : "w-3 h-3 bg-gray-300 hover:bg-gray-400 hover:scale-125"
            }`}
          />
        ))}
      </div>

      {/* Status and Progress */}
      <div className="text-center mt-4 space-y-2">
        <p className="text-sm text-gray-500">
          {activeIndex + 1} of {data.length} • {isAutoPlaying ? "Auto-playing" : "Paused"}
        </p>

        {/* Progress bar for auto-play */}
        {isAutoPlaying && !isTransitioning && (
          <div className="w-32 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden">
            <div
              className="h-full bg-blue-700 rounded-full animate-progress"
              style={{
                animation: "progress 4s linear infinite",
              }}
            ></div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0% }
          to { width: 100% }
        }
        
        .animate-progress {
          animation: progress 4s linear infinite;
        }
      `}</style>
    </div>
  )
}
