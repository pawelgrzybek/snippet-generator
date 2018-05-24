import React from 'react';
import { html } from 'common-tags';
import { Consumer } from './Context';

const renderSnippet = (snippet, tabtrigger, description) => {
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
          context.state.tabtrigger,
          context.state.description,
        )}
      </pre>
    )}
  </Consumer>
);

export default Atom;
