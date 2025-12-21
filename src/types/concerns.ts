export type ContentBlock =
  | {
      type: "paragraph"
      title?: string
      text: string
    }
  | {
      type: "list"
      title: string
      items: readonly string[]
    }
  | {
      type: "group"
      title: string
      items: readonly {
        title: string
        description: string
      }[]
    }



export interface ConcernContent {
  blocks: readonly ContentBlock[]
}


export interface ConcernFAQ {
  question: string
  answer: string
}

export interface ConcernData {
  title: string
  description: string
  content: ConcernContent
  faqs: readonly ConcernFAQ[]
}
