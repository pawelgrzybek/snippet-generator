import React, { Component } from 'react';
import { html } from 'common-tags';

class SublimeText extends Component {

  renderSnippet(snippet) {
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
