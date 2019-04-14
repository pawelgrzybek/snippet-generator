import React, { Component } from "react";
import VSCode from "./VSCode";
import SublimeText from "./SublimeText";
import Atom from "./Atom";
import Clipboard from "clipboard";
import { Consumer } from "./Context";

class Output extends Component {
  renderSnippet(mode) {
    if (mode === "vscode") {
      return <VSCode />;
    } else if (mode === "sublimetext") {
      return <SublimeText />;
    } else if (mode === "atom") {
      return <Atom />;
    }
    return null;
  }

  componentDidMount() {
    new Clipboard(".app__btncopy");
  }

  render() {
    return (
      <Consumer>
        {context => (
          <div className="app__half">
            <div className="app__halftop">
              <button
                className={
                  context.state.mode === "vscode"
                    ? "app__button app__button--vscode app__button--active"
                    : "app__button app__button--vscode"
                }
                onClick={() => context.updateMode("vscode")}
              >
                VSCode
              </button>
              <button
                className={
                  context.state.mode === "sublimetext"
                    ? "app__button app__button--sublimetext app__button--active"
                    : "app__button app__button--sublimetext"
                }
                onClick={() => context.updateMode("sublimetext")}
              >
                Sublime Text
              </button>
              <button
                className={
                  context.state.mode === "atom"
                    ? "app__button app__button--atom app__button--active"
                    : "app__button app__button--atom"
                }
                onClick={() => context.updateMode("atom")}
              >
                Atom
              </button>
            </div>

            <div className="app__halfbottom">
              {this.renderSnippet(context.state.mode)}

              <div className="app__buttons">
                <button
                  className="app__btn app__btncopy"
                  data-clipboard-target=".app__pre"
                >
                  Copy snippet
                </button>
              </div>
            </div>
          </div>
        )}
      </Consumer>
    );
  }
}

export default Output;
