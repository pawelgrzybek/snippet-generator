import React, { Component } from 'react';
import { Consumer } from './Context';

class Input extends Component {
  textareaRef = React.createRef();

  componentDidMount() {
    window.addEventListener('keydown', e => {

      if (e.keyCode === 9) {
        this.skipTabAndAddTwoSpaces(e);
      }
      if (e.keyCode === 73 && (e.ctrlKey || e.metaKey)) {
        this.addPlaceHolder(e);
      }
    });
  }

  skipTabAndAddTwoSpaces(e) {
    if (document.activeElement === this.textareaRef.current) {
      e.preventDefault();

      const initialSelectrionStart = this.textareaRef.current.selectionStart;
      const initialSelectrionEnd = this.textareaRef.current.selectionEnd;
      const stringBeforeCaret = this.textareaRef.current.value.substr(0, initialSelectrionStart);
      const stringAfterCaret = this.textareaRef.current.value.substr(initialSelectrionEnd, this.textareaRef.current.textLength);

      const newValue = `${stringBeforeCaret}  ${stringAfterCaret}`;

      this.textareaRef.current.value = newValue;
      this.textareaRef.current.selectionStart = initialSelectrionStart + 2;
      this.textareaRef.current.selectionEnd = initialSelectrionStart + 2;

      // this.props.onInput(e);
    }
  }

  addPlaceHolder(e) {
    if (document.activeElement === this.textareaRef.current) {
      e.preventDefault();

      const initialSelectrionStart = this.textareaRef.current.selectionStart;
      const initialSelectrionEnd = this.textareaRef.current.selectionEnd;
      const stringBeforeCaret = this.textareaRef.current.value.substr(0, initialSelectrionStart);
      const stringAfterCaret = this.textareaRef.current.value.substr(initialSelectrionEnd, this.textareaRef.current.textLength);

      const newValue = `${stringBeforeCaret}\${1:example}${stringAfterCaret}`;

      this.textareaRef.current.value = newValue;
      this.textareaRef.current.selectionStart = initialSelectrionStart + 4;
      this.textareaRef.current.selectionEnd = initialSelectrionStart + 11;

      // this.props.onInput(e);
    }
  }

  renderInfo(mode) {

    const docs = {
      vscode: 'https://code.visualstudio.com/docs/editor/userdefinedsnippets',
      sublimetext: 'http://docs.sublimetext.info/en/latest/extensibility/snippets.html',
      atom: 'http://flight-manual.atom.io/using-atom/sections/snippets/',
    };

    const platformKey = navigator.platform === 'MacIntel' ? '⌘' : 'ctrl';

    // it doesnt like ${1:example} so…
    // eslint-disable-next-line no-template-curly-in-string
    return <p className="app__info">To declare a placeholder ({ platformKey } + i): <span className="app__infoselect">{'${1:example}'}</span> | <a className="app__infolink" href={docs[mode]} target="_blank">More info</a></p>;
  }

  render() {

    return (
      <Consumer>
        {context => {
          return (
            <div className="app__half">
              <div className="app__halftop">
                <input
                  type="text"
                  className="app__input"
                  name="description"
                  placeholder="Description…"
                  defaultValue={context.state.description}
                  onInput={context.onInput}
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
                  defaultValue={context.state.tabTrigger}
                  onInput={context.onInput}
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                />
              </div>
              <div className="app__halfbottom">
                <textarea
                  ref={this.textareaRef}
                  className="app__textarea"
                  name="snippet"
                  placeholder="Your snippet…"
                  defaultValue={context.state.snippet}
                  onChange={context.onInput}
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  wrap="off"
                />
                {this.renderInfo(context.state.mode)}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Input;
