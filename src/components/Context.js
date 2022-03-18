import PropTypes from "prop-types";
import React, { createContext } from "react";
import useUIState from "../hooks/useUIState";

// React team — thanks for Context API 👍
const context = createContext();
const { Provider: ContextProvider, Consumer } = context;

const Provider = ({ children }) => {
  const {
    uiState,
    textareaRef,
    onInput,
    generateURL,
    updateMode
  } = useUIState();
  return (
    <ContextProvider
      value={{
        state: uiState,
        textareaRef,
        onInput,
        updateMode,
        generateURL
      }}
    >
      {children}
    </ContextProvider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired
};

export { Provider, Consumer };
