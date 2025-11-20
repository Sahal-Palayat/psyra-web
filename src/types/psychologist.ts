export interface Psychologist {
  _id: string;
  name: string;
  designation: string;
  monthlySlots: string[];
  experience: string;
  languages: string[];
  expertise: string[];
  imageUrl: string;
  price?:string;
  rating?:string;
  createdAt?: string;
  updatedAt?: string;
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
