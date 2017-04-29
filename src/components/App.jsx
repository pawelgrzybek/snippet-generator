import React, { Component } from 'react';
import Input from './Input';
import Output from './Output';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      description: '',
      tabTrigger: '',
      snippet: '',
      mode: 'vscode'
    };

    this.updateDescription = this.updateDescription.bind(this);
    this.updateTabTrigger = this.updateTabTrigger.bind(this);
    this.updateSnippet = this.updateSnippet.bind(this);
    this.updateMode = this.updateMode.bind(this);
  }

  updateDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  updateTabTrigger(e) {
    this.setState({
      tabTrigger: e.target.value
    });
  }

  updateSnippet(e) {
    this.setState({
      snippet: e.target.value
    });
  }

  updateMode(mode) {
    if (mode === 'vscode') {
      document.documentElement.style.setProperty('--color', '#1278BD');
    }
    else if (mode === 'sublimetext') {
      document.documentElement.style.setProperty('--color', '#FF9800');
    }
    else if (mode === 'atom') {
      document.documentElement.style.setProperty('--color', '#40a977');
    }

    this.setState({
      mode
    });
  }

  render() {
    return (
      <div className="app">
        <Input
          description={this.state.description}
          tabtrigger={this.state.tabTrigger}
          snippet={this.state.snippet}
          updatedescription={this.updateDescription}
          updatetabtrigger={this.updateTabTrigger}
          updatesnippet={this.updateSnippet}
        />
        <Output
          description={this.state.description}
          tabtrigger={this.state.tabTrigger}
          snippet={this.state.snippet}
          mode={this.state.mode}
          updatemode={this.updateMode}
        />
      </div>
      /*<textarea className="app__textarea" rows="10" cols="50" onChange={this.changeHandler}></textarea>
      <pre className="app__pre">
        {this.state.snippet}
      </pre>*/
    );
  }
};

export default App;
