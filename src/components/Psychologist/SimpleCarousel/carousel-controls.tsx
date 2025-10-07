"use client";

import { CarouselDots } from "./carousel-dots";

interface CarouselControlsProps {
  total: number;
  current: number;
  onDotClick: (index: number) => void;
}

export function CarouselControls({
  total,
  current,
  onDotClick,
}: CarouselControlsProps) {
  return (
    <div className="flex items-center justify-center gap-6 mt-8">
      <CarouselDots total={total} current={current} onDotClick={onDotClick} />
    </div>
  );
}
