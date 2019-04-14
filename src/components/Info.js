import React from "react";
import { Consumer } from "./Context";

const Info = () => (
  <Consumer>
    {context => {
      const docs = {
        vscode: "https://code.visualstudio.com/docs/editor/userdefinedsnippets",
        sublimetext:
          "http://docs.sublimetext.info/en/latest/extensibility/snippets.html",
        atom: "http://flight-manual.atom.io/using-atom/sections/snippets/"
      };

      const platformKey = navigator.platform === "MacIntel" ? "⌘" : "ctrl";

      // eslint-disable-next-line no-template-curly-in-string
      return (
        <p className="app__info">
          To declare a placeholder ({platformKey} + i):{" "}
          <span className="app__infoselect">{"${1:example}"}</span> |{" "}
          <a
            className="app__infolink"
            href={docs[context.state.mode]}
            target="_blank"
            rel="noopener noreferrer"
          >
            More info
          </a>
        </p>
      );
    }}
  </Consumer>
);

export default Info;
