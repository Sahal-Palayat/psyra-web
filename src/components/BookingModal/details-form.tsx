"use client";
import type { BookingData } from "./types";
import type React from "react";

import { THERAPY_MODES, THERAPY_ISSUES, SESSION_TYPE } from "./types";

interface DetailsFormProps {
  bookingData: BookingData;
  onUpdate: (data: Partial<BookingData>) => void;
}

export function DetailsForm({ bookingData, onUpdate }: DetailsFormProps) {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      onUpdate({ [name]: checked });
    } else {
      onUpdate({ [name]: value });
    }
  };

  const isFormValid = () => {
    return (
      bookingData.name &&
      bookingData.email &&
      bookingData.phone &&
      bookingData.age &&
      bookingData.modeOfTherapy &&
      bookingData.issue &&
      bookingData.agreeToTerms &&
      bookingData?.sessionType
    );
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-[#005657] font-medium">
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              value={bookingData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B6E5DF] focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-[#005657] font-medium">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={bookingData.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B6E5DF] focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-[#005657] font-medium">
              Phone Number *
            </label>
            <input
              id="phone"
              name="phone"
              value={bookingData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B6E5DF] focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="age" className="block text-[#005657] font-medium">
              Age *
            </label>
            <input
              id="age"
              name="age"
              type="number"
              value={bookingData.age}
              onChange={handleInputChange}
              placeholder="Enter your age"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B6E5DF] focus:border-transparent"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="modeOfTherapy"
              className="block text-[#005657] font-medium"
            >
              Mode of Therapy *
            </label>
            <select
              id="modeOfTherapy"
              name="modeOfTherapy"
              value={bookingData.modeOfTherapy}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B6E5DF] focus:border-transparent"
            >
              <option value="">Select therapy mode</option>
              {THERAPY_MODES.map((mode: any) => (
                <option key={mode} value={mode}>
                  {mode}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="issue" className="block text-[#005657] font-medium">
              Primary Issue/Concern *
            </label>
            <select
              id="issue"
              name="issue"
              value={bookingData.issue}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B6E5DF] focus:border-transparent"
            >
              <option value="">Select your primary concern</option>
              {THERAPY_ISSUES.map((issue: any) => (
                <option key={issue} value={issue}>
                  {issue}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="sessionType"
              className="block text-[#005657] font-medium"
            >
              Session Type *
            </label>
            <select
              id="sessionType"
              name="sessionType"
              value={bookingData.sessionType}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B6E5DF] focus:border-transparent"
            >
              <option value="">Select your session type</option>
              {SESSION_TYPE.map((issue: any) => (
                <option key={issue} value={issue}>
                  {issue}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-4 pt-4">
            <div className="flex items-start space-x-3">
              <input
                id="agreeToTerms"
                name="agreeToTerms"
                type="checkbox"
                checked={bookingData.agreeToTerms}
                onChange={handleInputChange}
                required
                className="mt-1 h-4 w-4 text-[#005657] focus:ring-[#B6E5DF] border-gray-300 rounded"
              />
              <label htmlFor="agreeToTerms" className="text-sm text-[#005657]">
                I agree to the{" "}
                <a
                  href="/terms"
                  className="text-[#005657] underline hover:text-[#005657]/80"
                >
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  className="text-[#005657] underline hover:text-[#005657]/80"
                >
                  Privacy Policy
                </a>
                *
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 bg-[#B6E5DF]/20 rounded-md">
        <h4 className="font-medium text-[#005657] mb-2">What happens next?</h4>
        <ul className="text-sm text-[#005657]/80 space-y-1">
          <li>• You'll proceed to secure payment</li>
          <li>• We'll send confirmation details to your email</li>
          <li>• Our therapist will contact you before your appointment</li>
          <li>• You can reschedule up to 24 hours before your session</li>
        </ul>
      </div>

      {!isFormValid() && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-sm text-red-600">
            Please fill in all required fields and agree to the terms and
            conditions.
          </p>
        </div>
      )}
    </div>
  );
}
