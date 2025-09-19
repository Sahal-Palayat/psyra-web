"use client";
import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import type {
  BookedSlot,
  BookingData,
  PsychologistModalProps,
} from "@/components/BookingModal/types";
import { SlotSelection } from "@/components/BookingModal/slot-selection";
import { DetailsForm } from "@/components/BookingModal/details-form";
import {
  processPayment,
  type BookingPaymentData,
} from "@/lib/payment-integration";
import { TherapyTypeSelection } from "./therapy-type-selection";
import { PackageSelection } from "./package-selection";
import { PsychologistBookingData } from "./types";

export function PsychologistModal({
  isOpen,
  onClose,
  data,
}: PsychologistModalProps) {
  const [step, setStep] = useState(1);
  const [bookedSlots, setBookedSlot] = useState<BookedSlot[]>([]);
  const [bookingData, setBookingData] = useState<PsychologistBookingData>({
    name: "",
    email: "",
    phone: "",
    age: "",
    modeOfTherapy: "",
    issue: "",
    agreeToTerms: false,
    sessionType: "",
    packageTitle: "",
    therapyType: "",
    packageAmount: 999,
  });

  const fetchBookedSlots = async (date: string) => {
    try {
      const selectedDate = new Date(date);
      selectedDate.setDate(selectedDate.getDate() + 1);
      const adjustedDate = selectedDate.toISOString().split("T")[0];
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/psychologist-booking?date=${adjustedDate}&psychologistId=${data?._id}`
      );
      setBookedSlot(res?.data);
    } catch (error) {
      console.error("Error fetching booked slots:", error);
    }
  };

  const updateBookingData = useCallback((data: Partial<BookingData>) => {
    setBookingData((prev) => ({ ...prev, ...data }));
  }, []);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const resetAndClose = () => {
    setStep(1);
    setBookingData({
      name: "",
      email: "",
      phone: "",
      age: "",
      modeOfTherapy: "",
      issue: "",
      sessionType: "",
      agreeToTerms: false,
      packageTitle: "",
      therapyType: "",
      packageAmount: 999,
    });
    onClose();
  };

  const canProceedFromStep1 = () => {
    return bookingData.therapyType;
  };

  const canProceedFromStep2 = () => {
    return bookingData.packageTitle;
  };

  const canProceedFromStep3 = () => {
    return bookingData.date && bookingData.timeSlot;
  };

  const canProceedFromStep4 = () => {
    return (
      bookingData.name.trim() !== "" &&
      bookingData.email.trim() !== "" &&
      bookingData.phone.trim() !== "" &&
      bookingData.age.trim() !== "" &&
      bookingData.modeOfTherapy.trim() !== "" &&
      bookingData.issue.trim() !== "" &&
      bookingData.sessionType.trim() !== "" &&
      bookingData.agreeToTerms
    );
  };

  const createSlot = async () => {
    const {
      name,
      email,
      phone,
      age,
      modeOfTherapy,
      issue,
      agreeToTerms,
      date,
      timeSlot,
      sessionType,
      therapyType,
      packageTitle,
    } = bookingData;

    const adjustedDate =
      date instanceof Date
        ? new Date(date.getTime() + 24 * 60 * 60 * 1000)
        : new Date();

    const variable = {
      name,
      email,
      phone,
      age,
      modeOfTherapy,
      psychologistId: data?._id,
      issue,
      agreeToTerms,
      packageTitle,
      date: adjustedDate.toISOString().split("T")[0],
      timeSlot,
      therapyType,
      sessionType,
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/psychologist-booking`,
        variable
      );

      if (response?.status) {
        //         const phoneNumber = "+918891724199";
        //         const message = encodeURIComponent(
        //           `Hi, I would like to book the following therapy session. Please share the payment details:
        // Name: ${name}
        // Age: ${age}
        // Preferred Date: ${adjustedDate.toISOString().split("T")[0]}
        // Time Slot: ${timeSlot}
        // Looking forward to your confirmation. Thank you!`
        //         );
        // window.open(`https://wa.me/${phoneNumber}?text=${message}`);
      } else {
        alert("Technical issue");
      }
    } catch (error) {
      console.error("Booking failed", error);
      alert("Technical issue");
    }
  };

  const getStepTitle = () => {
    switch (step) {
      case 1:
        return "Choose Therapy Type";
      case 2:
        return "Select Package";
      case 3:
        return "Select Date & Time";
      case 4:
        return "Personal Details";
      default:
        return "Book Consultation";
    }
  };

  const getNextButtonText = () => {
    switch (step) {
      case 1:
        return "Continue to Packages";
      case 2:
        return "Continue to Schedule";
      case 3:
        return "Continue to Details";
      case 4:
        return "Book Session";
      default:
        return "Continue";
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return canProceedFromStep1();
      case 2:
        return canProceedFromStep2();
      case 3:
        return canProceedFromStep3();
      case 4:
        return canProceedFromStep4();
      default:
        return false;
    }
  };

  const handlePaymentAndBooking = async () => {
    const {
      name,
      email,
      phone,
      age,
      modeOfTherapy,
      issue,
      agreeToTerms,
      sessionType,
      therapyType,
      packageTitle,
      date,
      timeSlot,
      packageAmount,
    } = bookingData;

    const adjustedDate =
      date instanceof Date
        ? new Date(date.getTime() + 24 * 60 * 60 * 1000)
        : new Date();

    // Prepare payment data
    const paymentData: BookingPaymentData = {
      name,
      email,
      phone,
      age,
      modeOfTherapy,
      issue,
      agreeToTerms,
      sessionType,
      therapyType,
      packageTitle: packageTitle || "Therapy Session",
      date: adjustedDate.toISOString().split("T")[0],
      timeSlot: timeSlot || "10:00-11:00",
      psychologistId: data?._id,
      totalAmount: packageAmount, // You can make this dynamic based on package
    };
    await createSlot();
    // Process payment
    await processPayment(
      paymentData,
      // On success - call the original booking API
      async (response) => {
        console.log("Payment successful, now booking session...", response);
        resetAndClose();
      },
      // On error
      (error) => {
        console.error("Payment failed:", error);
      }
    );
  };

  const handleNext = () => {
    if (step === 4) {
      if (canProceedFromStep4()) {
        handlePaymentAndBooking();
      } else {
        alert("Please fill in all required fields correctly.");
      }
    } else {
      nextStep();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="flex min-h-full items-center justify-center p-2 sm:p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl max-h-[95vh] bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="bg-[#005657] text-white p-4 sm:p-6 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="min-w-0 flex-1 pr-4">
                <h2 className="text-lg sm:text-xl font-bold truncate">
                  {getStepTitle()}
                </h2>
                <p className="text-sm text-white/80 mt-1">Step {step} of 4</p>
              </div>
              <button
                onClick={resetAndClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Progress Bar */}
            <div className="mt-4 w-full bg-[#005657]/30 rounded-full h-2">
              <div
                className="bg-white h-2 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-4 sm:p-6">
              {step === 1 && (
                <TherapyTypeSelection
                  bookingData={bookingData}
                  onUpdate={updateBookingData}
                />
              )}

              {step === 2 && (
                <PackageSelection
                  bookingData={bookingData}
                  onUpdate={updateBookingData}
                />
              )}

              {step === 3 && (
                <SlotSelection
                  bookingData={bookingData}
                  onUpdate={(data) => {
                    if (data?.date) {
                      fetchBookedSlots(data?.date?.toISOString().split("T")[0]);
                    }
                    updateBookingData(data);
                  }}
                  allTimeSlots={data?.monthlySlots}
                  bookedSlots={bookedSlots}
                />
              )}

              {step === 4 && (
                <DetailsForm
                  bookingData={bookingData}
                  onUpdate={updateBookingData}
                />
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 sm:p-6 border-t border-gray-100 bg-gray-50 flex-shrink-0">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
              <button
                onClick={step === 1 ? onClose : prevStep}
                className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors order-2 sm:order-1"
              >
                {step === 1 ? "Cancel" : "Back"}
              </button>

              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className={`w-full sm:w-auto px-4 py-2 rounded-md text-white transition-colors order-1 sm:order-2 ${
                  !canProceed()
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#005657] hover:bg-[#005657]/90"
                }`}
              >
                {getNextButtonText()}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
