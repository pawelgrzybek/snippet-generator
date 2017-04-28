import React, { Component } from 'react';

class VSCode extends Component {
  constructor() {
    super();
    this.renderVSCodeVersion = this.renderVSCodeVersion.bind(this);
  }

  renderVSCodeVersion(snippet) {
    if (!snippet) {
      return;
    }
    const separatedSnippet = snippet.split('\n');
    const separatedSnippetLength = separatedSnippet.length;


    // add double quotes around each line apart from the last one
    const newSnippet = separatedSnippet.map((line, index) => {
      return index === separatedSnippetLength - 1 ? `"${line}"` : `"${line}",`;
    });

    return newSnippet.join('\n');
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
