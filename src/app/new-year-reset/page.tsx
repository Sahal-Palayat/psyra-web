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
      <section
        className="
  px-6 
  pt-28 pb-14 
  md:px-4 md:pt-32 md:pb-16 
  m-2 bg-teal-600 rounded-lg
"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
            Your Life Doesn’t Need Another Year.
          </h1>

          <p className="text-sm md:text-base text-teal-50/90 mb-6 leading-relaxed">
            Real change begins with understanding how your mind works.
          </p>

          <button
            onClick={openModal}
            className="
        inline-flex items-center justify-center
        w-full sm:w-auto
        rounded-full bg-white text-teal-700
        text-sm md:text-base font-semibold
        px-8 py-3 shadow-md
        hover:bg-teal-50 transition-all
      "
          >
            Enroll Now
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
