"use client";

import type React from "react";
import Link from "next/link";
import { Users, Calendar, CheckCircle, Video } from "lucide-react";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

interface HowItWorksProps {
  bgColor?: string
}


const steps: Step[] = [
  {
    id: 1,
    title: "Find the Right Psychologist",
    description:
      "Browse licensed psychologists based on your concerns, language preference, and therapy goals.",
    icon: <Users className="w-6 h-6 text-[#1a3c34]" />,
    gradient: "from-[#FFE8B6] via-[#FFE1C7] to-[#FAD7C3]",
  },
  {
    id: 2,
    title: "Book Your Slot",
    description:
      "Choose a convenient time slot and book your online therapy session in just a few clicks.",
    icon: <Calendar className="w-6 h-6 text-[#1a3c34]" />,
    gradient: "from-[#EAD7FF] via-[#E3DCFF] to-[#D9E7FF]",
  },
  {
    id: 3,
    title: "Confirm Your Session",
    description: "Confirm your appoinment and get booking confirmation.",
    icon: <CheckCircle className="w-6 h-6 text-[#1a3c34]" />,
    gradient: "from-[#CFF6EA] via-[#D6F4FF] to-[#BDEBFF]",
  },
  {
    id: 4,
    title: "Attend Therapy Session",
    description:
      "Connect with your psychologist through video, audio, or chat from the comfort of your space.",
    icon: <Video className="w-6 h-6 text-[#1a3c34]" />,
    gradient: "from-[#FFF3B0] via-[#FFE8B6] to-[#FFD6C9]",
  },
];

export function HowItWorks({
  bgColor = "bg-[#F7F8F2]",
}: HowItWorksProps) {
  return (
    <section className={`w-full py-12 md:py-14 px-4 md:px-6 ${bgColor}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-serif text-gray-700 mb-2">
            Your Journey to Therapy
          </h2>
          <p className="text-xs md:text-sm text-gray-600 max-w-2xl mx-auto">
            Start your online therapy journey with Psyra in a few simple steps.
            Connect with experienced psychologists through secure, confidential,
            and convenient online counselling sessions.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-4 px-2 md:px-0">
          {steps.map((step) => (
            <div key={step.id} className="flex-1">
              <div
                className={`
                  h-full p-6 md:p-7
                  rounded-[2.2rem]
                  bg-gradient-to-br ${step.gradient}
                  shadow-[0_4px_14px_rgba(0,0,0,0.06)]
                  transition-all duration-300
                  md:hover:shadow-[0_10px_26px_rgba(0,0,0,0.12)]
                  flex flex-col items-center text-center
                `}
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/70 backdrop-blur shadow-sm">
                    {step.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-sm md:text-base font-semibold mb-2 text-[#1a3c34]">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs md:text-sm leading-relaxed text-[#1a3c34]/75">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 md:mt-12">
          <p className="text-base md:text-lg font-semibold text-[#1a3c34] mb-5 tracking-tight">
            Ready to begin your therapy journey?
          </p>

          <Link
            href="/psychologists"
            className="
              inline-flex items-center justify-center
              px-7 py-3.5 rounded-full
              text-sm md:text-base font-semibold text-white
              bg-[#00989D]
              shadow-[0_10px_28px_rgba(20,184,166,0.35)]
              hover:shadow-[0_14px_34px_rgba(20,184,166,0.45)]
              hover:scale-[1.03]
              transition-all duration-300
            "
          >
            Choose Your Psychologist
          </Link>
        </div>
      </div>
    </section>
  );
}
