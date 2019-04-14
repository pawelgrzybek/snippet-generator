// npms & yarns
import React from "react";
import { render } from "react-dom";

// styles
import "./assets/css/style.css";

// my components
import App from "./components/App";
import { Provider } from "./components/Context";

// asstes
import "./assets/img/favicon.ico";
import "./assets/img/favicon-16x16.png";
import "./assets/img/favicon-32x32.png";
import "./assets/img/snippet-generator.jpg";

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("app")
);
