import React, { Component } from 'react';
import Header from './Header';
import Input from './Input';
import Output from './Output';
import ShareModel from './Models/ShareModel';

class App extends Component {
  constructor() {
    super();

    const loadedUrl = new URL(window.location.href);

    this.state = {
      description: loadedUrl.searchParams.get('desc') || '',
      tabTrigger: loadedUrl.searchParams.get('tt') || '',
      snippet: loadedUrl.searchParams.get('snippet') || '',
      mode: 'vscode',
      models: {
        shareModal: 'close'
      }
    };

    this.onInput = this.onInput.bind(this);
    this.updateMode = this.updateMode.bind(this);
    this.showModel = this.showModel.bind(this);
    this.handleModelClose = this.handleModelClose.bind(this);
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

  showModel(e) {
    const { id } = e.target;
    if (id === 'share') {
      this.setState({
        models: {
          shareModal: 'open'
        }
      });
      return;
    }

    throw `unable to handle ${id}`;
  }

  handleModelClose() {
    this.setState({
      models: {
        shareModal: 'close'
      }
    });
  }

  render() {
    return (
      <div className={`app app--${this.state.mode}`} >

        <Header />

        <div className="app__main">
          <div className="app__menu" onClick={this.showModel}>
            <ul>
              <li className="app__menu-item">
                <button onClick={this.showModel} id="share" className="app__button">Share</button>
              </li>
            </ul>
          </div>
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
          />
        </div>

        {/* modals */}
        <div className="app__models">
          <ShareModel
            show={this.state.models.shareModal}
            onClose={this.handleModelClose}
            description={this.state.description}
            tabtrigger={this.state.tabTrigger}
            snippet={this.state.snippet}
          />
        </div>
      </div>
    );
  }
}

export default App;
