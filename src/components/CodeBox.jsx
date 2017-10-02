import React, { Component } from 'react';
import MonacoEditor from 'react-monaco-editor';

class CodeBox extends Component {
    constructor(props) {
    super(props);
    this.state = {
      code: '// type your code...',
    }
  }
  editorDidMount = (editor, monaco) => {
    console.log('editorDidMount', editor);
    editor.focus();
  }
  onChange = (newValue, e) => {
      this.props.onInput({
          target: {
              name: "snippet", 
              value: newValue
            }
        });
  }
  render() {
    const code = this.props.defaultValue;
    const options = {
      selectOnLineNumbers: true
    };
    return (
      <MonacoEditor
        width="100%"
        height="600"
        language={this.props.langtype}
        value={code}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
    );
  }
}

export default CodeBox;
