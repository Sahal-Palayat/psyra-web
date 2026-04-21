import React from "react";

export function applyInternalLinks(
  content: string,
  links: { text: string; url: string }[]
) {
  let updatedContent = content;

  links.forEach((link) => {
    const regex = new RegExp(`(>[^<]*)\\b(${link.text})\\b`, "i");

    updatedContent = updatedContent.replace(regex, (match, before, word) => {
      return `${before}<a href="${link.url}" class="text-teal-600 font-medium underline hover:text-teal-800">${word}</a>`;
    });
  });

  return updatedContent;
}


export function applyInternalLinksText(
  text: string,
  links: { text: string; url: string }[] = [],
  usedLinks: Set<string>
) {
  let result: (string | React.ReactNode)[] = [text];

  links.forEach((link) => {
    result = result.flatMap((part) => {
      if (typeof part !== "string") return [part];

      if (usedLinks.has(link.text.toLowerCase())) return [part];

      const escapedText = link.text.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
      );

      const regex = new RegExp(`\\b(${escapedText})\\b`, "i");

      const split = part.split(regex);

      if (split.length === 1) return [part];

      usedLinks.add(link.text.toLowerCase()); // ✅ GLOBAL tracking

      return split.map((piece, i) => {
        if (piece.toLowerCase() === link.text.toLowerCase()) {
          return (
            <a
              key={`${link.text}-${i}`}
              href={link.url}
              className="text-teal-600 font-medium underline hover:text-teal-800"
            >
              {piece}
            </a>
          );
        }
        return piece;
      });
    });
  });

  return result;
}