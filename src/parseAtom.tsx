import { html } from "common-tags";

const parseAtom = (
  description: string,
  tabtrigger: string,
  snippet: string,
) => {
  // prettier-ignore
  return html`
    '${description}':
      'prefix': '${tabtrigger}'
      'body': """
        ${snippet}
      """
  `;
};

export default parseAtom;
