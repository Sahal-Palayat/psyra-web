"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import type { Swiper as SwiperType } from "swiper"
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef, useEffect, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

// Mock type for demonstration
type Psychologist = {
  _id: string
  name: string
  specialization: string
  monthlySlots: any[]
  imageUrl: string
  experience: string
  expertise: string[]
  languages: string[]
}

// Mock modal component
const PsychologistModal = ({ isOpen, onClose, data }: { isOpen: boolean; onClose: () => void; data: Psychologist }) => {
  if (!isOpen) return null
  
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
        <h2 className="text-xl font-bold mb-4">{data.name}</h2>
        <p className="text-gray-600 mb-4">{data.specialization}</p>
        <button 
          onClick={onClose}
          className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
        >
          Close
        </button>
      </div>
    </div>
  )
}

// Mock data for demonstration
const mockData: Psychologist[] = [
  {
    _id: "1",
    name: "Dr. Sarah Johnson",
    specialization: "Clinical Psychology",
    monthlySlots: [],
    imageUrl: "/placeholder.svg?height=200&width=200&text=Dr.+Sarah",
    experience: "10 years",
    expertise: ["Anxiety", "Depression"],
    languages: ["English", "Spanish"]
  },
  {
    _id: "2",
    name: "Dr. Michael Chen",
    specialization: "Cognitive Behavioral Therapy",
    monthlySlots: [],
    imageUrl: "/placeholder.svg?height=200&width=200&text=Dr.+Michael",
    experience: "8 years",
    expertise: ["CBT", "Trauma"],
    languages: ["English", "Mandarin"]
  },
  {
    _id: "3",
    name: "Dr. Emily Rodriguez",
    specialization: "Family Therapy",
    monthlySlots: [],
    imageUrl: "/placeholder.svg?height=200&width=200&text=Dr.+Emily",
    experience: "12 years",
    expertise: ["Family", "Couples"],
    languages: ["English", "Spanish"]
  },
  {
    _id: "4",
    name: "Dr. James Wilson",
    specialization: "Child Psychology",
    monthlySlots: [],
    imageUrl: "/placeholder.svg?height=200&width=200&text=Dr.+James",
    experience: "15 years",
    expertise: ["Children", "ADHD"],
    languages: ["English"]
  }
]

export default function Carousel3DFixedTiming({
  data = mockData,
}: {
  data?: Psychologist[]
}) {
  const swiperRef = useRef<SwiperType | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [psychologist, setPsychologist] = useState<Psychologist>({
    _id: "",
    name: "",
    specialization: "",
    monthlySlots: [],
    imageUrl: "",
    experience: "",
    expertise: [],
    languages: [],
  })

  useEffect(() => {
    const initCarousel = () => {
      setIsLoaded(true)
      if (swiperRef.current) {
        swiperRef.current.autoplay.start()
        swiperRef.current.update()
      }
    }
    const timer = setTimeout(initCarousel, 200)
    return () => clearTimeout(timer)
  }, [data])

  const handleBookNow = useCallback((psychologist: Psychologist) => {
    console.log("Booking consultation with:", psychologist.name)
    setIsModalOpen(true)
    setPsychologist(psychologist)
  }, [])

  return (
    <div className="relative pb-8 mt-4">
      <div
        className={`max-w-6xl mx-auto relative transition-all duration-700 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 30000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            waitForTransition: true,
            stopOnLastSlide: false,
          }}
          speed={600}
          watchSlidesProgress={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
          }}
          pagination={{
            el: ".carousel-pagination",
            clickable: true,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
            setTimeout(() => {
              swiper.autoplay.start()
              swiper.update()
            }, 100)
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="relative"
        >
          {data?.map((psychologist: Psychologist) => (
            <SwiperSlide key={psychologist?._id} className="pb-4">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                <Card className="mx-4 h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-200">
                  <CardContent className="p-0">
                    {/* Image Section */}
                    <div className="relative w-full h-48 overflow-hidden bg-gray-100">
                      <img
                        src={
                          psychologist?.imageUrl ||
                          "/placeholder.svg?height=200&width=300&text=Doctor"
                         || "/placeholder.svg"}
                        alt={psychologist?.name || "Doctor"}
                        className="w-50 h-60 object-cover"
                      />
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {psychologist.name || "Unknown Doctor"}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {psychologist.specialization || "General Psychology"}
                      </p>
                      
                      {/* Experience Badge */}
                      {psychologist.experience && (
                        <div className="inline-block bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full mb-4">
                          {psychologist.experience} experience
                        </div>
                      )}
                      
                      {/* Book Now Button */}
                      <motion.button
                        onClick={() => handleBookNow(psychologist)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
                      >
                        Book Now
                      </motion.button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Arrow Buttons */}
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            swiperRef.current?.slidePrev()
          }}
          className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-2 border-gray-200 text-teal-600 hover:text-teal-700 z-20 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            swiperRef.current?.slideNext()
          }}
          className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-2 border-gray-200 text-teal-600 hover:text-teal-700 z-20 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Pagination */}
      <div className="carousel-pagination flex justify-center space-x-3 mt-8"></div>

      <style jsx global>{`
        .carousel-pagination .swiper-pagination-bullet {
          width: 10px !important;
          height: 10px !important;
          background: #0d9488 !important;
          opacity: 0.4 !important;
          transition: all 0.3s ease !important;
          margin: 0 3px !important;
          cursor: pointer;
          border-radius: 50%;
        }
        .carousel-pagination .swiper-pagination-bullet-active {
          opacity: 1 !important;
          transform: scale(1.4);
          background: #0f766e !important;
          box-shadow: 0 0 10px rgba(13, 148, 136, 0.4);
        }
        .carousel-pagination .swiper-pagination-bullet:hover {
          opacity: 0.8 !important;
          transform: scale(1.2);
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      <PsychologistModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        data={psychologist} 
      />
    </div>
  )
}
