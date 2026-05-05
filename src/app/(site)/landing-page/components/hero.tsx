"use client";

import { Calendar1, Heart, Search, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

interface Psychologist {
  expertise: string[];
}

const LandingHero = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [concerns, setConcerns] = useState<string[]>([]);
  
  // Get active concern from URL for visual sync
  const activeConcern = searchParams.get("concern") || "";

  useEffect(() => {
    const fetchConcerns = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/psychologists`);
        const data = await response.json();
        if (data.status) {
          const allExpertise = data.psychologists.flatMap((p: Psychologist) => p.expertise);
          const uniqueExpertise = Array.from(new Set(allExpertise)) as string[];
          setConcerns(uniqueExpertise);
        }
      } catch (error) {
        console.error("Error fetching concerns:", error);
      }
    };
    fetchConcerns();
  }, []);

  const handleToggleConcern = (concern: string) => {
    const params = new URLSearchParams(window.location.search);
    
    if (activeConcern === concern) {
      params.delete("concern"); // Deselect if clicking the same one
    } else {
      params.set("concern", concern);
    }
    
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <section className="relative mt-20 md:mt-32 mb-10 md:mb-20 px-4 md:px-6 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-48 h-24 md:w-64 md:h-64 bg-teal-100/50 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 -z-10 w-64 h-64 md:w-96 md:h-96 bg-orange-50/50 rounded-full blur-3xl opacity-60" />

      <div className="max-w-6xl mx-auto bg-[#FDFDFC] border border-slate-100 py-10 md:py-24 px-5 md:px-16 rounded-[2rem] md:rounded-[3rem] shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          
          <div className="space-y-6 md:space-y-10">
            <div className="text-center lg:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-3"
              >
                Your path to <span className="text-teal-600 italic">wellness</span> starts here
              </motion.h1>
              <p className="text-slate-500 max-w-2xl mx-auto lg:mx-0 text-sm md:text-lg leading-relaxed">
                Find verified professionals who truly understand your journey.
              </p>
            </div>

            {/* Stepper */}
            <div className="relative border-l-2 border-teal-100 ml-4 pl-8 space-y-4 md:space-y-8">
              {[
                { icon: <Search size={16} />, text: "Choose therapist" },
                { icon: <Calendar1 size={16} />, text: "Book your link" },
                { icon: <Heart size={16} />, text: "Start healing" },
              ].map((step, idx) => (
                <div key={idx} className="relative flex items-center gap-3">
                  <span className="absolute -left-[45px]">
                    <div className="bg-white p-2 rounded-xl shadow-sm border border-teal-100 text-teal-500">
                      {step.icon}
                    </div>
                  </span>
                  <p className="text-slate-700 font-semibold text-sm md:text-lg">{step.text}</p>
                </div>
              ))}
            </div>

            {/* AUTO-FILTERING SCROLLABLE CHIPS */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] md:text-xs uppercase tracking-widest font-black text-slate-400">
                  Select your concern
                </span>
                <span className="text-[10px] text-teal-500 font-bold animate-pulse">
                  Scroll left →
                </span>
              </div>

              <div className="flex flex-nowrap overflow-x-auto gap-2 pb-2 no-scrollbar -mx-1 px-1">
                {/* Clear/All Option */}
                <button
                  onClick={() => router.push('?', { scroll: false })}
                  className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${
                    activeConcern === "" 
                    ? "bg-slate-900 text-white border-slate-900 shadow-lg" 
                    : "bg-white text-slate-500 border-slate-100 hover:border-teal-200"
                  }`}
                >
                  All
                </button>

                {concerns.map((concern) => (
                  <button
                    key={concern}
                    onClick={() => handleToggleConcern(concern)}
                    className={`flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${
                      activeConcern === concern 
                      ? "bg-teal-500 text-white border-teal-500 shadow-lg shadow-teal-100" 
                      : "bg-white text-slate-600 border-slate-100 hover:border-teal-200"
                    }`}
                  >
                    {activeConcern === concern && <Sparkles size={14} className="animate-pulse" />}
                    {concern}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative z-10 rounded-[4rem] overflow-hidden border-[12px] border-white shadow-2xl">
               <img 
                 src="/images/Landing_hero.png" 
                 alt="Therapy session" 
                 className="w-full h-[600px] object-cover"
               />
            </div>
            <div className="absolute -bottom-6 -left-12 z-20 bg-white p-6 rounded-3xl shadow-xl border border-slate-50 flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-500">
                <Heart fill="currentColor" size={24} />
              </div>
              <div>
                <p className="text-slate-900 font-bold">100% Confidential</p>
                <p className="text-slate-500 text-sm">Privacy is our priority</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Add this global style tag or move it to your CSS file to hide scrollbars */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default LandingHero;