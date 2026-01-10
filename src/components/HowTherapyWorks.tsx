"use client"

import type React from "react"
import { Users, Calendar, CheckCircle, Video } from "lucide-react"
import Link from "next/link"

interface TimelineStage {
  step: number
  icon: React.ReactNode
  title: string
  description: string
  accent: string
}

interface HowItWorksProps {
  bgColor?: string
}

const stages: TimelineStage[] = [
  {
    step: 1,
    icon: <Users className="w-6 h-6" />,
    title: "Select a Therapist",
    description:
      "Browse our team of certified mental health professionals and choose a therapist whose expertise and approach align with your specific needs and preferences.",
    accent: "from-gray-400 to-gray-500",
  },
  {
    step: 2,
    icon: <Calendar className="w-6 h-6" />,
    title: "Book a Slot",
    description:
      "Schedule your therapy session by selecting an available time slot that works best for your schedule. We offer flexible appointment times throughout the week.",
    accent: "from-teal-500 to-teal-600",
  },
  {
    step: 3,
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Confirm Your Session",
    description:
      "Receive a confirmation of your appointment with session details. Get instant access to your therapy portal and receive a reminder before your scheduled session.",
    accent: "from-teal-500 to-teal-600",
  },
  {
    step: 4,
    icon: <Video className="w-6 h-6" />,
    title: "Attend Therapy Session",
    description:
      "Join your secure, confidential video therapy session. Receive personalized guidance and professional support to help you overcome challenges and achieve emotional wellness.",
    accent: "from-teal-500 to-emerald-600",
  },
]

export default function HowItWorks({ bgColor = "bg-[#F7F8F2]" }: HowItWorksProps) {
  return (
    <section className={`py-20 md:py-28 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
            How Online Therapy Works
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto text-balance leading-relaxed">
            Professional mental health counseling made simple and accessible. Connect with certified therapists for
            personalized support tailored to your unique needs.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-gray-300 via-teal-400 to-emerald-400" />

            <div className="relative grid grid-cols-4 gap-8">
              {stages.map((stage, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br ${stage.accent} text-white mb-8 shadow-lg hover:shadow-xl transition-all hover:scale-110 cursor-pointer`}
                  >
                    {stage.icon}
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-white text-gray-900 rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                      {stage.step}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                      {stage.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-10">
          {stages.map((stage, index) => (
            <div key={index} className="relative flex gap-6">
              {index < stages.length - 1 && (
                <div className="absolute left-10 top-24 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-emerald-400" />
              )}

              <div className="relative flex-shrink-0">
                <div
                  className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${stage.accent} text-white shadow-lg`}
                >
                  {stage.icon}
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-white text-gray-900 rounded-full flex items-center justify-center text-xs font-bold shadow-md">
                  {stage.step}
                </div>
              </div>

              <div className="flex-1 pt-2">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  {stage.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-full px-6 py-3 mb-6 border border-teal-200">
            <span className="text-sm font-semibold text-teal-700">
              Ready to Transform Your Mental Health?
            </span>
          </div>

          <p className="text-gray-600 mb-8 max-w-lg mx-auto text-sm sm:text-base">
            Connect with our qualified therapist today and begin your journey toward emotional resilience, mental
            wellness, and personal growth.
          </p>

          <Link
            href="/psychologists"
            aria-label="Book an online therapy session with a certified psychologist"
            className="px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 inline-block"
          >
            Book Your First Session
          </Link>
        </div>
      </div>
    </section>
  )
}
