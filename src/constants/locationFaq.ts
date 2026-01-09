export interface FaqItem {
  question: string;
  answer: string;
}

export const getLocationFaqs = (
  countryName: string,
  displayName: string
): FaqItem[] => [
  {
    question: `Can I get online Malayalam counselling anywhere in ${countryName}?`,
    answer: `Yes. Psyra offers online Malayalam counselling services across ${displayName}, allowing you to attend sessions conveniently from anywhere in ${countryName}.`,
  },
  {
    question: `Are the psychologists familiar with the experiences of Malayalis living in ${countryName}?`,
    answer: `Yes. Our Malayalam-speaking psychologists understand the emotional and cultural challenges faced by Malayalis living in ${countryName}.`,
  },
  {
    question: `Are online counselling sessions private and confidential in ${countryName}?`,
    answer: `Absolutely. All sessions are encrypted, secure, and strictly confidential.`,
  },
  {
    question: `What issues do Malayalis in ${countryName} commonly seek counselling for?`,
    answer: `Common concerns include work stress, anxiety, relationship issues, homesickness, parenting challenges, academic stress, and emotional adjustment.`,
  },
  {
    question: `Can I attend counselling if I work night shifts in ${countryName}?`,
    answer: `Yes. Flexible appointment timings are available to suit different work schedules.`,
  },
  {
    question: `Do I need local ID or insurance for counselling in ${countryName}?`,
    answer: `No. You can book sessions directly without local ID or insurance.`,
  },
  {
    question: `How do I book Malayalam counselling in ${countryName}?`,
    answer: `You can book through our website, select a Malayalam-speaking psychologist, and begin therapy online.`,
  },
];
