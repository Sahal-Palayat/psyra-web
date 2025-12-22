import type { ContentBlock } from "@/types/concerns"
import { cleanText } from "@/components/utils/cleanText";

interface Props {
  blocks: readonly ContentBlock[]
}

export default function ConcernContent({ blocks }: Props) {
  return (
    <section className="space-y-6">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <div key={index}>
                {block.title && (
                  <h2 className="text-2xl font-semibold mb-3 text-[#007C80]">
                     {cleanText(block.title)}
                  </h2>
                )}
                <p className="text-gray-700 leading-relaxed ">
                  {cleanText(block.text)}
                </p>
              </div>
            )

          case "list":
            return (
              <div key={index}>
                <h2 className="text-2xl font-semibold mb-3 text-[#007C80]">
                  {block.title}
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {block.items.map((item, i) => (
                    <li key={i}>{cleanText(item)}</li>
                  ))}
                </ul>
              </div>
            )

          case "group":
            return (
              <div key={index}>
                <h2 className="text-2xl font-semibold mb-6 text-[#007C80]">
                  {block.title}
                </h2>
                <div className="space-y-4">
                  {block.items.map((item, i) => (
                    <div key={i}>
                      <h3 className="font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-700">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )

          default:
            return null
        }
      })}
    </section>
  )
}
