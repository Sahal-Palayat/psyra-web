"use client"
import { motion } from "framer-motion"

interface PsychologistCardProps {
  id: string
  name: string
  specialization: string
  experience: string
  rating: number
  image: string
  languages: string[]
  sessionTypes: string[]
  price: string
  availability: "Available" | "Busy" | "Offline"
  onBookNow: (psychologistId: string) => void
}

export function PsychologistCard({
  id,
  name,
  specialization,
  experience,
  rating,
  image,
  languages,
  sessionTypes,
  price,
  availability,
  onBookNow,
}: PsychologistCardProps) {
  const getAvailabilityColor = () => {
    switch (availability) {
      case "Available":
        return "text-green-600"
      case "Busy":
        return "text-orange-500"
      case "Offline":
        return "text-gray-400"
      default:
        return "text-gray-400"
    }
  }

  const getAvailabilityDot = () => {
    switch (availability) {
      case "Available":
        return "bg-green-500"
      case "Busy":
        return "bg-orange-500"
      case "Offline":
        return "bg-gray-400"
      default:
        return "bg-gray-400"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-50 group"
    >
      {/* Image Section */}
      <div className="relative h-48 bg-gradient-to-br from-[#B6E5DF]/20 to-[#005657]/10 flex items-center justify-center">
        <div className="relative">
          <img
            src={image || "/placeholder.svg?height=120&width=120"}
            alt={name}
            className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
          />
          <div
            className={`absolute bottom-2 right-2 w-4 h-4 rounded-full ${getAvailabilityDot()} border-2 border-white`}
          ></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Name and Specialization */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
          <p className="text-[#005657] font-medium text-sm">{specialization}</p>
        </div>

        {/* Rating and Experience */}
        <div className="flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-200"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600 ml-1">{rating}</span>
          </div>
          <div className="text-gray-500">
            <span>{experience}</span>
          </div>
        </div>

        {/* Availability Status */}
        <div className="flex items-center justify-center gap-2">
          <div className={`w-2 h-2 rounded-full ${getAvailabilityDot()}`}></div>
          <span className={`text-sm font-medium ${getAvailabilityColor()}`}>{availability}</span>
        </div>

        {/* Languages */}
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-2">Languages</p>
          <div className="flex flex-wrap justify-center gap-1">
            {languages.slice(0, 2).map((language) => (
              <span
                key={language}
                className="px-3 py-1 bg-[#B6E5DF]/20 text-[#005657] text-xs rounded-full font-medium"
              >
                {language}
              </span>
            ))}
            {languages.length > 2 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                +{languages.length - 2}
              </span>
            )}
          </div>
        </div>

        {/* Session Types */}
        <div className="text-center">
          <p className="text-xs text-gray-500 mb-2">Specializes in</p>
          <div className="flex flex-wrap justify-center gap-1">
            {sessionTypes.map((type) => (
              <span key={type} className="px-3 py-1 bg-gray-50 text-gray-700 text-xs rounded-full border">
                {type}
              </span>
            ))}
          </div>
        </div>

        {/* Price and Book Button */}
        <div className="pt-4 border-t border-gray-100">
          <div className="text-center mb-4">
            <p className="text-xs text-gray-500">Starting from</p>
            <p className="text-2xl font-bold text-[#005657]">{price}</p>
          </div>

          <button
            onClick={() => onBookNow(id)}
            disabled={availability === "Offline"}
            className={`w-full py-3 rounded-2xl font-semibold transition-all duration-300 ${
              availability === "Offline"
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-[#005657] text-white hover:bg-[#004546] hover:shadow-lg transform hover:scale-105"
            }`}
          >
            {availability === "Offline" ? "Currently Unavailable" : "Book Consultation"}
          </button>
        </div>
      </div>
    </motion.div>
  )
}
