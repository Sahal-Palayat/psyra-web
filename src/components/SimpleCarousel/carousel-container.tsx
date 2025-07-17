"use client";

import { motion, AnimatePresence } from "framer-motion";
import { PsychologistCard } from "./psychologist-card";
import { CarouselNavigation } from "./carousel-navigation";
import { Psychologist } from "@/types/psychologist";
// import type { Psychologist } from "../types/psychologist";

interface CarouselContainerProps {
  data: Psychologist[];
  currentIndex: number;
  onBookNow: (psychologist: Psychologist) => void;
  onPrevious: () => void;
  onNext: () => void;
}

export function CarouselContainer({
  data,
  currentIndex,
  onBookNow,
  onPrevious,
  onNext,
}: CarouselContainerProps) {
  console.log("CarouselContainer - Data:", data);
  console.log("CarouselContainer - Current Index:", currentIndex);

  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[500px]">
        <p className="text-gray-500">No psychologists to display</p>
      </div>
    );
  }

  const getVisibleCards = () => {
    const cards = [];
    // Show 5 cards: 2 left, 1 center (active), 2 right
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + data.length) % data.length;
      const psychologist = data[index];

      if (psychologist) {
        cards.push({
          psychologist,
          isActive: i === 0,
          isPrev: i === -1,
          isNext: i === 1,
          isFarLeft: i === -2,
          isFarRight: i === 2,
          position: i,
        });
      }
    }
    console.log("Visible Cards:", cards);
    return cards;
  };

  const getCardScale = (position: number) => {
    switch (position) {
      case 0:
        return 1; // Active card
      case -1:
      case 1:
        return 0.85; // Adjacent cards
      case -2:
      case 2:
        return 0.7; // Far cards
      default:
        return 0.7;
    }
  };

  const getCardOpacity = (position: number) => {
    switch (position) {
      case 0:
        return 1; // Active card
      case -1:
      case 1:
        return 0.8; // Adjacent cards
      case -2:
      case 2:
        return 0.5; // Far cards
      default:
        return 0.5;
    }
  };

  const getCardZIndex = (position: number) => {
    return 10 - Math.abs(position);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-center min-h-[500px] relative overflow-hidden">
        <AnimatePresence mode="wait">
          {getVisibleCards().map(
            ({
              psychologist,
              isActive,
              isPrev,
              isNext,
              isFarLeft,
              isFarRight,
              position,
            }) => (
              <motion.div
                key={`${psychologist.name}-${currentIndex}`}
                initial={{
                  opacity: 0,
                  x: position * 150,
                  scale: 0.6,
                }}
                animate={{
                  opacity: getCardOpacity(position),
                  x: position * 180, // Adjusted spacing for 5 cards
                  scale: getCardScale(position),
                  zIndex: getCardZIndex(position),
                }}
                exit={{
                  opacity: 0,
                  x: position * -150,
                  scale: 0.6,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute"
              >
                <PsychologistCard
                  psychologist={psychologist}
                  isActive={isActive}
                  isPrev={isPrev}
                  isNext={isNext}
                //   isFarLeft={isFarLeft}
                //   isFarRight={isFarRight}
                  onBookNow={onBookNow}
                />
              </motion.div>
            )
          )}
        </AnimatePresence>
      </div>

      <CarouselNavigation onPrevious={onPrevious} onNext={onNext} />
    </div>
  );
}
