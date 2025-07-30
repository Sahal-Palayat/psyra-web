export interface Psychologist {
  _id: string;
  name: string;
  specialization: string;
  monthlySlots: string[];
  imageUrl: string;
  createdAt?:string;
  updatedAt?:string;
}

export interface CardProps {
  psychologist: Psychologist
  isActive: boolean
  isPrev: boolean
  isNext: boolean
  onBookNow: (psychologist: Psychologist) => void
}

export interface CarouselState {
  currentIndex: number;
  isAutoPlay: boolean;
}
