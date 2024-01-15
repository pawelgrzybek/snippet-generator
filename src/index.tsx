import { createRoot } from "react-dom/client";
import App from "./components/App";
import { Provider } from "./components/Context";

const root = createRoot(document.getElementById("app")!);
root.render(
  <Provider>
    <App />
  </Provider>,
);
