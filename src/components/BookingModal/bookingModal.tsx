"use client"

import type React from "react"
import { useState, useEffect } from "react"
import {
  format,
  addDays,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay,
  isToday,
} from "date-fns"
import { motion } from "framer-motion"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  packageTitle: string
}

// Generate mock data for available slots for the next 14 days
const generateMockSlots = () => {
  const slots: Record<string, string[]> = {}
  const allTimeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ]

  for (let i = 0; i < 14; i++) {
    const date = addDays(new Date(), i)
    // Skip weekends
    if (date.getDay() !== 0 && date.getDay() !== 6) {
      const formattedDate = format(date, "yyyy-MM-dd")
      // Randomly select 3-5 time slots for each date
      const numberOfSlots = Math.floor(Math.random() * 3) + 3
      const availableSlots = [...allTimeSlots].sort(() => 0.5 - Math.random()).slice(0, numberOfSlots)
      slots[formattedDate] = availableSlots
    }
  }
  return slots
}

const mockAvailableSlots = generateMockSlots()

// Custom Calendar Component
const Calendar = ({
  selected,
  onSelect,
}: {
  selected: Date | undefined
  onSelect: (date: Date) => void
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const renderHeader = () => {
    return (
      <div className="flex justify-between items-center mb-4">
        <button
          type="button"
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className="p-2 rounded-full hover:bg-[#B6E5DF]/30 text-[#005657]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <h2 className="text-lg font-semibold text-[#005657]">{format(currentMonth, "MMMM yyyy")}</h2>
        <button
          type="button"
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="p-2 rounded-full hover:bg-[#B6E5DF]/30 text-[#005657]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    )
  }

  const renderDays = () => {
    const days = []
    const dateFormat = "EEEEE"
    const startDate = startOfWeek(currentMonth)

    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-center text-xs font-medium text-gray-500 uppercase">
          {format(addDays(startDate, i), dateFormat)}
        </div>,
      )
    }

    return <div className="grid grid-cols-7 mb-2">{days}</div>
  }

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth)
    const monthEnd = endOfMonth(monthStart)
    const startDate = startOfWeek(monthStart)
    const endDate = endOfWeek(monthEnd)

    const rows = []
    let days = []
    let day = startDate
    let formattedDate = ""

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, "yyyy-MM-dd")
        const cloneDay = day
        const isDisabled = day < new Date() || day.getDay() === 0 || day.getDay() === 6

        days.push(
          <div
            key={formattedDate}
            className={`relative p-2 text-center cursor-pointer ${
              !isSameMonth(day, monthStart)
                ? "text-gray-300"
                : isDisabled
                  ? "text-gray-300 cursor-not-allowed"
                  : isToday(day)
                    ? "bg-[#B6E5DF]/20 text-[#005657]"
                    : "text-gray-700 hover:bg-[#B6E5DF]/20"
            } ${selected && isSameDay(day, selected) ? "bg-[#005657] text-white hover:bg-[#005657]/90" : ""}`}
            onClick={() => !isDisabled && onSelect(cloneDay)}
          >
            {format(day, "d")}
          </div>,
        )
        day = addDays(day, 1)
      }
      rows.push(
        <div key={formattedDate} className="grid grid-cols-7">
          {days}
        </div>,
      )
      days = []
    }
    return <div className="mb-2">{rows}</div>
  }

  return (
    <div className="w-full">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  )
}

