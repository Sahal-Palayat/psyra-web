'use client'

import { CreditCard } from 'lucide-react'
import { motion} from "framer-motion";
import React from 'react'

const refundPoints = [
  "Payments for consultations, trainings, or events must be made in advance",
  "All fees are non-refundable unless otherwise stated in the service-specific policy",
  "Psyra.in does not store payment method details",
  "Transactions are handled via secure third-party payment gateways",
]

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8F9FC] to-white">
      {/* Header */}
      <div className="bg-[#005657] pt-30 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Refund Policy
            </h1>
            <p className="text-xl text-[#B6E5DF] max-w-2xl">
              Learn about our payment and refund terms
            </p>
          </motion.div>
        </div>
      </div>

      {/* Refund Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#B6E5DF] rounded-full flex items-center justify-center text-[#005657]">
              <CreditCard className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-[#005657]">
              Payments & Refunds
            </h2>
          </div>

          <ul className="space-y-3">
            {refundPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-700">
                <div className="w-2 h-2 bg-[#B6E5DF] rounded-full mt-2 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

export default RefundPolicy
