export const concernsData = {
  depression: {
    title: "Depression",
    description:
      "Depression is a common mental health condition that affects mood, thoughts, and daily life.",

    content: {
      whatIs:
        "Depression is more than temporary sadness. It affects how a person feels, thinks, and functions daily.",

      causes: [
        "Biological factors and brain chemistry",
        "Prolonged stress or trauma",
        "Hormonal changes",
        "Genetic vulnerability",
      ],

      symptoms: [
        "Persistent sadness or emptiness",
        "Low energy and fatigue",
        "Loss of interest in activities",
        "Difficulty concentrating",
        "Sleep disturbances",
      ],

      howToOvercome: [
        "Professional therapy support",
        "Healthy daily routines",
        "Emotional regulation techniques",
        "Building supportive relationships",
      ],
    },

    faqs: [
      {
        question: "Is depression treatable?",
        answer:
          "Yes, depression is highly treatable with the right therapeutic support.",
      },
      {
        question: "How long does therapy take?",
        answer:
          "The duration varies based on individual needs and progress.",
      },
    ],
  },
} as const
