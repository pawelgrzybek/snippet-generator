import React, { Component } from 'react';
import { html } from 'common-tags';

class Atom extends Component {
  constructor() {
    super();
    this.renderSnippet = this.renderSnippet.bind(this);
  }

  renderSnippet(snippet) {
    return html`
      '${this.props.description}':
        'prefix': '${this.props.tabtrigger}'
        'body': """
          ${snippet}
        """
    `;
  }

  render() {
    return (
      <pre className="pre">
        {this.renderSnippet(this.props.snippet)}
      </pre>
    );
  }
}

export default Atom;
