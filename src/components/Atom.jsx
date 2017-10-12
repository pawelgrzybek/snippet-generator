import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { html } from 'common-tags';

class Atom extends Component {

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

Atom.propTypes = {
  description: PropTypes.string.isRequired,
  tabtrigger: PropTypes.string.isRequired,
  snippet: PropTypes.string.isRequired,
};

export default Atom;
