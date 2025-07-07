export type SurveyQuestion = {
    id: number | string
    question: string
    options: string[]
    type: string
  }
  
  export type SurveyAnswers = {
    [questionId: string]: string | number | boolean
  }
  