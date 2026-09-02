import { html } from "common-tags";

const parsePulsar = (
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

export default parsePulsar;
