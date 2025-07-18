"use client";

import { CardProps } from "@/types/psychologist";
import { motion } from "framer-motion";
import { useState } from "react";
import { PsychologistModal } from "../Modal/PsychologistModal";

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
    <>
      <div
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
      >
        <div className="flex flex-col items-center justify-center mt-6  w-full h-full text-center">
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
                className="w-50 h-50 object-cover rounded-full relative z-10"
              />

              {/* Image in the front */}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center mt-6">
            <>
              <h2 className="text-lg sm:text-xl font-bold text-teal mb-1">
                {psychologist.name || "Unknown Doctor"}
              </h2>

              <p className="text-teal/90 text-sm mb-2">
                {psychologist.specialization || "General Psychology"}
              </p>
            </>
            {isActive && (
              <motion.button
                onClick={() => {
                  onBookNow(psychologist);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white py-2 px-8 sm:px-12 text-[#005657] rounded-full text-xs sm:text-sm font-medium border border-black shadow-sm hover:bg-teal-100 transition-colors"
              >
                Book Consultation
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
