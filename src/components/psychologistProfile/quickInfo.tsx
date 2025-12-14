"use client";
import React, { useState } from "react";
import { Globe, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PsychologistProfile } from "@/types/psychologist";
import { PsychologistModal } from "@/components/Psychologist/Modal/PsychologistModal";
import { createPortal } from "react-dom";

interface QuickInfoProps {
  therapist: PsychologistProfile;
}

const QuickInfo = ({ therapist }: QuickInfoProps) => {
  const [openBooking, setOpenBooking] = useState(false);

  return (
    <>
    
      <div className="relative z-20 mx-auto max-w-md md:max-w-2xl lg:max-w-6xl px-4 mt-8 md:-mt-8 mb-8">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-4 md:p-8">
          {/* Mobile View */}
          <div className="md:hidden">
  <div className="grid grid-cols-2 gap-3 mb-4">
    {/* Languages */}
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#00989D]/10 flex items-center justify-center flex-shrink-0">
        <Globe className="text-[#00989D] w-3 h-3 sm:w-4 sm:h-4" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[8px] sm:text-[10px] text-gray-500 uppercase tracking-wide font-semibold">
          Languages
        </p>
        <p className="font-bold text-[11px] sm:text-sm text-gray-900 truncate">
          {therapist.languages.join(", ")}
        </p>
      </div>
    </div>

    {/* Price */}
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#00989D]/10 flex items-center justify-center flex-shrink-0">
        <IndianRupee className="text-[#00989D] w-3 h-3 sm:w-4 sm:h-4" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[8px] sm:text-[10px] text-gray-500 uppercase tracking-wide font-semibold">
          Price
        </p>
        <p className="font-bold text-[11px] sm:text-sm text-gray-900">
          ₹{therapist.price}
        </p>
      </div>
    </div>
  </div>

  {/* Button */}
  <Button
    onClick={() => setOpenBooking(true)}
    className="w-full bg-[#00989D] hover:bg-[#007a7e] text-white font-semibold py-2.5 sm:py-3 px-4 rounded-xl text-xs sm:text-sm"
  >
    Get Therapy
  </Button>
</div>
          {/* Desktop View */}
          <div className="hidden md:flex items-center justify-between gap-8">
            <div className="flex items-center gap-12 flex-1">
              {/* Languages */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#00989D]/10 flex items-center justify-center">
                  <Globe className="text-[#00989D]" size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">
                    Languages
                  </p>
                  <p className="font-bold text-lg text-gray-900">
                    {therapist.languages.join(", ")}
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#00989D]/10 flex items-center justify-center">
                  <IndianRupee className="text-[#00989D]" size={24} />
                </div>

                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">
                    Price
                  </p>
                  <p className="font-bold text-lg text-gray-900">
                    ₹{therapist.price}
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
            <Button
              onClick={() => setOpenBooking(true)}
              className="bg-[#00989D] hover:bg-[#007a7e] text-white font-semibold py-4 px-10 rounded-xl whitespace-nowrap"
            >
              Get Therapy
            </Button>
          </div>
        </div>
      </div>

      {typeof window !== "undefined" &&
        document.getElementById("modal-root") &&
        createPortal(
          <PsychologistModal
            isOpen={openBooking}
            onClose={() => setOpenBooking(false)}
            data={therapist}
          />,
          document.getElementById("modal-root")!
        )}
    </>
  );
};

export default QuickInfo;
