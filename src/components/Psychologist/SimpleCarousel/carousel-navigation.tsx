"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
}

export function CarouselNavigation({
  onPrevious,
  onNext,
}: CarouselNavigationProps) {
  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={onPrevious}
        className="absolute rounded-full md:left-20 left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-2 border-gray text-teal-600 hover:text-teal-700 z-20"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={onNext}
        className="absolute rounded-full md:right-20 right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-2 border-gray text-teal-600 hover:text-teal-700 z-20"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </>
  );
}
