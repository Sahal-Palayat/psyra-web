export interface Location {
  slug: string;
  countryName: string;

  hero: {
    title: string;
    description: string;
  };

  context: {
    title: string;
    paragraphs: string[];
  };

  counsellingSection: {
    title: string;
    description: string;
    steps: string[];
    related: {
      title: string;
      description: string;
      linkText: string;
      link: string;
    };
  };

  faqs: {
    question: string;
    answer: string;
  }[];

  meta: {
    title: string;
    description: string;
  };
}