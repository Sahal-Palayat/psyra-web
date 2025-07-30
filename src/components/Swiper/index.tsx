"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"
import { Button } from "../ui/button"

export default function Carousel3DFinalPositioning({ data }: any) {
  const swiperRef = useRef<any>(null)

  return (
    <div className="relative pt-40 pb-24">
      <div className="max-w-260 mx-auto relative">
        <Swiper
          ref={swiperRef}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
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
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="bg-white relative"
        >
          {data?.map((psychologist: any) => (
            <SwiperSlide key={psychologist?._id} className="">
              <div
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                <div className="flex flex-col items-center justify-center mt-6 w-full h-full text-center">
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center mb-4">
                    <div className="relative w-50 h-55 flex items-center justify-center">
                      <div className="absolute w-42 h-40 rounded-full bg-[#9EE0D6] backdrop-blur-md z-0 mt-[33px]"></div>
                      <img
                        src={
                          psychologist?.imageUrl ||
                          "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg" ||
                          "/placeholder.svg" ||
                          "/placeholder.svg"
                        }
                        alt="ALTERNATIVE IMAGE"
                        className="w-50 h-50 object-cover rounded-full relative z-10"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center text-center mt-6">
                    <h2 className="text-lg sm:text-xl font-bold text-teal">{psychologist.name || "Unknown Doctor"}</h2>
                    <p className="text-teal/90 text-sm mb-2">{psychologist.specialization || "General Psychology"}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Arrow Buttons - Positioned relative to carousel container */}
        <Button
          variant="outline"
          size="icon"
          onClick={() => swiperRef.current?.swiper?.slidePrev()}
          className="absolute rounded-full left-0 md:-left-16 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-2 border-gray-200 text-teal-600 hover:text-teal-700 z-20 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={() => swiperRef.current?.swiper?.slideNext()}
          className="absolute rounded-full right-0 md:-right-16 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-2 border-gray-200 text-teal-600 hover:text-teal-700 z-20 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Pagination - Positioned outside and below the carousel */}
      <div className="carousel-pagination flex justify-center space-x-3 mt-20"></div>

      <style jsx global>{`
        .swiper-button-next:after,
        .swiper-button-prev:after {
          display: none !important;
        }
        .carousel-pagination .swiper-pagination-bullet {
          width: 14px !important;
          height: 14px !important;
          background: #0d9488 !important;
          opacity: 0.4 !important;
          transition: all 0.3s ease !important;
          margin: 0 6px !important;
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
      `}</style>
    </div>
  )
}
