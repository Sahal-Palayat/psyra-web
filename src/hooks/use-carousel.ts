"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface UseCarouselProps {
  totalItems: number;
  autoPlayInterval?: number;
}

export function useCarousel({
  totalItems,
  autoPlayInterval = 4000,
}: UseCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Clear existing interval
  const clearAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Start auto play
  const startAutoPlay = useCallback(() => {
    if (totalItems <= 1) return;

    clearAutoPlay();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, autoPlayInterval);
  }, [totalItems, autoPlayInterval, clearAutoPlay]);

  // Auto play effect
  useEffect(() => {
    startAutoPlay();
    return clearAutoPlay;
  }, [startAutoPlay, clearAutoPlay]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
    // Reset auto play timer when user interacts
  }, [totalItems, startAutoPlay]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems, startAutoPlay]);

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      console.log("RAFNASNALSKALSJKAL");
      
      // Reset auto play timer when user interacts
    },
    [startAutoPlay]
  );

  return {
    currentIndex,
    nextSlide,
    prevSlide,
    goToSlide,
  };
}
