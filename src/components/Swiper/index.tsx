"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const images = ["/placeholder.svg?height=40&width=30&text=Slide+1"];

export default function Carousel3DMinimal({ data }: any) {
  console.log(data);

  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 3, // Mobile
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 5, // Desktop
            spaceBetween: 24,
          },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false, // Remove dark shadows
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination]}
        className="bg-white"
      >
        {data?.map((psychologist: any) => (
          <SwiperSlide key={psychologist?._id} className="w-full">
            <div className="bg-white">
              <div className="flex flex-col items-center justify-center w-full h-full text-center">
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 flex items-center justify-center mb-4">
                  {/* Circular glow behind the image */}
                  <div className="absolute w-32 h-32 rounded-full bg-[#9EE0D6] backdrop-blur-md shadow-xl z-0 mt-6"></div>
                  <img
                    src={
                      psychologist?.image ||
                      "https://pebby-uplods.s3.us-east-1.amazonaws.com/uploads/0d904bda-d629-42d3-8e3f-89d043404bb2.png"
                    }
                    alt="Psychologist"
                    className="w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-full relative z-10"
                  />
                </div>

                <div className="text-center mt-2">
                  <h2 className="text-base sm:text-lg font-semibold text-teal">
                    {psychologist.name || "Unknown Doctor"}
                  </h2>
                  <p className="text-teal/90 text-xs sm:text-sm">
                    {psychologist.specialization || "General Psychology"}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
