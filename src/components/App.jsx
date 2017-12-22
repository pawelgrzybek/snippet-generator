import React, { Component } from 'react';
import Header from './Header';
import Input from './Input';
import Output from './Output';

class App extends Component {
  constructor() {
    super();

    this.state = {
      description: '',
      tabTrigger: '',
      snippet: '',
      mode: 'vscode'
    };

    this.onInput = this.onInput.bind(this);
    this.updateMode = this.updateMode.bind(this);
    this.generateURL = this.generateURL.bind(this);
  }

  componentWillMount() {
    if ('URLSearchParams' in window === false) {
      return;
    }

    const loadedUrl = new URL(window.location.href);

    this.setState(() => {
      return {
        description: loadedUrl.searchParams.get('description') || '',
        tabTrigger: loadedUrl.searchParams.get('tabtrigger') || '',
        snippet: loadedUrl.searchParams.get('snippet') || '',
        mode: loadedUrl.searchParams.get('mode') || 'vscode',
      };
    });
  }

  onInput(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

  updateMode(mode) {
    if (mode === 'vscode') {
      document.documentElement.style.setProperty('--color', '#3B393C');
    }
    else if (mode === 'sublimetext') {
      document.documentElement.style.setProperty('--color', '#E58100');
    }
    else if (mode === 'atom') {
      document.documentElement.style.setProperty('--color', '#40a977');
    }

    this.setState({
      mode
    });
  }

  generateURL() {
    const shareUrl = new URL(window.location.href);
    shareUrl.searchParams.set('description', this.state.description);
    shareUrl.searchParams.set('tabtrigger', this.state.tabTrigger);
    shareUrl.searchParams.set('snippet', this.state.snippet);
    shareUrl.searchParams.set('mode', this.state.mode);

    history.pushState({
      description: this.state.description,
      tabTrigger: this.state.tabTrigger,
      snippet: this.state.snippet,
      mode: this.state.mode,
    }, document.title, `${location.pathname}?${shareUrl.searchParams}`);
  }

  render() {
    return (
      <div className={`app app--${this.state.mode}`} >

        <Header />

        <div className="app__main">
          <Input
            description={this.state.description}
            tabtrigger={this.state.tabTrigger}
            snippet={this.state.snippet}
            mode={this.state.mode}
            onInput={this.onInput}
          />
          <Output
            description={this.state.description}
            tabtrigger={this.state.tabTrigger}
            snippet={this.state.snippet}
            mode={this.state.mode}
            updatemode={this.updateMode}
            generateurl={this.generateURL}
          />
        </div>
      </div>
    );
  }
}

export default App;
