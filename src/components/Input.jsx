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
            <input type="text" className="input" placeholder="Description…" defaultValue={this.props.description} onChange={this.props.updatedescription}/>
          </div>
          <div className="app__topitem">
            <input type="text" className="input" placeholder="Tab trigger…" defaultValue={this.props.tabtrigger} onChange={this.props.updatetabtrigger}/>
          </div>
        </div>

        <div className="app__main">
          <textarea
            className="input"
            placeholder="Your snippet…"
            defaultValue={this.props.snippet}
            onChange={this.props.updatesnippet}
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
