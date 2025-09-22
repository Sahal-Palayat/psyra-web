"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MessageCircle, Video } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import type { Psychologist } from "@/types/psychologist";
import { PsychologistModal } from "@/components/Psychologist/Modal/PsychologistModal";
import { toast } from "@/lib/toast";

const SkeletonCard = () => (
  <Card className="w-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl shadow-xl overflow-hidden">
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
      price: "",
      rating: "",
    },
  ]);
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

  const fetchPsychologists = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/psychologists`
      );

      setData(response?.data);
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

  //   const handleViewProfile = (therapistId: string) => {
  //     console.log(`Viewing profile for therapist ${therapistId}...`);
  //   };

  const renderStars = (rating: string) => {
    const rateNum = Number.parseInt(rating);
    const fullStars = Math.floor(rateNum);
    const hasHalfStar = rateNum % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star
          key="half"
          className="w-3 h-3 fill-yellow-400/50 text-yellow-400"
        />
      );
    }

    const emptyStars = 5 - Math.ceil(rateNum);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-3 h-3 text-gray-300" />);
    }

    return stars;
  };

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-10 pb-8">
            {[...Array(4)].map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-10 pb-8">
            {data.map((therapist) => (
              <Card
                key={therapist._id}
                className="w-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex p-6">
                  <div className="flex-shrink-0 mr-6">
                    <div className="md:w-44 md:h-44 w-24 h-44 bg-white rounded-xl p-1 shadow-lg">
                      <img
                        src={therapist.imageUrl || "/placeholder.svg"}
                        alt={therapist.name}
                        className="w-full h-full rounded-lg md:object-contain :object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex-1 text-white">
                    <h2 className="text-xl font-bold mb-1 text-gray-900">
                      {therapist.name}
                    </h2>
                    <p className="text-gray-800 text-sm font-medium mb-2">
                      {therapist.specialization}
                    </p>

                    <div className="space-y-1 text-sm">
                      <p className="text-gray-700">{therapist.experience}</p>
                      <p className="text-gray-700">
                        Starts at INR{" "}
                        <span className="font-bold text-gray-900">999</span>
                      </p>

                      <div className="flex items-center gap-1 my-2">
                        {renderStars(therapist?.rating || "")}
                        <span className="text-gray-800 text-xs ml-1">
                          ({therapist?.rating})
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-2">
                        <span className="text-gray-800 text-xs">Speaks:</span>
                        {therapist.languages.map((language, index) => (
                          <span key={index} className="text-gray-700 text-xs">
                            {language}
                            {index < therapist.languages.length - 1 ? ", " : ""}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-1 mb-2">
                        <span className="text-gray-800 text-xs">Areas:</span>
                        {therapist.expertise.map((exp, index) => (
                          <span key={index} className="text-gray-700 text-xs">
                            {exp}
                            {index < therapist.expertise.length - 1 ? ", " : ""}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 text-gray-800 text-xs">
                        <span>Session Mode:</span>
                        <div className="flex items-center gap-1">
                          <Video className="w-3 h-3" />
                          <span>Video</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3" />
                          <span>Voice</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 px-6 py-4 flex items-center justify-between">
                  <div className="text-white">
                    <p className="text-xs text-gray-400">
                      Next available slot:
                    </p>
                    <p className="text-sm font-medium text-emerald-400">
                      Today{" "}
                      {getNextSlot(therapist?.monthlySlots) ||
                        "Slot not available"}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={() => handleBookNow(therapist)}
                      className="bg-white text-gray-900 hover:bg-gray-100 text-sm px-6 py-2 h-auto font-medium rounded-full"
                    >
                      Book
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
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
