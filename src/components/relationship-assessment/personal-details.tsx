"use client";

import React from "react";

type Props = {
  personalDetails: {
    name: string;
    mobile: string;
  };
  setPersonalDetails: React.Dispatch<
    React.SetStateAction<{
      name: string;
      mobile: string;
    }>
  >;
  submitting: boolean;
  onSubmit: () => void;
};

export default function PersonalDetailsUI({
  personalDetails,
  setPersonalDetails,
  submitting,
  onSubmit,
}: Props) {
  const isDisabled =
    !personalDetails.name.trim() || personalDetails.mobile.length !== 10;

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8 sm:py-12">
      <div className="w-full max-w-md">
        {/* Card */}
        <div
          className="
            bg-gradient-to-b from-[#FFF5F0] to-[#FFE8E8]
            rounded-3xl
            shadow-lg shadow-gray-200/50
            px-6 py-8 sm:px-8 sm:py-10
          "
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-center text-[#2C2C2C] mb-2">
          You’re almost there
          </h2>

          <p className="text-sm sm:text-base text-[#5A5A5A] text-center mb-8">
          Your results are ready-take a moment to view them.
          </p>

          {/* Name */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
              Your name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={personalDetails.name}
              onChange={(e) =>
                setPersonalDetails((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
              className="
                w-full rounded-xl
                bg-white
                border border-[#F5E0E0]
                px-4 py-3 text-sm text-[#2C2C2C]
                focus:outline-none focus:ring-2 focus:ring-[#E8A5A5]/30
                focus:border-[#E8D2D7]
                transition-all duration-200
              "
            />
          </div>

          {/* Mobile */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-[#2C2C2C] mb-2">
              Mobile number
            </label>
            <input
              type="tel"
              placeholder="10-digit mobile number"
              value={personalDetails.mobile}
              onChange={(e) =>
                setPersonalDetails((prev) => ({
                  ...prev,
                  mobile: e.target.value.replace(/\D/g, ""),
                }))
              }
              maxLength={10}
              className="
                w-full rounded-xl
                bg-white
                border border-[#F5E0E0]
                px-4 py-3 text-sm text-[#2C2C2C]
                focus:outline-none focus:ring-2 focus:ring-[#E8A5A5]/30
                focus:border-[#E8D2D7]
                transition-all duration-200
              "
            />
          </div>

          {/* Submit */}
          <button
            onClick={onSubmit}
            disabled={isDisabled || submitting}
            className={`
              w-full py-3 sm:py-4 rounded-full text-sm font-semibold uppercase tracking-wide
              transition-all duration-300 shadow-md
              ${
                isDisabled || submitting
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#6B9E8F] text-white hover:shadow-lg hover:shadow-[#6B9E8F]/40 active:scale-95"
              }
            `}
          >
            {submitting ? "Submitting…" : "View My Result"}
          </button>
        </div>
      </div>
    </section>
  );
}
