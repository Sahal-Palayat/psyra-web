"use client";

import { useEffect, useState } from "react";
import { Psychologist } from "@/types/psychologist";
// import { useCarousel } from "@/hooks/use-carousel";
import { CarouselHeader } from "./carousel-header";
// import { CarouselContainer } from "./carousel-container";
// import { CarouselControls } from "./carousel-controls";
import axios from "axios";
// import { PsychologistModal } from "../Modal/PsychologistModal";
import Carousel3DMinimal from "@/components/Swiper";
import { toast } from "@/lib/toast";

export default function PsychologistCarousel() {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [psychologist, setPsychologist] = useState<Psychologist>({
  //   _id: "",
  //   name: "",
  //   specialization: "",
  //   monthlySlots: [],
  //   imageUrl: "",
  //   experience: "",
  //   expertise: [],
  //   languages: [],
  // });
  const [data, setData] = useState<Psychologist[]>([
    {
      _id: "",
      name: "",
      specialization: "",
      monthlySlots: [],
      imageUrl: "",
      experience: "",
      expertise: [],
      languages: [],
    },
  ]);
  // const { currentIndex, nextSlide, prevSlide, goToSlide } = useCarousel({
  //   totalItems: data?.length,
  // });

  const fetchPsychologists = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/psychologists`
      );

      const shuffledData = response?.data.sort(() => Math.random() - 0.5);

      setData(shuffledData);
      // setPsychologist(response?.data);
    } catch (error) {
      console.log(error);
      toast.error("Technical issue");
    }
  };

  useEffect(() => {
    fetchPsychologists();
  }, []);

  // const handleBookNow = useCallback((psychologist: Psychologist) => {
  //   console.log("Booking consultation with:", psychologist.name);
  //   setIsModalOpen(true);
  //   setPsychologist(psychologist);
  //   // Add your booking logic here
  // }, []);

  return (
    <section id="psychologists bg-[#F7F8F2]">
      <div className="container mx-auto mt-18">
        <CarouselHeader />

        <Carousel3DMinimal data={data} />
      </div>
      {/* {isModalOpen && (
        <PsychologistModal
          isOpen={true}
          onClose={() => setIsModalOpen(false)}
          data={psychologist}
        />
      )} */}
    </section>
  );
}
