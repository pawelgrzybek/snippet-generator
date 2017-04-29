import React, { Component } from 'react';
import VSCode from './VSCode';
import SublimeText from './SublimeText';
import Atom from './Atom';

class Output extends Component {
  constructor() {
    super();
    this.renderSnippet = this.renderSnippet.bind(this);
  }

  renderSnippet() {
    if (this.props.mode === 'vscode') {
      return <VSCode snippet={this.props.snippet} description={this.props.description} tabtrigger={this.props.tabtrigger} />
    }
    else if (this.props.mode === 'sublimetext') {
      return <SublimeText snippet={this.props.snippet} description={this.props.description} tabtrigger={this.props.tabtrigger} />
    }
    else if (this.props.mode === 'atom') {
      return <Atom snippet={this.props.snippet} description={this.props.description} tabtrigger={this.props.tabtrigger} />
    }
  }

  render() {
    return (
      <div className="app__half">

        <div className="app__top">
          <div className="app__topitem">
            <button className={this.props.mode === 'vscode' ? 'btn btn--vscode btn--active' : 'btn btn--vscode'} onClick={() => this.props.updatemode('vscode')}>VSCode</button>
          </div>
          <div className="app__topitem">
            <button className={this.props.mode === 'sublimetext' ? 'btn btn--sublimetext btn--active' : 'btn btn--sublimetext'} onClick={() => this.props.updatemode('sublimetext')}>Sublime Text</button>
          </div>
          <div className="app__topitem">
            <button className={this.props.mode === 'atom' ? 'btn btn--atom btn--active' : 'btn btn--atom'} onClick={() => this.props.updatemode('atom')}>Atom</button>
          </div>
        </div>

        <div className="app__main">
          {this.renderSnippet()}
        </div>
      </div>
    );
  }
}

export default Output;
