"use client";
import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import {
  type BookingModalProps,
  type BookingData,
  ALL_TIME_SLOTS,
  BookedSlot,
} from "./types";
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
  const [bookedSlots, setBookedSlot] = useState<BookedSlot[]>([]);
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

  const fetchBookedSlots = async (date: string) => {
    try {
      // Convert the string to a Date object
      const selectedDate = new Date(date);

      // Subtract one day
      selectedDate.setDate(selectedDate.getDate() + 1);

      // Convert back to YYYY-MM-DD string
      const adjustedDate = selectedDate.toISOString().split("T")[0];

      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/consultation/booked-slots?date=${adjustedDate}`
      );

      console.log("Adjusted Date (1 day less):", adjustedDate);
      console.log("Booked Slots for", adjustedDate, ":", res.data?.data);

      setBookedSlot(res?.data?.data);
    } catch (error) {
      console.error("Error fetching booked slots:", error);
    }
  };

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

  const canProceedFromStep2 = () => {
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
        `${process.env.NEXT_PUBLIC_API_URL}/consultation/book-slot`,
        variable
      ); // Update endpoint

      if (response?.status) {
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
        resetAndClose();
        window.open(`https://wa.me/${phoneNumber}?text=${message}`);
      } else {
        alert("Technincal issue");
      }
      // alert("response:");
    } catch (error) {
      console.error("Booking failed", error);
      alert("Technical issue");
      // You can show an error toast or message here
    }

    // Now you can use this variable in your API call
    // await axios.post('/api/book-slot', variable);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={step !== 4 ? onClose : undefined}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="flex min-h-full items-center justify-center p-2 sm:p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl max-h-[95vh] bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden"
        >
          <>
            {/* Fixed Header */}
            <div className="bg-[#005657] text-white p-4 sm:p-6 flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1 pr-4">
                  <h2 className="text-lg sm:text-xl font-bold truncate">
                    Book Consultation
                  </h2>
                  <p className="text-[#B6E5DF] mt-1 text-sm truncate">
                    {packageTitle} - {getStepTitle()}
                  </p>
                </div>

                {/* Responsive Step Indicators */}
                <div className="flex items-center space-x-1 sm:space-x-2">
                  {" "}
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
              </div>

              {/* Progress Bar */}
              <div className="mt-4 w-full bg-[#005657]/30 rounded-full h-1">
                <div
                  className="bg-white h-1 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-4 sm:p-6">
                {step === 1 && (
                  <div>
                    <SlotSelection
                      bookingData={bookingData}
                      onUpdate={(data) => {
                        updateBookingData(data);
                        if (data?.date) {
                          fetchBookedSlots(
                            data?.date?.toISOString().split("T")[0]
                          );
                        }
                      }}
                      allTimeSlots={ALL_TIME_SLOTS}
                      bookedSlots={bookedSlots}
                    />
                  </div>
                )}
                {step === 2 && (
                  <DetailsForm
                    bookingData={bookingData}
                    onUpdate={updateBookingData}
                  />
                )}
                {/* {step === 3 && (
                    <div className="p-6 text-center">
                      <h3 className="text-lg font-medium text-[#005657] mb-4">
                        Payment Integration
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Razorpay integration will be implemented here
                      </p>
                      <button
                        onClick={handlePaymentComplete}
                        className="px-6 py-2 bg-[#005657] text-white rounded-md hover:bg-[#005657]/90 transition-colors"
                      >
                        Complete Payment (Demo)
                      </button>
                    </div>
                  )} */}
              </div>
            </div>

            {/* Fixed Footer */}
            <div className="p-4 sm:p-6 border-t border-gray-100 bg-gray-50 flex-shrink-0">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
                <button
                  onClick={step === 1 ? onClose : prevStep}
                  className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors order-2 sm:order-1"
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
                      if (canProceedFromStep2()) {
                        createSlot();
                      } else {
                        alert("Please fill in all required fields correctly.");
                      }
                    }}
                    disabled={!canProceedFromStep2()}
                    className={`w-full sm:w-auto px-4 py-2 rounded-md text-white transition-colors ${
                      !canProceedFromStep2()
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#005657] hover:bg-[#005657]/90"
                    }`}
                  >
                    Continue
                  </button>
                )}
              </div>
            </div>
          </>

          {/* Close button for success screen */}
          {step === 4 && (
            <button
              onClick={resetAndClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors z-10"
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
          )}
        </motion.div>
      </div>
    </div>
  );
}
