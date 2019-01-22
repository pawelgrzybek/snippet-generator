import React from 'react';
import { html } from 'common-tags';
import { Consumer } from './Context';

const formatSnippet = snippet => (
  snippet
    .replace(/\\/g, '\\\\\\\\') /* escape `\`: in JSON, `\\` or `\\\\` escape one `\` */
    .replace(/"/g, '\\"') /* escape quotes */
    .replace(/\$/g, '\\\\$') /* escape `$`: VSCode use `$` as placeholder*/
    .split('\n') /* split lines */
    .map(line => `"${line}"`) /* add quotes to lines */
    .join(',\n')
);

const renderSnippet = (snippet, tabtrigger, description) => {
  return html`
    "${description}": {
      "prefix": "${tabtrigger}",
      "body": [
        ${formatSnippet(snippet)}
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
          context.state.description,
        )}
      </pre>
    )}
  </Consumer>
);

export default VSCode;
