import type { ContentBlock } from "@/types/concerns";
import { cleanText } from "@/utils/cleanText";
import { applyInternalLinksText } from "@/utils/applyInternalLinks";
import { useMemo } from "react";

interface Props {
  blocks: readonly ContentBlock[];
  internalLinks: { text: string; url: string }[];
}

export default function ConcernContent({ blocks,internalLinks }: Props) {
  const usedLinks = useMemo(() => new Set<string>(), []);
  return (
    <section className="space-y-8">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={index} className="text-2xl font-semibold text-[#007C80]">
                {cleanText(block.content as string)}
              </h2>
            );

          case "paragraph":
            return (
              <p
                key={index}
                className="text-gray-700 leading-relaxed whitespace-pre-line"
              >
                {applyInternalLinksText(
                  cleanText(block.content as string),
                  internalLinks,
                  usedLinks
                )}
              </p>
            );

          case "list":
            return (
              <ul
                key={index}
                className="list-disc list-outside pl-8 space-y-2 text-gray-700"
              >
                {(block.content as string[]).map((item, i) => (
                  <li key={i}>
                    {applyInternalLinksText(cleanText(item), internalLinks, usedLinks)}
                  </li>
                ))}
              </ul>
            );

          default:
            return null;
        }
      })}
    </section>
  );
}
