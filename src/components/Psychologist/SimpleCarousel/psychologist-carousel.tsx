"use client";

import { useEffect, useState } from "react";
import { Psychologist } from "@/types/psychologist";
// import { useCarousel } from "@/hooks/use-carousel";
import { CarouselHeader } from "./carousel-header";
// import { CarouselContainer } from "./carousel-container";
// import { CarouselControls } from "./carousel-controls";
// import { CarouselStats } from "./carousel-stats";
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

      setData(response?.data);
      // setPsychologist(response?.data);
    } catch (error) {
      console.log(error);
      alert("technical issue");
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

  const professionals = [
    {
      _id: "687a41a59c601751727e7b1c",
      name: "Pooja K",
      specialization: "Consultant Psychologist",
      monthlySlots: [
        "12:00 AM - 01:00 AM",
        "08:00 AM - 09:00 AM",
        "10:00 AM - 11:00 AM",
        "11:00 AM - 12:00 PM",
        "12:00 PM - 01:00 PM",
        "01:00 PM - 02:00 PM",
        "02:00 PM - 03:00 PM",
        "03:00 PM - 04:00 PM",
        "04:00 PM - 05:00 PM",
        "05:00 PM - 06:00 PM",
        "06:00 PM - 07:00 PM",
        "07:00 PM - 08:00 PM",
        "08:00 PM - 09:00 PM",
        "09:00 PM - 10:00 PM",
        "10:00 PM - 11:00 PM",
        "11:00 PM - 12:00 AM",
        "09:00 AM - 10:00 AM",
        "07:00 AM - 08:00 AM",
      ],
      imageUrl:
        "https://pebby-uplods.s3.us-east-1.amazonaws.com/uploads/0d904bda-d629-42d3-8e3f-89d043404bb2.png",
      createdAt: "2025-07-18T12:44:21.054Z",
      updatedAt: "2025-07-31T12:40:36.956Z",
      __v: 0,
      experience: "2 years",
      expertise: ["Anxiety", "Depression"],
      languages: ["English", "Malyalam"],
    },
    {
      _id: "687a42319c601751727e7b1f",
      name: "Raeesa Fida",
      specialization: "Life Coach",
      monthlySlots: [],
      imageUrl:
        "https://pebby-uplods.s3.us-east-1.amazonaws.com/uploads/22b3aa05-5fac-47b9-a744-13c11e844b09.png",
      createdAt: "2025-07-18T12:46:41.739Z",
      updatedAt: "2025-07-31T11:54:11.713Z",
      __v: 0,
      experience: "2 years",
      expertise: ["Career Growth", "Empower Goals"],
      languages: ["English", "Malayalam"],
    },
    {
      _id: "687a452a9c601751727e7b26",
      name: "Gayathri I U ",
      specialization: "Consultant Psychologist",
      monthlySlots: [
        "08:00 PM - 09:00 PM",
        "09:00 PM - 10:00 PM",
        "10:00 PM - 11:00 PM",
        "11:00 PM - 12:00 AM",
      ],
      imageUrl:
        "https://pebby-uplods.s3.us-east-1.amazonaws.com/uploads/2e92a7c7-0053-4dbe-b832-4e85b8fc55e7.png",
      createdAt: "2025-07-18T12:59:22.515Z",
      updatedAt: "2025-08-01T08:52:53.505Z",
      __v: 0,
      experience: "1+ year",
      expertise: [],
      languages: ["English", "Malayalam"],
    },
    {
      _id: "687a462c9c601751727e7b29",
      name: "Sona Anil",
      specialization: "Consultant Psychologist",
      monthlySlots: [
        "08:00 PM - 09:00 PM",
        "09:00 PM - 10:00 PM",
        "10:00 PM - 11:00 PM",
        "11:00 PM - 12:00 AM",
      ],
      imageUrl:
        "https://pebby-uplods.s3.us-east-1.amazonaws.com/uploads/3d9feaeb-5861-4b27-a397-87dbd5d0b368.png",
      createdAt: "2025-07-18T13:03:40.178Z",
      updatedAt: "2025-08-01T08:54:01.444Z",
      __v: 0,
      experience: "1+ year",
      expertise: [],
      languages: ["English", "Malayalam"],
    },
    {
      _id: "687a4dd49c601751727e7b32",
      name: "Risana Parvin N",
      specialization: "Consultant Psychologist",
      monthlySlots: [
        "08:00 PM - 09:00 PM",
        "09:00 PM - 10:00 PM",
        "10:00 PM - 11:00 PM",
        "11:00 PM - 12:00 AM",
      ],
      imageUrl:
        "https://pebby-uplods.s3.us-east-1.amazonaws.com/uploads/278903a6-d365-42fb-ad44-5872c61bc155.png",
      createdAt: "2025-07-18T13:36:20.775Z",
      updatedAt: "2025-07-31T18:27:17.093Z",
      __v: 0,
      experience: "1+ year",
      expertise: ["CBT", "Anxiety", "Relationship"],
      languages: ["English", "Malayalam"],
    },
    {
      _id: "687f29e236593afa997d6315",
      name: "Starla Elsa Wilson",
      specialization: "Consultant Psychologist",
      monthlySlots: [
        "07:00 PM - 08:00 PM",
        "08:00 PM - 09:00 PM",
        "09:00 PM - 10:00 PM",
        "10:00 PM - 11:00 PM",
        "11:00 PM - 12:00 AM",
      ],
      imageUrl:
        "https://pebby-uplods.s3.us-east-1.amazonaws.com/uploads/47879f35-ead9-4d59-ba8c-1652e5b48229.png",
      createdAt: "2025-07-22T06:04:18.066Z",
      updatedAt: "2025-08-01T08:53:32.800Z",
      __v: 0,
      experience: "3.5 Years",
      expertise: [],
      languages: ["English", "Malayalam"],
    },
    {
      _id: "687f2c2036593afa997d6325",
      name: "Jose Antony AD",
      specialization: "Consultant Psychologist",
      monthlySlots: [
        "04:00 PM - 05:00 PM",
        "03:00 PM - 04:00 PM",
        "05:00 PM - 06:00 PM",
        "06:00 PM - 07:00 PM",
        "07:00 PM - 08:00 PM",
        "08:00 PM - 09:00 PM",
        "09:00 PM - 10:00 PM",
        "10:00 PM - 11:00 PM",
        "11:00 PM - 12:00 AM",
      ],
      imageUrl:
        "https://pebby-uplods.s3.us-east-1.amazonaws.com/uploads/ce9b8cbf-5a29-4ad1-9cd2-3cd3e9cab556.png",
      createdAt: "2025-07-22T06:13:52.331Z",
      updatedAt: "2025-07-31T18:29:13.112Z",
      __v: 0,
      experience: "2+ Years",
      expertise: [
        "OCD",
        "Anxiety",
        "Stress management",
        "anger management",
        "Life transition",
      ],
      languages: ["English", "Malayalam"],
    },
  ];

  return (
    <section id="psychologists">
      <div className="container mx-auto">
        <CarouselHeader />

        <Carousel3DMinimal data={professionals} />

        {/* <CarouselStats /> */}
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
