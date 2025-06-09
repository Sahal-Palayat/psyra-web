"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Phone } from "lucide-react";

interface SurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
  setIsOpen: any;
}

const SurveyModal = ({ isOpen, onClose, setIsOpen }: SurveyModalProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneRegex = /^\d{10}$/;

    if (!phoneRegex.test(phone)) {
      setPhoneError("Please enter a valid 10-digit mobile number.");
      return;
    }

    setPhoneError(""); // Clear any previous errors

    const userData = {
      username: name,
      mobile: phone,
    };

    localStorage.setItem("userInfo", JSON.stringify(userData));

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 1000);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    if (isOpen) document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("userInfo") || "{}");
    if (!savedUser.username || !savedUser.mobile) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-md bg-white rounded-2xl shadow-lg z-50 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <>
                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <User className="w-4 h-4 mr-2 text-teal-600" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full p-2 rounded-md border border-gray-300 text-black"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                    <Phone className="w-4 h-4 mr-2 text-teal-600" />
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (phoneError) setPhoneError(""); // Clear error on change
                    }}
                    required
                    className={`w-full p-2 rounded-md border ${
                      phoneError ? "border-red-500" : "border-gray-300"
                    } text-black`}
                    placeholder="Your mobile number"
                  />
                  {phoneError && (
                    <p className="text-sm text-red-500 mt-1">{phoneError}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white p-2.5 rounded-full font-medium hover:bg-teal-700 transition"
                >
                  Submit
                </button>
              </>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SurveyModal;
