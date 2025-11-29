"use client";
import React, { useState, useEffect } from "react";
import { X, CheckCircle, AlertCircle } from "lucide-react";

interface CallbackModalProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export default function RequestCallModal({ open, setOpen }: CallbackModalProps) {
  const FORM_ACTION_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSfjAqpkgIqfjb2aBG4wmGfdjoDha97hYXKToxpufibzy7Zvng/formResponse";

  const entry = {
    firstName: "entry.1237797073",
    lastName: "entry.1413724714",
    email: "entry.61957467",
    phone: "entry.1281260550",
    subject: "entry.1320548872",
    message: "entry.1954475575",
    anonymous: "entry.267825178",
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const validate = () => {
    setError("");

    const missingFields = [];

    // Check for missing required fields based on anonymous status
    if (!anonymous) {
      // Non-anonymous: all fields required
      if (!firstName) missingFields.push("First name");
      if (!lastName) missingFields.push("Last name");
      if (!email) missingFields.push("Email");
      if (!phone) missingFields.push("Phone number");
    } else {
      // Anonymous: only phone is required
      if (!phone) missingFields.push("Phone number");
    }

    // If multiple fields are missing, show general message
    if (missingFields.length > 1) {
      setError("Please fill in all mandatory fields.");
      return false;
    }

    // If one field is missing, show specific message
    if (missingFields.length === 1) {
      setError(`${missingFields[0]} is required.`);
      return false;
    }

    // Validate email format (only if not anonymous and email is provided)
    if (!anonymous && email) {
      const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRx.test(email)) {
        setError("Please enter a valid email address.");
        return false;
      }
    }

    // Phone validation: minimum 10 digits
    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      setError("Phone number must be at least 10 digits.");
      return false;
    }

    const phoneRx = /^[0-9+\-\s()]{10,20}$/;
    if (!phoneRx.test(phone)) {
      setError("Please enter a valid phone number.");
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setSubmitting(true);
    setError("");

    const formData = new URLSearchParams();
    const fullPhone = `${countryCode} ${phone}`;

    formData.append(entry.firstName, anonymous ? "Anonymous" : firstName || "");
    formData.append(entry.lastName, anonymous ? "User" : lastName || "");
    formData.append(entry.email, anonymous ? "" : email);
    formData.append(entry.phone, fullPhone);
    formData.append(entry.subject, "");
    formData.append(entry.message, message || "");

    if (anonymous) {
      formData.append(entry.anonymous, "I would like to stay anonymous");
    }

    try {
      await fetch(FORM_ACTION_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
        mode: "no-cors",
      });

      setSubmitting(false);
      setShowSuccess(true);

      // Reset fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setAnonymous(false);

      // Close modal after 2 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setOpen(false);
      }, 2000);
    } catch (err) {
      console.error(err);
      setSubmitting(false);
      setError("Submission failed — please try again.");
    }
  };

  if (!open) return null;

  return (
    <>
      <div
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 z-50 flex items-center justify-end"
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setOpen(false)}
        />

        {/* Drawer */}
        <div className="relative h-full w-full sm:w-[92%] sm:max-w-[460px] lg:max-w-[500px] bg-white shadow-2xl p-6 sm:p-7 animate-drawer-slide sm:rounded-l-2xl overflow-y-auto">
          <div className="w-full flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Request a Callback
            </h3>

            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>

          <div className="space-y-5 pb-10">
            {/* Anonymous checkbox - moved to top */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <input
                id="cb-anon"
                type="checkbox"
                checked={anonymous}
                onChange={(e) => setAnonymous(e.target.checked)}
                className="mt-1 w-4 h-4 text-teal-600 rounded focus:ring-2 focus:ring-teal-500"
              />
              <label htmlFor="cb-anon" className="text-sm text-gray-700 cursor-pointer">
                I would like to stay anonymous
              </label>
            </div>

            {/* Name fields - only show if not anonymous */}
            {!anonymous && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    First name <span className="text-red-500">*</span>
                  </label>
                  <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="Your First Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Last name <span className="text-red-500">*</span>
                  </label>
                  <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="Your Last Name"
                  />
                </div>
              </div>
            )}

            {/* Email - only show if not anonymous */}
            {!anonymous && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white"
                >
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+61">🇦🇺 +61</option>
                  <option value="+971">🇦🇪 +971</option>
                  <option value="+65">🇸🇬 +65</option>
                </select>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2.5 text-[15px] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="9876543210"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Minimum 10 digits required</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 min-h-[100px] text-[15px] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                placeholder="Tell us more about your enquiry..."
              />
            </div>

            {/* Error Alert */}
            {error && (
              <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg animate-shake">
                <AlertCircle className="text-red-500 flex-shrink-0 mt-0.5" size={20} />
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            {/* Success Alert */}
            {showSuccess && (
              <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg animate-fadeIn">
                <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                <p className="text-sm text-green-700">
                  Thank you! Your request has been submitted successfully.
                </p>
              </div>
            )}

            {/* Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="px-4 sm:px-5 py-2.5 text-[15px] rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors font-medium disabled:opacity-50"
                disabled={submitting}
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleSubmit}
                className="flex-1 px-4 sm:px-5 py-2.5 text-[14px] sm:text-[15px] rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition-colors font-medium disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={submitting}
              >
                {submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin">⏳</span>
                    <span className="hidden xs:inline">Submitting...</span>
                    <span className="xs:hidden">Sending...</span>
                  </span>
                ) : (
                  "Submit Request"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes drawerSlide {
          from {
            opacity: 0;
            transform: translateX(100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-drawer-slide {
          animation: drawerSlide 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}