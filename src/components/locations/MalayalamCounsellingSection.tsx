"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionTitle";
import {
  ArrowRight,
  Globe2,
  HeartHandshake,
  ShieldCheck,
  Users2,
} from "lucide-react";
import { Card } from "@/components/ui/card";

interface MalayalamCounsellingSectionProps {
  countryName: string;
  displayName: string;
}

export default function MalayalamCounsellingSection({
  countryName,
  displayName,
}: MalayalamCounsellingSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const supportAreas = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Stress & Anxiety",
      description: `Personalized coping strategies for the fast-paced lifestyle in ${countryName}.`,
      bg: "bg-[#eef4f1]",
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      title: "Relationship & Couples",
      description:
        "Bridging communication gaps within a familiar cultural context.",
      bg: "bg-white",
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Family Guidance",
      description:
        "Support for navigating family dynamics while living abroad.",
      bg: "bg-white",
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: "Expat Mental Health",
      description: `Specialized care for adjusting and thriving as an expatriate in ${countryName}.`,
      bg: "bg-[#eef4f1]",
    },
  ];

  return (
    <section className="px-6 py-24 bg-[#f8faf9]">
      <div className="max-w-7xl mx-auto">
        {/* HERO INTRO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-[#43C6AC] mb-6">
              Cultural Resonance
            </p>
            <SectionHeader className="mb-8 leading-[1.1]">
              Professional Counseling in{" "}
              <span className="italic">Malayalam.</span>
            </SectionHeader>
            <p className="text-xl text-[#1a3c34]/70 leading-relaxed font-sans max-w-xl">
              For many Malayalis living abroad, expressing emotions feels most
              natural in their mother tongue. We offer professional counseling
              in Malayalam - rooted in cultural understanding and care.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] bg-gradient-to-br from-[#e8f5f1] via-[#cceee7] to-[#b6e5dc] overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr  opacity-60" />
            <img
              src="/psyra-location-pin.png"
              alt={`Online therapy accessible across ${countryName}`}
              className="object-cover w-full h-full transition-all duration-1000"
            />
            <div className="absolute bottom-10 left-10 text-[#00989D]">
              <h3 className="text-2xl font-serif">
                Connect from {displayName}.
              </h3>
            </div>
          </motion.div>
        </div>

        {/* SUPPORT GRID */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h3 className="text-4xl font-serif tracking-tight text-[#1a3c34]">
              How Malayalam counseling supports you.
            </h3>
            <p className="text-sm text-[#1a3c34]/60 max-w-xs font-sans">
              Expert guidance tailored to the specific emotional experiences of
              the Malayali community living in {countryName}.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a3c34]/5 border border-[#1a3c34]/5 overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {supportAreas.map((area, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card
                  className={`border-none rounded-none shadow-none p-12 h-full min-h-[320px] transition-colors duration-500 hover:bg-[#00989D] group ${area.bg}`}
                >
                  <div className="w-12 h-12 rounded-full border border-[#1a3c34]/10 flex items-center justify-center mb-10 group-hover:border-white/20 transition-colors">
                    <div className="text-[#1a3c34] group-hover:text-white transition-colors">
                      {area.icon}
                    </div>
                  </div>
                  <h4 className="text-2xl font-serif text-[#1a3c34] mb-4 group-hover:text-white transition-colors">
                    {area.title}
                  </h4>
                  <p className="text-sm text-[#1a3c34]/60 leading-relaxed group-hover:text-white/60 transition-colors">
                    {area.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CULTURAL CONTEXT & STEPS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="p-16 bg-[#00989D] text-white">
              <h3 className="text-3xl font-serif mb-8 leading-tight">
                Why language matters in therapy.
              </h3>
              <p className="text-lg text-white/70 leading-relaxed font-sans mb-8">
                Expressing deep emotions is most effective in your first
                language. Our Malayalam-speaking psychologists understand not
                just the words, but the cultural nuances and traditions that
                shape your perspective.
              </p>
              <div className="flex items-center gap-4 group cursor-pointer">
                <span className="text-xs uppercase tracking-widest font-bold border-b border-white/20 pb-1 group-hover:border-white transition-all">
                  Meet our Malayali Team
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </div>
            </div>
          </div>

          <div className="space-y-12 py-8">
            <h3 className="text-2xl font-serif text-[#1a3c34] border-b border-[#1a3c34]/10 pb-6">
              Your Journey
            </h3>
            <div className="space-y-10">
              {[
                "Book your session online with a licensed counselor.",
                "Connect comfortably in Malayalam via video, chat, or phone.",
                "Receive personalized, culturally-nuanced guidance.",
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <span className="text-xs font-bold text-[#43C6AC] mt-1">
                    0{i + 1}
                  </span>
                  <p className="text-base text-[#1a3c34]/80 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
