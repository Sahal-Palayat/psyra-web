"use client";
import React, { useState } from "react"; // <-- ADDED useState
import {
  Brain,
  Heart,
  Users,
  Shield,
  Leaf,
  Zap,
  Globe,
  LucideIcon,
} from "lucide-react";
import type { SpecializationDetail } from "@/types/psychologist";

// Function to decide icon based on keywords
function getIconForSpecialization(name: string): LucideIcon {
  const lower = name.toLowerCase();

  if (lower.includes("anxiety") || lower.includes("mood") || lower.includes("personality"))
    return Brain;

  if (lower.includes("relationship") || lower.includes("couple"))
    return Users;

  if (lower.includes("sexual") || lower.includes("intimacy"))
    return Heart;

  if (lower.includes("stress") || lower.includes("burnout") || lower.includes("productivity"))
    return Leaf;

  if (lower.includes("trauma") || lower.includes("ptsd"))
    return Shield;

  if (lower.includes("cross-cultural") || lower.includes("cultural"))
    return Globe;

  return Zap; 
}


function TruncatedText({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);

  const limit = 110; 
  const isLong = text.length > limit;

  const shownText = expanded ? text : text.slice(0, limit) + (isLong ? "..." : "");

  return (
    <div>
      {/* Truncated / full text */}
      <p className="text-gray-700 text-xs md:text-base leading-relaxed">
        {shownText}
      </p>

      {/* Read More / Read Less button */}
      {isLong && (
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="text-[#085B5D] font-semibold text-xs md:text-sm mt-1 underline"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
}

export default function Specializations({
  specialization,
}: {
  specialization: SpecializationDetail[];
}) {
  if (!specialization || specialization.length === 0) return null;

  const gradients = [
    "from-[#FDF7C3] via-[#FAD9A1] to-[#EAC9C1]",
    "from-[#F6D6FF] via-[#E5C1FF] to-[#C2E9FB]",
    "from-[#BFF0D4] via-[#A4EAF7] to-[#8EC5FC]",
    "from-[#E9FBC8] via-[#FAE58D] to-[#F7CBD1]",
    "from-[#D6E5FA] via-[#E7D9FF] to-[#C1F2F4]",
    "from-[#FFEAC5] via-[#FFD1DC] to-[#D5F9E7]",
  ];

  return (
    <section className="border-t border-slate-200 pt-8 md:pt-12">
      <h2 className="text-3xl md:text-4xl font-bold text-[#085B5D] mb-6 md:mb-8">
        Specializations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {specialization.map((spec, idx) => {
          const Icon = getIconForSpecialization(spec.name);
          const gradient = gradients[idx % gradients.length];

          return (
            <div
              key={idx}
              className={`group p-5 md:p-8 rounded-2xl bg-gradient-to-br ${gradient}
              cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-lg`}
            >
              <div className="flex items-start gap-4 md:flex-col md:gap-5">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/40 flex items-center justify-center shadow backdrop-blur-sm">
                  <Icon size={26} className="text-[#085B5D]" />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-lg md:text-2xl text-[#2A4A4D] mb-2">
                    {spec.name}
                  </h3>

                  <TruncatedText text={spec.desc} />

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
