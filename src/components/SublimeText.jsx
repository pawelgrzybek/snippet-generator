import React, { Component } from 'react';
import { html } from 'common-tags';

class SublimeText extends Component {
  constructor() {
    super();
    this.renderSnippet = this.renderSnippet.bind(this);
  }

  renderSnippet(snippet) {
    // escape " with \"
    // split lines by line-break
    // const separatedSnippet = snippet.replace(/"/g, '\\"').split('\n');
    // const separatedSnippetLength = separatedSnippet.length;

    // add double quotes around each line apart from the last one
    // const newSnippet = separatedSnippet.map((line, index) => {
    //   return index === separatedSnippetLength - 1 ? `"${line}"` : `"${line}",`;
    // });

    // return html`
    //   "${this.props.description}": {
    //     "prefix": "${this.props.tabtrigger}",
    //     "body": [
    //       ${newSnippet.join('\n')}
    //     ],
    //     "description": "${this.props.description}"
    //   }
    // `;

    return html`
      <snippet>
        <content><![CDATA[
      ${snippet}
      ]]></content >
        <description>${this.props.description}</description>
        <tabTrigger>${this.props.tabtrigger}</tabTrigger>
        <!-- Optional: Set a scope to limit where the snippet will trigger -->
        <!-- <scope >source.python</scope > -->
      </snippet >
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

export default SublimeText;
