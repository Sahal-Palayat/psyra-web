"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { useState } from "react"

const cardData = [
  {
    title: "Mountain View",
    description: "Experience the serene beauty of the mountains.",
    image: "/placeholder.svg?height=200&width=300&text=Mountain",
  },
  {
    title: "City Lights",
    description: "Explore the vibrant city life at night.",
    image: "/placeholder.svg?height=200&width=300&text=City",
  },
  {
    title: "Beach Escape",
    description: "Relax by the beach with a cool breeze.",
    image: "/placeholder.svg?height=200&width=300&text=Beach",
  },
  {
    title: "Forest Trail",
    description: "Wander through the peaceful forest paths.",
    image: "/placeholder.svg?height=200&width=300&text=Forest",
  },
  {
    title: "Desert Sunset",
    description: "Watch the sun set over golden sand dunes.",
    image: "/placeholder.svg?height=200&width=300&text=Desert",
  },
  {
    title: "Ocean Waves",
    description: "Listen to the rhythmic sound of ocean waves.",
    image: "/placeholder.svg?height=200&width=300&text=Ocean",
  },
  {
    title: "Snowy Peaks",
    description: "Marvel at the pristine white mountain peaks.",
    image: "/placeholder.svg?height=200&width=300&text=Snow",
  },
  {
    title: "Tropical Paradise",
    description: "Discover the beauty of tropical islands.",
    image: "/placeholder.svg?height=200&width=300&text=Tropical",
  },
]

export default function SwiperPyramid() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="w-full py-12 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-white bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          3D Pyramid Carousel
        </h1>

        <div className="pyramid-3d-container">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            loopAdditionalSlides={3}
            watchSlidesProgress={true}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex)
              console.log("slide change", swiper.realIndex)
            }}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              768: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            className="!overflow-visible pyramid-swiper"
          >
            {cardData.map((card, index) => (
              <SwiperSlide key={index} className="!h-auto">
                {({ isActive, isPrev, isNext }) => {
                  let slideClass = ""
                  let cardTransform = ""

                  if (isActive) {
                    slideClass = "slide-active"
                    cardTransform = "transform-none scale-110"
                  } else if (isPrev) {
                    slideClass = "slide-prev"
                    cardTransform = "pyramid-left scale-90"
                  } else if (isNext) {
                    slideClass = "slide-next"
                    cardTransform = "pyramid-right scale-90"
                  } else {
                    slideClass = "slide-far"
                    cardTransform = "pyramid-far scale-75"
                  }

                  return (
                    <div className={`pyramid-slide ${slideClass}`}>
                      <div className={`card-3d ${cardTransform}`}>
                        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mx-auto max-w-sm hover:shadow-purple-500/25 transition-all duration-500 border border-white/10">
                          <div className="relative overflow-hidden">
                            <img
                              src={card.image || "/placeholder.svg"}
                              alt={card.title}
                              className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10" />
                            <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                          </div>
                          <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                            <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-1">{card.title}</h3>
                            <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">{card.description}</p>
                            <div className="mt-4 flex items-center justify-between">
                              <div className="flex space-x-1">
                                {[...Array(5)].map((_, i) => (
                                  <div
                                    key={i}
                                    className={`w-1 h-1 rounded-full ${i < 4 ? "bg-yellow-400" : "bg-gray-300"}`}
                                  />
                                ))}
                              </div>
                              <button className="text-blue-500 text-xs font-medium hover:text-blue-600 transition-colors">
                                Explore →
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Enhanced Navigation dots */}
        <div className="flex justify-center mt-12 space-x-3">
          {cardData.map((_, index) => (
            <button
              key={index}
              className={`
                relative transition-all duration-500 hover:scale-125
                ${
                  index === activeIndex
                    ? "w-8 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg shadow-blue-500/50"
                    : "w-3 h-3 bg-white/30 rounded-full hover:bg-white/50"
                }
              `}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === activeIndex && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse opacity-75" />
              )}
            </button>
          ))}
        </div>

        {/* 3D Status indicator */}
        <div className="text-center mt-6">
          <p className="text-sm text-white/70">✨ 3D Pyramid Effect • Infinite Loop • {cardData.length} slides total</p>
        </div>
      </div>
    </div>
  )
}
