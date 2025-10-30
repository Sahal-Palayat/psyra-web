import type { SurveyQuestion } from "../types/survey";

export const studentQuestions: SurveyQuestion[] = [
  {
    id: "emotional_balance",
    question: "I feel emotionally balanced and stable most of the time",
    options: [],
    type: "rating",
  },
  {
    id: "stress_coping",
    question: "I am able to cope well with stress in daily life",
    options: [],
    type: "rating",
  },
  {
    id: "pressure_handling",
    question:
      "I have healthy ways to deal with pressure or difficult emotions.",
    options: [],
    type: "rating",
  },
  {
    id: "self_value",
    question: "I believe I have value and something to offer",
    options: [],
    type: "rating",
  },
  {
    id: "support_system",
    question: "I have someone I can talk to when I feel down or anxious.",
    options: [],
    type: "rating",
  },
  {
    id: "ask_for_help",
    question: "I am comfortable asking for help when I need it",
    options: [],
    type: "rating",
  },
  {
    id: "support_access",
    question: "I know where to find support for my mental health.",
    options: [],
    type: "rating",
  },
  {
    id: "resilience",
    question: "I bounce back quickly after setbacks or failures.",
    options: [],
    type: "rating",
  },
  {
    id: "express_emotions",
    question: "I can express my feelings in a healthy and respectful way.",
    options: [],
    type: "rating",
  },
  {
    id: "goal_setting",
    question: "I set goals for myself and work towards them steadily.",
    options: [],
    type: "rating",
  },
  {
    id: "daily_joy",
    question: "I feel a sense of joy or fulfillment in daily life",
    options: [],
    type: "rating",
  },
  {
    id: "responsibility_confidence",
    question: "I feel confident handling responsibilities in my daily life",
    options: [],
    type: "rating",
  },
  {
    id: "academic_pressure",
    question:
      "I don't feel that expectations from teachers and parents are too high",
    options: [],
    type: "rating",
  },
  {
    id: "safe_environment",
    question:
      "My school/college provides a safe and respectful environment for learning.",
    options: [],
    type: "rating",
  },
  {
    id: "teacher_support",
    question:
      "Teachers are approachable and supportive when I face academic difficulties.",
    options: [],
    type: "rating",
  },
  {
    id: "mental_health_services",
    question:
      "My school/college offers mental health support or counseling services.",
    options: [],
    type: "rating",
  },
  {
    id: "peer_support",
    question: "I feel supported by my peers during stressful academic times",
    options: [],
    type: "rating",
  },
  {
    id: "empathy_towards_others",
    question:
      "I always try to understand others' mental health condition and help them.",
    options: [],
    type: "rating",
  },
];

export const profQuestions: SurveyQuestion[] = [
  {
    id: "emotional_balance",
    question: "I feel emotionally balanced and stable most of the time",
    options: [],
    type: "rating",
  },
  {
    id: "stress_coping",
    question: "I am able to cope well with stress in daily life",
    options: [],
    type: "rating",
  },
  {
    id: "emotion_handling",
    question:
      "I have healthy ways to deal with pressure or difficult emotions.",
    options: [],
    type: "rating",
  },
  {
    id: "self_value",
    question: "I believe I have value and something to offer",
    options: [],
    type: "rating",
  },
  {
    id: "support_system",
    question: "I have someone I can talk to when I feel down or anxious.",
    options: [],
    type: "rating",
  },
  {
    id: "help_comfort",
    question: "I am comfortable asking for help when I need it",
    options: [],
    type: "rating",
  },
  {
    id: "support_access",
    question: "I know where to find support for my mental health.",
    options: [],
    type: "rating",
  },
  {
    id: "resilience",
    question: "I bounce back quickly after setbacks or failures.",
    options: [],
    type: "rating",
  },
  {
    id: "emotion_expression",
    question: "I can express my feelings in a healthy and respectful way.",
    options: [],
    type: "rating",
  },
  {
    id: "goal_setting",
    question: "I set goals for myself and work towards them steadily.",
    options: [],
    type: "rating",
  },
  {
    id: "daily_joy",
    question: "I feel a sense of joy or fulfillment in daily life",
    options: [],
    type: "rating",
  },
  {
    id: "responsibility_confidence",
    question: "I feel confident handling responsibilities in my daily life",
    options: [],
    type: "rating",
  },
  {
    id: "manager_approach",
    question:
      "I can approach my manager or team leader if I'm feeling overwhelmed",
    options: [],
    type: "rating",
  },
  {
    id: "org_support",
    question:
      "My mental well-being is respected and supported by my organization.",
    options: [],
    type: "rating",
  },
  {
    id: "stress_management_promo",
    question: "My workplace promotes healthy ways to manage stress.",
    options: [],
    type: "rating",
  },
  {
    id: "deadline_pressure",
    question:
      "I don't feel constant pressure to meet unrealistic deadlines or expectations",
    options: [],
    type: "rating",
  },
  {
    id: "sleep_disturbance",
    question:
      "I have never experienced sleep disturbances or fatigue due to work stress.",
    options: [],
    type: "rating",
  },
  {
    id: "workplace_recommendation",
    question:
      "I would recommend my workplace to others based on its atmosphere",
    options: [],
    type: "rating",
  },
];

