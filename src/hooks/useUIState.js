import { useState, useRef, useEffect } from "react";
import getFromLoadedUrlState from "../utils/getFromLoadedUrlState";
import { window, location } from "../utils/globals";

function useUIState() {
  const [uiState, setUIState] = useState({
    description: getFromLoadedUrlState("description"),
    tabTrigger: getFromLoadedUrlState("tabTrigger"),
    snippet: getFromLoadedUrlState("snippet"),
    mode: getFromLoadedUrlState("mode", "vscode")
  });
  const textareaRef = useRef();

  const updateMode = mode => {
    if (mode === "vscode") {
      document.documentElement.style.setProperty("--color", "#3B393C");
    } else if (mode === "sublimetext") {
      document.documentElement.style.setProperty("--color", "#E58100");
    } else if (mode === "atom") {
      document.documentElement.style.setProperty("--color", "#40a977");
    }

    setUIState(
      {
        ...uiState,
        mode
      },
      generateURL
    );
  };

  const generateURL = () => {
    const shareUrl = new URL(location.href);
    Object.entries(uiState).forEach(([key, value]) =>
      shareUrl.searchParams.set(key, value)
    );

    window.history.pushState(
      uiState,
      document.title,
      `${location.pathname}?${shareUrl.searchParams}`
    );
  };

  const onInput = e => {
    const { name, value } = e.target;

    setUIState({
      ...uiState,
      [name]: value
    });
  };

  useEffect(generateURL, [uiState]);

  const skipTabAndAddTwoSpaces = e => {
    e.preventDefault();

    const initialSelectrionStart = textareaRef.current.selectionStart;
    const initialSelectrionEnd = textareaRef.current.selectionEnd;
    const stringBeforeCaret = textareaRef.current.value.substring(
      0,
      initialSelectrionStart
    );
    const stringAfterCaret = textareaRef.current.value.substring(
      initialSelectrionEnd,
      textareaRef.current.textLength
    );

    const newValue = `${stringBeforeCaret}  ${stringAfterCaret}`;

    textareaRef.current.value = newValue;
    textareaRef.current.selectionStart = initialSelectrionStart + 2;
    textareaRef.current.selectionEnd = initialSelectrionStart + 2;

    onInput(e);
  };

  const addPlaceHolder = e => {
    e.preventDefault();

    const initialSelectionStart = textareaRef.current.selectionStart;
    const initialSelectionEnd = textareaRef.current.selectionEnd;
    const stringBeforeCaret = textareaRef.current.value.substring(
      0,
      initialSelectionStart
    );
    const stringAfterCaret = textareaRef.current.value.substring(
      initialSelectionEnd,
      textareaRef.current.textLength
    );
    const stringBetweenCarets =
      textareaRef.current.value.substring(
        initialSelectionStart,
        initialSelectionEnd
      ) || "example";

    const newValue = `${stringBeforeCaret}\${1:${stringBetweenCarets}}${stringAfterCaret}`;

    textareaRef.current.value = newValue;
    const lengthOfPlaceHolderPrefix = 4; // '${1:'.length
    textareaRef.current.selectionEnd =
      initialSelectionStart +
      lengthOfPlaceHolderPrefix +
      stringBetweenCarets.length;
    textareaRef.current.selectionStart =
      initialSelectionStart + lengthOfPlaceHolderPrefix;

    onInput(e);
  };

  useEffect(() => {
    const keydownEventHandler = e => {
      // tab key (when snippet input is active)
      if (e.keyCode === 9 && document.activeElement === textareaRef.current) {
        skipTabAndAddTwoSpaces(e);
      }
      // Cmd + i (when snippet input is active)
      if (
        e.keyCode === 73 &&
        (e.ctrlKey || e.metaKey) &&
        document.activeElement === textareaRef.current
      ) {
        addPlaceHolder(e);
      }
    };
    window.addEventListener("keydown", keydownEventHandler);
    return () => {
      window.removeEventListener("keydown", keydownEventHandler);
    };
  }, [textareaRef.current, addPlaceHolder, skipTabAndAddTwoSpaces]);

  return {
    uiState,
    updateMode,
    textareaRef,
    onInput,
    generateURL
  };
}

export default useUIState;
