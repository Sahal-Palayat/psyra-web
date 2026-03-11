export interface PsychologistBookingData {
  // Slot selection
  // date?: Date;
  date: string;
  timeSlot: string;

  // User details
  name: string;
  email: string;
  phone: string;
  age: string;
  modeOfTherapy: string;
  issue: string;
  otherIssue: string;
  agreeToTerms: boolean;
  sessionType: string;
  therapyType: string;

  psychologistId?: string;
  // Package info

  packageId: string;
  packageTitle: string;
  packageAmount: number;
}