export const basicQuestions: SurveyQuestion[] = [
  {
    id: "occupation",
    question: "Are you??",
    options: ["Proffession", "Student"],
    type: "options",
  },
  {
    id: "age",
    question: "age",
    options: Array.from({ length: 109 }, (_, i) => (i + 12).toString()),
    type: "multi-select",
  },
  {
    id: "gender",
    question: "gender",
    options: ["Male", "Female", "Binary", "Prefer Not to say"],
    type: "options",
  },
  {
    id: "state",
    question: "State",
    options: [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
    ],
    type: "drop-down",
  },
];

export const howIsMindQues: SurveyQuestion[] = [
  {
    id: "q1",
    question:
      "Have you recently been able to concentrate on what you’re doing?",
    options: [
      "Better than usual",
      "Same as usual",
      "Less than usual",
      "Much less than usual",
    ],
    type: "options",
  },
  {
    id: "q2",
    question: "Have you recently lost much sleep over worry?",
    options: [
      "Not at all",
      "No more than usual",
      "Rather more than usual",
      "Much more than usual",
    ],
    type: "options",
  },
  {
    id: "q3",
    question:
      "Have you recently felt you were playing a useful part in things?",
    options: [
      "More so than usual",
      "Same as usual",
      "Less useful than usual",
      "Much less useful",
    ],
    type: "options",
  },
  {
    id: "q4",
    question:
      "Have you recently felt capable of making decisions about things?",
    options: [
      "More so than usual",
      "Same as usual",
      "Less so than usual",
      "Much less capable",
    ],
    type: "options",
  },
  {
    id: "q5",
    question: "Have you recently felt constantly under strain?",
    options: [
      "Not at all",
      "No more than usual",
      "Rather more than usual",
      "Much more than usual",
    ],
    type: "options",
  },
  {
    id: "q6",
    question: "Have you recently felt you couldn’t overcome your difficulties?",
    options: [
      "Not at all",
      "No more than usual",
      "Rather more than usual",
      "Much more than usual",
    ],
    type: "options",
  },
  {
    id: "q7",
    question:
      "Have you recently been able to enjoy your normal day-to-day activities?",
    options: [
      "More so than usual",
      "Same as usual",
      "Less so than usual",
      "Much less than usual",
    ],
    type: "options",
  },
  {
    id: "q8",
    question: "Have you recently been able to face up to your problems?",
    options: [
      "More so than usual",
      "Same as usual",
      "Less so than usual",
      "Much less able",
    ],
    type: "options",
  },
  {
    id: "q9",
    question: "Have you recently been feeling unhappy and depressed?",
    options: [
      "Not at all",
      "No more than usual",
      "Rather more than usual",
      "Much more than usual",
    ],
    type: "options",
  },
  {
    id: "q10",
    question: "Have you recently been losing confidence in yourself?",
    options: [
      "Not at all",
      "No more than usual",
      "Rather more than usual",
      "Much more than usual",
    ],
    type: "options",
  },
  {
    id: "q11",
    question:
      "Have you recently been thinking of yourself as a worthless person?",
    options: [
      "Not at all",
      "No more than usual",
      "Rather more than usual",
      "Much more than usual",
    ],
    type: "options",
  },
  {
    id: "q12",
    question:
      "Have you recently been feeling reasonably happy, all things considered?",
    options: [
      "More so than usual",
      "About same as usual",
      "Less so than usual",
      "Much less than usual",
    ],
    type: "options",
  },
];
