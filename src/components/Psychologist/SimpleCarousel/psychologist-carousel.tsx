"use client";

import { useCallback, useEffect, useState } from "react";
import { Psychologist } from "@/types/psychologist";
import { useCarousel } from "@/hooks/use-carousel";
import { CarouselHeader } from "./carousel-header";
import { CarouselContainer } from "./carousel-container";
import { CarouselControls } from "./carousel-controls";
import { CarouselStats } from "./carousel-stats";
import axios from "axios";

export default function PsychologistCarousel() {
  const [data, setData] = useState<Psychologist[]>([
    {
      _id: "",
      name: "",
      specialization: "",
      monthlySlots: [],
      imageUrl: "",
    },
  ]);
  const { currentIndex, nextSlide, prevSlide, goToSlide } = useCarousel({
    totalItems: data?.length,
  });

  const fetchPsychologists = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/psychologists`
    );

    console.log(response, "RESPONSEEE");
    setData(response?.data);
  };

  useEffect(() => {
    fetchPsychologists();
  }, []);

  const handleBookNow = useCallback((psychologist: Psychologist) => {
    console.log("Booking consultation with:", psychologist.name);
    // Add your booking logic here
  }, []);
  

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <CarouselHeader />

        <CarouselContainer
          data={data}
          currentIndex={currentIndex}
          onBookNow={handleBookNow}
          onPrevious={prevSlide}
          onNext={nextSlide}
        />

        <CarouselControls
          total={data.length}
          current={currentIndex}
          onDotClick={goToSlide}
        />

        <CarouselStats />
      </div>
    </section>
  );
}
