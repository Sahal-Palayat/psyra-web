export type BlockType = "heading" | "paragraph" | "list"

export interface ContentBlock {
  type: BlockType
  content: string | string[]
}

export interface ConcernHero {
  headline: string
  description: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface Concern {
  slug: string
  title: string
  status: "active" | "inactive"
  hero: ConcernHero
  blocks: ContentBlock[]
  faqs: FAQ[]
}
