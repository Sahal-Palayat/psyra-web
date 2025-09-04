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

    setTimeout(() => {
      const phoneNumber = "+918891724199"; // Replace with your WhatsApp number
      const message = encodeURIComponent(
        `Onam Coupon applied! 🎉\n\nI'm interested in the Onam 40% offer. Please provide more details.`
      );
        window.open(`https://wa.me/${phoneNumber}?text=${message}`)
      onClose();
    }, 1000);
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
          className="relative w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Header with Onam colors */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 text-center">
            <div className="flex items-center justify-between mb-4">
              <div className="flex-1"></div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <svg
                  className="w-5 h-5"
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
            </div>

            <div className="text-4xl mb-2">🌺</div>
            <h2 className="text-2xl font-bold mb-2">Happy Onam!</h2>
            <p className="text-lg opacity-90">Special Festival Offer</p>
          </div>

          {/* Content */}
          <div className="p-6 text-center">
            <div className="mb-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                40% OFF
              </div>
              <p className="text-gray-700 text-lg mb-4">
                Apply your coupon code now and get your special Onam offer!
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mobile Number
                </label>
                <input
                  id="mobile"
                  type="tel"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  placeholder="Enter your mobile number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  disabled={isApplied}
                />
              </div>

              <button
                onClick={handleApplyCoupon}
                disabled={isApplied}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 ${
                  isApplied
                    ? "bg-green-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transform hover:scale-105"
                }`}
              >
                {isApplied ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Coupon Applied!
                  </span>
                ) : (
                  "Apply Coupon"
                )}
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              * Terms and conditions apply. Offer valid for limited time.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
