"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = ["/placeholder.svg?height=40&width=30&text=Slide+1"];

export default function Carousel3DMinimal({ data }: any) {
  console.log(data);
  return (
    <div className="relative">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 20, // Reduced from 28
          },
          768: {
            slidesPerView: 3,
            spaceBetween: -50, // Negative value to bring slides closer
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: -80, // Even more negative for larger screens
          },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
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
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="bg-white relative"
      >
        {data?.map((psychologist: any) => (
          <SwiperSlide key={psychologist?._id} className="w-28">
            <div className="bg-white">
              <div className="flex flex-col items-center justify-center mt-6 w-full h-full text-center">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center mb-4">
                  <div className="relative w-50 h-55 flex items-center justify-center">
                    <div className="absolute w-42 h-40 rounded-full bg-[#9EE0D6] backdrop-blur-md shadow-2xl z-0 mt-[33px]"></div>
                    <img
                      src={
                        psychologist?.imageUrl ||
                        "https://pebby-uplods.s3.us-east-1.amazonaws.com/uploads/0d904bda-d629-42d3-8e3f-89d043404bb2.png" ||
                        "/placeholder.svg"
                      }
                      alt="ALTERNATIVE IMAGE"
                      className="w-50 h-50 object-cover rounded-full relative z-10"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center text-center mt-6">
                  <h2 className="text-lg sm:text-xl font-bold text-teal-600">
                    {psychologist.name || "Unknown Doctor"}
                  </h2>
                  <p className="text-teal-500 text-sm mb-2">
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
