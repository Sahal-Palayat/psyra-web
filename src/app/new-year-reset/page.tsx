"use client";

import React, { useRef } from "react";
import ProgramDetails from "@/components/NewYearReset/ProgramDetails";
import ProgramPaymentForm from "@/components/NewYearReset/ProgramPaymentForm";

const NewYearResetPage = () => {
  const formRef = useRef<HTMLDivElement | null>(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="min-h-screen bg-[#F7F8F2] pt-28 pb-16">
      <section className="px-4 mb-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-teal-700 mb-2">
            Psyra New Year Special
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-teal-900 mb-2">
            New Year Mind Reset Program
          </h1>
          <p className="text-sm md:text-base text-teal-800/90">
            A gentle mental reset to help you start this year with more clarity, calm,
            and self-compassion.
          </p>
        </div>
      </section>

      <ProgramDetails onPrimaryCtaClick={scrollToForm} />

      <div ref={formRef}>
        <ProgramPaymentForm />
      </div>
    </main>
  );
};

export default NewYearResetPage;


