import { render } from "@testing-library/react";
import Input from "./Input";
import React from "react";
import { Provider } from "./Context";

jest.mock("../utils/globals", () => ({
  location: { href: "https://snippet-generator.app/" },
  window: {
    history: {
      pushState: jest.fn()
    },
    addEventListener: jest.fn(),
    removeEventListener: jest.fn()
  }
}));
describe("<Input /> component tests", () => {
  it("should render the component", () => {
    const { getAllByRole } = render(<Input />, {
      wrapper: Provider
    });
    expect(getAllByRole("textbox")).toHaveLength(3);
  });
});
