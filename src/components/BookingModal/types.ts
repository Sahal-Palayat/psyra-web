import { Psychologist } from "@/types/psychologist";

export interface BookingData {
  // Slot selection
  date?: Date;
  timeSlot?: string;

  // User details
  name: string;
  email: string;
  phone: string;
  age: string;
  modeOfTherapy: string;
  issue: string;
  agreeToTerms: boolean;
  sessionType: string;
  therapyType: string;
  // Package info
  packageTitle?: string;
  packageAmount: number;
  packageId: string;
  psychologistId?: string; 
}

export interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageTitle: string;
  price: string;
  packageId: string; 
}

export interface PsychologistModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: Psychologist;
  hasOfferClaim?: boolean;
}

export interface TherapyBooking {
  name: string;
  age: string; // You can change this to `number` if you plan to validate/convert it
  email: string;
  phone: string;
  date: string; // ISO date string format
  timeSlot: string;
  issue: string;
  otherIssue: string | null;
  sessionType: string;
  modeOfTherapy: string;
  packageTitle: string;
  agreeToTerms: boolean;
}

export interface BookedSlot {
  date: string; // Format: "yyyy-MM-dd"
  timeSlot: string; // Format: "12:00 AM - 01:00 AM"
}

export const THERAPY_MODES = [
  { label: "Video Call", value: "Video Call" },
  { label: "Audio Call", value: "Audio Call" },
  { label: "Chat", value: "Chat" },
];

export const THERAPY_ISSUES = [
  { label: "Anxiety & Stress", value: "Anxiety & Stress" },
  { label: "Depression", value: "Depression" },
  { label: "Relationship Issues", value: "Relationship Issues" },
  { label: "Trauma & PTSD", value: "Trauma & PTSD" },
  { label: "Addiction & Substance Abuse", value: "Addiction & Substance Abuse" },
  { label: "Grief & Loss", value: "Grief & Loss" },
  { label: "Self-Esteem & Confidence", value: "Self-Esteem & Confidence" },
  { label: "Other", value: "Other" },
];

export const SESSION_TYPE = [
  { label: "New Session", value: "New Session" },
  { label: "Followup Session", value: "Followup Session" },
];

// Generate all 24-hour time slots
export const INDIVIDUAL_TIME_SLOTS = [
  "12:00 AM - 01:00 AM",
  "07:00 AM - 08:00 AM",
  "08:00 AM - 09:00 AM",
  "09:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "12:00 PM - 01:00 PM",
  "01:00 PM - 02:00 PM",
  "02:00 PM - 03:00 PM",
  "03:00 PM - 04:00 PM",
  "04:00 PM - 05:00 PM",
  "05:00 PM - 06:00 PM",
  "06:00 PM - 07:00 PM",
  "07:00 PM - 08:00 PM",
  "08:00 PM - 09:00 PM",
  "09:00 PM - 10:00 PM",
  "10:00 PM - 11:00 PM",
  "11:00 PM - 12:00 AM",
];

export const COUPLE_TIME_SLOTS = [
  "07:00 AM - 08:30 AM",
  "08:30 AM - 10:00 AM",
  "10:00 AM - 11:30 AM",
  "11:30 AM - 01:00 PM",
  "01:00 PM - 02:30 PM",
  "02:30 PM - 04:00 PM",
  "04:00 PM - 05:30 PM",
  "05:30 PM - 07:00 PM",
  "07:00 PM - 08:30 PM",
  "08:30 PM - 10:00 PM",
  "10:00 PM - 11:30 PM",
  "11:30 PM - 01:00 AM",
];
