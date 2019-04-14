import React from "react";
import { html } from "common-tags";
import { Consumer } from "./Context";

const renderSnippet = (snippet, tabtrigger, description) => {
  const regexpMagic = /(\$)([a-z(]+)([^$])/gi;
  const escapedSnippet = snippet.replace(regexpMagic, "\\$1$2$3");
  // prettier-ignore
  return html`
    <snippet>
      <content><![CDATA[
    ${escapedSnippet}
    ]]></content >
      <description>${description}</description>
      <tabTrigger>${tabtrigger}</tabTrigger>
      <!-- Optional: Set a scope to limit where the snippet will trigger -->
      <!-- <scope >source.python</scope > -->
    </snippet >
  `;
};

const SublimeText = () => (
  <Consumer>
    {context => (
      <pre className="app__pre">
        {renderSnippet(
          context.state.snippet,
          context.state.tabTrigger,
          context.state.description
        )}
      </pre>
    )}
  </Consumer>
);

export default SublimeText;
