"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { testimonials } from "@/constants/testimonals";
import { SectionHeader } from "./SectionTitle";

const DoubleCheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z" />
  </svg>
);

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
            Real conversations with our happy customers
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
                <div
                  key={testimonial.key}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 w-full max-w-sm"
                >
                  {/* Chat Header */}
                  <div className="bg-[#075E54] text-white p-4 flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 border-2 border-white/20 flex items-center justify-center shadow-inner">
                        <svg
                          className="w-6 h-6 text-gray-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm truncate">
                        {testimonial.hideName
                          ? testimonial.name[0] + "****"
                          : testimonial.name}
                      </h3>
                    </div>

                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                      <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                      <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                    </div>
                  </div>

                  <div className="bg-[#E5DDD5] h-48 p-3 space-y-2 relative overflow-hidden">
                    {/* WhatsApp background pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div
                        className="w-full h-full"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                      ></div>
                    </div>

                    <div className="relative z-10 space-y-2 h-full overflow-y-auto">
                      {testimonial.messages.map((message, msgIndex) => (
                        <div
                          key={msgIndex}
                          className={`flex ${
                            message.isUser ? "justify-end" : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-[85%] px-3 py-2 rounded-lg shadow-sm relative text-xs ${
                              message.isUser
                                ? "bg-[#DCF8C6] text-gray-800 rounded-br-none"
                                : "bg-white text-gray-800 rounded-bl-none"
                            }`}
                          >
                            <p className="leading-relaxed">{message.text}</p>
                            <div
                              className={`flex items-center justify-end mt-1 space-x-1 ${
                                message.isUser
                                  ? "text-gray-600"
                                  : "text-gray-500"
                              }`}
                            >
                              <span className="text-xs">{message.time}</span>
                              {message.isUser && (
                                <DoubleCheckIcon className="w-3 h-3 text-blue-500" />
                              )}
                            </div>
                            {/* Message tail */}
                            <div
                              className={`absolute bottom-0 w-0 h-0 ${
                                message.isUser
                                  ? "right-0 border-l-[6px] border-l-[#DCF8C6] border-b-[6px] border-b-transparent"
                                  : "left-0 border-r-[6px] border-r-white border-b-[6px] border-b-transparent"
                              }`}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#F0F0F0] p-3 flex items-center space-x-2">
                    <div className="flex-1 bg-white rounded-full px-3 py-1.5 flex items-center">
                      <span className="text-gray-400 text-xs">
                        Type a message...
                      </span>
                    </div>
                    <button className="bg-[#25D366] text-white p-1.5 rounded-full hover:bg-[#20B858] transition-colors duration-200">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                    </button>
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
                  ? "bg-[#25D366] scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="text-center mt-10">
        <p className="text-gray-600 italic text-lg">
          “Some profiles are not displayed due to privacy reasons.”
        </p>
      </div>
    </div>
  );
};
