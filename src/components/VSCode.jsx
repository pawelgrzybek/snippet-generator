import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { html } from 'common-tags';

class VSCode extends Component {

  constructor(props) {
    super(props);
    this.state = {
      description: props.description,
      tabtrigger: props.tabtrigger,
      snippet: props.snippet,
      mode: 'render',
      editValue: ''
    };
    this.changeHandler = this.changeHandler.bind(this);
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
      "${this.state.description}": {
        "prefix": "${this.state.tabtrigger}",
        "body": [
          ${newSnippet.join('\n')}
        ],
        "description": "${this.state.description}"
      }
    `;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      description: nextProps.description,
      tabtrigger: nextProps.tabtrigger,
      snippet: nextProps.snippet,
      mode: 'render'
    });
  }

  parseSnippet(str) {
    try {
      return JSON.parse(`{${str}}`);
    }
    catch (e) {
      return false;
    }
  }

  changeHandler(e) {
    const parsedSnippet = this.parseSnippet(e.target.value);
    this.setState({
      mode: 'edit',
      editValue: e.target.value
    });
    if (!parsedSnippet) {
      return;
    }
    const { prefix, body, description } = Object.values(parsedSnippet)[0];
    this.props.onOutput({
      description: description || '',
      tabTrigger: prefix || '',
      snippet: body.join('\n') || '',
      mode: 'vscode'
    });
  }

  render() {
    let renderValue = '';
    if (this.state.mode === 'edit') {
      renderValue = this.state.editValue;
    }
    else {
      renderValue = this.renderVSCodeVersion(this.state.snippet);
    }
    return (
      <textarea className="app__pre" onChange={this.changeHandler} value={renderValue} />
    );
  }
}

VSCode.propTypes = {
  description: PropTypes.string.isRequired,
  tabtrigger: PropTypes.string.isRequired,
  snippet: PropTypes.string.isRequired,
  onOutput: PropTypes.func.isRequired
};

export default VSCode;
