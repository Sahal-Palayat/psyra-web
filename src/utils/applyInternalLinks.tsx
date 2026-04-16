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
  links: { text: string; url: string }[] = [] 
) {
  let result: (string | React.ReactNode)[] = [text];

  links.forEach((link) => {
    let linked = false;

    result = result.flatMap((part) => {
      if (typeof part !== "string" || linked) return [part];

      const escapedText = link.text.replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&"
      );

      const regex = new RegExp(`(${escapedText})`, "i");

      const split = part.split(regex);

      if (split.length === 1) return [part];

      linked = true;

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