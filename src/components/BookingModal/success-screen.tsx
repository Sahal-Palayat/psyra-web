"use client";
import { motion } from "framer-motion";
import { format } from "date-fns";
import type { BookingData } from "./types";

interface SuccessScreenProps {
  bookingData: BookingData;
}

export function SuccessScreen({ bookingData }: SuccessScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-8 flex flex-col items-center justify-center text-center space-y-6"
    >
      <div className="w-20 h-20 bg-[#B6E5DF] rounded-full flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-[#005657]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-[#005657]">
          Booking Confirmed!
        </h2>
        <p className="text-lg text-gray-600">
          Thank you {bookingData.name} for booking your consultation.
        </p>
      </div>

      <div className="bg-[#B6E5DF]/20 rounded-lg p-6 max-w-md w-full">
        <h3 className="font-semibold text-[#005657] mb-4">
          Appointment Details
        </h3>
        <div className="space-y-2 text-left">
          <div className="flex justify-between">
            <span className="text-gray-600">Date:</span>
            <span className="font-medium text-[#005657]">
              {bookingData.date &&
                format(bookingData.date, "EEEE, MMMM d, yyyy")}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Time:</span>
            <span className="font-medium text-[#005657]">
              {bookingData.timeSlot}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Service:</span>
            <span className="font-medium text-[#005657]">
              {bookingData.packageTitle}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Mode:</span>
            <span className="font-medium text-[#005657]">
              {bookingData.modeOfTherapy}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-3 text-sm text-gray-600 max-w-md">
        <p>
          <strong>Confirmation details have been sent to:</strong>
          <br />
          {bookingData.email}
        </p>
        <p>
          Our therapist will contact you at {bookingData.phone} before your
          appointment to confirm details and answer any questions.
        </p>
        <p>
          Need to reschedule? Contact us at least 24 hours before your
          appointment for a full refund.
        </p>
      </div>
    </motion.div>
  );
}
