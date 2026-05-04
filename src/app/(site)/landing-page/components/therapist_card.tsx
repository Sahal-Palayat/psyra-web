"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Video, Mic, Star, ShieldCheck, Languages, GraduationCap } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
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
  <div className="w-full h-72 bg-slate-50 animate-pulse rounded-[2.5rem] border border-slate-100" />
);

export default function LandingTherapistsCard() {
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
    <section className="min-h-screen bg-[#F8FAFC] pb-10 md:pb-20 ">
      {/* Header Section */}
      <div className="relative pt-20 md:pt-32  pb-10 md:pb-20 px-3 md:px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-teal-100/40 rounded-full blur-3xl" />
          <div className="absolute top-10 right-1/4 w-64 h-64 bg-indigo-50/50 rounded-full blur-3xl" />
        </div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4"
        >
          Your path to <span className="text-teal-600 italic">wellness</span> starts here
        </motion.h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
          Verified professionals chosen for their empathy and expertise. 
          Find someone who truly understands your journey.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10">
        {isLoading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[...Array(4)].map((_, i) => <SkeletonCard key={i} />)}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredData.map((therapist) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={therapist._id}
                  className="group relative bg-white border border-slate-100 rounded-[2.5rem] p-6 shadow-sm hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-500"
                >
                  <div className="flex flex-col sm:flex-row gap-8">
                    {/* Image Column */}
                    <div className="relative flex-shrink-0 mx-auto sm:mx-0">
                      <div className="w-40 h-52 rounded-[2rem] overflow-hidden shadow-inner bg-slate-50 border-4 border-white">
                        <img
                          src={therapist.imageUrl || "/placeholder.svg"}
                          alt={therapist.name}
                          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-2xl shadow-lg border border-slate-50">
                        <ShieldCheck className="w-6 h-6 text-teal-500" />
                      </div>
 
                    </div>

                    {/* Content Column */}
                    <div className="flex-1 flex flex-col justify-between py-2 text-center sm:text-left">
                      <div>
                        <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                          <h2 className="text-2xl font-bold text-slate-800">{therapist.name}</h2>
                          <div className="flex text-amber-400"><Star size={14} fill="currentColor" /></div>
                        </div>
                        <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-4">
                          {therapist.designation}
                        </p>

                        <div className="space-y-3 mb-6">
                          <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-500 text-sm">
                            <GraduationCap size={16} className="text-slate-400" />
                            <span>{therapist.experience} Experience</span>
                          </div>
                          <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-500 text-sm">
                            <Languages size={16} className="text-slate-400" />
                            <span>{therapist.languages?.join(", ")}</span>
                          </div>
                        </div>
                        {/* The Cute Marquee — Positioned right below the image container */}
                        <div className="mt-4 w-80 md:w-60 justify-center  overflow-hidden relative group/marquee">
                          {/* Gradient Mask for a "Trustworthy" smooth fade */}
                          <div className="absolute inset-y-0 left-0 w-4  bg-gradient-to-r from-white to-transparent z-10" />
                          <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-white to-transparent z-10" />
                          
                          <motion.div 
                            animate={{ x: [0, -100] }}
                            transition={{ 
                              repeat: Infinity, 
                              duration: 8, 
                              ease: "linear" 
                            }}
                            className="flex md:justify-center gap-2 whitespace-nowrap"
                          >
                            {/* Duplicate the expertise array to ensure a seamless loop */}
                            {[...(therapist.expertise || []), ...(therapist.expertise || [])].map((exp, i) => (
                              <span 
                                key={i} 
                                className="px-3 py-1 bg-teal-50/50 text-teal-700 text-[10px] font-bold uppercase tracking-tight rounded-full border border-teal-100/50"
                              >
                                {exp}
                              </span>
                            ))}
                          </motion.div>
                        </div>
                        {/* <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                          {therapist.expertise?.slice(0, 3).map((exp, i) => (
                            <span key={i} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-full border border-slate-100">
                              {exp}
                            </span>
                          ))}
                        </div> */}
                      </div>

                      <div className="mt-4 md:mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-50 pt-6">
                        <div>
                          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Session Starts at</p>
                          <p className="text-xl font-bold text-slate-900">
                            ₹{hasOfferClaim ? formatPrice(applyOfferDiscount(parseInt(therapist.price || "999"))) : therapist.price || "999"}
                            {hasOfferClaim && <span className="text-sm text-slate-300 line-through ml-2">₹{therapist.price}</span>}
                          </p>
                        </div>
                        <div className="flex gap-2">
                            <Link href={`/profile/${therapist._id}`}>
                                <Button variant="outline" className="rounded-2xl px-6 border-slate-200 text-slate-600 hover:bg-slate-50">
                                    Profile
                                </Button>
                            </Link>
                            <Button 
                            onClick={() => handleBookNow(therapist)}
                            className="bg-teal-600 hover:bg-teal-700 text-white px-8 rounded-2xl shadow-lg shadow-teal-600/20 transition-all active:scale-95"
                            >
                            Book Now
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
      </div>

      {psychologist && (
        <PsychologistModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          data={psychologist}
          hasOfferClaim={hasOfferClaim}
        />
      )}
    </section>
  );
}