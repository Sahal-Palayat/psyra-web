"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
  Controller,
} from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import axios from "axios";

// const data =[{}]

interface SwiperFlipCarouselProps {
  onBookNow?: (psychologist: any) => void;
}

interface Psychologist {
  name: string;
  specialization: string;
  monthlySlots: string[];
  imageUrl: string;
}

export default function SwiperFlipCarousel({
  onBookNow,
}: SwiperFlipCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [data, setData] = useState<Psychologist[]>([
    {
      name: "",
      specialization: "",
      monthlySlots: [],
      imageUrl: "",
    },
  ]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const swiperRef = useRef<SwiperType>();

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  const fetchPsychologists = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/psychologists`
    );

    console.log(response, "RESPONSEEE");
    setData(response?.data);
  };

  useEffect(() => {
    fetchPsychologists();
  }, []);

  const toggleAutoplay = () => {
    if (swiperRef.current) {
      if (isAutoPlaying) {
        swiperRef.current.autoplay.stop();
      } else {
        swiperRef.current.autoplay.start();
      }
      setIsAutoPlaying(!isAutoPlaying);
    }
  };

  const goToPrev = () => {
    swiperRef.current?.slidePrev();
  };

  const goToNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F7F8F2] overflow-hidden">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-[#005657] mb-4">
          Meet Our Expert Psychologists
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Professional mental health support with personalized care
        </p>
      </div>

      {/* Swiper Carousel Container */}
      <div className="relative w-full max-w-6xl mx-auto px-4">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}
          modules={[
            Navigation,
            Pagination,
            Autoplay,
            EffectCoverflow,
            Controller,
          ]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={800}
          className="swiper-container"
          style={{
            paddingTop: "50px",
            paddingBottom: "50px",
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} className="swiper-slide-custom">
              {({ isActive, isPrev, isNext }) => (
                <div
                  className={`
                    relative w-[320px] h-[440px] transition-all duration-800 ease-out transform rounded-xl p-6 
                    flex flex-col items-center justify-center text-center  bg-[#00989D] shadow-xl
                    ${isActive ? "scale-110 z-10" : "scale-95"}
                    ${
                      isActive ? "brightness-110 saturate-120" : "brightness-90"
                    }
                  `}
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                >
                  {/* Your exact card design */}
                  <div className="flex flex-col items-center justify-center w-half h-full text-center">
                    <div
                      key={index}
                      //   className={`${baseStyle} bg-[#9EE0D6] shadow-xl ${transformStyle} ${scale}`}
                      //   style={{ zIndex }}
                    >
                      <div className="flex flex-col items-center justify-center w-full h-full text-center">
                        <div className="relative w-50 h-55  flex items-center justify-center">
                          {/* Circular glow behind the image */}
                          <div className="absolute w-42 h-40 rounded-full bg-[#9EE0D6] backdrop-blur-md shadow-2xl z-0  mt-[33px]"></div>
                          <img
                            src={
                              data[index]?.imageUrl ||
                              "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
                            }
                            alt="ALTERNATIVE IMAGE"
                            className="w-40 h-50 object-cover rounded-full relative z-10"
                          />

                          {/* Image in the front */}
                        </div>

                        <h2 className="text-xl font-bold text-[#ffffff] mb-0">
                          {data[index].name}
                        </h2>
                        <p className="text-[#ffffff] text-sm">
                          {data[index].specialization}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card position indicator */}
                  <div
                    className={`absolute top-2 right-2 w-3 h-3 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-green-400 animate-ping"
                        : isPrev || isNext
                        ? "bg-yellow-400"
                        : "bg-gray-400"
                    }`}
                  ></div>
                  {isActive && (
                    <motion.button
                      onClick={() => onBookNow?.(item)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="bg-white py-2 px-12 text-[#005657] rounded-full text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-medium border border-teal-200 shadow-sm hover:bg-teal-100 transition-colors"
                    >
                      Book Consultation
                    </motion.button>
                  )}
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Navigation Controls */}
      <div className="flex items-center gap-6 mt-8 z-50">
        <button
          onClick={goToPrev}
          className="bg-white p-4 rounded-full border shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-110 hover:bg-gray-50"
        >
          <FaArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
        </button>

        {/* Auto-play control */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleAutoplay}
            className={`p-3 rounded-full border shadow-lg transition-all duration-300 ${
              isAutoPlaying
                ? "bg-blue-700 text-white hover:bg-blue-800 shadow-blue-200"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            {isAutoPlaying ? "⏸️" : "▶️"}
          </button>
          <span className="text-sm text-gray-600 font-medium">
            {isAutoPlaying ? "Auto" : "Manual"}
          </span>
        </div>

        <button
          onClick={goToNext}
          className="bg-white p-4 rounded-full border shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-110 hover:bg-gray-50"
        >
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      {/* Custom Pagination Dots */}
      <div className="flex gap-3 mt-6">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => swiperRef.current?.slideToLoop(index)}
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
          {activeIndex + 1} of {data.length} •{" "}
          {isAutoPlaying ? "Auto-playing" : "Paused"}
        </p>

        {/* Progress bar for auto-play */}
        {isAutoPlaying && (
          <div className="w-32 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden">
            <div
              className="h-full bg-blue-700 rounded-full"
              style={{
                animation: "progress 4s linear infinite",
              }}
            ></div>
          </div>
        )}
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .swiper-container {
          width: 100%;
          padding-top: 50px;
          padding-bottom: 50px;
        }

        .swiper-slide-custom {
          background-position: center;
          background-size: cover;
          width: 320px;
          height: 440px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .swiper-slide-shadow-left,
        .swiper-slide-shadow-right {
          background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.2),
            transparent,
            rgba(0, 0, 0, 0.2)
          );
        }

        .swiper-3d .swiper-slide-shadow-left {
          background-image: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0)
          );
        }

        .swiper-3d .swiper-slide-shadow-right {
          background-image: linear-gradient(
            to left,
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0)
          );
        }

        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        /* Custom scrollbar for touch devices */
        .swiper-container::-webkit-scrollbar {
          display: none;
        }

        /* Smooth transitions */
        .swiper-slide {
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        /* Enhanced 3D effect */
        .swiper-container-3d .swiper-slide {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
}
