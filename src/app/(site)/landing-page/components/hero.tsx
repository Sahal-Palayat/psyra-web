"use client";

import { Calendar1, Heart, Search, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

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

  const handleSearch = () => {
    const params = new URLSearchParams(window.location.search);
    if (selectedConcern) {
      params.set("concern", selectedConcern);
    } else {
      params.delete("concern");
    }
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <section className="relative mt-32 mb-20 px-6 overflow-hidden">
      {/* Soft Organic Background Elements (The "Cute" factor) */}
      <div className="absolute top-0 right-0 -z-10 w-64 h-32 md:h-64 bg-teal-100/50 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-orange-50/50 rounded-full blur-3xl opacity-60" />

      <div className="max-w-6xl mx-auto bg-[#FDFDFC] border border-slate-100 py-16 px-6 md:px-16 lg:py-24 rounded-[3rem] shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-10">
            {/* Cute Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-teal-50 px-1 py-1 md:px-4 md:py-2 rounded-full border border-teal-100"
            >
              <Sparkles size={14} className="text-teal-600" />
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Your safe space</span>
            </motion.div>

            <div className="space-y-6">
              {/* Trustworthy Serif Heading */}
              <h1 className="text-3xl md:text-6xl font-serif text-slate-900 leading-[1.1]">
                Find your perfect <br />
                <span className="text-teal-500 italic">psychologist</span>
              </h1>
              <p className="text-slate-600 text-md md:text-xl max-w-md leading-relaxed">
                Connect with professionals who speak your language — feel <span className="text-slate-900 font-medium underline decoration-teal-200 underline-offset-4">seen</span>, feel heard.
              </p>
            </div>

            {/* Stepper (The "Process" increases trust) */}
            <div className="relative border-l-2 border-teal-100 ml-4 pl-10 space-y-8 text-md md:text-lg">
              {[
                { icon: <Search size={18} />, text: "Choose your therapist" },
                { icon: <Calendar1 size={18} />, text: "Book & get your link" },
                { icon: <Heart size={18} />, text: "Start feeling better" },
              ].map((step, idx) => (
                <div key={idx} className="relative group">
                  <span className="absolute -left-[59px] top-0 transition-transform group-hover:scale-110">
                    <div className="bg-white p-2.5 rounded-2xl shadow-sm border border-teal-100 text-teal-500">
                      {step.icon}
                    </div>
                  </span>
                  <p className="text-slate-700 font-semibold text-lg">{step.text}</p>
                </div>
              ))}
            </div>

            {/* Search Bar - Modern App Style */}
            <div className="bg-white p-3 rounded-[2rem] shadow-2xl shadow-teal-900/5 border border-slate-100 flex flex-col sm:flex-row gap-3 w-full max-w-xl group focus-within:border-teal-200 transition-all">
              <div className="flex-1 px-5 py-2">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-slate-400 font-black mb-1">
                  Select Concern
                </label>
                <select
                  value={selectedConcern}
                  onChange={(e) => setSelectedConcern(e.target.value)}
                  className="w-full bg-transparent outline-none text-slate-800 font-bold text-lg appearance-none cursor-pointer"
                >
                  <option value="">What's on your mind?</option>
                  {concerns.map((concern) => (
                    <option key={concern} value={concern}>{concern}</option>
                  ))}
                </select>
              </div>
              <button 
                onClick={handleSearch}
                className="bg-teal-500 hover:bg-teal-600 active:scale-95 text-white px-5 md:px-10 py-3 md:py-5 rounded-[1.5rem] font-bold text-lg transition-all shadow-lg shadow-teal-500/20"
              >
                Meet your match
              </button>
            </div>
          </div>

          {/* New Image/Visual Trust element */}
          <div className="hidden lg:block relative">
            <div className="relative z-10 rounded-[4rem] overflow-hidden border-[12px] border-white shadow-2xl">
               {/* Replace with a warm, friendly stock photo */}
               <img 
                 src="/images/Landing_hero.png" 
                 alt="Therapy session" 
                 className="w-full h-[600px] object-cover"
               />
            </div>
            {/* Cute floating card */}
            <div className="absolute -bottom-6 -left-12 z-20 bg-white p-6 rounded-3xl shadow-xl border border-slate-50 flex items-center gap-4 animate-bounce-slow">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-500">
                <Heart fill="currentColor" size={24} />
              </div>
              <div>
                <p className="text-slate-900 font-bold">100% Confidential</p>
                <p className="text-slate-500 text-sm">Your privacy is our priority</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LandingHero;