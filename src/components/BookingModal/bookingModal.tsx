"use client";
import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import {
  type BookingModalProps,
  type BookingData,
  // BookedSlot,
  INDIVIDUAL_TIME_SLOTS,
  COUPLE_TIME_SLOTS,
} from "./types";
import { SlotSelection } from "./slot-selection";
import { DetailsForm } from "./details-form";
import { processPayment } from "@/lib/payment-integration";
import { toast } from "@/lib/toast";
import { PaymentSuccessModal } from "../Payment/PaymentSuccessModal";
import axios from "axios";




export function BookingModal({
  isOpen,
  onClose,
  packageTitle,
  price,
}: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [bookedSlots, setBookedSlot] = useState<string[]>([]);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isPaying, setIsPaying] = useState(false);
  const [currentBookingId, setCurrentBookingId] = useState<string | null>(null);

  const [successData, setSuccessData] = useState({
    name: "",
    email: "",
    phone: "",
    packageTitle: "",
    date: "",
    timeSlot: "",
    amount: 0,
  });

  const [bookingData, setBookingData] = useState<BookingData>({
    name: "",
    email: "",
    phone: "",
    age: "",
    modeOfTherapy: "",
    issue: "",
    agreeToTerms: false,
    sessionType: "",
    packageTitle,
    therapyType: packageTitle?.includes("couple") ? "couple" : "individual",
    packageAmount: Number(price),
    date: undefined,
    timeSlot: undefined,
  });

  useEffect(() => {
    setBookingData((prev) => ({
      ...prev,
      packageTitle,
      therapyType: packageTitle?.includes("couple") ? "couple" : "individual",
      packageAmount: Number(price),
    }));
  }, [packageTitle, price]);

  const updateBookingData = useCallback((data: Partial<BookingData>) => {
    setBookingData((prev) => ({ ...prev, ...data }));
  }, []);

  /* ---------------- DATE HELPERS ---------------- */

  

  const fetchBookedSlots = async (date: string) => {
    try {
      if (!bookingData.therapyType) return;
  
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/general-booking/booked-slots`,
        {
          params: {
            date,
            therapyType: bookingData.therapyType,
          },
        }
      );
  
      setBookedSlot(res?.data || []);
    } catch (error) {
      console.error("Error fetching booked slots:", error);
    }
  };
  
  

  /* ---------------- STEP CHECKS ---------------- */

  const canProceedFromStep1 = () =>
    !!bookingData.date && !!bookingData.timeSlot;
  

  const canProceedFromStep2 = () =>
    bookingData.name.trim() &&
    bookingData.email.trim() &&
    bookingData.phone.trim() &&
    bookingData.age.trim() &&
    bookingData.modeOfTherapy.trim() &&
    bookingData.issue.trim() &&
    bookingData.sessionType.trim() &&
    bookingData.agreeToTerms;

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const resetAndClose = () => {
    setStep(1);
    setCurrentBookingId(null);
    setIsPaying(false);
    setShowSuccessModal(false);
    onClose();
  };

  /* ---------------- API FLOWS ---------------- */

  const initiateGeneralBooking = async () => {
    if (!bookingData.date || !bookingData.timeSlot) {
      toast.error("Please select date and time slot");
      return false;
    }
  
   
  
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/general-booking/initiate`,
        {
          date: bookingData.date, // ✅ already YYYY-MM-DD
          timeSlot: bookingData.timeSlot,
          therapyType: bookingData.therapyType,
        }
      );
  
      setCurrentBookingId(res.data._id);
      return true;
    } catch (error: any) {
      const message = error?.response?.data?.message;
  
      if (message === "Slot already booked") {
        toast.error("Slot already booked. Please choose another slot.");
        await fetchBookedSlots(bookingData.date);
        updateBookingData({ timeSlot: undefined });
        return false;
      }
  
      toast.error("Unable to lock slot");
      return false;
    }
  };
  
  const initiateGeneralBookingAndPay = async () => {
    if (!currentBookingId) {
      toast.error("Booking expired. Please start again.");
      return;
    }

    try {
      setIsPaying(true);

      await processPayment(
        {
          bookingId: currentBookingId,
          bookingType: "general",
          totalAmount: bookingData.packageAmount,
        },

        // ✅ SUCCESS
       
async () => {
  setIsPaying(false);

  // CONFIRM GENERAL BOOKING
  await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/general-booking/confirm`,
    {
      bookingId: currentBookingId,

      // SESSION DETAILS
      name: bookingData.name,
      email: bookingData.email,
      phone: bookingData.phone,
      age: bookingData.age,
      modeOfTherapy: bookingData.modeOfTherapy,
      issue: bookingData.issue,
      sessionType: bookingData.sessionType,
      therapyType: bookingData.therapyType,
      packageTitle: bookingData.packageTitle,
    }
  );

  if (bookingData.date) {
    await fetchBookedSlots(bookingData.date);
  }

  setSuccessData({
    name: bookingData.name,
    email: bookingData.email,
    phone: bookingData.phone,
    packageTitle: bookingData.packageTitle || "Therapy Session",
    date: bookingData.date || "",
    timeSlot: bookingData.timeSlot || "",
    amount: bookingData.packageAmount,
  });

  setShowSuccessModal(true);
},
    

        // ❌ PAYMENT FAILED / CLOSED
        () => {
          setIsPaying(false);
          toast.error("Payment was not completed");
        }
      );
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
      setIsPaying(false);
    }
  };

  if (!isOpen) return null;

  /* ---------------- UI  ---------------- */

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={step !== 4 ? onClose : undefined}
      />

      <div className="flex min-h-full items-center justify-center p-2 sm:p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl max-h-[95vh] bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden"
        >
          <>
            {/* HEADER */}
            <div className="bg-[#005657] text-white p-4 sm:p-6 flex-shrink-0">
              <h2 className="text-lg sm:text-xl font-bold">
                Book Consultation
              </h2>
              <p className="text-[#B6E5DF] mt-1 text-sm">
                {packageTitle}
              </p>
            </div>

            {/* CONTENT */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              {step === 1 && (
                <SlotSelection
                  bookingData={bookingData}
                  onUpdate={(data) => {
                    updateBookingData(data);
                    if (data.date) {
                      fetchBookedSlots(data.date);
                    }
                  }}                  
                  allTimeSlots={
                    bookingData.therapyType === "individual"
                      ? INDIVIDUAL_TIME_SLOTS
                      : COUPLE_TIME_SLOTS
                  }
                  bookedSlots={bookedSlots}
                />
              )}

              {step === 2 && (
                <DetailsForm
                  bookingData={bookingData}
                  onUpdate={updateBookingData}
                />
              )}
            </div>

            {/* FOOTER */}
            <div className="p-4 sm:p-6 border-t bg-gray-50 flex gap-3">
              <button
                onClick={step === 1 ? onClose : prevStep}
                className="px-4 py-2 border rounded-md"
              >
                {step === 1 ? "Cancel" : "Back"}
              </button>

              {step === 1 ? (
                <button
                  onClick={async () => {
                    if (!canProceedFromStep1()) {
                      toast.error("Please select date and slot");
                      return;
                    }
                    const locked = await initiateGeneralBooking();
                    if (locked) nextStep();
                  }}
                  className="px-4 py-2 bg-[#005657] text-white rounded-md"
                >
                  Continue to Details
                </button>
              ) : (
                <button
                  onClick={initiateGeneralBookingAndPay}
                  disabled={!canProceedFromStep2() || isPaying}
                  className="px-4 py-2 bg-[#005657] text-white rounded-md"
                >
                  {isPaying ? "Processing..." : "Book Session"}
                </button>
              )}
            </div>
          </>
        </motion.div>
      </div>

      <PaymentSuccessModal
        isOpen={showSuccessModal}
        onClose={resetAndClose}
        paymentData={successData}
      />
    </div>
  );
}
