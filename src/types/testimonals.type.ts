export interface TestimonyProps {
    heading: {
      text: string;
      highlightText: string;
    };
    description: string;
    testimonies: TestimonyCardProps[];
  }
  
  export interface TestimonyCardProps {
    name: string;
    designation?: string;
    quote: string;
    imageUrl: string;
    company: {
      name: string;
      logo: string;
    }
  }