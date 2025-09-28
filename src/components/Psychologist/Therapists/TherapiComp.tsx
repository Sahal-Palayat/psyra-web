"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, Mic } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import type { Psychologist } from "@/types/psychologist";
import { PsychologistModal } from "@/components/Psychologist/Modal/PsychologistModal";
import { toast } from "@/lib/toast";
import { useSearchParams } from "next/navigation";

const SkeletonCard = () => (
  <Card className="w-full bg-[#00BEA5] rounded-2xl shadow-xl overflow-hidden">
    <div className="flex p-6">
      <div className="flex-shrink-0 mr-6">
        <div className="w-44 h-44 bg-white rounded-xl p-1 shadow-lg">
          <div className="w-full h-full bg-gray-200 rounded animate-pulse" />
        </div>
      </div>

      <div className="flex-1 text-white space-y-3">
        <div className="h-6 bg-gray-700/30 rounded animate-pulse w-3/4" />
        <div className="h-4 bg-gray-700/30 rounded animate-pulse w-1/2" />

        <div className="space-y-2">
          <div className="h-3 bg-gray-700/30 rounded animate-pulse w-2/3" />
          <div className="h-3 bg-gray-700/30 rounded animate-pulse w-1/3" />

          <div className="flex items-center gap-1 my-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-gray-700/30 rounded animate-pulse"
              />
            ))}
          </div>

          <div className="h-3 bg-gray-700/30 rounded animate-pulse w-4/5" />
          <div className="h-3 bg-gray-700/30 rounded animate-pulse w-3/5" />

          <div className="flex items-center gap-3">
            <div className="h-3 bg-gray-700/30 rounded animate-pulse w-20" />
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-gray-700/30 rounded animate-pulse" />
              <div className="h-3 bg-gray-700/30 rounded animate-pulse w-10" />
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-gray-700/30 rounded animate-pulse" />
              <div className="h-3 bg-gray-700/30 rounded animate-pulse w-10" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-gray-900 px-6 py-4 flex items-center justify-between">
      <div className="text-white space-y-1">
        <div className="h-3 bg-gray-700 rounded animate-pulse w-24" />
        <div className="h-4 bg-gray-700 rounded animate-pulse w-32" />
      </div>
      <div className="h-8 bg-gray-700 rounded-full animate-pulse w-16" />
    </div>
  </Card>
);