export function BookingModal({ isOpen, onClose, packageTitle }: BookingModalProps) {
  const [step, setStep] = useState(1)
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [timeSlot, setTimeSlot] = useState<string>("")
  const [availableSlots, setAvailableSlots] = useState<string[]>([])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    maritalStatus: "",
    concerns: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Update available slots when date changes
  useEffect(() => {
    if (date) {
      const formattedDate = format(date, "yyyy-MM-dd")
      // Get available slots for the selected date or provide empty array if none
      const slots = mockAvailableSlots[formattedDate] || []
      setAvailableSlots(slots)
      setTimeSlot("") // Reset time slot when date changes
    }
  }, [date])

  const handleSubmit = async () => {
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Show success state
    setIsSubmitting(false)
    setIsSuccess(true)

    // Reset and close after showing success message
    setTimeout(() => {
      setIsSuccess(false)
      setStep(1)
      setDate(undefined)
      setTimeSlot("")
      setFormData({
        name: "",
        email: "",
        phone: "",
        age: "",
        maritalStatus: "",
        concerns: "",
      })
      onClose()
    }, 2000)
  }

  const nextStep = () => setStep((prev) => prev + 1)
  const prevStep = () => setStep((prev) => prev - 1)

  // If modal is not open, don't render anything
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 transition-opacity" onClick={onClose} aria-hidden="true" />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-[900px] overflow-hidden rounded-2xl bg-white shadow-xl"
        >
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 flex flex-col items-center justify-center text-center"
            >
              <div className="w-16 h-16 bg-[#B6E5DF] rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-[#005657]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-[#005657] mb-2">Booking Confirmed!</h2>
              <p className="text-gray-600">
                Thank you {formData.name} for booking a consultation. We'll send the details to {formData.email}{" "}
                shortly.
              </p>
            </motion.div>
          ) : (
            <>
              {/* Header */}
              <div className="bg-[#005657] text-white p-6">
                <h2 className="text-xl font-bold">Book Consultation</h2>
                <p className="text-[#B6E5DF] mt-1">
                  {packageTitle} - {step === 1 ? "Your Information" : "Select Date & Time"}
                </p>
              </div>

              {/* Content */}
              <div className="p-6">
                {step === 1 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-[#005657] font-medium">
                          Full Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B6E5DF] focus:border-transparent"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-[#005657] font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email address"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B6E5DF] focus:border-transparent"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-[#005657] font-medium">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B6E5DF] focus:border-transparent"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-[#005657] font-medium">
                          Age
                        </label>
                        <input
                          id="age"
                          name="age"
                          value={formData.age}
                          onChange={handleInputChange}
                          placeholder="Enter your age"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B6E5DF] focus:border-transparent"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-[#005657] font-medium">Marital Status</label>
                        <div className="flex gap-4">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="maritalStatus"
                              value="single"
                              checked={formData.maritalStatus === "single"}
                              onChange={handleInputChange}
                              className="mr-2 text-[#005657] focus:ring-[#B6E5DF]"
                            />
                            <span className="text-[#005657]">Single</span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="maritalStatus"
                              value="married"
                              checked={formData.maritalStatus === "married"}
                              onChange={handleInputChange}
                              className="mr-2 text-[#005657] focus:ring-[#B6E5DF]"
                            />
                            <span className="text-[#005657]">Married</span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="concerns" className="block text-[#005657] font-medium">
                          Your Concerns (Optional)
                        </label>
                        <textarea
                          id="concerns"
                          name="concerns"
                          value={formData.concerns}
                          onChange={handleInputChange}
                          placeholder="Briefly describe what you'd like to discuss"
                          rows={6}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B6E5DF] focus:border-transparent resize-none"
                        />
                      </div>

                      <div className="p-4 bg-[#B6E5DF]/20 rounded-md">
                        <h4 className="font-medium text-[#005657] mb-1">What to expect:</h4>
                        <p className="text-sm text-[#005657]/80">
                          After providing your information, you'll be able to select from available consultation times.
                          We'll send a confirmation to your email with details about your appointment.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-medium text-lg text-[#005657]">Select a Date</h3>
                      <div className="bg-[#B6E5DF]/10 rounded-lg p-4">
                        <Calendar selected={date} onSelect={setDate} />
                      </div>

                      {date && (
                        <div className="p-3 bg-[#B6E5DF]/20 rounded-md">
                          <p className="text-sm text-[#005657] flex items-center gap-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <span>Selected: {format(date, "EEEE, MMMM d, yyyy")}</span>
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-medium text-lg text-[#005657]">
                        {date ? "Available Time Slots" : "Select a date to see available times"}
                      </h3>

                      {date ? (
                        availableSlots.length > 0 ? (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-[#B6E5DF]/10 rounded-lg p-4 min-h-[300px] flex flex-col"
                          >
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                              {availableSlots.map((slot) => (
                                <button
                                  key={slot}
                                  type="button"
                                  className={`flex items-center justify-center px-4 py-2 rounded-md border ${
                                    timeSlot === slot
                                      ? "bg-[#005657] text-white border-[#005657]"
                                      : "border-[#B6E5DF] text-[#005657] hover:bg-[#B6E5DF]/20"
                                  }`}
                                  onClick={() => setTimeSlot(slot)}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                  {slot}
                                </button>
                              ))}
                            </div>

                            {timeSlot && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-auto p-3 bg-[#B6E5DF]/30 rounded-md flex items-center gap-2 mt-4"
                              >
                                <div className="flex items-center gap-1 text-sm text-[#005657]">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                  <span>Selected time: {timeSlot}</span>
                                </div>
                              </motion.div>
                            )}
                          </motion.div>
                        ) : (
                          <div className="bg-[#B6E5DF]/10 rounded-lg p-6 min-h-[300px] flex flex-col items-center justify-center text-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-12 w-12 text-[#005657]/30 mb-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <p className="text-[#005657] font-medium">No available slots for this date</p>
                            <p className="text-sm text-[#005657]/70 mt-1">Please select another date</p>
                          </div>
                        )
                      ) : (
                        <div className="bg-[#B6E5DF]/10 rounded-lg p-6 min-h-[300px] flex flex-col items-center justify-center text-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-[#005657]/30 mb-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <p className="text-[#005657] font-medium">Select a date first</p>
                          <p className="text-sm text-[#005657]/70 mt-1">Available time slots will appear here</p>
                        </div>
                      )}

                      {date && timeSlot && (
                        <div className="p-4 bg-[#B6E5DF]/20 rounded-md">
                          <h4 className="font-medium text-[#005657] mb-1">Your selected appointment:</h4>
                          <p className="text-sm text-[#005657]/80">
                            {format(date, "EEEE, MMMM d, yyyy")} at {timeSlot}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-6 pt-0 flex flex-col sm:flex-row gap-2 border-t border-gray-100 mt-4">
                {step === 1 ? (
                  <>
                    <button
                      onClick={onClose}
                      className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={nextStep}
                      disabled={!formData.name || !formData.email || !formData.phone || !formData.maritalStatus}
                      className={`w-full sm:w-auto px-4 py-2 rounded-md text-white transition-colors ${
                        !formData.name || !formData.email || !formData.phone || !formData.maritalStatus
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-[#005657] hover:bg-[#005657]/90"
                      }`}
                    >
                      Continue to Booking
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={prevStep}
                      className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={!date || !timeSlot || isSubmitting}
                      className={`w-full sm:w-auto px-4 py-2 rounded-md text-white transition-colors ${
                        !date || !timeSlot || isSubmitting
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-[#005657] hover:bg-[#005657]/90"
                      }`}
                    >
                      {isSubmitting ? "Processing..." : "Confirm Booking"}
                    </button>
                  </>
                )}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  )
}
