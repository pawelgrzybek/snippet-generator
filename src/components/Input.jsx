import React, { Component } from 'react';

class Input extends Component {
  renderInfo() {

    const docs = {
      vscode: 'https://code.visualstudio.com/docs/editor/userdefinedsnippets',
      sublimetext: 'http://docs.sublimetext.info/en/latest/extensibility/snippets.html',
      atom: 'http://flight-manual.atom.io/using-atom/sections/snippets/',
    };

    return <p className="info">To declare a placeholder: <span className="info__select">{'${1:example}'}</span> | <a className="info__link" href={docs[this.props.mode]} target="_blank">More info</a></p>;
  }

  render() {
    return (
      <div className="app__half">

        <div className="app__top">
          <div className="app__topitem">
            <input type="text" className="input" name="description" placeholder="Description…" defaultValue={this.props.description} onInput={e => this.props.onInput(e)}/>
          </div>
          <div className="app__topitem">
            <input type="text" className="input" name="tabTrigger" placeholder="Tab trigger…" defaultValue={this.props.tabtrigger} onInput={e => this.props.onInput(e)}/>
          </div>
        </div>

        <div className="app__main">
          <textarea
            className="input"
            name="snippet"
            placeholder="Your snippet…"
            defaultValue={this.props.snippet}
            onInput={e => this.props.onInput(e)}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            wrap="off"
          >
          </textarea>

          {this.renderInfo()}

        </div>

      </div>
    );
  }
}

export default Input;
