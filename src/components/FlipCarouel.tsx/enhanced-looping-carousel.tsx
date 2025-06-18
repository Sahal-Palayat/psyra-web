"use client"
import { useState, useEffect, useRef } from "react"
import type React from "react"

import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

const data = [
  {
    title: "Dr. Sarah Johnson",
    image: "/placeholder.svg?height=200&width=200",
    description: "Clinical Psychologist specializing in anxiety and depression treatment.",
    specialization: "Clinical Psychology",
    experience: "8+ years",
    rating: 4.9,
    price: "₹1,500",
  },
  {
    title: "Dr. Michael Chen",
    image: "/placeholder.svg?height=200&width=200",
    description: "Cognitive Behavioral Therapist with expertise in trauma recovery.",
    specialization: "CBT Specialist",
    experience: "12+ years",
    rating: 4.8,
    price: "₹1,800",
  },
  {
    title: "Dr. Priya Sharma",
    image: "/placeholder.svg?height=200&width=200",
    description: "Family Therapist helping couples and families build stronger bonds.",
    specialization: "Family Therapy",
    experience: "6+ years",
    rating: 4.7,
    price: "₹1,200",
  },
  {
    title: "Dr. James Wilson",
    image: "/placeholder.svg?height=200&width=200",
    description: "Trauma Specialist using EMDR and other evidence-based approaches.",
    specialization: "Trauma Therapy",
    experience: "15+ years",
    rating: 4.9,
    price: "₹2,000",
  },
  {
    title: "Dr. Sahal Patel",
    image: "/placeholder.svg?height=200&width=200",
    description: "Child Psychologist specializing in developmental and behavioral issues.",
    specialization: "Child Psychology",
    experience: "10+ years",
    rating: 4.8,
    price: "₹1,400",
  },
]

interface EnhancedLoopingCarouselProps {
  onBookNow?: (psychologist: any) => void
}

