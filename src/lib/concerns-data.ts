export const concernsData = {
  depression: {
    title: "Depression",

    description:
      "Depression is more than just a mood disorder—it deeply impacts emotions and behavior.",

    content: {
      whatIs: `
Depression is more than just a mood disorder—it deeply impacts emotions and behavior.
If you feel persistently sad and lose interest in your usual activities for over two
weeks, it might be a sign of depression. This condition can disrupt your thoughts and
make daily tasks difficult. According to the World Health Organization, 4.4% of people
worldwide deal with depression.

Depression affects more than just your mood; it can impact your social, emotional,
and cognitive well-being. During tough times, it’s crucial for caregivers and friends
to offer support. Identifying the symptoms of depression is the first step.

Seeking Malayali counselling can be an effective way to address these challenges and
start the healing process. Compassionate support from skilled Malayali psychologists
and counselors can make a significant difference in overcoming depression.
      `,

      symptoms: [
        "Constant sadness and feeling down most of the time",
        "Loss of interest in activities that were once enjoyable",
        "Significant weight loss or gain unrelated to dieting",
        "Sleep disturbances such as insomnia or oversleeping",
        "Persistent fatigue and low energy levels",
        "Feelings of guilt or worthlessness",
        "Difficulty concentrating, thinking clearly, or making decisions",
        "Unexplained physical aches and pains",
        "Withdrawing from friends, family, and social events",
        "Thoughts of death or suicide",
      ],

      causes: [
        "Traumatic life experiences such as childhood abuse or neglect",
        "Unresolved grief due to the loss of a loved one",
        "Age-related and gender-related societal pressures",
        "Genetic influence and family history of mental health issues",
        "Life-changing events like relocation, divorce, or career changes",
        "Chronic medical illnesses with long-term impact",
        "Substance abuse used as a coping mechanism",
        "Family disputes and poor communication",
      ],

      types: [
        {
          title: "Major Depressive Disorder",
          description:
            "Involves persistent depressive symptoms lasting more than two weeks, making it difficult to manage daily activities.",
        },
        {
          title: "Bipolar Depression",
          description:
            "Includes alternating periods of depression and manic episodes, affecting emotions, energy levels, and behavior.",
        },
        {
          title: "Perinatal and Postnatal Depression",
          description:
            "Affects women during pregnancy and after childbirth, causing persistent stress, worry, and emotional challenges.",
        },
        {
          title: "Premenstrual Dysphoric Disorder (PMDD)",
          description:
            "A severe form of PMS that causes intense mood changes and depressive symptoms before menstruation.",
        },
        {
          title: "Seasonal Affective Disorder (SAD)",
          description:
            "Triggered by seasonal changes, especially during winter, leading to low energy and feelings of sadness.",
        },
        {
          title: "Psychotic Depression",
          description:
            "A severe form of depression involving hallucinations or delusions, affecting perception of reality.",
        },
        {
          title: "Postpartum Depression",
          description:
            "Occurs after childbirth and is marked by intense anxiety, stress, and emotional difficulties.",
        },
      ],

      postpartumSymptoms: [
        "Difficulty forming an emotional bond with the newborn",
        "Sudden and frequent crying spells",
        "Severe mood swings and communication challenges",
        "Fear of inadequacy as a mother",
        "Panic attacks and related complications",
        "Extreme fatigue and difficulty caring for the baby",
        "Insomnia, loss of appetite, or suicidal thoughts in severe cases",
      ],

      howToOvercome: [
        "Acknowledging emotional difficulties and accepting the need for support",
        "Staying physically active to improve mood and release endorphins",
        "Setting small, achievable goals to regain confidence",
        "Establishing routines, to-do lists, and journaling thoughts",
        "Seeking emotional support from family and friends",
        "Reaching out to a mental health professional if symptoms persist",
      ],
    },

    faqs: [
      {
        question: "Is depression treatable?",
        answer:
          "Yes, depression is highly treatable with the right therapeutic support and care.",
      },
      {
        question: "When should professional help be considered?",
        answer:
          "If symptoms last longer than two weeks or interfere with daily life, seeking professional help is strongly recommended.",
      },
    ],
  },
} as const
