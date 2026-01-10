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
    <section className="min-h-screen bg-gradient-to-b from-[#00989D] to-[#17A2B8] flex items-center">
      <div className="w-full px-4">
        {/* Blended Card */}
        <div
          className="
            max-w-md mx-auto
            bg-[#1FA6AC]
            rounded-2xl
            shadow-xl
            px-6 py-8
            border border-white/20
          "
        >
          <h2 className="text-2xl font-semibold text-center text-white mb-2">
            Almost there
          </h2>

          <p className="text-sm text-white/80 text-center mb-8">
            Share a few details to view your assessment result
          </p>

          {/* Name */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-white/90 mb-1">
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
                w-full rounded-lg
                bg-white
                border border-white/40
                px-3 py-2 text-sm
                focus:outline-none focus:ring-2
                focus:ring-white/60
              "
            />
          </div>

          {/* Mobile */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-white/90 mb-1">
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
                w-full rounded-lg
                bg-white
                border border-white/40
                px-3 py-2 text-sm
                focus:outline-none focus:ring-2
                focus:ring-white/60
              "
            />
          </div>

          {/* Submit */}
          <button
            onClick={onSubmit}
            disabled={isDisabled || submitting}
            className={`
              w-full py-3 rounded-full text-sm font-semibold
              transition-all duration-200
              ${
                isDisabled || submitting
                  ? "bg-white/30 text-white/60 cursor-not-allowed"
                  : "bg-white text-[#00989D] hover:bg-white/90 hover:shadow-lg"
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
