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
  totalScore: number;
  toxicityScore: number;
  resultLabel: string;
}
