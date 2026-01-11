export interface RelationshipQuestion {
  _id: string;
  questionText: string;
  questionNumber: number;
  category: string;
  reverseScored: boolean;
}

export interface RelationshipSubmitPayload {
  responses: {
    personalDetails: {
      name: string;
      mobile: string;
    };
    questionAnswers: {
      question: string;
      answer: string;
    }[];
  };
}

export interface RelationshipAssessmentResult {
  rawScore: number;
  normalizedScore: number;
  riskLevel: "healthy" | "moderate" | "high";
  resultLabel: string;
}