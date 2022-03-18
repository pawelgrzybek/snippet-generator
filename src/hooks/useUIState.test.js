import { act, renderHook } from "@testing-library/react-hooks";

const renderTextAreaWithRef = ref => {
  const textareaEl = document.createElement("textarea");
  textareaEl.setAttribute("tabindex", "200");
  textareaEl.name = "snippet";
  document.body.appendChild(textareaEl);
  ref.current = textareaEl;
};
const mockHistory = {
  pushState: jest.fn()
};
let mockRegisteredEventHandler = null;
jest.mock("../utils/globals", () => ({
  location: { href: "https://snippet-generator.app/" },
  window: {
    history: mockHistory,
    addEventListener: (eventName, handler) => {
      if (eventName !== "keydown") {
        return;
      }
      mockRegisteredEventHandler = handler;
    },
    removeEventListener: (eventName, handler) => {
      if (eventName !== "keydown" || mockRegisteredEventHandler !== handler) {
        return;
      }
      mockRegisteredEventHandler = null;
    }
  }
}));
describe("useUIState hook tests", () => {
  it("should initialise the hook", async () => {
    const { default: useUIState } = await import("./useUIState");
    const { result } = renderHook(() => useUIState());
    expect(result.current.uiState).toStrictEqual({
      description: "",
      mode: "vscode",
      snippet: "",
      tabTrigger: ""
    });
  });

  it("should insert placeholder on (ctrl/cmd + i) keyboard action", async () => {
    const { default: useUIState } = await import("./useUIState");
    const { result } = renderHook(() => useUIState());

    act(() => {
      renderTextAreaWithRef(result.current.textareaRef);
      result.current.onInput({
        target: {
          name: "snippet",
          value: "this is a mock textarea value"
        }
      });
      result.current.textareaRef.current.value =
        "this is a mock textarea value";
      result.current.textareaRef.current.selectionStart = 10;
      result.current.textareaRef.current.selectionEnd = 10 + 4;
      result.current.textareaRef.current.focus();
      mockRegisteredEventHandler({
        keyCode: 73,
        metaKey: true,
        target: result.current.textareaRef.current,
        preventDefault: jest.fn()
      });
    });
    expect(result.current.uiState.snippet).toBe(
      "this is a ${1:mock} textarea value"
    );
  });
});
