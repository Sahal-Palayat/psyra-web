"use client";
import { useEffect, useRef, useState } from "react";
import { format, isSameDay, parse, addMinutes } from "date-fns";
import { motion } from "framer-motion";
import { Calendar } from "./calendar";
import { BookedSlot, BookingData } from "./types";

interface SlotSelectionProps {
  bookingData: BookingData;
  onUpdate: (data: Partial<BookingData>) => void;
  bookedSlots?: BookedSlot[]; // Backend data for booked slots
  allTimeSlots: string[];
}

export function SlotSelection({
  bookingData,
  onUpdate,
  allTimeSlots,
  bookedSlots,
}: SlotSelectionProps) {
  const [bookedSlotsForDate, setBookedSlotsForDate] = useState<string[]>([]);
  // const [bookedSlots, setBookedSlot] = useState<BookedSlot[]>([]);

  console.log(bookedSlots, "BOOKEDDD SLOTSS");

  useEffect(() => {
    if (bookingData.date) {
      const formattedDate = format(bookingData.date, "yyyy-MM-dd");
      // Filter booked slots for the selected date
      const bookedForThisDate = bookedSlots
        ? bookedSlots
            .filter((slot: BookedSlot) => slot.date === formattedDate)
            .map((slot: BookedSlot) => slot.timeSlot)
        : [];

      setBookedSlotsForDate(bookedForThisDate);

      // If currently selected time slot is booked or past, clear it
      if (
        bookingData.timeSlot &&
        (bookedForThisDate.includes(bookingData.timeSlot) ||
          isSlotPast(bookingData.timeSlot, bookingData.date))
      ) {
        onUpdate({ timeSlot: "" });
      }
    }
  }, [bookingData.date, bookedSlots]);

  const handleDateSelect = (date: Date) => {
    // Scroll to slot selection when date is updated (especially in mobile)
    if (window.innerWidth < 768) {
      setTimeout(() => {
        if (slotListRef.current) {
          slotListRef.current.scrollIntoView({
            behavior: "smooth",
            block: "end",
          });
        }
      }, 150); // short delay for DOM to update
    }
    onUpdate({ date, timeSlot: "" });
  };

  const handleTimeSelect = (timeSlot: string) => {
    // Don't allow selection of booked slots or past slots
    if (
      !bookedSlotsForDate.includes(timeSlot) &&
      !isSlotPast(timeSlot, bookingData.date)
    ) {
      onUpdate({ timeSlot });
    }
  };

  const slotListRef = useRef<HTMLDivElement>(null);

  const isSlotBooked = (slot: string) => {
    return bookedSlotsForDate.includes(slot);
  };

  const isSlotPast = (slot: string, selectedDate?: Date) => {
    if (!selectedDate) return false;

    const now = new Date();
    const isToday = isSameDay(selectedDate, now);

    if (!isToday) return false; // If not today, no slots are past

    // Parse the start time of the slot
    const startTimeStr = slot.split(" - ")[0];
    const slotDate = parse(startTimeStr, "h:mm a", selectedDate);

    // Add 30 minutes buffer to current time
    const currentTimePlus30 = addMinutes(now, 30);

    return slotDate <= currentTimePlus30;
  };

  const getSlotButtonClass = (slot: string) => {
    if (isSlotBooked(slot)) {
      return "bg-red-100 text-red-400 border-red-200 cursor-not-allowed";
    }
    if (isSlotPast(slot, bookingData.date)) {
      return "bg-red-100 text-red-400 border-red-200 cursor-not-allowed";
    }
    if (bookingData.timeSlot === slot) {
      return "bg-[#005657] text-white border-[#005657]";
    }
    return "border-[#B6E5DF] text-[#005657] hover:bg-[#B6E5DF]/20";
  };

  const getSlotTooltip = (slot: string) => {
    if (isSlotBooked(slot)) {
      return "This slot is already booked";
    }
    if (isSlotPast(slot, bookingData.date)) {
      return "This slot is no longer available (must book at least 30 minutes in advance)";
    }
    return "Click to select this time slot";
  };

  // const getUnavailableSlotIcon = (slot: string) => {
  //   if (isSlotBooked(slot)) {
  //     return (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         className="h-4 w-4 ml-1 flex-shrink-0"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //         stroke="currentColor"
  //         strokeWidth={2}
  //       >
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728"
  //         />
  //       </svg>
  //     );
  //   }
  //   if (isSlotPast(slot, bookingData.date)) {
  //     return (
  //       <svg
  //         xmlns="http://www.w3.org/2000/svg"
  //         className="h-4 w-4 ml-1 flex-shrink-0"
  //         fill="none"
  //         viewBox="0 0 24 24"
  //         stroke="currentColor"
  //         strokeWidth={2}
  //       >
  //         <path
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
  //         />
  //       </svg>
  //     );
  //   }
  //   return null;
  // };

  const unavailableSlots = allTimeSlots.filter(
    (slot: string) => isSlotBooked(slot) || isSlotPast(slot, bookingData.date)
  );

  return (
    <div
      ref={slotListRef}
      className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6"
    >
      <div className="space-y-4">
        <h3 className="font-medium text-base sm:text-lg text-[#005657]">
          Select a Date
        </h3>
        <div className="bg-[#B6E5DF]/10 rounded-lg p-3 sm:p-4">
          <Calendar selected={bookingData.date} onSelect={handleDateSelect} />
        </div>

        {bookingData.date && (
          <div className="p-3 bg-[#B6E5DF]/20 rounded-md">
            <p className="text-sm text-[#005657] flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="truncate">
                Selected: {format(bookingData.date, "MMM d, yyyy")}
              </span>
            </p>
          </div>
        )}
      </div>

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
            className="bg-[#B6E5DF]/10 rounded-lg p-3 sm:p-4 max-h-[400px] sm:max-h-[500px] overflow-y-auto"
          >
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-3">
              {allTimeSlots?.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  disabled={
                    isSlotBooked(slot) || isSlotPast(slot, bookingData.date)
                  }
                  className={`flex items-center justify-center px-2 sm:px-3 py-2 rounded-md border text-xs sm:text-sm transition-colors ${getSlotButtonClass(
                    slot
                  )}`}
                  onClick={() => handleTimeSelect(slot)}
                  title={getSlotTooltip(slot)}
                >
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg> */}
                  <span className="truncate text-center leading-tight">
                    {slot}
                  </span>
                  {/* {getUnavailableSlotIcon(slot)} */}
                </button>
              ))}
            </div>

            {bookingData.timeSlot && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-3 bg-[#B6E5DF]/30 rounded-md flex items-center gap-2"
              >
                <div className="flex items-center gap-1 text-sm text-[#005657]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Selected time: {bookingData.timeSlot}</span>
                </div>
              </motion.div>
            )}

            {unavailableSlots.length > 0 && (
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                <div className="flex items-center gap-2 mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-yellow-800">
                    {unavailableSlots.length} slot
                    {unavailableSlots.length > 1 ? "s" : ""} unavailable
                  </span>
                </div>
                <div className="text-xs text-yellow-700 space-y-1">
                  <p>• Red slots are already booked</p>
                </div>
              </div>
            )}
          </motion.div>
        ) : (
          <div className="bg-[#B6E5DF]/10 rounded-lg p-4 sm:p-6 min-h-[250px] sm:min-h-[300px] flex flex-col items-center justify-center text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 sm:h-12 sm:w-12 text-[#005657]/30 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-[#005657] font-medium text-sm sm:text-base">
              Select a date first
            </p>
            <p className="text-xs sm:text-sm text-[#005657]/70 mt-1">
              All available time slots will appear here
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
