"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PsychologistCard } from "./psychologist-card"

interface Psychologist {
  id: string
  name: string
  specialization: string
  experience: string
  rating: number
  image: string
  languages: string[]
  sessionTypes: string[]
  price: string
  availability: "Available" | "Busy" | "Offline"
}

interface PsychologistCarouselProps {
  psychologists: Psychologist[]
  onBookNow: (psychologistId: string) => void
}

export function PsychologistCarousel({ psychologists, onBookNow }: PsychologistCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [currentIndex])

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % psychologists.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + psychologists.length) % psychologists.length)
  }

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? 90 : -90,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction < 0 ? 90 : -90,
      scale: 0.8,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Carousel Container */}
      <div className="relative h-[600px] overflow-hidden rounded-3xl bg-gradient-to-br from-[#B6E5DF]/10 to-white p-8">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              rotateY: { type: "spring", stiffness: 300, damping: 30 },
              scale: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                handleNext()
              } else if (swipe > swipeConfidenceThreshold) {
                handlePrev()
              }
            }}
            className="absolute inset-0 flex items-center justify-center"
            style={{ perspective: "1000px" }}
          >
            <div className="w-full max-w-md">
              <PsychologistCard {...psychologists[currentIndex]} onBookNow={onBookNow} />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110 z-10"
          aria-label="Previous psychologist"
        >
          <svg
            className="w-6 h-6 text-[#005657] group-hover:text-[#004546] transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110 z-10"
          aria-label="Next psychologist"
        >
          <svg
            className="w-6 h-6 text-[#005657] group-hover:text-[#004546] transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Progress Bar */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#005657] rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
            key={currentIndex}
          />
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-3">
        {psychologists.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-[#005657] scale-125"
                : index === (currentIndex + 1) % psychologists.length
                  ? "bg-[#B6E5DF] scale-110"
                  : index === (currentIndex - 1 + psychologists.length) % psychologists.length
                    ? "bg-[#B6E5DF]/60 scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to psychologist ${index + 1}`}
          />
        ))}
      </div>

      {/* Carousel Info */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-500">
          {currentIndex + 1} of {psychologists.length} psychologists
        </p>
      </div>
    </div>
  )
}
