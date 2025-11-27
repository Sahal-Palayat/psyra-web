"use client";
import React, { useState } from "react";
import {
  Brain,
  Heart,
  Users,
  Shield,
  Leaf,
  Zap,
  Globe,
  Baby,
  Target,
  Lightbulb,
  Activity,
  LucideIcon,
} from "lucide-react";
import type { SpecializationDetail } from "@/types/psychologist";

// Function to decide icon based on keywords
function getIconForSpecialization(name: string): LucideIcon {
  const lower = name.toLowerCase();

  // Child development & parenting
  if (
    lower.includes("child development") ||
    lower.includes("parenting support")
  )
    return Baby;

  // Cognitive skills
  if (
    lower.includes("cognitive") &&
    !lower.includes("cbt") &&
    !lower.includes("cognitive behav")
  )
    return Lightbulb;

  // CBT (Cognitive Behavioral Therapy)
  if (
    lower.includes("cbt") ||
    lower.includes("cognitive behav") ||
    lower.includes("cognitive-behav")
  )
    return Activity;

  // Behavior therapy
  if (
    lower.includes("behavior therapy") ||
    lower.includes("behaviour therapy") ||
    lower.includes("behavioral")
  )
    return Target;

  // Anxiety, mood, personality disorders
  if (
    lower.includes("anxiety") ||
    lower.includes("mood") ||
    lower.includes("personality") ||
    lower.includes("depression") ||
    lower.includes("panic") ||
    lower.includes("phobia")
  )
    return Brain;

  // Relationships & couples
  if (
    lower.includes("relationship") ||
    lower.includes("couple") ||
    lower.includes("marriage") ||
    lower.includes("family") ||
    lower.includes("interpersonal") ||
    lower.includes("communication")
  )
    return Users;

  // Sexual & intimacy
  if (
    lower.includes("sexual") ||
    lower.includes("intimacy") ||
    lower.includes("sex")
  )
    return Heart;

  // Stress & burnout
  if (
    lower.includes("stress") ||
    lower.includes("burnout") ||
    lower.includes("productivity") ||
    lower.includes("work-life") ||
    lower.includes("overwhelm") ||
    lower.includes("coping")
  )
    return Leaf;

  // Trauma & PTSD
  if (
    lower.includes("trauma") ||
    lower.includes("ptsd") ||
    lower.includes("abuse") ||
    lower.includes("violence")
  )
    return Shield;

  // Cultural & cross-cultural
  if (
    lower.includes("cross-cultural") ||
    lower.includes("cultural") ||
    lower.includes("multicultural")
  )
    return Globe;

  // Default
  return Zap;
}

function TruncatedText({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);

  const limit = 110;
  const isLong = text.length > limit;

  const shownText = expanded
    ? text
    : text.slice(0, limit) + (isLong ? "..." : "");

  return (
    <div className="flex flex-col h-full">
      {/* Scrollable text area */}
      <div
        className="flex-1 overflow-y-auto pr-2 mb-2"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <p className="text-gray-700 text-xs md:text-base leading-relaxed">
          {shownText}
        </p>
      </div>

      {/* Read More / Read Less button - always visible */}
      {isLong && (
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="text-[#085B5D] hover:text-[#064347] font-semibold text-xs md:text-sm underline text-left transition-colors"
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
      <h2 className="text-3xl md:text-4xl font-bold text-[#085B5D] mb-6 md:mb-8 px-1">
        Specializations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-1">
        {specialization.map((spec, idx) => {
          const Icon = getIconForSpecialization(spec.name);
          const gradient = gradients[idx % gradients.length];

          return (
            <div
              key={idx}
              className={`group p-4 md:p-8 rounded-2xl bg-gradient-to-br ${gradient}
              transition-all duration-300 hover:scale-[1.03] hover:shadow-lg h-[180px] md:h-[280px] xl:h-[280px] flex flex-col`}
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-white/40 flex items-center justify-center shadow backdrop-blur-sm flex-shrink-0">
                  <Icon
                    size={20}
                    className="text-[#085B5D] md:w-[26px] md:h-[26px]"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-base md:text-2xl text-[#2A4A4D] mb-1 md:mb-2 leading-tight">
                    {spec.name}
                  </h3>
                </div>
              </div>

              <div className="flex-1 min-h-0">
                <TruncatedText text={spec.desc} />
              </div>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .overflow-y-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
