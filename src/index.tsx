import { createRoot } from "react-dom/client";
import App from "./components/App";
import { ContextProvider } from "./components/Context";

const root = createRoot(document.getElementById("app") as HTMLElement);
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
);
