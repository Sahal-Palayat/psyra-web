"use client";
import { useEffect, useRef, useState } from "react";
import type { BookingData } from "./types";
import type React from "react";
import { THERAPY_MODES, THERAPY_ISSUES, SESSION_TYPE } from "./types";

interface DetailsFormProps {
  bookingData: BookingData;
  onUpdate: (data: Partial<BookingData>) => void;
  psychologists: {
    _id: string;
    name: string;
    price: number;
  }[];
}

interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  age?: string;
}

export function DetailsForm({
  bookingData,
  onUpdate,
  psychologists,
}: DetailsFormProps) {
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const validateName = (name: string): string | undefined => {
    if (!name.trim()) return "Full name is required";
    if (name.trim().length < 2)
      return "Name must be at least 2 characters long";
    if (name.trim().length > 50) return "Name must not exceed 50 characters";
    if (!/^[a-zA-Z\s]+$/.test(name.trim()))
      return "Name should only contain letters and spaces";
    return undefined;
  };

  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return "Please enter a valid email address";
    return undefined;
  };

  const validatePhone = (phone: string): string | undefined => {
    if (!phone.trim()) return "Phone number is required";
    const digitsOnly = phone.replace(/\D/g, "");
    if (digitsOnly.length !== 10)
      return "Phone number must be exactly 10 digits";
    return undefined;
  };

  const validateAge = (age: string): string | undefined => {
    if (!age.trim()) return "Age is required";
    const ageNum = Number.parseInt(age);
    if (isNaN(ageNum)) return "Age must be a valid number";
    if (ageNum < 18) return "Age must be at least 18 years";
    if (ageNum > 120) return "Please enter a valid age";
    return undefined;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    let processedValue = value;

    if (name === "phone") {
      processedValue = value.replace(/\D/g, "").slice(0, 10);
    }
    if (name === "age") {
      processedValue = value.replace(/\D/g, "").slice(0, 3);
    }

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      onUpdate({ [name]: checked });
    } else {
      onUpdate({ [name]: processedValue });
    }

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
    setErrors((prev) => ({ ...prev, [fieldName]: error }));
  };

  const getInputClassName = (fieldName: string) => {
    const baseClass =
      "w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B6E5DF] focus:border-transparent transition-all duration-200 bg-white text-black";

    const hasError =
      touched[fieldName] && errors[fieldName as keyof ValidationErrors];
    return `${baseClass} ${
      hasError
        ? "border-red-300 focus:ring-red-200"
        : "border-gray-200 hover:border-[#B6E5DF]"
    }`;
  };

  const CustomSelect = ({
    label,
    value,
    options,
    placeholder,
    name,
    required = false,
  }: {
    label: string;
    value: string;
    options: { label: string; value: string }[];
    placeholder: string;
    name: string;
    required?: boolean;
  }) => {
    const isOpen = openDropdown === name;

    return (
      <div className="space-y-2">
        <label className="block text-[#005657] font-medium">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <div className="relative">
          <button
            type="button"
            onClick={() => setOpenDropdown(isOpen ? null : name)}
            className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B6E5DF] focus:border-transparent transition-all duration-200 bg-white text-left flex items-center justify-between ${
              value ? "text-gray-900" : "text-gray-500"
            } border-gray-200 hover:border-[#B6E5DF]`}
          >
            <span className="truncate text-[14px]">
              {options.find((o) => o.value === value)?.label || placeholder}
            </span>
            <svg
              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onUpdate({ [name]: option.value });
                    setOpenDropdown(null);
                  }}
                  className={`w-full px-4 py-3 text-left hover:bg-[#B6E5DF]/10 transition-colors duration-150 ${
                    value === option.value
                      ? "bg-[#B6E5DF]/20 text-[#005657] font-medium"
                      : "text-gray-700"
                  } first:rounded-t-xl last:rounded-b-xl`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown && !(event.target as Element).closest(".relative")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  return (
    <div ref={formRef} className="space-y-6 p-4 md:p-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="space-y-1">
            <label htmlFor="name" className="block text-[#005657] font-medium">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              value={bookingData.name}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Enter your full name"
              required
              className={`${getInputClassName("name")} px-4 py- text-sm`}
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
              Email <span className="text-red-500">*</span>
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
              className={`${getInputClassName("email")} px-4 py- text-sm`}
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
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              value={bookingData.phone}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Enter your phone number"
              required
              className={`${getInputClassName("phone")} px-4 py- text-sm`}
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
              Age <span className="text-red-500">*</span>
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
              className={`${getInputClassName("age")} px-4 py- text-sm`}
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
          <CustomSelect
            label="Mode of Therapy"
            value={bookingData.modeOfTherapy}
            options={THERAPY_MODES}
            placeholder="Select therapy mode"
            name="modeOfTherapy"
            required
          />

          <CustomSelect
            label="Primary Issue/Concern"
            value={bookingData.issue}
            options={THERAPY_ISSUES}
            placeholder="Select your primary concern"
            name="issue"
            required
          />

          <CustomSelect
            label="Session Type"
            value={bookingData.sessionType}
            options={SESSION_TYPE}
            placeholder="Select your session type"
            name="sessionType"
            required
          />

          <CustomSelect
            label="Select Therapist"
            value={bookingData.psychologistId || ""}
            options={[
              { label: "Any Available Therapist", value: "" },
              ...psychologists.map((p) => ({
                label: `${p.name} - ₹${p.price}`,
                value: p._id,
              })),
            ]}
            placeholder="Choose your therapist (optional)"
            name="psychologistId"
          />

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
                  href="/terms-conditions"
                  className="text-[#005657] underline hover:text-[#005657]/80"
                >
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a
                  href="/privacy-policy"
                  className="text-[#005657] underline hover:text-[#005657]/80"
                >
                  Consent to Therapy
                </a>
                <span className="text-red-500"> *</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
