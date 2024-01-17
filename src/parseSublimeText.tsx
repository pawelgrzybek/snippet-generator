import { html } from "common-tags";

const renderSublimeText = (
  description: string,
  tabtrigger: string,
  snippet: string,
) => {
  const regexpMagic = /(\$)([a-z(]+)([^$])/gi;
  const escapedSnippet = snippet.replace(regexpMagic, "\\$1$2$3");
  // prettier-ignore
  return html`
    <snippet>
      <content><![CDATA[
    ${escapedSnippet}
    ]]></content>
      <tabTrigger>${tabtrigger}</tabTrigger>
      <description>${description}</description>
      <!-- Optional: Set a scope to limit where the snippet will trigger -->
      <!-- <scope >source.python</scope > -->
    </snippet>
  `;
};

export default renderSublimeText;
