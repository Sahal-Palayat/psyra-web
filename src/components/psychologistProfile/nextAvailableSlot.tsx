"use client";
import React from 'react'
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";


function getNextSlot(slots: string[]) {
  const now = new Date();

  for (const slot of slots) {
    const [start] = slot.split(" - ");
    const slotDate = new Date();
    const [time, modifier] = start.split(" ");
    let [hours] = time.split(":").map(Number);

    if (modifier === "PM" && hours !== 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;

    slotDate.setHours(hours, 0, 0);

    if (slotDate > now) return slot;
  }

  return null;
}

export default function NextAvailableSlot({
  monthlySlots,
}: {
  monthlySlots: string[];
}) {
  return (
    <>
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-4 bg-gradient-to-r from-[#E8F7F8] to-[#D5F3F5] border-2 border-[#00989D]/20 rounded-xl md:rounded-2xl px-4 md:px-6 py-4 md:py-5 shadow-md">
          <div className="flex items-center gap-3 md:gap-4 w-full md:w-auto">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/80 flex items-center justify-center shadow-sm flex-shrink-0">
              <Calendar size={24} className="text-[#00989D] md:w-7 md:h-7" />
            </div>
            <div className="flex-1">
              <p className="text-xs md:text-sm font-medium text-[#085B5D]/70 mb-1">
                Next Available Slot
              </p>
              <p className="text-base md:text-lg font-bold text-[#085B5D]">
                {getNextSlot(monthlySlots) || "No slots available"}
              </p>
            </div>
          </div>

          {getNextSlot(monthlySlots) && (
            <Button
              variant="outline"
              className="
                w-full md:w-auto
                border-2 border-[#00989D]
                text-[#00989D]
                hover:bg-[#00989D] hover:text-white
                px-6 md:px-8 py-2.5 md:py-3
                rounded-lg md:rounded-xl
                font-semibold text-sm md:text-base
                whitespace-nowrap
                transition-all duration-200
              "
            >
              Book This Slot
            </Button>
          )}
        </div>
    </>
  )
}


