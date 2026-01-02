import type { ContentBlock } from "@/types/concerns"
import { cleanText } from "@/components/utils/cleanText"

interface Props {
  blocks: readonly ContentBlock[]
}

export default function ConcernContent({ blocks }: Props) {
  return (
    <section className="space-y-5">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={index}
                className="text-2xl font-semibold text-[#007C80]"
              >
                {cleanText(block.content as string)}
              </h2>
            )

          case "paragraph":
            return (
              <p
                key={index}
                className="text-gray-700 leading-relaxed whitespace-pre-line"
              >
                {cleanText(block.content as string)}
              </p>
            )

          case "list":
            return (
              <ul
                key={index}
                className="list-disc list-inside space-y-2 text-gray-700"
              >
                {(block.content as string[]).map((item, i) => (
                  <li key={i}>{cleanText(item)}</li>
                ))}
              </ul>
            )

          default:
            return null
        }
      })}
    </section>
  )
}
