import React from "react";
import { html } from "common-tags";
import { Consumer } from "./Context";

const renderSnippet = (snippet, tabtrigger, description) => {
  // escape " and ' with \" and \'
  snippet = snippet
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
  tabtrigger = tabtrigger
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/'/g, "\\'")
  description = description
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .replace(/'/g, "\\'")

  // prettier-ignore
  return html`
    '${description}':
      'prefix': '${tabtrigger}'
      'body': """
        ${snippet}
      """
  `;
};

const Atom = () => (
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

export default Atom;
