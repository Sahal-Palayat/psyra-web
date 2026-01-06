export interface RelationshipQuestion {
  _id: string;
  questionText: string;
  questionNumber: number;
  category: string;
  reverseScored: boolean;
}

export interface RelationshipAnswer {
  questionId: string;
  selectedScore: number;
}

export interface RelationshipAnswerPayload {
  answers: RelationshipAnswer[];
}

export interface RelationshipResult {
  normalizedScore: number;
  avgToxicity: number;
  riskLevel: "healthy" | "moderate" | "high";
  resultLabel: string;
}