import React from "react";
import { Consumer } from "./Context";
import Info from "./Info";

const Input = () => (
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
              ref={context.textareaRef}
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
            <Info />
          </div>
        </div>
      );
    }}
  </Consumer>
);

export default Input;
