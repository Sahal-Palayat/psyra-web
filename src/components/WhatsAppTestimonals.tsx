"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { testimonials } from "@/constants/testimonals";
import { SectionHeader } from "./SectionTitle";
import Image from "next/image";

// const DoubleCheckIcon = ({ className }: { className?: string }) => (
//   <svg className={className} fill="currentColor" viewBox="0 0 24 24">
//     <path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z" />
//   </svg>
// );

const ChevronLeftIcon = ({ className }: { className?: string }) => (
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

const ChevronRightIcon = ({ className }: { className?: string }) => (
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

export const WhatsAppTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    // On mobile: show 1, on desktop: show 3
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const visibleCount = isMobile ? 1 : 3;
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push({ ...testimonials[index], key: `${currentIndex}-${i}` });
    }
    return result;
  };

  return (
    <div className="bg-[#F7F8F2] py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <SectionHeader>What People Say About Us</SectionHeader>

          <p className="text-gray-600 mt-2 text-sm">
            Real conversations with our happy psymates
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 transition-all duration-200 hover:scale-110 flex items-center justify-center"
            aria-label="Previous testimonials"
          >
            <ChevronLeftIcon className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 md:p-3 transition-all duration-200 hover:scale-110 flex items-center justify-center"
            aria-label="Next testimonials"
          >
            <ChevronRightIcon className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
          </button>

          <div className="px-8 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center">
              {getVisibleTestimonials().map((testimonial) => (
                <div key={testimonial.key} className="w-full max-w-sm flex">
                  <div className="bg-white rounded-xl shadow-lg p-5 relative border border-gray-100 w-full transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 flex flex-col h-full min-h-[320px]">
                    {/* Top-right highlighted corner */}
                    <div
                      className="absolute top-0 right-0 h-5 w-5 border-t-4 border-r-4 rounded-tr-lg"
                      style={{ borderColor: "#00989D" }}
                    ></div>

                    {/* Bottom-left highlighted corner */}
                    <div
                      className="absolute bottom-0 left-0 h-5 w-5 border-b-4 border-l-4 rounded-bl-lg"
                      style={{ borderColor: "#00989D" }}
                    ></div>

                    {/* User photo */}
                    <div className="flex justify-center mb-3">
                      {testimonial.imageUrl ? (
                        <Image
                          src={testimonial.imageUrl}
                          alt="User photo"
                          width={64}
                          height={64}
                          className="rounded-full object-cover border-2 border-[#00989D]"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-[#00989D] border-2 border-[#00989D] flex items-center justify-center">
                          <span className="text-white text-xl font-semibold">
                            {testimonial.name?.charAt(0)?.toUpperCase() || "U"}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* User name */}
                    <h3 className="text-center text-[#00989D] font-semibold mb-3 min-h-[20px]">
                      {testimonial.hideName
                        ? `${testimonial.name?.charAt(0) ?? "U"}****`
                        : testimonial.name}
                    </h3>

                    {/* Review text - scrollable if too long */}
                    <div className="flex-1 flex items-start justify-center mb-4 overflow-hidden">
                      <p className="text-gray-700 text-sm text-center leading-relaxed break-words max-h-[140px] overflow-y-auto px-2">
                        {testimonial.messages[0]?.text}
                      </p>
                    </div>

                    {/* Star rating row */}
                    <div className="flex justify-center space-x-1 mt-auto">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-4 h-4 text-[#00989D]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.21 3.72a1 1 0 00.95.69h3.905c.969 0 1.371 1.24.588 1.81l-3.158 2.296a1 1 0 00-.364 1.118l1.21 3.72c.3.921-.755 1.688-1.538 1.118l-3.158-2.296a1 1 0 00-1.176 0l-3.158 2.296c-.783.57-1.838-.197-1.538-1.118l1.21-3.72a1 1 0 00-.364-1.118L2.296 9.147c-.783-.57-.38-1.81.588-1.81h3.905a1 1 0 00.95-.69l1.21-3.72z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#00989D] scale-110" // #25D366
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="text-center mt-10">
        <p className="text-gray-600 italic text-[12px] md:text-xl">
          “Some profiles are not displayed due to privacy reasons.”
        </p>
      </div>
    </div>
  );
};
