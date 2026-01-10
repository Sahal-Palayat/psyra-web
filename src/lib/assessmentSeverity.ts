export type AssessmentSeverity = "low" | "moderate" | "severe";

export type SeverityDisplayConfig = {
  label: string;
  description: string;
  colorGradient: string;
  helperText?: string;
};

const CONCERN_SEVERITY_MAP: Record<
  string,
  Record<"low" | "moderate" | "high", SeverityDisplayConfig>
> = {
  depression: {
    low: {
      label: "Mild Depressive Symptoms",
      description:
        "You may be experiencing occasional low mood, but you still have emotional resilience.",
      colorGradient: "from-emerald-600 to-teal-600",
    },
    moderate: {
      label: "Moderate Depressive Symptoms",
      description:
        "Your responses suggest persistent sadness or emotional heaviness that may affect daily life.",
      colorGradient: "from-amber-600 to-orange-600",
    },
    high: {
      label: "Severe Depressive Symptoms",
      description:
        "You may be experiencing intense emotional distress. Seeking professional support could be very helpful.",
      colorGradient: "from-red-600 to-rose-600",
    },
  },

  anxiety: {
    low: {
      label: "Mild Anxiety Levels",
      description:
        "You may feel anxious at times, but it doesn’t strongly interfere with your daily functioning.",
      colorGradient: "from-emerald-600 to-teal-600",
    },
    moderate: {
      label: "Moderate Anxiety Levels",
      description:
        "Your anxiety may be affecting focus, calmness, or emotional comfort in daily situations.",
      colorGradient: "from-amber-600 to-orange-600",
    },
    high: {
      label: "High Anxiety Levels",
      description:
        "You may be experiencing frequent or intense anxiety. Support strategies or professional help may ease this.",
      colorGradient: "from-red-600 to-rose-600",
    },
  },

  stress: {
    low: {
      label: "Low Stress Load",
      description:
        "You appear to be handling stress well and maintaining balance in daily life.",
      colorGradient: "from-emerald-600 to-teal-600",
    },
    moderate: {
      label: "Moderate Stress Load",
      description:
        "You may be feeling pressure or fatigue that could benefit from rest or stress-management strategies.",
      colorGradient: "from-amber-600 to-orange-600",
    },
    high: {
      label: "High Stress Load",
      description:
        "Your responses suggest significant stress that may be impacting your wellbeing.",
      colorGradient: "from-red-600 to-rose-600",
    },
  },

  relationship: {
    low: {
      label: "Stable Relationship Dynamics",
      description:
        "Your relationships appear generally supportive with manageable challenges.",
      colorGradient: "from-emerald-600 to-teal-600",
    },
    moderate: {
      label: "Relationship Strain Present",
      description:
        "Some emotional or communication difficulties may be affecting your relationships.",
      colorGradient: "from-amber-600 to-orange-600",
    },
    high: {
      label: "Severe Relationship Distress",
      description:
        "Your responses suggest ongoing emotional conflict or disconnection in relationships.",
      colorGradient: "from-red-600 to-rose-600",
    },
  },

  work: {
    low: {
      label: "Healthy Work Balance",
      description:
        "You appear to be managing work demands without significant emotional strain.",
      colorGradient: "from-emerald-600 to-teal-600",
    },
    moderate: {
      label: "Work-Related Pressure",
      description:
        "Your responses suggest stress or dissatisfaction related to work responsibilities.",
      colorGradient: "from-amber-600 to-orange-600",
    },
    high: {
      label: "Work-Related Burnout Risk",
      description:
        "You may be experiencing emotional exhaustion or overwhelm related to work.",
      colorGradient: "from-red-600 to-rose-600",
    },
  },

  ocd: {
    low: {
      label: "Mild OCD Tendencies",
      description:
        "You may notice some repetitive thoughts or behaviors, but they are mostly manageable.",
      colorGradient: "from-emerald-600 to-teal-600",
    },
    moderate: {
      label: "Moderate OCD Impact",
      description:
        "Repetitive thoughts or compulsions may be interfering with comfort or daily routines.",
      colorGradient: "from-amber-600 to-orange-600",
    },
    high: {
      label: "Severe OCD Impact",
      description:
        "Your responses suggest strong intrusive thoughts or compulsive behaviors that may need support.",
      colorGradient: "from-red-600 to-rose-600",
    },
  },

  panic: {
    low: {
      label: "Low Panic Symptoms",
      description:
        "Panic-like sensations appear infrequent or mild.",
      colorGradient: "from-emerald-600 to-teal-600",
    },
    moderate: {
      label: "Moderate Panic Symptoms",
      description:
        "You may experience sudden fear or physical symptoms that feel distressing at times.",
      colorGradient: "from-amber-600 to-orange-600",
    },
    high: {
      label: "Severe Panic Symptoms",
      description:
        "Your responses suggest intense panic episodes that may strongly affect daily life.",
      colorGradient: "from-red-600 to-rose-600",
    },
  },

  sexual: {
  low: {
    label: "Mild Sexual Wellbeing Concerns",
    description:
      "You may have occasional concerns related to intimacy or sexual wellbeing, but they do not appear to strongly affect your emotional health.",
    colorGradient: "from-emerald-600 to-teal-600",
  },
  moderate: {
    label: "Moderate Sexual Wellbeing Challenges",
    description:
      "Your responses suggest ongoing concerns around intimacy, comfort, or sexual confidence that may be affecting emotional wellbeing.",
    colorGradient: "from-amber-600 to-orange-600",
  },
  high: {
    label: "Significant Sexual Wellbeing Distress",
    description:
      "You may be experiencing persistent or distressing challenges related to sexual wellbeing. Professional guidance could offer meaningful support.",
    colorGradient: "from-red-600 to-rose-600",
  },
},

personality: {
  low: {
    label: "Mild Personality-Related Difficulties",
    description:
      "You may notice some patterns in thoughts or emotions, but they appear manageable and do not strongly disrupt daily life.",
    colorGradient: "from-emerald-600 to-teal-600",
  },
  moderate: {
    label: "Moderate Personality-Related Challenges",
    description:
      "Your responses suggest recurring emotional or interpersonal patterns that may affect relationships or self-perception.",
    colorGradient: "from-amber-600 to-orange-600",
  },
  high: {
    label: "Severe Personality-Related Distress",
    description:
      "You may be experiencing deeply ingrained emotional or relational patterns that cause significant distress. Professional support could be very beneficial.",
    colorGradient: "from-red-600 to-rose-600",
  },
},

};


export function resolveConcernSeverity({
  concern,
  severity,
}: {
  concern: string;
  severity: AssessmentSeverity;
}): SeverityDisplayConfig {
  const level =
    severity === "severe"
      ? "high"
      : severity === "moderate"
      ? "moderate"
      : "low";

  return (
    CONCERN_SEVERITY_MAP[concern]?.[level] ?? {
      label: "Assessment Result",
      description:
        "Thank you for completing the assessment. Your responses have been recorded.",
      colorGradient: "from-emerald-600 to-teal-600",
    }
  );
}
