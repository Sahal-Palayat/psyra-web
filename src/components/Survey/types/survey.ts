export type SurveyQuestion = {
    id: number | string
    question: string
    options: string[]
    type: string
  }
  
export type FinalSurveyAnswers = {
  [questionId: string]: string | number | boolean;
} & {
  name: string;
  contact: string;
  email: string;
};