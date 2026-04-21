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
): React.ReactNode[] {
  let result: React.ReactNode[] = [text];

  links.forEach((link) => {
    const newResult: React.ReactNode[] = [];

    result.forEach((part) => {
      // only process strings
      if (typeof part !== "string") {
        newResult.push(part);
        return;
      }

      if (usedLinks.has(link.text.toLowerCase())) {
        newResult.push(part);
        return;
      }

      const escapedText = link.text.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
      );

      const regex = new RegExp(`\\b(${escapedText})\\b`, "i");
      const split = part.split(regex);

      if (split.length === 1) {
        newResult.push(part);
        return;
      }

      usedLinks.add(link.text.toLowerCase());

      split.forEach((piece, i) => {
        if (
          typeof piece === "string" &&
          piece.toLowerCase() === link.text.toLowerCase()
        ) {
          newResult.push(
            <a
              key={`${link.text}-${i}`}
              href={link.url}
              className="text-teal-600 font-medium underline hover:text-teal-800"
            >
              {piece}
            </a>
          );
        } else {
          newResult.push(piece);
        }
      });
    });

    result = newResult;
  });

  return result;
}