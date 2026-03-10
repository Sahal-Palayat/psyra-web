"use client";
import { useEffect, useRef, useState } from "react";
import { isSameDay, parse, addMinutes } from "date-fns";
import { motion } from "framer-motion";
import { Calendar } from "./calendar";
import {  BookingData } from "./types";

interface SlotSelectionProps {
  bookingData: BookingData;
  onUpdate: (data: Partial<BookingData>) => void;
  bookedSlots?: string[];
  allTimeSlots: string[];
}

export function SlotSelection({
  bookingData,
  onUpdate,
  allTimeSlots,
  bookedSlots,
}: SlotSelectionProps) {
  const [bookedSlotsForDate, setBookedSlotsForDate] = useState<string[]>([]);
  const slotListRef = useRef<HTMLDivElement>(null);

  /* ---------------- FILTER BOOKED SLOTS ---------------- */

  useEffect(() => {
    if (bookingData.date) {
      // Backend already filters by date
      const bookedForThisDate = Array.isArray(bookedSlots)
        ? bookedSlots
        : [];
  
      setBookedSlotsForDate(bookedForThisDate);
  
      if (
        bookingData.timeSlot &&
        (bookedForThisDate.includes(bookingData.timeSlot) ||
          isSlotPast(bookingData.timeSlot, bookingData.date))
      ) {
        onUpdate({ timeSlot: "" });
      }
    }
  }, [bookingData.date, bookedSlots]);
  

  /* ---------------- DATE SELECT ---------------- */

  const handleDateSelect = (date: Date) => {
    if (window.innerWidth < 768) {
      setTimeout(() => {
        slotListRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }, 150);
    }

    const yyyyMmDd =
      date.getFullYear() +
      "-" +
      String(date.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(date.getDate()).padStart(2, "0");

    onUpdate({ date: yyyyMmDd, timeSlot: "" });
  };

  /* ---------------- TIME SELECT ---------------- */

  const handleTimeSelect = (timeSlot: string) => {
    if (
      !isSlotBooked(timeSlot) &&
      !isSlotPast(timeSlot, bookingData.date)
    ) {
      onUpdate({ timeSlot });
    }
  };

  /* ---------------- SLOT HELPERS ---------------- */

  const isSlotBooked = (slot: string) => {
    return bookedSlotsForDate.includes(slot);
  };

  const isSlotPast = (slot: string, selectedDate?: string) => {
    if (!selectedDate) return false;

    const now = new Date();
    const [year, month, day] = selectedDate.split("-").map(Number);
    const selected = new Date(year, month - 1, day);

    const isToday = isSameDay(selected, now);
    if (!isToday) return false;

    const startTimeStr = slot.split(" - ")[0];
    const slotDate = parse(startTimeStr, "h:mm a", selected);
    const currentTimePlus30 = addMinutes(now, 30);

    return slotDate <= currentTimePlus30;
  };

  const getSlotButtonClass = (slot: string) => {
    if (isSlotBooked(slot) || isSlotPast(slot, bookingData.date)) {
      return "bg-red-100 text-red-400 border-red-200 cursor-not-allowed";
    }
    if (bookingData.timeSlot === slot) {
      return "bg-[#005657] text-white border-[#005657]";
    }
    return "border-[#B6E5DF] text-[#005657] hover:bg-[#B6E5DF]/20";
  };

  const getSlotTooltip = (slot: string) => {
    if (isSlotBooked(slot)) return "This slot is already booked";
    if (isSlotPast(slot, bookingData.date))
      return "This slot is no longer available";
    return "Click to select this time slot";
  };

  const unavailableSlots = allTimeSlots.filter(
    (slot) =>
      isSlotBooked(slot) || isSlotPast(slot, bookingData.date)
  );

  /* ---------------- UI ---------------- */

  return (
    <div
      ref={slotListRef}
      className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6"
    >
      {/* DATE */}
      <div className="space-y-4">
        <h3 className="font-medium text-base sm:text-lg text-[#005657]">
          Select a Date
        </h3>

        <div className="bg-[#B6E5DF]/10 rounded-lg p-3 sm:p-4">
          <Calendar
            selected={
              bookingData.date
                ? new Date(bookingData.date + "T00:00:00")
                : undefined
            }
            onSelect={handleDateSelect}
          />
        </div>

        {bookingData.date && (
          <div className="p-3 bg-[#B6E5DF]/20 rounded-md">
            <p className="text-sm text-[#005657]">
              Selected: {bookingData.date}
            </p>
          </div>
        )}
      </div>

      {/* SLOTS */}
      <div className="space-y-4">
        <h3 className="font-medium text-base sm:text-lg text-[#005657]">
          {bookingData.date
            ? "Available Time Slots"
            : "Select a date to see available times"}
        </h3>

        {bookingData.date ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-[#B6E5DF]/10 rounded-lg p-3 sm:p-4 max-h-[500px] overflow-y-auto"
          >
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {allTimeSlots.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  disabled={
                    isSlotBooked(slot) ||
                    isSlotPast(slot, bookingData.date)
                  }
                  className={`px-2 py-2 rounded-md border text-xs sm:text-sm ${getSlotButtonClass(
                    slot
                  )}`}
                  onClick={() => handleTimeSelect(slot)}
                  title={getSlotTooltip(slot)}
                >
                  {slot}
                </button>
              ))}
            </div>

            {bookingData.timeSlot && (
              <div className="mt-4 p-3 bg-[#B6E5DF]/30 rounded-md">
                Selected time: {bookingData.timeSlot}
              </div>
            )}

            {unavailableSlots.length > 0 && (
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md text-xs text-yellow-800">
                {unavailableSlots.length} slot
                {unavailableSlots.length > 1 ? "s" : ""} unavailable
              </div>
            )}
          </motion.div>
        ) : (
          <div className="bg-[#B6E5DF]/10 rounded-lg p-6 text-center">
            Select a date first
          </div>
        )}
      </div>
    </div>
  );
}
