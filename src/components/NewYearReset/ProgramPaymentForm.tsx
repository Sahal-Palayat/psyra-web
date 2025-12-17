"use client";

import React, { useState } from "react";
import {
  createPaymentOrder,
  openRazorpayPayment,
  RAZORPAY_CONFIG,
  type PaymentData,
  type RazorpayOptions,
  type RazorpayPaymentResponse,
} from "@/lib/razorpay";
import Link from "next/link";
import { toast } from "@/lib/toast";
import axios from "axios";

// Hardcoded psychologist ID for Christmas packages
const CHRISTMAS_PSYCHOLOGIST_ID = "69419d94ec967868b068b4eb";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  age: "",
  place: "",
  occupation: "",
  agree: false,
};

type FormState = typeof INITIAL_FORM;

const ProgramPaymentForm: React.FC = () => {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [isLoading, setIsLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<
    "idle" | "processing" | "success" | "failed"
  >("idle");

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim()) newErrors.name = "Please enter your name";
    if (!form.phone.trim()) newErrors.phone = "Please enter your mobile number";
    if (!form.email.trim()) newErrors.email = "Please enter your email";
    if (!form.age.trim()) newErrors.age = "Please enter your age";
    if (!form.place.trim()) newErrors.place = "Please enter your place";
    if (!form.occupation.trim())
      newErrors.occupation = "Please enter your occupation";
    if (!form.agree) newErrors.agree = "Please agree to the terms to continue";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement & HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const amount = 2999; // SPACE – 21-day life reset program investment

    const paymentData: PaymentData = {
      sessionDetails: {
        date: new Date().toISOString().slice(0, 10),
        timeSlot: "10:00 AM - 11:00 AM", // Default time slot for booking
        psychologistId: CHRISTMAS_PSYCHOLOGIST_ID, // Use hardcoded psychologist ID
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        age: form.age.trim(),
        modeOfTherapy: "Video Call", // Default mode of therapy
        issue: form.occupation.trim() || "", // Map occupation to issue/concern
        agreeToTerms: form.agree,
        sessionType:  "New Session", // Map place to sessionType
        therapyType: form.place.trim(), // Default therapy type
        packageTitle: "SPACE – 21-Day Life Reset Journey",
      },
      totalAmount: amount,
    };

    setIsLoading(true);
    setPaymentStatus("processing");

    try {
      const orderResponse = await createPaymentOrder(paymentData);

      const razorpayOptions: RazorpayOptions = {
        key: RAZORPAY_CONFIG.key_id || "",
        amount: paymentData.totalAmount * 100,
        currency: "INR",
        name: "Psyra",
        description: `Payment for ${paymentData.sessionDetails.packageTitle}`,
        order_id: orderResponse.orderId,
        method: {
          upi: true,
          card: true,
          netbanking: true,
          wallet: true,
        },
        config: {
          display: {
            payment_method: {
              upi: {
                rp_branding: true,
                preferred_apps_order: [
                  "com.google.android.apps.nbu.paisa.user",
                  "com.phonepe.app",
                  "net.one97.paytm",
                  "com.cred.club.cred",
                ],
              },
            },
          },
        },
        handler: async (response: RazorpayPaymentResponse) => {
          setPaymentStatus("success");
          setIsLoading(false);
          
          // Create booking using psychologist-booking API after successful payment
          try {
            const adjustedDate = new Date();
            adjustedDate.setDate(adjustedDate.getDate() + 1);

            const bookingData = {
              name: paymentData.sessionDetails.name,
              email: paymentData.sessionDetails.email,
              phone: paymentData.sessionDetails.phone,
              age: paymentData.sessionDetails.age,
              modeOfTherapy: paymentData.sessionDetails.modeOfTherapy || "Video Call", // Default if not provided
              psychologistId: CHRISTMAS_PSYCHOLOGIST_ID, // Hardcoded psychologist ID
              issue: form.occupation.trim() || "General Consultation", // Map occupation field to issue/concern
              agreeToTerms: paymentData.sessionDetails.agreeToTerms,
              packageTitle: paymentData.sessionDetails.packageTitle,
              date: adjustedDate.toISOString().split("T")[0], // Tomorrow's date
              timeSlot: paymentData.sessionDetails.timeSlot || "10:00 AM - 11:00 AM", // Default time slot
              therapyType: paymentData.sessionDetails.therapyType || "individual", // Default therapy type
              sessionType: form.place.trim() || "New Session", // Map place field to sessionType
            };

            console.log("Creating booking with psychologist-booking API:", bookingData);

            const bookingResponse = await axios.post(
              `${process.env.NEXT_PUBLIC_API_URL}/psychologist-booking`,
              bookingData
            );

            if (bookingResponse?.status) {
              console.log("Booking created successfully:", bookingResponse.data);
              toast.success(
                "Payment Successful!",
                "You have joined the New Year Mind Reset Program and your booking has been confirmed.",
                0
              );
            } else {
              console.error("Booking creation failed");
              toast.success(
                "Payment Successful!",
                "Payment completed but booking creation failed. Please contact support.",
                0
              );
            }
          } catch (error) {
            console.error("Error creating booking:", error);
            toast.success(
              "Payment Successful!",
              "Payment completed but booking creation failed. Please contact support.",
              0
            );
          }
          
          console.log("New Year Program payment response:", response);
        },
        prefill: {
          name: paymentData.sessionDetails.name,
          email: paymentData.sessionDetails.email,
          contact: paymentData.sessionDetails.phone,
        },
        notes: {
          sessionDetails: JSON.stringify(paymentData.sessionDetails),
        },
        theme: {
          color: "#005657",
        },
        modal: {
          ondismiss: () => {
            setIsLoading(false);
            setPaymentStatus("idle");
          },
        },
      };

      await openRazorpayPayment(razorpayOptions);
    } catch (error) {
      console.error("New Year Program payment error:", error);
      setPaymentStatus("failed");
      setIsLoading(false);
      toast.error(
        "Payment Failed",
        "Please try again or contact support if the issue continues."
      );
    }
  };

  const getButtonLabel = () => {
    switch (paymentStatus) {
      case "processing":
        return "Processing payment...";
      case "success":
        return "Joined SPACE successfully";
      case "failed":
        return "Try payment again";
      default:
        return "Pay ₹2,999 & join SPACE";
    }
  };

  return (
    <section className="w-full  mx-auto mb-16 px-2">
      <div className="grid md:grid-cols-2 gap-6 md:gap-10">
        <div className="bg-white/95 rounded-3xl shadow-xl border border-teal-50 px-5 py-6 md:px-7 md:py-7">
          <h2 className="text-lg md:text-xl font-semibold text-teal-900 mb-4">
            Join the New Year Mind Reset Program
          </h2>
          <p className="text-xs md:text-sm text-teal-800/90 mb-4">
            Share a few basic details. We&apos;ll use this only to support you
            during the program and for payment confirmation.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-teal-900 mb-1">
                  Full name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-teal-100 px-3 py-2 text-sm outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-200"
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="mt-1 text-[11px] text-red-600">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-teal-900 mb-1">
                  Mobile number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-teal-100 px-3 py-2 text-sm outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-200"
                  placeholder="Enter your mobile number"
                />
                {errors.phone && (
                  <p className="mt-1 text-[11px] text-red-600">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-teal-900 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-teal-100 px-3 py-2 text-sm outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-200"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="mt-1 text-[11px] text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-teal-900 mb-1">
                  Age *
                </label>
                <input
                  type="number"
                  name="age"
                  value={form.age}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-teal-100 px-3 py-2 text-sm outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-200"
                  placeholder="Your age"
                  min={10}
                  max={120}
                />
                {errors.age && (
                  <p className="mt-1 text-[11px] text-red-600">{errors.age}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-teal-900 mb-1">
                  Place (City / Town) *
                </label>
                <input
                  type="text"
                  name="place"
                  value={form.place}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-teal-100 px-3 py-2 text-sm outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-200"
                  placeholder="Where are you from?"
                />
                {errors.place && (
                  <p className="mt-1 text-[11px] text-red-600">
                    {errors.place}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-teal-900 mb-1">
                  Occupation *
                </label>
                <input
                  type="text"
                  name="occupation"
                  value={form.occupation}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-teal-100 px-3 py-2 text-sm outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-200"
                  placeholder="eg. Student, IT professional"
                />
                {errors.occupation && (
                  <p className="mt-1 text-[11px] text-red-600">
                    {errors.occupation}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-start gap-2 mt-2">
              <input
                id="agree"
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                className="mt-[3px] h-4 w-4 rounded border-teal-300 text-teal-700 focus:ring-teal-400"
              />
              <label
                htmlFor="agree"
                className="text-[11px] md:text-xs text-teal-900/90"
              >
                I agree to join this program for my personal growth and
                understand this is not an emergency service. I accept the{" "}
                <Link
                  href="/terms-conditions"
                  target="_blank"
                  className="underline underline-offset-2 text-teal-700 font-medium"
                >
                  terms &amp; conditions
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy-policy"
                  target="_blank"
                  className="underline underline-offset-2 text-teal-700 font-medium"
                >
                  privacy policy
                </Link>
                .
              </label>
            </div>
            {errors.agree && (
              <p className="mt-1 text-[11px] text-red-600">{errors.agree}</p>
            )}

            <button
              type="submit"
              disabled={isLoading || paymentStatus === "processing"}
              className="mt-3 w-full rounded-full bg-teal-700 text-white text-sm md:text-base font-semibold py-2.5 md:py-3 shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:bg-teal-600 hover:shadow-[0_14px_40px_rgba(0,0,0,0.35)] disabled:opacity-60 disabled:cursor-not-allowed transition-all"
            >
              {isLoading ? "Processing..." : getButtonLabel()}
            </button>

            {paymentStatus === "success" && (
              <p className="mt-2 text-[11px] text-emerald-700">
                You&apos;ve successfully joined the program. We&apos;ll contact
                you with next steps on your registered email / mobile.
              </p>
            )}
            {paymentStatus === "failed" && (
              <p className="mt-2 text-[11px] text-red-600">
                Payment failed or cancelled. You can try again, or reach out to
                our support team if the issue continues.
              </p>
            )}
          </form>
        </div>

        <div className="bg-teal-900/95 rounded-3xl shadow-xl border border-teal-800 px-5 py-6 md:px-7 md:py-7 text-teal-50 flex flex-col justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase mb-2 text-teal-200">
              What&apos;s included
            </p>
            <ul className="text-xs md:text-sm space-y-2 mb-4">
              <li>• Guided New Year reset journey with Psyra professionals</li>
              <li>
                • Simple reflections to clear last year&apos;s emotional clutter
              </li>
              <li>• Tools to build calmer habits for the months ahead</li>
              <li>• Supportive, confidential online space</li>
            </ul>
          </div>
          <div className="mt-4 pt-4 border-t border-teal-700/70 text-[11px] md:text-xs text-teal-100/90">
            <p>
              Payment is processed securely via Razorpay. We do not store your
              card details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramPaymentForm;
