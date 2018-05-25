import PropTypes from 'prop-types';
import React, { Component, createContext } from 'react';

const context = createContext();
const { Provider: ContextProvider, Consumer } = context;

class Provider extends Component {
  // state
  state = {
    description: '',
    tabTrigger: '',
    snippet: '',
    mode: 'vscode',
  }

  // refs
  textareaRef = React.createRef();

  onInput = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    }, this.generateURL);
  }

  // my methods
  updateMode = mode => {
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
    }, this.generateURL);
  }

  generateURL = () => {
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

  skipTabAndAddTwoSpaces(e) {
    e.preventDefault();

    const initialSelectrionStart = this.textareaRef.current.selectionStart;
    const initialSelectrionEnd = this.textareaRef.current.selectionEnd;
    const stringBeforeCaret = this.textareaRef.current.value.substr(0, initialSelectrionStart);
    const stringAfterCaret = this.textareaRef.current.value.substr(initialSelectrionEnd, this.textareaRef.current.textLength);

    const newValue = `${stringBeforeCaret}  ${stringAfterCaret}`;

    this.textareaRef.current.value = newValue;
    this.textareaRef.current.selectionStart = initialSelectrionStart + 2;
    this.textareaRef.current.selectionEnd = initialSelectrionStart + 2;

    this.onInput(e);
  }

  addPlaceHolder(e) {
    e.preventDefault();

    const initialSelectrionStart = this.textareaRef.current.selectionStart;
    const initialSelectrionEnd = this.textareaRef.current.selectionEnd;
    const stringBeforeCaret = this.textareaRef.current.value.substr(0, initialSelectrionStart);
    const stringAfterCaret = this.textareaRef.current.value.substr(initialSelectrionEnd, this.textareaRef.current.textLength);

    const newValue = `${stringBeforeCaret}\${1:example}${stringAfterCaret}`;

    this.textareaRef.current.value = newValue;
    this.textareaRef.current.selectionStart = initialSelectrionStart + 4;
    this.textareaRef.current.selectionEnd = initialSelectrionStart + 11;

    this.onInput(e);
  }

  // react lifecycle methods
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

  componentDidMount() {
    window.addEventListener('keydown', e => {
      // tab key (when snippet input is active)
      if (e.keyCode === 9 && document.activeElement === this.textareaRef.current) {
        this.skipTabAndAddTwoSpaces(e);
      }
      // Cmd + i (when snippet input is active)
      if (e.keyCode === 73 && (e.ctrlKey || e.metaKey) && document.activeElement === this.textareaRef.current) {
        this.addPlaceHolder(e);
      }
    });
  }

  render() {
    return (
      <ContextProvider value={{
        state: this.state,
        textareaRef: this.textareaRef,
        onInput: this.onInput,
        updateMode: this.updateMode,
        generateURL: this.generateURL,
      }}
      >
        {this.props.children}
      </ContextProvider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Provider, Consumer };
