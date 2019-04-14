import React from "react";
import Header from "./Header";
import Input from "./Input";
import Output from "./Output";
import { Consumer } from "./Context";

const App = () => (
  <Consumer>
    {context => (
      <div className={`app app--${context.state.mode}`}>
        <Header />
        <div className="app__main">
          <Input />
          <Output />
        </div>
      </div>
    )}
  </Consumer>
);

export default App;