export default function EnhancedLoopingCarousel({ onBookNow }: EnhancedLoopingCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [currentX, setCurrentX] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const autoPlayRef = useRef<NodeJS.Timeout>()

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && !isDragging) {
      autoPlayRef.current = setInterval(() => {
        nextSlide()
      }, 4000) // Change slide every 4 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, isDragging, activeIndex])

  // Wheel scroll support
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (carouselRef.current?.contains(e.target as Node)) {
        e.preventDefault()
        if (e.deltaY > 0) {
          nextSlide()
        } else {
          prevSlide()
        }
      }
    }

    document.addEventListener("wheel", handleWheel, { passive: false })
    return () => document.removeEventListener("wheel", handleWheel)
  }, [])

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + data.length) % data.length)
  }

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % data.length)
  }

  const goToSlide = (index: number) => {
    setActiveIndex(index)
  }

  // Enhanced position calculation for infinite loop effect
  const getPosition = (index: number) => {
    let position = index - activeIndex

    // Handle wrapping for infinite loop
    if (position > data.length / 2) {
      position -= data.length
    } else if (position < -data.length / 2) {
      position += data.length
    }

    if (position === 0) return "center"
    if (position === -1) return "left"
    if (position === 1) return "right"
    if (position === -2) return "far-left"
    if (position === 2) return "far-right"
    return "hidden"
  }

  // Touch/Mouse drag handlers
  const handleStart = (clientX: number) => {
    setIsDragging(true)
    setStartX(clientX)
    setCurrentX(clientX)
    setIsAutoPlaying(false)
  }

  const handleMove = (clientX: number) => {
    if (!isDragging) return
    setCurrentX(clientX)
  }

  const handleEnd = () => {
    if (!isDragging) return

    const diff = currentX - startX
    const threshold = 50

    if (diff > threshold) {
      prevSlide()
    } else if (diff < -threshold) {
      nextSlide()
    }

    setIsDragging(false)
    setTimeout(() => setIsAutoPlaying(true), 1000) // Resume auto-play after 1 second
  }

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    handleStart(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX)
  }

  const handleMouseUp = () => {
    handleEnd()
  }

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    handleEnd()
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#E8F9FC] to-[#B6E5DF]/20 overflow-hidden py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-[#005657] mb-4">Meet Our Expert Psychologists</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Scroll, drag, or use arrows to explore our team of licensed mental health professionals
        </p>
      </div>

      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="relative w-[380px] h-[500px] perspective-1000 cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {data.map((item, index) => {
          const position = getPosition(index)
          const baseStyle =
            "absolute top-0 left-0 w-full h-full transition-all duration-700 ease-out transform rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-2xl"

          let transformStyle = ""
          let zIndex = 0
          let scale = "scale-100 opacity-100"
          let blur = ""

          if (position === "center") {
            transformStyle = "translate-x-0 rotateY(0deg)"
            zIndex = 50
            scale = "scale-110 opacity-100"
          } else if (position === "left") {
            transformStyle = "-translate-x-20 rotateY(35deg)"
            zIndex = 30
            scale = "scale-95 opacity-80"
            blur = "blur-[1px]"
          } else if (position === "right") {
            transformStyle = "translate-x-20 rotateY(-35deg)"
            zIndex = 30
            scale = "scale-95 opacity-80"
            blur = "blur-[1px]"
          } else if (position === "far-left") {
            transformStyle = "-translate-x-32 rotateY(55deg)"
            zIndex = 10
            scale = "scale-85 opacity-50"
            blur = "blur-[2px]"
          } else if (position === "far-right") {
            transformStyle = "translate-x-32 rotateY(-55deg)"
            zIndex = 10
            scale = "scale-85 opacity-50"
            blur = "blur-[2px]"
          } else {
            transformStyle = "scale-75 opacity-0"
            zIndex = 0
          }

          return (
            <div
              key={index}
              className={`${baseStyle} bg-gradient-to-br from-[#9EE0D6] to-[#B6E5DF] ${transformStyle} ${scale} ${blur}`}
              style={{
                zIndex,
                transform: `${transformStyle} ${isDragging ? `translateX(${(currentX - startX) * 0.1}px)` : ""}`,
              }}
              onClick={() => position === "center" && onBookNow?.(item)}
            >
              <div className="flex flex-col items-center justify-center w-full h-full text-center">
                {/* Image with glow effect */}
                <div className="relative w-32 h-32 mb-6 flex items-center justify-center">
                  <div className="absolute w-28 h-28 rounded-full bg-gradient-to-br from-[#00989D] to-[#005657] backdrop-blur-md shadow-2xl opacity-60"></div>
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-28 h-28 object-cover rounded-full relative z-10 border-4 border-white shadow-lg"
                  />
                </div>

                {/* Content */}
                <h2 className="text-xl font-bold text-[#005657] mb-2">{item.title}</h2>
                <p className="text-[#005657]/80 text-sm font-medium mb-2">{item.specialization}</p>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{item.description}</p>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">⭐</span>
                    <span className="text-[#005657] font-medium">{item.rating}</span>
                  </div>
                  <div className="text-[#005657]/70">{item.experience}</div>
                </div>

                {/* Price */}
                <div className="text-2xl font-bold text-[#005657] mb-4">{item.price}</div>

                {/* Book Button - only show on center card */}
                {position === "center" && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      onBookNow?.(item)
                    }}
                    className="bg-[#005657] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#004546] transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    Book Now
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center gap-6 mt-8 z-50">
        <button
          onClick={prevSlide}
          className="bg-white p-4 rounded-full border shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 group"
        >
          <FaArrowLeft className="text-[#005657] group-hover:scale-110 transition-transform" />
        </button>

        {/* Auto-play indicator */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`p-2 rounded-full transition-colors ${
              isAutoPlaying ? "bg-[#005657] text-white" : "bg-gray-200 text-gray-600"
            }`}
          >
            {isAutoPlaying ? "⏸️" : "▶️"}
          </button>
          <span className="text-sm text-gray-600">{isAutoPlaying ? "Auto-playing" : "Paused"}</span>
        </div>

        <button
          onClick={nextSlide}
          className="bg-white p-4 rounded-full border shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 group"
        >
          <FaArrowRight className="text-[#005657] group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-2 mt-6">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-[#005657] scale-125" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Instructions */}
      <div className="text-center mt-6 text-sm text-gray-500 max-w-md">
        <p>💡 Scroll with mouse wheel, drag cards, or use arrow buttons to navigate</p>
      </div>
    </div>
  )
}
