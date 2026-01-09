"use client";

import { Users, CalendarDays, CreditCard, Video } from "lucide-react";
import Link from "next/link";
interface HowTherapyWorksProps {
  bgClassName?: string;
}


const steps = [
  {
    icon: Users,
    title: "Select a Therapist",
    description:
      "Discover experienced psychologists and find the one who feels right for you.",
  },
  {
    icon: CalendarDays,
    title: "Book a Slot",
    description: "Pick a convenient date and time that fits your schedule.",
  },
  {
    icon: CreditCard,
    title: "Confirm Your Session",
    description: "Securely book your session with a simple payment process.",
  },
  {
    icon: Video,
    title: "Attend Therapy Session",
    description:
      "Join your private online session from anywhere, safely and comfortably.",
  },
];

export default function HowTherapyWorks({
  bgClassName,
}: HowTherapyWorksProps) {
  return (
    <section className={`pt-8 pb-6 md:pt-12 md:pb-10  ${bgClassName ?? "bg-[#F7F8F2]"}`} >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <h2 className="text-gray-600 italic text-base sm:text-lg md:text-2xl mb-3 md:mb-4">
            Starting Therapy with Psyra
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-xs sm:text-sm md:text-base leading-relaxed">
            Start your healing journey in just a few simple steps. We make
            connecting with a therapist effortless and accessible.
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          <div className="hidden lg:block absolute top-16 left-12 right-12 h-1 bg-gradient-to-r from-[#43C6AC] via-[#43C6AC]/50 to-transparent pointer-events-none" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="h-full bg-white rounded-2xl p-8 border border-[#0F3D3E]/8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-[#43C6AC]/30">
                  {/* Step Number Badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#43C6AC] to-[#0F3D3E]/80 flex items-center justify-center">
                      <span className="text-lg font-bold text-white">
                        {index + 1}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-[#43C6AC]/15 flex items-center justify-center group-hover:bg-[#43C6AC]/25 transition-colors">
                      <step.icon className="w-5 h-5 text-[#0F3D3E]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-semibold text-[#0F3D3E] mb-2 group-hover:text-[#43C6AC] transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#5F7775] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10 md:mt-12 text-center">
          <p className="text-xs sm:text-sm text-gray-600 mb-4">
            Ready to start your therapy journey?
          </p>
          <Link href="/psychologists">
            <button className="px-8 py-3 bg-[#00989D] text-white rounded-full font-medium rounded-full hover:bg-[#00989D]/90 transition-colors shadow-md hover:shadow-lg">
              Get Started Today
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
