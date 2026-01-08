"use client";

import React from "react"; // ✅ ADD THIS

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
    <section className="pt-20 bg-gradient-to-b from-[#00989D] via-cyan-400 to-cyan-200 min-h-screen">
      <div className="w-full px-4 py-12 sm:py-16">
        <div
          className="max-w-md mx-auto bg-white/90 backdrop-blur-sm
                     rounded-2xl shadow-xl px-6 py-8"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
            Almost there
          </h2>

          <p className="text-sm text-gray-600 text-center mb-8">
            Share a few details to view your relationship result
          </p>

          {/* Name */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
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
              className="w-full rounded-lg border border-gray-300
                         px-3 py-2 text-sm
                         focus:outline-none focus:ring-2
                         focus:ring-[#00989D]"
            />
          </div>

          {/* Mobile */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-1">
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
              className="w-full rounded-lg border border-gray-300
                         px-3 py-2 text-sm
                         focus:outline-none focus:ring-2
                         focus:ring-[#00989D]"
            />
          </div>

          {/* Submit */}
          <button
            onClick={onSubmit}
            disabled={isDisabled || submitting}
            className={`
  w-full py-3 rounded-full text-sm font-medium
  transition-all duration-200
  ${
    isDisabled || submitting
      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
      : "bg-gradient-to-r from-[#00989D] to-teal-600 text-white hover:shadow-lg hover:scale-[1.02]"
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
