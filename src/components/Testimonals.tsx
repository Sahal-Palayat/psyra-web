"use client";

import type React from "react";
import { useRef, useState, useEffect } from "react";
import { SectionHeader } from "./SectionTitle";
import Image from "next/image";

// Sample testimonials data (since the external import might not exist)
const testimonials = [
  {
    quote: "This product has completely transformed how we work.",
    name: "Sarah Johnson",
    designation: "CEO",
    company: {
      name: "TechCorp",
      logo: "https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    quote: "Outstanding service and incredible attention to detail.",
    name: "Michael Chen",
    designation: "Product Manager",
    company: {
      name: "InnovateLab",
      logo: "https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    imageUrl:
      "https://st3.depositphotos.com/29384342/34115/i/450/depositphotos_341157888-stock-photo-recommendation-sports-student.jpg",
  },
  {
    quote: "The best investment we've made for our business.",
    name: "Emily Rodriguez",
    designation: "Founder",
    company: {
      name: "StartupXYZ",
      logo: "https://images.pexels.com/photos/3363967/pexels-photo-3363967.jpeg",
    },
    imageUrl:
      "https://images.pexels.com/photos/3363967/pexels-photo-3363967.jpeg",
  },
];

// Custom Arrow Components (replacing react-icons dependency)
const ArrowLeft = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

const ArrowRight = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

export const TestimonialsSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  useEffect(() => {
    const startAutoplay = () => {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 4000);
    };

    startAutoplay();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const nextSlide = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      setAnimating(false);
    }, 250);
  };

  const prevSlide = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrentSlide(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
      setAnimating(false);
    }, 250);
  };

  const pauseAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const resumeAutoplay = () => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 4000);
  };

  return (
    <main className="lg:min-h-screen  xl:min-h-screen bg-teal-500 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4"></h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {
              "Don't just take our word for it. Here's what real customers have to say about their experience."
            }{" "}
          </p>
        </div>
        <div className="flex w-full max-w-4xl mx-auto px-4">
          <div className="w-full">
            <div className="relative mx-auto">
              <div className="relative">
                {/* Background Cards */}
                <div
                  className={`absolute w-full h-[180px] xl:h-[280px] lg:h-[280px] border border-gray-200 shadow-lg bg-white rounded-lg transform transition-all duration-500 ease-in-out ${
                    animating
                      ? "-rotate-6 translate-x-8 translate-y-2 scale-95 opacity-80"
                      : "-rotate-3 translate-x-4 translate-y-1 scale-[0.98] opacity-90"
                  }`}
                />

                <div
                  className={`absolute w-full h-[180px] xl:h-[270px] lg:h-[260px] border border-gray-200 shadow-lg bg-white rounded-lg transform transition-all duration-500 ease-in-out ${
                    animating
                      ? "rotate-8 translate-x-6 translate-y-4 scale-96 opacity-70"
                      : "rotate-4 translate-x-3 translate-y-2 scale-[0.99] opacity-85"
                  }`}
                />

                <div
                  className={`absolute w-full h-[180px] xl:h-[200px] lg:h-[200px] border border-gray-200 shadow-lg bg-white rounded-lg transform transition-all duration-500 ease-in-out ${
                    animating
                      ? "-rotate-4 translate-x-4 translate-y-6 scale-97 opacity-60"
                      : "-rotate-2 translate-x-2 translate-y-3 scale-[0.995] opacity-75"
                  }`}
                />
              </div>

              <div className="relative z-20">
                {/* Navigation Arrows */}
                <button
                  className="absolute top-1/2 right-[-20px] transform -translate-y-1/2 bg-white border border-gray-300 hover:border-gray-400 p-2 md:p-3 rounded-lg cursor-pointer z-30 shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={nextSlide}
                  disabled={animating}
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
                </button>

                <button
                  className="absolute top-1/2 left-[-20px] transform -translate-y-1/2 bg-white border border-gray-300 hover:border-gray-400 p-2 md:p-3 rounded-lg cursor-pointer z-30 shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={prevSlide}
                  disabled={animating}
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="h-4 w-4 md:h-5 md:w-5 text-gray-600" />
                </button>

                <div
                  className="shadow-2xl rounded-lg overflow-hidden bg-white border border-gray-100"
                  onMouseEnter={pauseAutoplay}
                  onMouseLeave={resumeAutoplay}
                >
                  <div className="relative">
                    <div
                      className={`transition-opacity duration-500 ${
                        animating ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      <div className="bg-white rounded-lg p-6 md:p-8">
                        <div className="flex items-center justify-between flex-row gap-4 md:gap-6">
                          {/* Content Section */}
                          <div className="w-3/5 md:w-3/5 flex-1">
                            <blockquote className="text-sm md:text-xl font-medium text-gray-800 leading-relaxed mb-4 md:mb-6">
                             { "{testimonials[currentSlide].quote}"}
                            </blockquote>

                            <div className="space-y-2 md:space-y-3">
                              <p className="text-xs md:text-lg">
                                <span className="font-semibold text-gray-900">
                                  {testimonials[currentSlide].name}
                                </span>
                                {testimonials[currentSlide].designation && (
                                  <span className="text-gray-600 ml-1 md:ml-2">
                                    | {testimonials[currentSlide].designation}
                                  </span>
                                )}
                              </p>

                              {testimonials[currentSlide].company.logo && (
                                <Image
                                  src={
                                    testimonials[currentSlide].company.logo ||
                                    "/placeholder.svg" ||
                                    "/placeholder.svg"
                                  }
                                  alt={testimonials[currentSlide].company.name}
                                  className="h-6 md:h-12 object-contain"
                                />
                              )}
                            </div>
                          </div>

                          {/* Image Section */}
                          {testimonials[currentSlide].imageUrl && (
                            <div className="w-2/5 md:w-2/5 flex justify-center md:justify-end">
                              <div className="relative">
                                <Image
                                  src={
                                    testimonials[currentSlide].imageUrl ||
                                    "/placeholder.svg" ||
                                    "/placeholder.svg"
                                  }
                                  alt={testimonials[currentSlide].name}
                                  className="w-20 h-20 md:w-40 md:h-40 object-cover rounded-full border-2 md:border-4 border-gray-100 shadow-lg"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dots Indicator */}
                  <div className="flex justify-center space-x-2 pb-4">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === currentSlide ? "bg-gray-600" : "bg-gray-300"
                        }`}
                        onClick={() => {
                          if (!animating) {
                            setAnimating(true);
                            setTimeout(() => {
                              setCurrentSlide(index);
                              setAnimating(false);
                            }, 250);
                          }
                        }}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
