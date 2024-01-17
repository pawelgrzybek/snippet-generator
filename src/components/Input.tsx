import { useContext } from "react";
import { Context } from "./Context";
import Info from "./Info";

const Input = () => {
  const context = useContext(Context);

  return (
    <div className="app__half">
      <div className="app__halftop">
        <input
          type="text"
          className="app__input"
          name="description"
          placeholder="Description…"
          value={context.description}
          onChange={(e) => context.setDescription(e.target.value)}
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
          value={context.tabTrigger}
          onChange={(e) => context.setTabTrigger(e.target.value)}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
      </div>
      <div className="app__halfbottom">
        <textarea
          // ref={context?.textareaRef}
          className="app__textarea"
          name="snippet"
          placeholder="Your snippet…"
          value={context.snippet}
          onChange={(e) => context.setSnippet(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Tab") {
              e.preventDefault();

              const initialSelectrionStart = e.currentTarget.selectionStart;
              const initialSelectrionEnd = e.currentTarget.selectionEnd;
              const stringBeforeCaret = e.currentTarget.value.substring(
                0,
                initialSelectrionStart,
              );
              const stringAfterCaret = e.currentTarget.value.substring(
                initialSelectrionEnd,
                initialSelectrionEnd + e.currentTarget.textLength,
              );

              const newValue = `${stringBeforeCaret}  ${stringAfterCaret}`;

              e.currentTarget.value = newValue;
              e.currentTarget.selectionStart = initialSelectrionStart + 2;
              e.currentTarget.selectionEnd = initialSelectrionStart + 2;

              context.setSnippet(newValue);
            }

            if (
              e.key === "i" &&
              (e.ctrlKey || e.metaKey) &&
              document.activeElement === e.currentTarget
            ) {
              e.preventDefault();

              const initialSelectrionStart = e.currentTarget.selectionStart;
              const initialSelectrionEnd = e.currentTarget.selectionEnd;
              const stringBeforeCaret = e.currentTarget.value.substring(
                0,
                initialSelectrionStart,
              );
              const stringAfterCaret = e.currentTarget.value.substring(
                initialSelectrionEnd,
                initialSelectrionEnd + e.currentTarget.textLength,
              );

              const newValue = `${stringBeforeCaret}\${1:example}${stringAfterCaret}`;

              e.currentTarget.value = newValue;
              e.currentTarget.selectionStart = initialSelectrionStart + 4;
              e.currentTarget.selectionEnd = initialSelectrionStart + 11;

              context.setSnippet(newValue);
            }
          }}
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
};

export default Input;
