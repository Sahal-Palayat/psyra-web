"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
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
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Clock,
  Globe,
} from "lucide-react"; // Added Award back
import { useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import type { Psychologist } from "@/types/psychologist";
import { PsychologistModal } from "../Psychologist/Modal/PsychologistModal";

export default function Carousel3DFixedTiming({
  data,
}: {
  data: Psychologist[];
}) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null); // Used for autoplay pause on hover
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null); // State for single card flip
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPsychologist, setSelectedPsychologist] =
    useState<Psychologist>({
      _id: "",
      name: "",
      specialization: "",
      monthlySlots: [],
      imageUrl: "",
      experience: "",
      expertise: [],
      languages: [],
    });

  useEffect(() => {
    const initCarousel = () => {
      setIsLoaded(true);
      if (swiperRef.current) {
        swiperRef.current.autoplay.start();
        swiperRef.current.update();
      }
    };
    const timer = setTimeout(initCarousel, 200);
    return () => clearTimeout(timer);
  }, [data]);

  // Pause/resume autoplay based on hover state (for the entire carousel area)
  useEffect(() => {
    if (swiperRef.current) {
      if (hoveredCard) {
        swiperRef.current.autoplay.stop();
      } else {
        swiperRef.current.autoplay.start();
      }
    }
  }, [hoveredCard]);

  const handleBookNow = useCallback((psychologist: Psychologist) => {
    console.log("Booking consultation with:", psychologist.name);
    setIsModalOpen(true);
    setSelectedPsychologist(psychologist);
    // Add your booking logic here
  }, []);

  const toggleFlip = (psychologistId: string) => {
    setFlippedCardId((prevFlippedCardId) =>
      prevFlippedCardId === psychologistId ? null : psychologistId
    );
  };

  return (
    <div className="relative pb-24 mt-4">
      <div
        className={`max-w-260 mx-auto relative transition-all duration-700 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <Swiper
          onSwiper={(swiper) => {
            if (swiperRef.current === null) {
              swiperRef.current = swiper;
            }
            setTimeout(() => {
              swiper.autoplay.start();
              swiper.update();
            }, 100);
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false, // Autoplay pause is handled by the hoveredCard state
            waitForTransition: true,
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
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="bg-white relative"
        >
          {data?.map((psychologist: Psychologist) => (
            <SwiperSlide key={psychologist?._id}>
              <div
                className="flip-card-container perspective-1000"
                onMouseEnter={() => setHoveredCard(psychologist._id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => toggleFlip(psychologist._id)}
              >
                <div
                  className={`flip-card-inner ${
                    flippedCardId === psychologist._id ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front Side */}
                  <div className="flip-card-front">
                    <div className="flex flex-col items-center justify-center mt-6 w-full h-full text-center">
                      <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center mb-4">
                        <div className="absolute w-42 h-40 rounded-full bg-[#9EE0D6] backdrop-blur-sm shadow-2xl z-0 mt-[33px]"></div>
                        <div className="relative w-50 h-55 flex items-center justify-center z-20">
                          <img
                            src={
                              psychologist?.imageUrl ||
                              "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg" ||
                              "/placeholder.svg" ||
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
                      <h2 className="text-lg sm:text-xl font-bold text-teal">
                        {psychologist.name || "Unknown Doctor"}
                      </h2>
                      <p className="text-teal/90 text-sm mb-2">
                        {psychologist.specialization || "General Psychology"}
                      </p>
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBookNow(psychologist);
                        }}
                        className="w-full max-w-[150px] bg-teal-600 hover:bg-teal-700 text-white text-xs py-2 h-8 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                  {/* Back Side */}
                  <div className="flip-card-back">
                    <div className="bg-gradient-to-br from-teal-50 via-white to-blue-50 rounded-2xl p-4 shadow-xl border border-teal-200 flex flex-col h-full">
                      <div className="text-center mb-3">
                        <div className="w-16 h-16 mx-auto mb-2 rounded-full bg-gradient-to-br from-teal-100 to-blue-100 flex items-center justify-center shadow-md">
                          <img
                            src={
                              psychologist?.imageUrl ||
                              "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg" ||
                              "/placeholder.svg"
                            }
                            alt={psychologist?.name || "Psychologist"}
                            className="w-14 h-14 object-cover rounded-full border border-white"
                          />
                        </div>
                        <h3 className="text-base font-bold text-teal-800 mb-1">
                          {psychologist.name || "Dr. Unknown"}
                        </h3>
                        <p className="text-xs text-teal-600 font-medium">
                          {psychologist.specialization || "General Psychology"}
                        </p>
                      </div>
                      <div className="flex-1 space-y-2 text-xs">
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-3 h-3 mr-2 text-teal-500" />
                          <span>{psychologist?.experience} experience</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="w-3 h-3 mr-2 text-red-500" />
                          <span>Online</span>
                        </div>
                        {Array.isArray(psychologist?.languages) && (
                          <div className="flex items-center text-gray-600">
                            <Globe className="w-3 h-3 mr-2 text-purple-500" />
                            <span>{psychologist.languages.join(", ")}</span>
                          </div>
                        )}
                      </div>
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBookNow(psychologist);
                        }}
                        className="w-full mt-4 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white text-xs py-2 h-9 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                      >
                        <Calendar className="w-3 h-3 mr-1" />
                        Book Now
                      </Button>
                    </div>
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
            swiperRef.current?.slidePrev();
          }}
          className="absolute rounded-full left-0 md:-left-16 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-2 border-gray-200 text-teal-600 hover:text-teal-700 z-20 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            swiperRef.current?.slideNext();
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
          height: 360px; /* Reverted height */
          width: 100%;
          max-width: 220px; /* Reverted max-width */
          margin: 0 auto;
          overflow: hidden;
          /* Enhanced for mobile flip */
          -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
          -webkit-perspective: 1000px;
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
          /* Force hardware acceleration */
          will-change: transform;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          /* Enhanced for mobile */
          -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
          /* Prevent flickering on mobile */
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .flip-card-back {
          transform: rotateY(180deg);
          -webkit-transform: rotateY(180deg);
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

        /* Enhanced mobile fixes */
        .swiper-slide {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          /* Prevent transform conflicts */
          transform-style: flat;
          -webkit-transform-style: flat;
        }

        .swiper-slide img {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
          /* Prevent image flickering */
          -webkit-font-smoothing: antialiased;
        }

        /* Mobile-specific flip card fixes */
        @media (max-width: 768px) {
          .flip-card-container {
            /* Stronger perspective for mobile */
            -webkit-perspective: 1200px;
            perspective: 1200px;
          }

          .flip-card-inner {
            /* Smoother transition on mobile */
            transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            /* Force GPU acceleration */
            transform: translateZ(0);
            -webkit-transform: translateZ(0);
          }

          .flip-card-front,
          .flip-card-back {
            /* Prevent double-sided rendering on mobile */
            -webkit-backface-visibility: hidden !important;
            backface-visibility: hidden !important;
            /* Force layer creation */
            transform: translateZ(0);
            -webkit-transform: translateZ(0);
          }

          /* Ensure proper z-index during flip */
          .flip-card-inner.rotate-y-180 .flip-card-front {
            z-index: 1;
          }

          .flip-card-inner.rotate-y-180 .flip-card-back {
            z-index: 2;
          }

          .flip-card-inner:not(.rotate-y-180) .flip-card-front {
            z-index: 2;
          }

          .flip-card-inner:not(.rotate-y-180) .flip-card-back {
            z-index: 1;
          }
        }

        /* Prevent conflicts between Swiper 3D and flip card 3D */
        .swiper-slide-active .flip-card-container,
        .swiper-slide-next .flip-card-container,
        .swiper-slide-prev .flip-card-container {
          /* Isolate flip card transforms from Swiper transforms */
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
        }
      `}</style>
      <PsychologistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={selectedPsychologist}
      />
    </div>
  );
}
