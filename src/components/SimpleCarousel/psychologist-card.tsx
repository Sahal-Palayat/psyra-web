"use client";

import { CardProps } from "@/types/psychologist";
import { motion } from "framer-motion";

export function PsychologistCard({
  psychologist,
  isActive,
  isPrev,
  isNext,
  onBookNow,
}: CardProps) {
  console.log("PsychologistCard - Psychologist:", psychologist);

  if (!psychologist) {
    return (
      <div className="w-[280px] sm:w-[320px] h-[400px] sm:h-[440px] bg-gray-200 rounded-xl flex items-center justify-center">
        <p className="text-gray-500">No data available</p>
      </div>
    );
  }

  return (
    <div
      className={`
        relative w-[280px] sm:w-[320px] h-[400px] sm:h-[440px] transition-all duration-800 ease-out transform rounded-xl p-4 sm:p-6
        flex flex-col items-center justify-center text-center bg-[#00989D] shadow-xl
        ${isActive ? "scale-110 z-10" : "scale-95"}
        ${isActive ? "brightness-110 saturate-120" : "brightness-90"}
      `}
      style={{
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }}
    >
      <div className="flex flex-col items-center justify-center w-full h-full text-center">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center mb-4">
          {/* Circular glow behind the image */}
          <div className="relative w-50 h-55  flex items-center justify-center">
            {/* Circular glow behind the image */}
            <div className="absolute w-42 h-40 rounded-full bg-[#9EE0D6] backdrop-blur-md shadow-2xl z-0  mt-[33px]"></div>
            <img
              src={
                psychologist?.imageUrl ||
                "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
              }
              alt="ALTERNATIVE IMAGE"
              className="w-40 h-50 object-cover rounded-full relative z-10"
            />

            {/* Image in the front */}
          </div>
        </div>

        <h2 className="text-lg sm:text-xl font-bold text-white mb-1">
          {psychologist.name || "Unknown Doctor"}
        </h2>

        <p className="text-white/90 text-sm mb-2">
          {psychologist.specialization || "General Psychology"}
        </p>
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
      />

      {isActive && (
        <motion.button
          onClick={() => onBookNow(psychologist)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-white py-2 px-8 sm:px-12 text-[#005657] rounded-full text-xs sm:text-sm font-medium border border-teal-200 shadow-sm hover:bg-teal-100 transition-colors"
        >
          Book Consultation
        </motion.button>
      )}
    </div>
  );
}
