"use client";

import { useCallback, useEffect, useState } from "react";
import { Psychologist } from "@/types/psychologist";
import { useCarousel } from "@/hooks/use-carousel";
import { CarouselHeader } from "./carousel-header";
import { CarouselContainer } from "./carousel-container";
import { CarouselControls } from "./carousel-controls";
// import { CarouselStats } from "./carousel-stats";
import axios from "axios";
import { PsychologistModal } from "../Modal/PsychologistModal";

export default function PsychologistCarousel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [psychologist, setPsychologist] = useState<Psychologist>({
    _id: "",
    name: "",
    specialization: "",
    monthlySlots: [],
    imageUrl: "",
  });
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
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/psychologists`
      );

      setData(response?.data);
    } catch (error) {
      console.log(error);
      alert("tecnical issue");
    }
  };

  useEffect(() => {
    fetchPsychologists();
  }, []);

  const handleBookNow = useCallback((psychologist: Psychologist) => {
    console.log("Booking consultation with:", psychologist.name);
    setIsModalOpen(true);
    setPsychologist(psychologist);
    // Add your booking logic here
  }, []);

  return (
    <section className="py-16 bg-white overflow-hidden" id="psychologists">
      <div className="container mx-auto">
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

        {/* <CarouselStats /> */}
      </div>
      {isModalOpen && (
        <PsychologistModal
          isOpen={true}
          onClose={() => setIsModalOpen(false)}
          data={psychologist}
        />
      )}
    </section>
  );
}
