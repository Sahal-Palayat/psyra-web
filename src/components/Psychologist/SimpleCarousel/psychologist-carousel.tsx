"use client";
import { useState } from "react";
import { Psychologist } from "@/types/psychologist";
// import { useCarousel } from "@/hooks/use-carousel";
import { CarouselHeader } from "./carousel-header";
// import { CarouselContainer } from "./carousel-container";
// import { CarouselControls } from "./carousel-controls";
import axios from "axios";
// import { PsychologistModal } from "../Modal/PsychologistModal";
import Carousel3DMinimal from "@/components/Swiper";

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
  const [data] = useState<Psychologist[]>([
    {
      _id: "687a41a59c601751727e7b1c",
      name: "Pooja K",
      specialization: "Consultant Psychologist",
      monthlySlots: [], // put actual slots if needed
      imageUrl:
        "https://pebby-uplods.s3.us-east-1.amazonaws.com/uploads/0d904bda-d629-42d3-8e3f-89d043404bb2.png",
      experience: "2 years",
      expertise: [], // put expertise values if needed
      languages: [],
    },
    {
      _id: "687a42319c601751727e7b1f",
      name: "Raeesa Fida",
      specialization: "Life Coach",
      monthlySlots: [],
      imageUrl:
        "https://pebby-uplods.s3.us-east-1.amazonaws.com/uploads/22b3aa05-5fac-47b9-a744-13c11e844b09.png",
      experience: "2 years",
      expertise: [],
      languages: [],
    },
    {
      _id: "687a452a9c601751727e7b26",
      name: "Gayathri I U",
      specialization: "Consultant Psychologist",
      monthlySlots: [],
      imageUrl:
        "https://pebby-uplods.s3.us-east-1.amazonaws.com/uploads/2e92a7c7-0053-4dbe-b832-4e85b8fc55e7.png",
      experience: "1+ Years",
      expertise: [],
      languages: [],
    },
    {
      _id: "687a462c9c601751727e7b29",
      name: "Sona Anil",
      specialization: "Consultant Psychologist",
      monthlySlots: [],
      imageUrl:
        "https://pebby-uplods.s3.us-east-1.amazonaws.com/uploads/3d9feaeb-5861-4b27-a397-87dbd5d0b368.png",
      experience: "1+ Years",
      expertise: [],
      languages: [],
    },
    {
      _id: "687a4dd49c601751727e7b32",
      name: "Risana Parvin N",
      specialization: "Consultant Psychologist",
      monthlySlots: [],
      imageUrl:
        "https://pebby-uplods.s3.us-east-1.amazonaws.com/uploads/278903a6-d365-42fb-ad44-5872c61bc155.png",
      experience: "1+ Years",
      expertise: [],
      languages: [],
    },
      {
      _id: "687f29e236593afa997d6315",
      name: "Starla Elsa Wilson",
      specialization: "Consultant Psychologist",
      monthlySlots: [],
      imageUrl:
        "https://pebby-uplods.s3.us-east-1.amazonaws.com/uploads/47879f35-ead9-4d59-ba8c-1652e5b48229.png",
      experience: "1+ Years",
      expertise: [],
      languages: [],
    }
  ]);
  // const { currentIndex, nextSlide, prevSlide, goToSlide } = useCarousel({
  //   totalItems: data?.length,
  // });

  // const fetchPsychologists = async () => {
  //   try {
  //     const response = await axios.get(
  //       `${process.env.NEXT_PUBLIC_API_URL}/psychologists`
  //     );

  //     setData(response?.data);
  //     // setPsychologist(response?.data);
  //   } catch (error) {
  //     console.log(error);
  //     // alert("technical issue");
  //     console.log("TECHNICAL ISSUE");
  //   }
  // };

  // useEffect(() => {
  //   fetchPsychologists();
  // }, []);

  // const handleBookNow = useCallback((psychologist: Psychologist) => {
  //   console.log("Booking consultation with:", psychologist.name);
  //   setIsModalOpen(true);
  //   setPsychologist(psychologist);
  //   // Add your booking logic here
  // }, []);

  return (
    <section id="psychologists">
      <div className="container mx-auto">
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
