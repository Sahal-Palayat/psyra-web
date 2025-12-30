export type AssessmentItem = {
  id: string;
  title: string;
  description: string;
  concern: string;
  cta: string;
};

export const assessments: AssessmentItem[] = [
  {
    id: "anxiety",
    title: "Anxiety Assessment",
    description:
      "Understand your anxiety levels and how they may be affecting your daily life.",
    concern: "anxiety",
    cta: "Start Assessment",
  },
  {
    id: "depression",
    title: "Depression Assessment",
    description:
      "Check your mood patterns, energy levels, and emotional well-being.",
    concern: "depression",
    cta: "Start Assessment",
  },
  {
    id: "panic",
    title: "Panic Attack Assessment",
    description:
      "Identify symptoms related to sudden fear, panic episodes, and physical discomfort.",
    concern: "panic",
    cta: "Start Assessment",
  },
  {
    id: "stress",
    title: "Stress Assessment",
    description:
      "Assess how daily stress and pressure may be impacting your mental health.",
    concern: "stress",
    cta: "Start Assessment",
  },
  {
    id: "ocd",
    title: "Obsessive Compulsive Assessment",
    description:
      "Understand recurring thoughts, urges, or behaviors that may feel difficult to control.",
    concern: "ocd",
    cta: "Start Assessment",
  },
  {
    id: "personality",
    title: "Personality-Related Challenges",
    description:
      "Explore emotional patterns, self-image, and relationship-related challenges.",
    concern: "personality",
    cta: "Start Assessment",
  },
  {
    id: "relationship",
    title: "Relationship Issues Assessment",
    description:
      "Reflect on communication, trust, and emotional connection in relationships.",
    concern: "relationship",
    cta: "Start Assessment",
  },
  {
    id: "work",
    title: "Work-Related Challenges Assessment",
    description:
      "Assess stress, burnout, and emotional challenges related to work life.",
    concern: "work",
    cta: "Start Assessment",
  },
  {
    id: "sexual",
    title: "Sexual Well-being Assessment",
    description:
      "Explore emotional and psychological concerns related to intimacy and sexuality.",
    concern: "sexual",
    cta: "Start Assessment",
  },
];
