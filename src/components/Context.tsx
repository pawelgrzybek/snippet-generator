import React, { ChangeEvent, Component, RefObject, createContext } from "react";

export type Mode = "vscode" | "sublimetext" | "atom";

interface MyContext {
  state: {
    description: string;
    tabTrigger: string;
    snippet: string;
    mode: Mode;
  };
  textareaRef: RefObject<HTMLTextAreaElement>;
  onChangeHandler: <T extends HTMLInputElement | HTMLTextAreaElement>(
    e: ChangeEvent<T>,
  ) => void;
  updateMode: (mode: Mode) => void;
  generateURL: () => void;
}

// React team — thanks for Context API 👍
const context = createContext<MyContext | null>(null);
const { Provider: ContextProvider, Consumer } = context;

// extract bits from URL to initialize state
const loadedUrl = new URL(window.location.href);
const loadedUrlDescription = loadedUrl.searchParams.get("description") || "";
const loadedUrlTabtrigger = loadedUrl.searchParams.get("tabtrigger") || "";
const loadedUrlSnippet = loadedUrl.searchParams.get("snippet") || "";
const loadedUrlMode = loadedUrl.searchParams.get("mode") || "vscode";

interface ProviderProps {
  children: React.ReactNode;
}

class Provider extends Component<ProviderProps> {
  // state
  state = {
    description: "URLSearchParams" in window ? loadedUrlDescription : "",
    tabTrigger: "URLSearchParams" in window ? loadedUrlTabtrigger : "",
    snippet: "URLSearchParams" in window ? loadedUrlSnippet : "",
    mode: "URLSearchParams" in window ? loadedUrlMode : "vscode",
  } as {
    description: string;
    tabTrigger: string;
    snippet: string;
    mode: Mode;
  };

  // refs
  textareaRef: RefObject<HTMLTextAreaElement> = React.createRef();

  // my methods
  onChangeHandler = <T extends HTMLInputElement | HTMLTextAreaElement>(
    e: ChangeEvent<T>,
  ) => {
    const { name, value } = e.target;

    this.setState(
      {
        [name]: value,
      },
      this.generateURL,
    );
  };

  updateMode = (mode: Mode) => {
    if (mode === "vscode") {
      document.documentElement.style.setProperty("--color", "#3B393C");
    } else if (mode === "sublimetext") {
      document.documentElement.style.setProperty("--color", "#E58100");
    } else if (mode === "atom") {
      document.documentElement.style.setProperty("--color", "#40a977");
    }

    this.setState(
      {
        mode,
      },
      this.generateURL,
    );
  };

  generateURL = () => {
    const shareUrl = new URL(window.location.href);
    shareUrl.searchParams.set("description", this.state.description);
    shareUrl.searchParams.set("tabtrigger", this.state.tabTrigger);
    shareUrl.searchParams.set("snippet", this.state.snippet);
    shareUrl.searchParams.set("mode", this.state.mode);

    history.pushState(
      {
        description: this.state.description,
        tabTrigger: this.state.tabTrigger,
        snippet: this.state.snippet,
        mode: this.state.mode,
      },
      document.title,
      `${location.pathname}?${shareUrl.searchParams}`,
    );
  };

  skipTabAndAddTwoSpaces(e: KeyboardEvent) {
    e.preventDefault();

    const initialSelectrionStart = this.textareaRef.current!.selectionStart;
    const initialSelectrionEnd = this.textareaRef.current!.selectionEnd;
    const stringBeforeCaret = this.textareaRef.current!.value.substring(
      0,
      initialSelectrionStart,
    );
    const stringAfterCaret = this.textareaRef.current!.value.substring(
      initialSelectrionEnd,
      initialSelectrionEnd + this.textareaRef.current!.textLength,
    );

    const newValue = `${stringBeforeCaret}  ${stringAfterCaret}`;

    this.textareaRef.current!.value = newValue;
    this.textareaRef.current!.selectionStart = initialSelectrionStart + 2;
    this.textareaRef.current!.selectionEnd = initialSelectrionStart + 2;

    this.onChangeHandler(e as unknown as ChangeEvent<HTMLInputElement>);
  }

  addPlaceHolder(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    const initialSelectrionStart = this.textareaRef.current!.selectionStart;
    const initialSelectrionEnd = this.textareaRef.current!.selectionEnd;
    const stringBeforeCaret = this.textareaRef.current!.value.substring(
      0,
      initialSelectrionStart,
    );
    const stringAfterCaret = this.textareaRef.current!.value.substring(
      initialSelectrionEnd,
      initialSelectrionEnd + this.textareaRef.current!.textLength,
    );

    const newValue = `${stringBeforeCaret}\${1:example}${stringAfterCaret}`;

    this.textareaRef.current!.value = newValue;
    this.textareaRef.current!.selectionStart = initialSelectrionStart + 4;
    this.textareaRef.current!.selectionEnd = initialSelectrionStart + 11;

    this.onChangeHandler(e);
  }

  // react lifecycle methods
  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      console.log({ e });
      // tab key (when snippet input is active)
      if (
        e.key === "Tab" &&
        document.activeElement === this.textareaRef.current
      ) {
        this.skipTabAndAddTwoSpaces(e);
      }
      // Cmd + i (when snippet input is active)
      if (
        e.key === "i" &&
        (e.ctrlKey || e.metaKey) &&
        document.activeElement === this.textareaRef.current
      ) {
        this.addPlaceHolder(e as unknown as ChangeEvent<HTMLInputElement>);
      }
    });
  }

  render() {
    return (
      <ContextProvider
        value={{
          state: this.state,
          textareaRef: this.textareaRef,
          onChangeHandler: this.onChangeHandler,
          updateMode: this.updateMode,
          generateURL: this.generateURL,
        }}
      >
        {this.props.children}
      </ContextProvider>
    );
  }
}

export { Provider, Consumer };
