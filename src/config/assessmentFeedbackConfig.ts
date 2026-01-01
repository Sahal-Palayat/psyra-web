export const assessmentFeedbackConfig = {
  depression: {
    label: "Depression Level",
    levels: {
      mild: "Mild Depressive Symptoms",
      moderate: "Moderate Depressive Symptoms",
      severe: "High Depressive Symptoms",
    },
  },
  anxiety: {
    label: "Anxiety Level",
    levels: {
      mild: "Mild Anxiety",
      moderate: "Moderate Anxiety",
      severe: "High Anxiety",
    },
  },
  stress: {
    label: "Stress Level",
    levels: {
      mild: "Mild Stress",
      moderate: "Moderate Stress",
      severe: "High Stress",
    },
  },
  panic: {
    label: "Panic Symptoms",
    levels: {
      mild: "Mild Panic Symptoms",
      moderate: "Moderate Panic Symptoms",
      severe: "Severe Panic Symptoms",
    },
  },
  ocd: {
    label: "OCD Symptoms",
    levels: {
      mild: "Mild OCD Traits",
      moderate: "Moderate OCD Traits",
      severe: "Severe OCD Traits",
    },
  },
  personality: {
    label: "Personality Concerns",
    levels: {
      mild: "Mild Personality Concerns",
      moderate: "Moderate Personality Concerns",
      severe: "Significant Personality Concerns",
    },
  },
  relationship: {
    label: "Relationship Wellbeing",
    levels: {
      mild: "Minor Relationship Concerns",
      moderate: "Ongoing Relationship Difficulties",
      severe: "Significant Relationship Distress",
    },
  },
  sexual: {
    label: "Sexual Wellbeing",
    levels: {
      mild: "Mild Sexual Concerns",
      moderate: "Moderate Sexual Concerns",
      severe: "Significant Sexual Concerns",
    },
  },
  work: {
    label: "Work Wellbeing",
    levels: {
      mild: "Mild Work Stress",
      moderate: "Moderate Work Stress",
      severe: "Severe Work Stress",
    },
  },
} as const;
