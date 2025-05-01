"use client";

import type React from "react";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { format, addDays } from "date-fns";
import { motion } from "framer-motion";
import { Check, CalendarIcon, Clock } from "lucide-react";
import BookingDetails from "./BookingDetails";
import { BookingFormData } from "./types";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageTitle: string;
}

// Generate mock data for available slots for the next 14 days
const generateMockSlots = () => {
  const slots: Record<string, string[]> = {};
  const allTimeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  for (let i = 0; i < 14; i++) {
    const date = addDays(new Date(), i);
    // Skip weekends
    if (date.getDay() !== 0 && date.getDay() !== 6) {
      const formattedDate = format(date, "yyyy-MM-dd");
      // Randomly select 3-5 time slots for each date
      const numberOfSlots = Math.floor(Math.random() * 3) + 3;
      const availableSlots = [...allTimeSlots]
        .sort(() => 0.5 - Math.random())
        .slice(0, numberOfSlots);
      slots[formattedDate] = availableSlots;
    }
  }
  return slots;
};

const mockAvailableSlots = generateMockSlots();

export function BookingModal({
  isOpen,
  onClose,
  packageTitle,
}: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string>("");
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    age: "",
    place: "",
    concerns: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Update available slots when date changes
  useEffect(() => {
    if (date) {
      const formattedDate = format(date, "yyyy-MM-dd");
      // Get available slots for the selected date or provide empty array if none
      const slots = mockAvailableSlots[formattedDate] || [];
      setAvailableSlots(slots);
      setTimeSlot(""); // Reset time slot when date changes
    }
  }, [date]);

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Show success state
    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset and close after showing success message
    setTimeout(() => {
      setIsSuccess(false);
      setStep(1);
      setDate(undefined);
      setTimeSlot("");
      setFormData({
        name: "",
        email: "",
        phone: "",
        age: "",
        place: "",
        concerns: "",
      });
      onClose();
    }, 2000);
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] md:max-w-[900px] p-0  bg-white rounded-2xl">
        <DialogHeader className="bg-[#005657] text-white p-3 rounded-2xl">
          <DialogTitle className="text-xl font-bold">
            Book Consultation
          </DialogTitle>
          <DialogDescription className="text-[#B6E5DF]">
            {packageTitle} -{" "}
            {step === 1 ? "Your Information" : "Select Date & Time"}
          </DialogDescription>
        </DialogHeader>
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-8 flex flex-col items-center justify-center text-center"
          >
            <div className="w-16 h-16 bg-[#B6E5DF] rounded-full flex items-center justify-center mb-4">
              <Check className="w-8 h-8 text-[#005657]" />
            </div>
            <h2 className="text-2xl font-bold text-[#005657] mb-2">
              Booking Confirmed!
            </h2>
            <p className="text-gray-600">
              Thank you {formData.name} for booking a consultation. We'll send
              the details to {formData.email} shortly.
            </p>
          </motion.div>
        ) : (
          <>
            <div className="p-6 max-h-[50vh] overflow-y-auto">
              {step === 1 ? (
                <BookingDetails
                  formData={formData}
                  setFormData={setFormData}
                ></BookingDetails>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-medium text-lg text-[#005657]">
                      Select a Date
                    </h3>
                    <div className="bg-[#B6E5DF]/10 rounded-lg p-4">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) =>
                          date < new Date() ||
                          date.getDay() === 0 ||
                          date.getDay() === 6
                        }
                        className="rounded-md border-none"
                      />
                    </div>

                    {date && (
                      <div className="p-3 bg-[#B6E5DF]/20 rounded-md">
                        <p className="text-sm text-[#005657] flex items-center gap-1">
                          <CalendarIcon className="h-4 w-4" />
                          <span>
                            Selected: {format(date, "EEEE, MMMM d, yyyy")}
                          </span>
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium text-lg text-[#005657]">
                      {date
                        ? "Available Time Slots"
                        : "Select a date to see available times"}
                    </h3>

                    {date ? (
                      availableSlots.length > 0 ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="bg-[#B6E5DF]/10 rounded-lg p-4 min-h-[300px] flex flex-col"
                        >
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {availableSlots.map((slot) => (
                              <Button
                                key={slot}
                                type="button"
                                variant={
                                  timeSlot === slot ? "default" : "outline"
                                }
                                className={`flex items-center justify-center ${
                                  timeSlot === slot
                                    ? "bg-[#005657] text-white"
                                    : "border-[#B6E5DF] text-[#005657]"
                                }`}
                                onClick={() => setTimeSlot(slot)}
                              >
                                <Clock className="h-4 w-4 mr-2" />
                                {slot}
                              </Button>
                            ))}
                          </div>

                          {timeSlot && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="mt-auto p-3 bg-[#B6E5DF]/30 rounded-md flex items-center gap-2 mt-4"
                            >
                              <div className="flex items-center gap-1 text-sm text-[#005657]">
                                <Clock className="h-4 w-4" />
                                <span>Selected time: {timeSlot}</span>
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      ) : (
                        <div className="bg-[#B6E5DF]/10 rounded-lg p-6 min-h-[300px] flex flex-col items-center justify-center text-center">
                          <CalendarIcon className="h-12 w-12 text-[#005657]/30 mb-4" />
                          <p className="text-[#005657] font-medium">
                            No available slots for this date
                          </p>
                          <p className="text-sm text-[#005657]/70 mt-1">
                            Please select another date
                          </p>
                        </div>
                      )
                    ) : (
                      <div className="bg-[#B6E5DF]/10 rounded-lg p-6 min-h-[300px] flex flex-col items-center justify-center text-center">
                        <CalendarIcon className="h-12 w-12 text-[#005657]/30 mb-4" />
                        <p className="text-[#005657] font-medium">
                          Select a date first
                        </p>
                        <p className="text-sm text-[#005657]/70 mt-1">
                          Available time slots will appear here
                        </p>
                      </div>
                    )}

                    {date && timeSlot && (
                      <div className="p-4 bg-[#B6E5DF]/20 rounded-md">
                        <h4 className="font-medium text-[#005657] mb-1">
                          Your selected appointment:
                        </h4>
                        <p className="text-sm text-[#005657]/80">
                          {format(date, "EEEE, MMMM d, yyyy")} at {timeSlot}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <DialogFooter className="p-3 flex flex-col sm:flex-row gap-2 border-t border-gray-100">
              {step === 1 ? (
                <>
                  <Button
                    variant="outline"
                    onClick={onClose}
                    className="w-full sm:w-auto"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={nextStep}
                    disabled={
                      !formData.name || !formData.email || !formData.phone
                    }
                    className="w-full sm:w-auto bg-[#005657] hover:bg-[#005657]/90 text-white"
                  >
                    Continue to Booking
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    className="w-full sm:w-auto"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    disabled={!date || !timeSlot || isSubmitting}
                    className="w-full sm:w-auto bg-[#005657] hover:bg-[#005657]/90 text-white"
                  >
                    {isSubmitting ? "Processing..." : "Confirm Booking"}
                  </Button>
                </>
              )}
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
