import PropTypes from 'prop-types';
import React, { Component, createContext } from 'react';

const context = createContext();
const { Provider: ContextProvider, Consumer } = context;

class Provider extends Component {
  state = {
    description: '',
    tabTrigger: '',
    snippet: '',
    mode: 'vscode',
  }

  onInput = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

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
    });
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

  render() {
    return (
      <ContextProvider value={{
        state: this.state,
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
