"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface UseCarouselProps {
  totalItems: number;
  autoPlayInterval?: number;
}

export function useCarousel({
  totalItems,
  autoPlayInterval = 100000,
}: UseCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
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
    if (!isAutoPlay || totalItems <= 1) return;

    clearAutoPlay();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, autoPlayInterval);
  }, [isAutoPlay, totalItems, autoPlayInterval, clearAutoPlay]);

  // Auto play effect
  useEffect(() => {
    startAutoPlay();
    return clearAutoPlay;
  }, [startAutoPlay, clearAutoPlay]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
    // Reset auto play timer when user interacts
    if (isAutoPlay) {
      startAutoPlay();
    }
  }, [totalItems, isAutoPlay, startAutoPlay]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
    // Reset auto play timer when user interacts
    if (isAutoPlay) {
      startAutoPlay();
    }
  }, [totalItems, isAutoPlay, startAutoPlay]);

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      // Reset auto play timer when user interacts
      if (isAutoPlay) {
        startAutoPlay();
      }
    },
    [isAutoPlay, startAutoPlay]
  );

  return {
    currentIndex,
    isAutoPlay,
    nextSlide,
    prevSlide,
    goToSlide,
  };
}