export default function TherapistsCard() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Psychologist[]>([]);
  const [allData, setAllData] = useState<Psychologist[]>([]);
  const [psychologist, setPsychologist] = useState<Psychologist>({
    _id: "",
    name: "",
    specialization: "",
    monthlySlots: [],
    imageUrl: "",
    experience: "",
    expertise: [],
    languages: [],
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const searchParams = useSearchParams();
  const langFilterRaw = searchParams.get("lang") || "";
  const langFilter = langFilterRaw.trim().toLowerCase();

  const fetchPsychologists = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/psychologists`
      );

      const list = Array.isArray(response?.data) ? response.data : [];
      setAllData(list);
      setData(
        langFilter
          ? list.filter(
              (p: Psychologist) =>
                Array.isArray(p.languages) &&
                p.languages.some((l) =>
                  String(l).toLowerCase().includes(langFilter)
                )
            )
          : list
      );
    } catch (error) {
      console.log(error);
      toast.error("Technical issue");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPsychologists();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setData(
        langFilter
          ? allData.filter(
              (p) =>
                Array.isArray(p.languages) &&
                p.languages.some((l) =>
                  String(l).toLowerCase().includes(langFilter)
                )
            )
          : allData
      );
    }
  }, [langFilter, allData, isLoading]);

  function getNextSlot(slots: string[]) {
    const now = new Date();

    for (const slot of slots) {
      const [start] = slot.split(" - "); // take the start time
      const slotDate = new Date();
      const [time, modifier] = start.split(" ");
      let [hours] = time.split(":").map(Number);

      if (modifier === "PM" && hours !== 12) hours += 12;
      if (modifier === "AM" && hours === 12) hours = 0;

      slotDate.setHours(hours, 0, 0);

      if (slotDate > now) {
        return slot;
      }
    }

    return null;
  }

  const handleBookNow = (therapist: Psychologist) => {
    setIsModalOpen(true);
    setPsychologist(therapist);
  };

  //   const renderStars = (rating: string) => {
  //     const rateNum = Number.parseInt(rating)
  //     const fullStars = Math.floor(rateNum)
  //     const hasHalfStar = rateNum % 1 !== 0
  //     const stars = []

  //     for (let i = 0; i < fullStars; i++) {
  //       stars.push(<Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)
  //     }

  //     if (hasHalfStar) {
  //       stars.push(<Star key="half" className="w-3 h-3 fill-yellow-400/50 text-yellow-400" />)
  //     }

  //     const emptyStars = 5 - Math.ceil(rateNum)
  //     for (let i = 0; i < emptyStars; i++) {
  //       stars.push(<Star key={`empty-${i}`} className="w-3 h-3 text-gray-300" />)
  //     }

  //     return stars
  //   }

  return (
    <div className="min-h-screen mb-12">
      <div className="">
        <div className="text-center mb-8 pb-10 pt-28 bg-[#00BEA5]">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Find Your Perfect Therapist
          </h1>
          <p className="text-lg text-gray-600">
            Connect with licensed professionals who understand your needs
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 sm:px-6 md:px-10 pb-8">
            {[...Array(4)].map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 md:px-14 pb-8 items-stretch">
            {data && data.length > 0 ? (
              data.map((therapist) => (
                <div key={therapist._id} className="w-full h-full">
                  <div className="relative w-full bg-[#9EE0D6] rounded-2xl shadow-xl overflow-hidden h-full min-h-[280px] sm:min-h-[360px] flex flex-col">
                    {/* Top right icons */}
                    <div className="absolute top-3 right-3 flex gap-2 z-10">
                      <Video className="w-5 h-5 md:w-6 md:h-6 text-green" />
                      <Mic className="w-5 h-5 md:w-6 md:h-6 text-green" />
                    </div>

                    {/* Layout → always row */}
                    <div className="flex flex-row h-full">
                      {/* Left: Image (same as before) */}
                      <div className="relative flex-shrink-0 w-32 h-72 sm:w-40 sm:h-70 md:w-52 md:h-72 m-4 sm:m-6 bg-[#22CEB8] rounded-xl overflow-hidden">
                        <img
                          src={therapist.imageUrl || "/placeholder.svg"}
                          alt={therapist.name}
                          className="w-full h-full object-cover"
                        />

                        <Button
                          onClick={() => handleBookNow(therapist)}
                          className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 bg-white text-[#00BEA5] hover:bg-gray-100 text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 h-auto font-semibold rounded-full shadow-md transition-all duration-200"
                        >
                          Book Now
                        </Button>
                      </div>

                      {/* Right: Content */}
                      <div className="flex-1 text-white pr-6 flex flex-col justify-center">
                        <div>
                          <h2 className="text-base md:text-2xl font-bold mb-1 text-gray-900">
                            {therapist.name}
                          </h2>
                          <p className="text-gray-800 text-sm md:text-base font-medium mb-2">
                            {therapist.specialization}
                          </p>

                          <div className="space-y-1 text-[16px]">
                            <p className="text-gray-700">
                              {therapist.experience} of experience
                            </p>
                            <p className="text-gray-700">
                              Starts at INR{" "}
                              <span className="font-bold text-gray-900">
                                {therapist.price || "999"}
                              </span>
                            </p>

                            {/* Rating */}
                            {/* <div className="flex items-center gap-1 my-1 md:my-2">
                              {renderStars(therapist?.rating || "0")}
                              <span className="text-gray-800 text-[10px] md:text-xs ml-1">
                                ({therapist?.rating || "0"})
                              </span>
                            </div> */}

                            {/* Languages */}
                            <div className="flex flex-wrap gap-1 mb-1 md:mb-2">
                              {therapist.languages.map((lang, i) => (
                                <span
                                  key={i}
                                  className="text-gray-700 text-[18px]"
                                >
                                  {lang}
                                  {i < therapist.languages.length - 1
                                    ? ", "
                                    : ""}
                                </span>
                              ))}
                            </div>

                            {/* Expertise */}
                            <div className="mb-1 md:mb-2 h-8 line-clamp-2">
                              <span className="text-gray-700 text-[14px]">
                                {therapist.expertise.join(", ")}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Bottom row */}
                        <div className="mt-3 md:mt-4 p-4 rounded-[12px] flex items-center justify-between bg-[#00989D]">
                          <div>
                            <p className="text-[14px] md:text-xs text-gray-200">
                              Next available slot:
                            </p>
                            <p className="text-xs md:text-sm font-medium text-white">
                              Today{" "}
                              {getNextSlot(therapist?.monthlySlots) ||
                                "Slot not available"}
                            </p>
                          </div>
                          {/* <Button
                            onClick={() => handleBookNow(therapist)}
                            className="bg-white text-[#00BEA5] hover:bg-gray-100 text-xs md:text-base px-4 md:px-8 py-2 md:py-3 h-auto font-semibold rounded-full shadow-md transition-all duration-200"
                          >
                            BOOK NOW
                          </Button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full">
                No therapists found.
              </p>
            )}
          </div>
        )}
      </div>
      <PsychologistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={psychologist}
      />
    </div>
  );
}
