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