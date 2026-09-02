import { Context, Mode } from "./Context";
import { useContext, useEffect, useState } from "react";
import parseVSCode from "../parseVSCode";
import parseSublimeText from "../parseSublimeText";
import parsePulsar from "../parsePulsar";
import parseZed from "../parseZed";

const parseSnippet = (
  mode: Mode,
  description: string,
  tabTrigger: string,
  snippet: string,
): string => {
  if (mode === "vscode") {
    return parseVSCode(snippet, tabTrigger, description);
  }

  if (mode === "sublimetext") {
    return parseSublimeText(snippet, tabTrigger, description);
  }

  if (mode === "pulsar") {
    return parsePulsar(snippet, tabTrigger, description);
  }

  if (mode === "zed") {
    return parseZed(snippet, tabTrigger, description);
  }

  return "";
};

const Output = () => {
  const context = useContext(Context);
  const [savedToClipboard, setSavedToClipboard] = useState(false);

  useEffect(() => {
    setSavedToClipboard(false);
  }, [context]);

  const result = parseSnippet(
    context.mode,
    context.snippet,
    context.tabTrigger,
    context.description,
  );

  const writeToClipboard = async () => {
    const type = "text/plain";
    const blob = new Blob([result], { type });
    const data = [new ClipboardItem({ [type]: blob })];
    await navigator.clipboard.write(data);
    setSavedToClipboard(true);
  };

  return (
    <div className="app__half">
      <div className="app__halftop">
        <button
          className={
            context.mode === "vscode"
              ? "app__button app__button--vscode app__button--active"
              : "app__button app__button--vscode"
          }
          onClick={() => context.setMode("vscode")}
        >
          VSCode
        </button>
        <button
          className={
            context.mode === "zed"
              ? "app__button app__button--zed app__button--active"
              : "app__button app__button--zed"
          }
          onClick={() => context.setMode("zed")}
        >
          Zed
        </button>
        <button
          className={
            context.mode === "sublimetext"
              ? "app__button app__button--sublimetext app__button--active"
              : "app__button app__button--sublimetext"
          }
          onClick={() => context.setMode("sublimetext")}
        >
          Sublime Text
        </button>
        <button
          className={
            context.mode === "pulsar"
              ? "app__button app__button--pulsar app__button--active"
              : "app__button app__button--pulsar"
          }
          onClick={() => context.setMode("pulsar")}
        >
          Pulsar
        </button>
      </div>

      <div className="app__halfbottom">
        <pre className="app__pre">{result}</pre>

        <div className="app__buttons">
          <button className="app__btn app__btncopy" onClick={writeToClipboard}>
            {savedToClipboard ? "Copied" : "Copy snippet"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Output;
