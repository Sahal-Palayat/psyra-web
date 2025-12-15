export interface Blog {
  _id: string;
  title: string;
  name: string;
  category: string;
  shortDescription: string;
  thumbnail: string;
  content: string;
  createdAt: string;
  author?: {
     _id: string
    name: string;
    designation: string;
    imageUrl: string;
  };
  
}
