"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Phone, MapPin } from "lucide-react";

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EventModal = ({ isOpen, onClose }: EventModalProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [place, setPlace] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone || !place) {
      alert("Please fill in all fields.");
      return;
    }

    const url =
      "https://script.google.com/macros/s/AKfycby2rNAeiTr6M7pUn57_XBGk1x_b8A9rXu6ZW03ywQK7xPb6RWOB6F5JBmJ3zIg0SiMu/exec";

    const formData = new URLSearchParams();
    formData.append("Name", name);
    formData.append("Phone", phone);
    formData.append("Place", place);
    formData.append("Type", "event");

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString(),
    })
      .then((res) => res.text())
      .then((data) => {
        console.log("Response:", data);
        setName("");
        setPhone("");
        setPlace("");
        setIsSubmitted(true); // Trigger success screen

        setTimeout(() => {
          setIsSubmitted(false);
          onClose(); // Close modal after delay
        }, 2000);
      })
      .catch((err) => console.error("Submission error:", err));
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

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-md bg-white rounded-2xl shadow-lg z-50 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-lg font-semibold text-teal-700">
                  Register for Event
                </h2>
                <p className="text-sm text-teal-500">
                  Fill in your details to join us
                </p>
              </div>
              <button onClick={onClose} aria-label="Close">
                <X className="text-gray-500 hover:text-gray-700" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isSubmitted ? (
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
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full p-2 rounded-md border border-gray-300 text-black"
                      placeholder="Your mobile number"
                    />
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                      <MapPin className="w-4 h-4 mr-2 text-teal-600" />
                      Place
                    </label>
                    <input
                      type="text"
                      value={place}
                      onChange={(e) => setPlace(e.target.value)}
                      required
                      className="w-full p-2 rounded-md border border-gray-300 text-black"
                      placeholder="Your location"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-teal-600 text-white p-2.5 rounded-full font-medium hover:bg-teal-700 transition"
                  >
                    Submit
                  </button>
                </>
              ) : (
                <div className="text-center py-8">
                  <h3 className="text-lg font-semibold text-teal-700 mb-2">
                    You're Registered!
                  </h3>
                  <p className="text-gray-600">
                    We’ll get in touch with you soon.
                  </p>
                </div>
              )}
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EventModal;
