"use client"
import { useState } from "react"
import SwiperFlipCarousel from "./swiper-flip-carousel"
import { BookingModal } from "../BookingModal/bookingModal"
// import SwiperFlipCarousel from "./swiper-flip-carousel"
// import { BookingModal } from "../booking/booking-modal"

interface Psychologist {
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
}

const mockPsychologists: Psychologist[] = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialization: "Clinical Psychologist",
    experience: "8+ years",
    rating: 4.9,
    image: "/placeholder.svg?height=120&width=120",
    languages: ["English", "Spanish", "French"],
    sessionTypes: ["Individual", "Couples"],
    price: "₹1,500",
    availability: "Available",
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialization: "Cognitive Behavioral Therapist",
    experience: "12+ years",
    rating: 4.8,
    image: "/placeholder.svg?height=120&width=120",
    languages: ["English", "Mandarin"],
    sessionTypes: ["Individual", "Group", "Online"],
    price: "₹1,800",
    availability: "Busy",
  },
  {
    id: "3",
    name: "Dr. Priya Sharma",
    specialization: "Family Therapist",
    experience: "6+ years",
    rating: 4.7,
    image: "/placeholder.svg?height=120&width=120",
    languages: ["English", "Hindi", "Punjabi"],
    sessionTypes: ["Family", "Couples"],
    price: "₹1,200",
    availability: "Available",
  },
  {
    id: "4",
    name: "Dr. James Wilson",
    specialization: "Trauma Specialist",
    experience: "15+ years",
    rating: 4.9,
    image: "/placeholder.svg?height=120&width=120",
    languages: ["English"],
    sessionTypes: ["Individual", "EMDR"],
    price: "₹2,000",
    availability: "Available",
  },
  {
    id: "5",
    name: "Dr. sharafu Patel",
    specialization: "Child Psychologist",
    experience: "10+ years",
    rating: 4.8,
    image: "/placeholder.svg?height=120&width=120",
    languages: ["English", "Gujarati", "Hindi"],
    sessionTypes: ["Individual", "Family", "Play Therapy"],
    price: "₹1,400",
    availability: "Offline",
  },
  {
    id: "6",
    name: "Dr. Robert Martinez",
    specialization: "Addiction Counselor",
    experience: "9+ years",
    rating: 4.6,
    image: "/placeholder.svg?height=120&width=120",
    languages: ["English", "Spanish"],
    sessionTypes: ["Individual", "Group"],
    price: "₹1,600",
    availability: "Available",
  },
]

const specializations = [
  "All",
  "Clinical Psychology",
  "CBT",
  "Family Therapy",
  "Trauma",
  "Child Psychology",
  "Addiction",
]

export function PsychologistsSection() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [selectedPsychologist, setSelectedPsychologist] = useState<string>("")

  const handleBookNow = (psychologist: any) => {
    setSelectedPsychologist(psychologist.title)
    setIsBookingModalOpen(true)
  }

  return (
    <section className="py-20">
      <SwiperFlipCarousel onBookNow={handleBookNow} />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        packageTitle={selectedPsychologist ? `Session with ${selectedPsychologist}` : "Individual Therapy Session"}
      />
    </section>
  )
}
