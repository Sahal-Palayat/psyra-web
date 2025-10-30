"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";

interface UserInfoFormProps {
  onSubmit: (userInfo: { name: string; contact: string }) => void;
  isLoading?: boolean;
}

export function UserInfoForm({
  onSubmit,
  isLoading = false,
}: UserInfoFormProps) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!contact.trim()) {
      newErrors.contact = "Mobile number is required";
    } else {
      const phoneRegex = /^[0-9]{10,}$/;
      if (!phoneRegex.test(contact.replace(/\D/g, ""))) {
        newErrors.contact =
          "Please enter a valid mobile number (at least 10 digits)";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({ name, contact });
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
          Almost There! 🎉
        </h2>
        <p className="text-gray-600 text-lg">
          Please share your details so we can personalize your insights
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
        {/* Name Field */}
        <div className="text-left">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
            }}
            placeholder="Enter your full name"
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none ${
              errors.name
                ? "border-red-500 focus:border-red-600"
                : "border-gray-200 focus:border-emerald-500"
            }`}
            disabled={isLoading}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Mobile Number Field Only */}
        <div className="text-left">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Mobile Number
          </label>
          <input
            type="tel"
            value={contact}
            onChange={(e) => {
              setContact(e.target.value);
              if (errors.contact)
                setErrors((prev) => ({ ...prev, contact: "" }));
            }}
            placeholder="Enter your mobile number"
            className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none ${
              errors.contact
                ? "border-red-500 focus:border-red-600"
                : "border-gray-200 focus:border-emerald-500"
            }`}
            disabled={isLoading}
          />
          {errors.contact && (
            <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isLoading ? "Submitting..." : "Get My Insights"}
        </motion.button>
      </form>
    </motion.div>
  );
}
