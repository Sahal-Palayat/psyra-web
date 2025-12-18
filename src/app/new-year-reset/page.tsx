"use client";

import React, { useState } from "react";
import ProgramDetails from "@/components/NewYearReset/ProgramDetails";
import ProgramPaymentForm from "@/components/NewYearReset/ProgramPaymentForm";
import HowSpaceWorks from "@/components/NewYearReset/HowSpaceWorks";

const NewYearResetPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen  pb-16">
      {/* Top hero section with extra top padding so it clears the fixed navbar on desktop */}
      <section className="px-4 m-2 pt-24 md:pt-32 pb-10 bg-[#B1DFAE] rounded-lg">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-teal-700 mb-2">
            Psyra New Year Special
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-teal-900 mb-2">
            SPACE – 21-Day Life Reset Journey
          </h1>
          <p className="text-sm md:text-base text-teal-800/90 mb-4">
            A 21-day guided journey inside SPACE by Psyra to reset your mind, rebuild
            habits, and start a new chapter with more clarity and calm.
          </p>
          <button
            onClick={openModal}
            className="mt-1 inline-flex items-center justify-center rounded-full bg-teal-700 text-white text-sm md:text-base font-semibold px-6 py-2.5 shadow-md hover:bg-teal-800 transition-all"
          >
            Join the 21-day SPACE program
          </button>
        </div>
      </section>

      <ProgramDetails onPrimaryCtaClick={openModal} />

      {/* HOW SPACE WORKS Section - Roadmap */}
      <HowSpaceWorks />

      {/* Modal Form */}
      <ProgramPaymentForm isOpen={isModalOpen} onClose={closeModal} />
    </main>
  );
};

export default NewYearResetPage;
