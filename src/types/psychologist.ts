// Separate interface for specialization details
export interface SpecializationDetail {
  name: string;
  desc: string;
}

// Main Psychologist interface (ONLY ONE)
export interface Psychologist {
  _id: string;
  name: string;
  specialization: string;
  monthlySlots: string[];
  imageUrl: string;
  price: string;
  rating: string;
  experience: string;
  languages: string[];
  expertise: string[];
  createdAt: string;
  updatedAt: string;
  __v?: number;
  active?: boolean;
  description: string;
  designation: string;
  specializations: SpecializationDetail[];
}

export interface CardProps {
  psychologist: Psychologist;
  isActive: boolean;
  isPrev: boolean;
  isNext: boolean;
  onBookNow: (psychologist: Psychologist) => void;
}

export interface CarouselState {
  currentIndex: number;
  isAutoPlay: boolean;
}

export interface MonthlySlot {
  date: string;
  time: string;
  available: boolean;
}