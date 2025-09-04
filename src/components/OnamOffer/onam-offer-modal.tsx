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
      window.open(`https://wa.me/${phoneNumber}?text=${message}`);
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
          className="relative w-full max-w-4xl rounded-2xl shadow-xl overflow-hidden flex"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-20"
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
            <div className="mb-6">
              <div className="text-teal-600 font-bold text-lg tracking-wider mb-1">
                HAPPY
              </div>
              <div
                className="text-teal-600 font-bold text-5xl italic leading-none mb-4"
                style={{ fontFamily: "cursive" }}
              >
                Onam
              </div>
            </div>

            {/* Get Your Offer Now button */}
            <button className="bg-lime-400 hover:bg-lime-500 text-gray-800 font-bold py-3 px-6 rounded-full text-sm mb-6 transition-colors w-fit">
              GET YOUR OFFER NOW
            </button>

            {/* 40% OFF text */}
            <div className="text-teal-600 font-bold text-6xl sm:text-4xl leading-none mb-8">
              40% OFF
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
            <button
              onClick={handleApplyCoupon}
              disabled={isApplied}
              className={`w-full py-3 px-6 rounded-full font-semibold text-white transition-all duration-300 ${
                isApplied
                  ? "bg-green-500 cursor-not-allowed"
                  : "bg-teal-600 hover:bg-teal-700 transform hover:scale-105"
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

          <div className="flex-[3] bg-teal-600 relative flex items-center justify-center"></div>

          <div className="absolute left-[56%] z-10">
            <img
              src="maveli_mahabali_png_image_by_anulubi_dd4pwbk.png"
              alt="King Mahabali"
              className="w-296 h-102 object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
