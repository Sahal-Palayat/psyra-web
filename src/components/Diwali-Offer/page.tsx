"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface OnamOfferModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OnamOfferModal({ isOpen, onClose }: OnamOfferModalProps) {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isApplied, setIsApplied] = useState(false);

  const handleApplyCoupon = async () => {
    if (!mobileNumber.trim()) {
      alert("Please enter your mobile number");
      return;
    }

    setIsApplied(true);

    try {
      const url =
        "https://script.google.com/macros/s/AKfycbx_FVPwQafByhY9fNmgwEcqLoBr_FNWYDUuv95GVcaXYyq9y2XiXBabHOrXfRSmCYKd/exec";

      const formData = new URLSearchParams();
      formData.append("mobileNumber", mobileNumber);
      formData.append("timestamp", new Date().toISOString());
      formData.append("offer", "Onam 40% Off");

      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      })
        .then((res) => res.text())
        .then((data) => {
          console.log("Response from Google Apps Script:", data);
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
        });

      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobileNumber: mobileNumber,
          timestamp: new Date().toISOString(),
          offer: "Onam 40% Off",
        }),
      });
    } catch (error) {
      console.log("Error sending to sheet:", error);
    }

    // Redirect to the therapists page with 10% offer claim
    window.location.href = "/psychologists?offer-claim=true";
  };

  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="flex min-h-full items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-[460px] rounded-2xl shadow-xl overflow-hidden flex"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 bg-white right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-20"
            aria-label="Close modal"
          >
            <svg
              className="w-5 h-5 text-gray-600"
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

          <div className="flex-[10]  bg-white p-8 flex flex-col justify-center">
            {/* Happy Onam text */}
            <div className="flex flex-col items-center mb-8 mr-16">
              {/* Happy Onam image */}
              <img
                src="/diwali-text.png"
                alt="Happy Onam"
                className="w-40 h-auto mr-8" // adjust size as needed
              />

              {/* Get Your Offer Now button */}
              <button onClick={handleApplyCoupon} className="font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                GET YOUR OFFER NOW
              </button>

              {/* 40% OFF text */}
              <div className="text-teal-600 font-bold text-4xl md:text-4xl leading-none">
                10% OFF
              </div>
            </div>

            {/* Mobile input */}
            <div className="mb-4">
              <input
                type="tel"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="Enter mobile number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none text-sm bg-white"
                disabled={isApplied}
              />
            </div>

            {/* Apply Coupon button */}
            <div className="flex justify-center mr-10 mb-4">
              <button
                onClick={handleApplyCoupon}
                disabled={isApplied}
                className={`w-[200px] py-2 px-6 rounded-full font-semibold text-white transition-all duration-300 ${isApplied
                    ? "bg-green-500 cursor-not-allowed"
                    : "bg-teal-600 hover:bg-teal-700 transform hover:scale-105"
                  }`}
              >

                Apply Offer

              </button>
            </div>
          </div>

          <div className="flex-[3] bg-teal-600 relative flex items-center justify-center"></div>

          <div className="absolute left-[56%] z-10">
            <img
              src="https://png.pngtree.com/png-vector/20250608/ourmid/pngtree-family-with-diwali-lamp-and-flowers-png-image_16502154.png"
              alt="King Mahabali"
              className="w-70 h-60 mt-36 sm:w-80 sm:h-70 sm:mt-25 object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
