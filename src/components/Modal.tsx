"use client"

import { useState, useEffect } from "react"
import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, User, Mail, Phone, MessageSquare, CheckCircle } from "lucide-react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  type: "getStarted" | "event"
}

const Modal = ({ isOpen, onClose, type }: ModalProps) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !phone) {
      console.log("Name and phone are required")
      return
    }

    setIsSubmitting(true)

    const url =
      "https://script.google.com/macros/s/AKfycbzBYz9jU0LnZlnN_t-L3cvdUh_Khl2JcnZG7friVcd8rHyG3laqgWBjdgiwoe7ue4acQQ/exec"

    const formData = new URLSearchParams()
    formData.append("Name", name)
    formData.append("Phone", phone)
    formData.append("Type", type)
    formData.append("Email", email)
    formData.append("Message", message)

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString(),
    })
      .then((res) => res.text())
      .then((data) => {
        console.log("Response from Google Apps Script:", data)
        setIsSubmitted(true)
        setIsSubmitting(false)
      })
      .catch((error) => {
        console.error("Error submitting form:", error)
        setIsSubmitting(false)
      })
  }

  const handleClose = () => {
    // Reset all states when closing
    setName("")
    setEmail("")
    setPhone("")
    setMessage("")
    setIsSubmitted(false)
    setIsSubmitting(false)
    onClose()
  }

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose()
    }

    window.addEventListener("keydown", handleEsc)
    if (isOpen) document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-h-[90vh] max-w-md bg-white rounded-2xl shadow-xl z-50 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-teal-600 text-white p-4 relative">
              <h2 className="text-lg font-semibold">
                {isSubmitted ? "Thank You!" : type === "getStarted" ? "Get Started with Psyra" : "Book an Appointment"}
              </h2>
              <p className="text-teal-100 text-xs mt-0.5">
                {isSubmitted
                  ? "Your request has been received"
                  : type === "getStarted"
                    ? "Begin your mental health journey today"
                    : "Schedule a session with our therapists"}
              </p>
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white hover:text-teal-200 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4">
              {isSubmitted ? (
                // Success Message
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-6">
                  <div className="flex justify-center mb-4">
                    <CheckCircle className="w-16 h-16 text-green-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Submitted Successfully!</h3>
                  <p className="text-gray-600 mb-6">
                    Our team will contact you soon.
                  </p>
                  <button
                    onClick={handleClose}
                    className="bg-teal-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-teal-700 transition-all"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                // Form
                <form onSubmit={handleSubmit} className="space-y-2">
                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-0.5">
                      <User className="w-4 h-4 mr-2 text-teal-600" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-[black]"
                      placeholder="Enter your full name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-0.5">
                      <Mail className="w-4 h-4 mr-2 text-teal-600" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-[black]"
                      placeholder="Enter your email"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-0.5">
                      <Phone className="w-4 h-4 mr-2 text-teal-600" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-[black]"
                      placeholder="Enter your phone number"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label className="flex items-center text-sm font-medium text-gray-700 mb-0.5">
                      <MessageSquare className="w-4 h-4 mr-2 text-teal-600" />
                      {type === "getStarted" ? "How can we help you?" : "Additional Info"}
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={3}
                      className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 text-[black]"
                      placeholder={type === "getStarted" ? "Tell us about your needs..." : "Any specific concerns..."}
                      disabled={isSubmitting}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-teal-600 text-white p-2.5 rounded-full font-medium hover:bg-teal-700 transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : type === "getStarted" ? "Get Started Now" : "Book Appointment"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Modal
