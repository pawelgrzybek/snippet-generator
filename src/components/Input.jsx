import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.keyCode === 9) {
        this.skipTabAndAddTwoSpaces(e);
      }
    });
  }

  skipTabAndAddTwoSpaces(e) {
    if (document.activeElement === this.textareaRef) {
      e.preventDefault();

      const initialSelectrionStart = this.textareaRef.selectionStart;
      const initialSelectrionEnd = this.textareaRef.selectionEnd;
      const stringBeforeCaret = this.textareaRef.value.substr(0, initialSelectrionStart);
      const stringAfterCaret = this.textareaRef.value.substr(initialSelectrionEnd, this.textareaRef.textLength);

      const newValue = `${stringBeforeCaret}  ${stringAfterCaret}`;

      this.textareaRef.value = newValue;
      this.textareaRef.selectionStart = initialSelectrionStart + 2;
      this.textareaRef.selectionEnd = initialSelectrionStart + 2;

      this.props.onInput(e);
    }
  }

  renderInfo() {

    const docs = {
      vscode: 'https://code.visualstudio.com/docs/editor/userdefinedsnippets',
      sublimetext: 'http://docs.sublimetext.info/en/latest/extensibility/snippets.html',
      atom: 'http://flight-manual.atom.io/using-atom/sections/snippets/',
    };

    // eslint-disable-next-line no-template-curly-in-string
    return <p className="app__info">To declare a placeholder: <span className="app__infoselect">{'${1:example}'}</span> | <a className="app__infolink" href={docs[this.props.mode]} target="_blank">More info</a></p>;
  }

  render() {
    return (
      <div className="app__half">

        <div className="app__halftop">
          <input
            type="text"
            className="app__input"
            name="description"
            placeholder="Description…"
            defaultValue={this.props.description}
            onInput={e => this.props.onInput(e)}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />

          <input
            type="text"
            className="app__input"
            name="tabTrigger"
            placeholder="Tab trigger…"
            defaultValue={this.props.tabtrigger}
            onInput={e => this.props.onInput(e)}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />
        </div>

        <div className="app__halfbottom">
          <textarea
            ref={input => this.textareaRef = input}
            className="app__textarea"
            name="snippet"
            placeholder="Your snippet…"
            defaultValue={this.props.snippet}
            onChange={e => this.props.onInput(e)}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            wrap="off"
          />

          {this.renderInfo()}

        </div>

      </div>
    );
  }
}

Input.propTypes = {
  onInput: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tabtrigger: PropTypes.string.isRequired,
  snippet: PropTypes.string.isRequired,
};

export default Input;
