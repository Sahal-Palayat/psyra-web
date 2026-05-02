"use client";

import { Calendar1, Heart, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Added for routing

interface Psychologist {
  expertise: string[];
}

const LandingHero = () => {
  const router = useRouter();
  const [concerns, setConcerns] = useState<string[]>([]);
  const [selectedConcern, setSelectedConcern] = useState("");

  useEffect(() => {
    const fetchConcerns = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/psychologists`
        );
        const data = await response.json();

        if (data.status) {
          const allExpertise = data.psychologists.flatMap(
            (p: Psychologist) => p.expertise
          );
          const uniqueExpertise = Array.from(new Set(allExpertise)) as string[];
          setConcerns(uniqueExpertise);
        }
      } catch (error) {
        console.error("Error fetching concerns:", error);
      }
    };
    fetchConcerns();
  }, []);

  const handleSearch = () => {
    // Updates the URL search params without a full page reload
    const params = new URLSearchParams(window.location.search);
    if (selectedConcern) {
      params.set("concern", selectedConcern);
    } else {
      params.delete("concern");
    }
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <section className="bg-[#f0f9f9] py-16 px-6 md:px-12 lg:px-24 rounded-3xl max-w-7xl mx-auto my-12">
      <div className="flex flex-col items-start space-y-10">
        <div className="space-y-4 w-full">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight max-w-[280px] md:max-w-none">
            Find Your Perfect <span className="text-[#2eb6b6]">Psychologist</span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg max-w-[320px] md:max-w-none line-clamp-2 md:line-clamp-none">
            Connect with professionals who speak your language — feel seen, feel heard.
          </p>
        </div>

        <div className="border-l-2 border-[#2eb6b6]/30 ml-3 pl-8 space-y-6">
          <div className="relative">
            <span className="absolute -left-[45px] bg-[#f0f9f9] p-1">
              <div className="bg-white p-2 rounded-full shadow-sm border border-[#2eb6b6]/20">
                <Search size={18} className="text-[#2eb6b6]" />
              </div>
            </span>
            <p className="text-gray-700 font-medium">Choose your therapist</p>
          </div>
          <div className="relative">
            <span className="absolute -left-[45px] bg-[#f0f9f9] p-1">
              <div className="bg-white p-2 rounded-full shadow-sm border border-[#2eb6b6]/20">
                <Calendar1 size={18} className="text-[#2eb6b6]" />
              </div>
            </span>
            <p className="text-gray-700 font-medium">Book & get your session link</p>
          </div>
          <div className="relative">
            <span className="absolute -left-[45px] bg-[#f0f9f9] p-1">
              <div className="bg-white p-2 rounded-full shadow-sm border border-[#2eb6b6]/20">
                <Heart size={18} className="text-[#2eb6b6]" />
              </div>
            </span>
            <p className="text-gray-700 font-medium">Start feeling better today</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 bg-white p-2 rounded-2xl shadow-xl shadow-[#2eb6b6]/5 w-full max-w-2xl">
          <div className="flex-1 px-4 py-2 border-r border-gray-100 last:border-0">
            <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">
              Select Concern
            </label>
            <select
              value={selectedConcern}
              onChange={(e) => setSelectedConcern(e.target.value)}
              className="w-full bg-transparent outline-none text-gray-800 font-medium appearance-none cursor-pointer"
            >
              <option value="">What's on your mind?</option>
              {concerns.map((concern) => (
                <option key={concern} value={concern}>{concern}</option>
              ))}
            </select>
          </div>
          <button 
            onClick={handleSearch}
            className="bg-[#2eb6b6] hover:bg-[#26a5a5] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200"
          >
            Find Specialist
          </button>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;