import React from "react";
import { html } from "common-tags";
import { Consumer } from "./Context";

const renderSnippet = (snippet, tabtrigger, description) => {
  // escape " with \"
  // split lines by line-break
  const separatedSnippet = snippet
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .split("\n");
  tabtrigger = tabtrigger
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"');
  description = description
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"');
  const separatedSnippetLength = separatedSnippet.length;

  // add double quotes around each line apart from the last one
  const newSnippet = separatedSnippet.map((line, index) => {
    return index === separatedSnippetLength - 1 ? `"${line}"` : `"${line}",`;
  });
  // prettier-ignore
  return html`
    "${description}": {
      "prefix": "${tabtrigger}",
      "body": [
        ${newSnippet.join('\n')}
      ],
      "description": "${description}"
    }
  `;
};

const VSCode = () => (
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

export default VSCode;
