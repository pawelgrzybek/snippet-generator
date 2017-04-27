import React, { Component } from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      snippet: '',
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    const value = e.target.value.split('\n');
    const valueLength = value.length;

    // add double quotes around each line apart from the last one
    const newSnippet = value.map((line, index) => {
      return index === valueLength - 1 ? `"${line}"` : `"${line}",`;
    });

    this.setState({
      snippet: newSnippet.join('\n')
    });
  }

  render() {
    return (
      <div className="app">
        <textarea className="app__textarea" rows="10" cols="50" onChange={this.changeHandler}></textarea>
        <pre className="app__pre">
          {this.state.snippet}
        </pre>
      </div>
    );
  }
};

export default App;
