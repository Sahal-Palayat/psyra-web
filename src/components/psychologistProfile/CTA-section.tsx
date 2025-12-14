"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PsychologistModal } from "@/components/Psychologist/Modal/PsychologistModal";
import type { Psychologist } from "@/types/psychologist";
import { createPortal } from "react-dom";

export default function CTASection({ psychologist }: { psychologist: Psychologist }) {
  const [openBooking, setOpenBooking] = useState(false);

  return (
    <>
      <section className="bg-gradient-to-r from-[#00989D] to-[#005F63] rounded-2xl md:rounded-3xl p-6 md:p-16 text-white text-center border border-[#00989D]/30">
        <h2 className="text-xl md:text-4xl font-bold mb-3 md:mb-4">
          Ready to Start Your Journey?
        </h2>

        <p className="text-sm md:text-lg opacity-90 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
          Take the first step towards better mental health and emotional
          wellbeing with personalized therapy sessions tailored to your needs.
        </p>

        <Button
  onClick={() => setOpenBooking(true)}
  className="w-full md:w-auto bg-white/5 backdrop-blur-sm text-white 
             hover:bg-white/15 border border-white/20
             px-6 md:px-10 py-2.5 md:py-3 rounded-full font-semibold 
             md:font-bold text-sm md:text-lg
             transition-all duration-500 hover:border-white/40"
>
  Book Your First Session Today
</Button>
      </section>


      {typeof window !== "undefined" &&
        createPortal(
          <PsychologistModal
            isOpen={openBooking}
            onClose={() => setOpenBooking(false)}
            data={psychologist}
          />,
          document.getElementById("modal-root")!
        )}
    </>
  );
}
