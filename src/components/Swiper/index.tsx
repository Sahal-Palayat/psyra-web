"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import type { Swiper as SwiperType } from "swiper"
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef, useEffect, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import type { Psychologist } from "@/types/psychologist"
import { motion } from "framer-motion"
import { PsychologistModal } from "../Psychologist/Modal/PsychologistModal"

export default function Carousel3DFixedTiming({
  data,
}: {
  data: Psychologist[]
}) {
  const swiperRef = useRef<SwiperType | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  // const [hoveredCard, setHoveredCard] = useState<string | null>(null);
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

  // Pause/resume autoplay based on hover state
  // useEffect(() => {
  //   if (swiperRef.current) {
  //     if (hoveredCard) {
  //       swiperRef.current.autoplay.stop();
  //     } else {
  //       swiperRef.current.autoplay.start();
  //     }
  //   }
  // }, [hoveredCard]);

  const handleBookNow = useCallback((psychologist: Psychologist) => {
    console.log("Booking consultation with:", psychologist.name)
    setIsModalOpen(true)
    setPsychologist(psychologist)
    // Add your booking logic here
  }, [])

  return (
    <div className="relative pb-24 mt-4">
      <div
        className={`max-w-260 mx-auto relative transition-all duration-700 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <Swiper
          // ref={swiperRef} // UNCOMMENTED: Assign ref to Swiper instance
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000, // Reverted to 3 seconds
            disableOnInteraction: false,
            pauseOnMouseEnter: false, // We'll handle this manually with hoveredCard state
            waitForTransition: true, // Wait for transition to complete
            stopOnLastSlide: false,
          }}
          speed={600}
          watchSlidesProgress={true}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 110,
            modifier: 3,
            slideShadows: false,
          }}
          pagination={{
            el: ".carousel-pagination",
            clickable: true,
          }}
          onSwiper={(swiper) => {
            // ADDED: Assign swiper instance to ref
            swiperRef.current = swiper
            setTimeout(() => {
              swiper.autoplay.start()
              swiper.update()
            }, 100)
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="bg-white relative"
        >
          {data?.map((psychologist: Psychologist) => (
            <SwiperSlide key={psychologist?._id} className="">
              <div
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="flex flex-col items-center justify-center mt-6 w-full h-full text-center">
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center mb-4">
                    {/* Background glow positioned first with proper z-index */}
                    <div className="absolute w-42 h-40 rounded-full bg-[#9EE0D6] backdrop-blur-sm shadow-2xl z-0 mt-[33px]"></div>

                    {/* Image container with higher z-index */}
                    <div className="relative w-50 h-55 flex items-center justify-center z-20">
                      <img
                        src={
                          psychologist?.imageUrl ||
                          "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg" ||
                          "/placeholder.svg" ||
                          "/placeholder.svg"
                        }
                        alt="ALTERNATIVE IMAGE"
                        className="w-50 h-50 object-cover rounded-full relative z-30"
                        style={{
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden",
                          transform: "translateZ(0)",
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center text-center mt-6 relative z-10">
                    <>
                      <h2 className="text-lg sm:text-xl font-bold text-teal">
                        {psychologist.name || "Unknown Doctor"}
                      </h2>
                      <p className="text-teal/90 text-sm mb-2">{psychologist.specialization || "General Psychology"}</p>
                    </>
                    <motion.button
                      onClick={() => handleBookNow(psychologist)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="bg-white py-2 px-8 sm:px-12 text-[#005657] rounded-full text-xs sm:text-sm font-medium border border-black shadow-sm hover:bg-teal-100 transition-colors relative z-10"
                    >
                      Book Now
                    </motion.button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Arrow Buttons */}
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            swiperRef.current?.slidePrev() // Simplified call
          }}
          className="absolute rounded-full left-0 md:-left-16 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-2 border-gray-200 text-teal-600 hover:text-teal-700 z-20 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            swiperRef.current?.slideNext() // Simplified call
          }}
          className="absolute rounded-full right-0 md:-right-16 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-2 border-gray-200 text-teal-600 hover:text-teal-700 z-20 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
      {/* Pagination */}
      <div className="carousel-pagination flex justify-center space-x-3 mt-20"></div>
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .flip-card-container {
          height: 360px;
          width: 100%;
          max-width: 220px;
          margin: 0 auto;
          overflow: hidden;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          display: none !important;
        }
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
        
        /* Fix for mobile z-index issues during 3D transforms */
        .swiper-slide {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .swiper-slide img {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
        }
      `}</style>
      <PsychologistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} data={psychologist} />
    </div>
  )
}
