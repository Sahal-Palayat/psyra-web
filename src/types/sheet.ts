export interface AssessmentPayload {
  personDetails: {
    name: string;
    mobile: string;
    email: string;
    score: number;
  };
  questionAnswers: Record<string, string | number>;
}


export type RawPayload = {
  personDetails?: {
    name?: unknown;
    mobile?: unknown;
    email?: unknown;
    score?: unknown;
  };
  questionAnswers?: Record<string, unknown>;
};