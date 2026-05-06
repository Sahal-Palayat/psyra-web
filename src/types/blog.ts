export interface Blog {
  _id: string;
  title: string;
  name: string;
  category: string;
  shortDescription: string;
  thumbnail: string;
  content: string;
  createdAt: string;
  updatedAt?: string;
  author?: {
     _id: string
    name: string;
    slug: string;
    designation: string;
    imageUrl: string;
  };

    internalLinks?: {
    text: string;
    url: string;
  }[];  

  metaDescription?: string;
  language?: string;
  reviewer?: {
    _id: string;
    name: string;
    designation: string;
    imageUrl?: string;
  };
  faq?: { question: string; answer: string }[];
}
