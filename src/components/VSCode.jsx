import React, { Component } from 'react';
import { html } from 'common-tags';

class VSCode extends Component {
  constructor() {
    super();
    this.renderVSCodeVersion = this.renderVSCodeVersion.bind(this);
  }

  renderVSCodeVersion(snippet) {

    // escape " with \"
    // split lines by line-break
    const separatedSnippet = snippet.replace(/"/g, '\\"').split('\n');
    const separatedSnippetLength = separatedSnippet.length;

    // add double quotes around each line apart from the last one
    const newSnippet = separatedSnippet.map((line, index) => {
      return index === separatedSnippetLength - 1 ? `"${line}"` : `"${line}",`;
    });

    return html`
      "${this.props.description}": {
        "prefix": "${this.props.tabtrigger}",
        "body": [
          ${newSnippet.join('\n')}
        ],
        "description": "${this.props.description}"
      }
    `;
  }

  render() {
    return (
      <pre className="pre">
        {this.renderVSCodeVersion(this.props.snippet)}
      </pre>
    );
  }
}

export default VSCode;
