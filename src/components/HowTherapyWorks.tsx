"use client";

import type React from "react";
import Link from "next/link";



function PsychologistSVG() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="20" fill="#FFD2BE" />
      <circle cx="15" cy="17" r="3" fill="#E76F51" />
      <circle cx="23" cy="17" r="3" fill="#E76F51" />
      <path d="M10 26c0-3 3-5 5-5s5 2 5 5" fill="#E76F51" />
      <path
        d="M18 26c0-2.5 2.5-4.5 5-4.5S28 23.5 28 26"
        fill="#E76F51"
      />
    </svg>
  );
}

function CalendarSVG() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="20" fill="#E2D8FF" />
      <rect x="11" y="12" width="18" height="16" rx="4" fill="#7C6CF2" />
      <rect x="11" y="12" width="18" height="5" rx="4" fill="#6A5AE0" />
      <circle cx="20" cy="21" r="2" fill="#FFFFFF" />
    </svg>
  );
}

function ConfirmSVG() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="20" fill="#CDEEE9" />
      <circle cx="20" cy="20" r="9" fill="#2FB6A3" />
      <path
        d="M16 20l3 3 6-6"
        stroke="#FFFFFF"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VideoSessionSVG() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="20" fill="#FFE29A" />
      <rect x="11" y="14" width="14" height="12" rx="4" fill="#F2B705" />
      <path d="M25 16l6-3v14l-6-3v-8z" fill="#E0A800" />
    </svg>
  );
}



interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Find the Right Psychologist",
    description:
      "Browse licensed psychologists based on your concerns, language preference, and therapy goals.",
    icon: <PsychologistSVG />,
    gradient: "from-[#FFE8B6] via-[#FFE1C7] to-[#FAD7C3]",
  },
  {
    id: 2,
    title: "Book Your Slot",
    description:
      "Choose a convenient time slot and book your online therapy session in just a few clicks.",
    icon: <CalendarSVG />,
    gradient: "from-[#EAD7FF] via-[#E3DCFF] to-[#D9E7FF]",
  },
  {
    id: 3,
    title: "Confirm Your Session",
    description:
      "Confirm your appointment and get your booking confirmation.",
    icon: <ConfirmSVG />,
    gradient: "from-[#CFF6EA] via-[#D6F4FF] to-[#BDEBFF]",
  },
  {
    id: 4,
    title: "Attend Therapy Session",
    description:
      "Connect with your psychologist through video, audio, or chat from the comfort of your space.",
    icon: <VideoSessionSVG />,
    gradient: "from-[#FFF3B0] via-[#FFE8B6] to-[#FFD6C9]",
  },
];



export function HowItWorks({
  bgColor = "bg-[#F7F8F2]",
}: {
  bgColor?: string;
}) {
  return (
    <section className={`w-full py-14 md:py-20 px-4 md:px-8 ${bgColor}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-serif text-gray-700 mb-3">
            Your Journey to Therapy
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Start your online therapy journey with Psyra in a few simple steps.
            Connect with experienced psychologists through secure, confidential,
            and convenient online counselling sessions.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-5">
          {steps.map((step) => (
            <div key={step.id} className="flex-1">
              <div
                className={`
                  h-full
                  px-6 py-5
                  rounded-[2rem]
                  bg-gradient-to-br ${step.gradient}
                  shadow-[0_6px_18px_rgba(0,0,0,0.08)]
                  flex flex-col items-center text-center
                `}
              >
                {/* ICON */}
                <div
                  className="
                    mb-2 md:mb-3
                    flex justify-center
                    scale-110
                    md:scale-125
                    -translate-y-1
                    md:-translate-y-2
                  "
                >
                  {step.icon}
                </div>

                <h3 className="text-sm md:text-base font-semibold mb-2 text-[#1a3c34]">
                  {step.title}
                </h3>

                <p className="text-xs md:text-sm leading-relaxed text-[#1a3c34]/75 max-w-[18rem]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-base md:text-lg font-semibold text-[#1a3c34] mb-6">
            Ready to begin your therapy journey?
          </p>

          <Link
            href="/psychologists"
            className="
              inline-flex items-center justify-center
              px-8 py-3.5 rounded-full
              text-sm md:text-base font-semibold text-white
              bg-[#00989D]
              shadow-[0_12px_30px_rgba(20,184,166,0.35)]
              hover:shadow-[0_18px_40px_rgba(20,184,166,0.45)]
              hover:scale-[1.04]
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
