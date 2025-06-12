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
  otherIssue?: string;
  agreeToTerms: boolean;
  sessionType: string;

  // Package info
  packageTitle: string;
}

export interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageTitle: string;
}

export interface BookedSlot {
  date: string; // Format: "yyyy-MM-dd"
  timeSlot: string; // Format: "12:00 AM - 01:00 AM"
}

export const THERAPY_MODES = ["Video Call", "Audio Call", "Chat"];

export const THERAPY_ISSUES = [
  "Anxiety & Stress",
  "Depression",
  "Relationship Issues",
  "Trauma & PTSD",
  "Addiction & Substance Abuse",
  "Grief & Loss",
  "Self-Esteem & Confidence",
  "Other",
];

export const SESSION_TYPE = ["New Session", "Followup Session"];

// Generate all 24-hour time slots
export const ALL_TIME_SLOTS = [
  "12:00 AM - 01:00 AM",
  "01:00 AM - 02:00 AM",
  "02:00 AM - 03:00 AM",
  "03:00 AM - 04:00 AM",
  "04:00 AM - 05:00 AM",
  "05:00 AM - 06:00 AM",
  "06:00 AM - 07:00 AM",
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
