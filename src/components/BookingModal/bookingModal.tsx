"use client";
import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import type { BookingModalProps, BookingData } from "./types";
import { SlotSelection } from "./slot-selection";
import { DetailsForm } from "./details-form";
import axios from "axios";
// import DemoPayment from "./demo-payment";

export function BookingModal({
  isOpen,
  onClose,
  packageTitle,
}: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({
    name: "",
    email: "",
    phone: "",
    age: "",
    modeOfTherapy: "",
    issue: "",
    agreeToTerms: false,
    packageTitle: packageTitle,
    sessionType: "",
  });

  useEffect(() => {
    setBookingData((prev) => ({
      ...prev,
      packageTitle: packageTitle,
    }));
  }, [packageTitle]);

  console.log(packageTitle, "packageTitle", bookingData, "bookingData first");

  const updateBookingData = useCallback((data: Partial<BookingData>) => {
    console.log(data, "DATA IN UPDATE");

    setBookingData((prev) => ({ ...prev, ...data }));
  }, []);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // const handlePaymentComplete = () => {
  //   setStep(4); // Success screen
  // };

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
      packageTitle: packageTitle,
    });
    onClose();
  };

  const getStepTitle = () => {
    switch (step) {
      case 1:
        return "Select Date & Time";
      case 2:
        return "Your Details";
      case 3:
        return "Payment";
      case 4:
        return "Confirmation";
      default:
        return "";
    }
  };

  const canProceedFromStep1 = () => {
    return bookingData.date && bookingData.timeSlot;
  };

  // const canProceedFromStep2 = () => {
  //   return (
  //     bookingData.name &&
  //     bookingData.email &&
  //     bookingData.phone &&
  //     bookingData.age &&
  //     bookingData.modeOfTherapy &&
  //     bookingData.issue &&
  //     bookingData.agreeToTerms
  //   );
  // };

  const createSlot = async () => {
    const {
      name,
      email,
      phone,
      age,
      modeOfTherapy,
      issue,
      agreeToTerms,
      sessionType,
      packageTitle,
      date,
      timeSlot,
    } = bookingData;

    const adjustedDate =
      date instanceof Date
        ? new Date(date.getTime() + 24 * 60 * 60 * 1000) // add 1 day in ms
        : new Date(); // fallback in case `date` is a string

    const variable = {
      name,
      email,
      phone,
      age,
      modeOfTherapy,
      issue,
      agreeToTerms,
      sessionType,
      packageTitle,
      date: adjustedDate.toISOString().split("T")[0], // format: YYYY-MM-DD
      timeSlot,
    };

    console.log("variable for API", variable);

    try {
      const response = await axios.post(
        "https://kochimetrocalc.me/consultation/book-slot",
        variable
      ); // Update endpoint if needed

      console.log("Booking successful", response.data);
      const phoneNumber = "+918891724199";
      const message = encodeURIComponent(
        `Hi, I would like to book the following therapy session. Please share the payment details:
      
      Name: ${name}
      Age: ${age}
      Preferred Date: ${adjustedDate.toISOString().split("T")[0]}
      Time Slot: ${timeSlot}
      
      Looking forward to your confirmation. Thank you!`
      );
      resetAndClose()
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
      // alert("response:");
    } catch (error) {
      console.error("Booking failed", error);
      alert("ERRORR");
      // You can show an error toast or message here
    }

    // Now you can use this variable in your API call
    // await axios.post('/api/book-slot', variable);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={step !== 4 ? onClose : undefined}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-[1000px] overflow-hidden rounded-2xl bg-white shadow-xl"
        >
          <>
            {/* Header */}
            <div className="bg-[#005657] text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">Book Consultation</h2>
                  <p className="text-[#B6E5DF] mt-1">
                    {packageTitle} - {getStepTitle()}
                  </p>
                </div>

                {/* Step indicator */}
                <div className="flex items-center space-x-2">
                  {[1, 2].map((stepNumber) => (
                    <div
                      key={stepNumber}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        stepNumber === step
                          ? "bg-white text-[#005657]"
                          : stepNumber < step
                          ? "bg-[#B6E5DF] text-[#005657]"
                          : "bg-[#005657]/50 text-white border border-white/30"
                      }`}
                    >
                      {stepNumber < step ? (
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        stepNumber
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {step === 1 && (
                <SlotSelection
                  bookingData={bookingData}
                  onUpdate={updateBookingData}
                />
              )}
              {step === 2 && (
                <DetailsForm
                  bookingData={bookingData}
                  onUpdate={updateBookingData}
                />
              )}
            </div>

            {/* Footer */}
            <div className="p-6 pt-0 flex flex-col sm:flex-row gap-2 border-t border-gray-100">
              <button
                onClick={step === 1 ? onClose : prevStep}
                className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {step === 1 ? "Cancel" : "Back"}
              </button>

              {step === 1 ? (
                <button
                  onClick={nextStep}
                  disabled={step === 1 && !canProceedFromStep1()}
                  className={`w-full sm:w-auto px-4 py-2 rounded-md text-white transition-colors ${
                    step === 1 && !canProceedFromStep1()
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#005657] hover:bg-[#005657]/90"
                  }`}
                >
                  Continue to Details
                </button>
              ) : (
                <button
                  onClick={() => {
                    createSlot();
                  }}
                  disabled={step === 1 && !canProceedFromStep1()}
                  className={`w-full sm:w-auto px-4 py-2 rounded-md text-white transition-colors ${
                    step === 1 && !canProceedFromStep1()
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#005657] hover:bg-[#005657]/90"
                  }`}
                >
                  Continue to Payment
                </button>
              )}
            </div>
          </>

          {/* Close button for success screen */}
          {/* {step === 4 && (
            <button
              onClick={resetAndClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )} */}
        </motion.div>
      </div>
    </div>
  );
}
