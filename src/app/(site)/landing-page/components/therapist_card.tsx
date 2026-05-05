"use client";

import { Button } from "@/components/ui/button";
import { Languages, GraduationCap } from "lucide-react"; 
import { useEffect, useMemo, useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import type { Psychologist } from "@/types/psychologist";
import { PsychologistModal } from "@/components/Psychologist/Modal/PsychologistModal";
import { toast } from "@/lib/toast";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const applyOfferDiscount = (price: number): number => Math.round(price * 0.9);
const formatPrice = (price: number): string => price.toLocaleString("en-IN");

const SkeletonCard = () => (
  <div className="w-full h-64 bg-slate-50 animate-pulse rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-100" />
);

function TherapistsList() {
  const [isLoading, setIsLoading] = useState(true);
  const [allData, setAllData] = useState<Psychologist[]>([]);
  const [psychologist, setPsychologist] = useState<Psychologist | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const searchParams = useSearchParams();
  const langFilter = (searchParams.get("lang") || "").trim().toLowerCase();
  const concernFilter = (searchParams.get("concern") || "").trim().toLowerCase(); 
  const hasOfferClaim = searchParams.get("offer-claim") === "true";

  useEffect(() => {
    const fetchPsychologists = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/psychologists`);
        setAllData(Array.isArray(response?.data?.psychologists) ? response.data.psychologists : []);
      } catch (error) {
        toast.error("Unable to load therapists at the moment");
      } finally {
        setIsLoading(false);
      }
    };
    fetchPsychologists();
  }, []);

  const filteredData = useMemo(() => {
    if (isLoading) return [];
    return allData.filter((p) => {
      const matchesLang = !langFilter || p.languages?.some(l => String(l).toLowerCase().includes(langFilter));
      const matchesConcern = !concernFilter || p.expertise?.some(e => String(e).toLowerCase().includes(concernFilter));
      return matchesLang && matchesConcern;
    });
  }, [langFilter, concernFilter, allData, isLoading]);

  const handleBookNow = (therapist: Psychologist) => {
    setPsychologist(therapist);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10">
        {isLoading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {[...Array(4)].map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
            <AnimatePresence mode="popLayout">
              {filteredData.map((therapist) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  key={therapist._id}
                  className="group relative bg-white border border-slate-100 rounded-[1.5rem] md:rounded-[2.5rem] p-4 md:p-6 shadow-sm hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-500 overflow-hidden"
                >
                  <div className="flex flex-row gap-4 md:gap-8 items-start">
                    {/* Image Column */}
                    <div className="relative flex-shrink-0">
                      <div className="w-20 h-28 sm:w-24 sm:h-32 md:w-40 md:h-52 rounded-[1rem] md:rounded-[2rem] overflow-hidden shadow-inner bg-slate-50 border-2 md:border-4 border-white">
                        <img
                          src={therapist.imageUrl || "/placeholder.svg"}
                          alt={therapist.name}
                          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <h2 className="text-lg md:text-2xl font-bold text-slate-800 leading-tight truncate">{therapist.name}</h2>
                        <p className="text-teal-600 font-semibold text-[10px] md:text-sm uppercase tracking-wider mb-2 md:mb-4 truncate">
                          {therapist.designation}
                        </p>

                        <div className="space-y-1 md:space-y-3 mb-3 md:mb-6">
                          <div className="flex items-center gap-2 text-slate-500 text-[11px] md:text-sm">
                            <GraduationCap size={14} className="flex-shrink-0 text-slate-400" />
                            <span className="truncate">{therapist.experience} Exp</span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-500 text-[11px] md:text-sm">
                            <Languages size={14} className="flex-shrink-0 text-slate-400" />
                            <span className="truncate">{therapist.languages?.join(", ")}</span>
                          </div>
                        </div>

                        {/* Marquee - Fixed with min-w-0 and max-w */}
                        <div className="mt-2 w-full max-w-[200px] sm:max-w-xs md:max-w-none overflow-hidden relative">
                          <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-white to-transparent z-10" />
                          <div className="absolute inset-y-0 right-0 w-2 bg-gradient-to-l from-white to-transparent z-10" />
                          
                          <motion.div 
                            animate={{ x: [0, -200] }}
                            transition={{ 
                              repeat: Infinity, 
                              duration: 6, 
                              ease: "linear" 
                            }}
                            className="flex gap-2 whitespace-nowrap"
                          >
                            {[...(therapist.expertise || []), ...(therapist.expertise || []), ...(therapist.expertise || [])].map((exp, i) => (
                              <span 
                                key={i} 
                                className="px-2 py-0.5 md:px-3 md:py-1 bg-teal-50/50 text-teal-700 text-[9px] md:text-[10px] font-bold uppercase tracking-tight rounded-full border border-teal-100/50"
                              >
                                {exp}
                              </span>
                            ))}
                          </motion.div>
                        </div>
                      </div>

                      {/* Bottom row: Price and Buttons */}
                      <div className="mt-3 md:mt-6 flex flex-col gap-3 border-t border-slate-50 pt-3 md:pt-6">
                        <div className="flex items-baseline gap-2">
                          <p className="text-base md:text-xl font-bold text-slate-900">
                            ₹{hasOfferClaim ? formatPrice(applyOfferDiscount(parseInt(therapist.price || "999"))) : therapist.price || "999"}
                          </p>
                          {hasOfferClaim && <span className="text-[10px] md:text-sm text-slate-300 line-through">₹{therapist.price}</span>}
                        </div>
                        
                        <div className="flex gap-2 w-full">
                            <Link href={`/profile/${therapist._id}`} className="flex-1">
                                <Button variant="outline" className="w-full rounded-xl h-8 md:h-10 text-[11px] md:text-sm border-slate-200 text-slate-600">
                                    View Profile
                                </Button>
                            </Link>
                            <Button 
                              onClick={() => handleBookNow(therapist)}
                              className="flex-1 bg-teal-600 hover:bg-teal-700 text-white h-8 md:h-10 rounded-xl text-[11px] md:text-sm"
                            >
                              Book
                            </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

      {psychologist && (
        <PsychologistModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          data={psychologist}
          hasOfferClaim={hasOfferClaim}
        />
      )}
    </div>
  );
}

export default function LandingTherapistsCard() {
  return (
    <section className="min-h-screen bg-[#F8FAFC] pb-10 md:pb-20">
      <Suspense 
        fallback={
          <div className="max-w-7xl mx-auto px-4 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[...Array(4)].map((_, i) => <SkeletonCard key={i} />)}
            </div>
          </div>
        }
      >
        <TherapistsList />
      </Suspense>
    </section>
  );
}