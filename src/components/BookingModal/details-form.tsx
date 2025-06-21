"use client";
import { useEffect, useRef, useState } from "react";
import type { BookingData } from "./types";
import type React from "react";
import { THERAPY_MODES, THERAPY_ISSUES } from "./types";
import { SESSION_TYPE } from "./types";

interface DetailsFormProps {
  bookingData: BookingData;
  onUpdate: (data: Partial<BookingData>) => void;
}

interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  age?: string;
}

export function DetailsForm({ bookingData, onUpdate }: DetailsFormProps) {
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const validateName = (name: string): string | undefined => {
    if (!name.trim()) {
      return "Full name is required";
    }
    if (name.trim().length < 2) {
      return "Name must be at least 2 characters long";
    }
    if (name.trim().length > 50) {
      return "Name must not exceed 50 characters";
    }
    if (!/^[a-zA-Z\s]+$/.test(name.trim())) {
      return "Name should only contain letters and spaces";
    }
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) {
      return "Email is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone.trim()) {
      return "Phone number is required";
    }
    // Remove any non-digit characters for validation
    const digitsOnly = phone.replace(/\D/g, "");
    if (digitsOnly.length !== 10) {
      return "Phone number must be exactly 10 digits";
    }
    if (!/^\d{10}$/.test(digitsOnly)) {
      return "Phone number should only contain digits";
    }
    return undefined;
  };

  const validateAge = (age: string): string | undefined => {
    if (!age.trim()) {
      return "Age is required";
    }
    const ageNum = Number.parseInt(age);
    if (isNaN(ageNum)) {
      return "Age must be a valid number";
    }
    if (ageNum < 18) {
      return "Age must be at least 18 years";
    }
    if (ageNum > 120) {
      return "Please enter a valid age";
    }
    return undefined;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    let processedValue = value;

    // Special handling for phone number - only allow digits
    if (name === "phone") {
      processedValue = value.replace(/\D/g, "").slice(0, 10);
    }

    // Special handling for age - only allow digits
    if (name === "age") {
      processedValue = value.replace(/\D/g, "").slice(0, 3);
    }

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      onUpdate({ [name]: checked });
    } else {
      onUpdate({ [name]: processedValue });
    }

    // Validate on change
    validateField(name, processedValue);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, bookingData[name as keyof BookingData] as string);
  };

  const validateField = (fieldName: string, value: string) => {
    let error: string | undefined;

    switch (fieldName) {
      case "name":
        error = validateName(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "phone":
        error = validatePhone(value);
        break;
      case "age":
        error = validateAge(value);
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [fieldName]: error,
    }));
  };

  const isFormValid = () => {
    const hasNoErrors = Object.values(errors).every((error) => !error);
    const allFieldsFilled =
      bookingData.name &&
      bookingData.email &&
      bookingData.phone &&
      bookingData.age &&
      bookingData.modeOfTherapy &&
      bookingData.issue &&
      bookingData.agreeToTerms;

    return hasNoErrors && allFieldsFilled;
  };

  const getInputClassName = (fieldName: string) => {
    const baseClass =
      "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#B6E5DF] focus:border-transparent transition-colors";
    const hasError =
      touched[fieldName] && errors[fieldName as keyof ValidationErrors];

    return `${baseClass} ${
      hasError ? "border-red-300 focus:ring-red-200" : "border-gray-300"
    }`;
  };

  return (
    <div ref={formRef} className="space-y-6">
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
              onBlur={handleBlur}
              placeholder="Enter your full name"
              required
              className={getInputClassName("name")}
            />
            {touched.name && errors.name && (
              <p className="text-sm text-red-600 flex items-center gap-1">
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
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {errors.name}
              </p>
            )}
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
              onBlur={handleBlur}
              placeholder="Enter your email address"
              required
              className={getInputClassName("email")}
            />
            {touched.email && errors.email && (
              <p className="text-sm text-red-600 flex items-center gap-1">
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
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {errors.email}
              </p>
            )}
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
              onBlur={handleBlur}
              placeholder="Enter Your Phone number"
              required
              maxLength={10}
              className={getInputClassName("phone")}
            />
            {touched.phone && errors.phone && (
              <p className="text-sm text-red-600 flex items-center gap-1">
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
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {errors.phone}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="age" className="block text-[#005657] font-medium">
              Age *
            </label>
            <input
              id="age"
              name="age"
              value={bookingData.age}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Enter your age"
              required
              maxLength={3}
              className={getInputClassName("age")}
            />
            {touched.age && errors.age && (
              <p className="text-sm text-red-600 flex items-center gap-1">
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
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {errors.age}
              </p>
            )}
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
              {THERAPY_MODES.map((mode) => (
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
              {THERAPY_ISSUES.map((issue) => (
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
              {SESSION_TYPE.map((issue: string) => (
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

      {/* <div className="p-4 bg-[#B6E5DF]/20 rounded-md">
        <h4 className="font-medium text-[#005657] mb-2">What happens next?</h4>
        <ul className="text-sm text-[#005657]/80 space-y-1">
          <li>• You will proceed to secure payment</li>
          <li>• We will send confirmation details to your email</li>
          <li>• Our therapist will contact you before your appointment</li>
          <li>• You can reschedule up to 24 hours before your session</li>
        </ul>
      </div> */}

      {!isFormValid() && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-sm text-red-600">
            Please fill in all required fields correctly and agree to the terms
            and conditions.
          </p>
        </div>
      )}
    </div>
  );
}
