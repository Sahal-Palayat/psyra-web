"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { useState, useRef } from "react";
import { Button } from "../ui/button";

export default function Carousel3DSimpleAuto({ data }: any) {
  const swiperRef = useRef<any>(null);

  return (
    <div className="relative pt-40">
      <div className="max-w-260 mx-auto">
        <Swiper
          ref={swiperRef}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 1000, // 3 seconds
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              // spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              // spaceBetween: -10,
            },
            1024: {
              slidesPerView: 3,
              // spaceBetween: -20,
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
            el: ".swiper-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
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
                      <div className="absolute w-42 h-40 rounded-full bg-[#9EE0D6] backdrop-blur-md  z-0 mt-[33px]"></div>
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
                    <h2 className="text-lg sm:text-xl font-bold text-teal">
                      {psychologist.name || "Unknown Doctor"}
                    </h2>
                    <p className="text-teal/90 text-sm mb-2">
                      {psychologist.specialization || "General Psychology"}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Simple Control Buttons */}
      <div className="">
        <Button
          variant="outline"
          size="icon"
          onClick={() => swiperRef.current?.swiper?.slidePrev()}
          className="absolute rounded-full md:left-20 left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-2 border-gray text-teal-600 hover:text-teal-700 z-20"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => swiperRef.current?.swiper?.slideNext()}
          className="absolute rounded-full md:right-20 right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-2 border-gray text-teal-600 hover:text-teal-700 z-20"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Pagination */}
      <div className="swiper-pagination mt-4"></div>

      <style jsx global>{`
        .swiper-button-next:after,
        .swiper-button-prev:after {
          display: none !important;
        }
      `}</style>
    </div>
  );
}
