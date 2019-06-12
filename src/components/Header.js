import React from "react";

const Header = () => (
  <div className="app__header">
    <h1 className="app__title">snippet generator</h1>
    <p className="app__subtitle">
      Made by{" "}
      <a className="app__link" href="https://pawelgrzybek.com">
        Pawel Grzybek
      </a>{" "}
      | Source code on{" "}
      <a
        className="app__link"
        href="https://github.com/pawelgrzybek/snippet-generator"
      >
        GitHub
      </a>{" "}
      |{" "}
      <a
        className="app__link"
        href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fpawelgrzybek.com%2Fsnippet-generator%2F&text=Snippet%20generator%20for%20VS%20Code%2C%20Sublime%20Text%20and%20Atom&amp;via=pawelgrzybek"
      >
        Share on Twitter
      </a>{" "}
      |{" "}
      <a className="app__link" href="https://paypal.me/pools/c/8fz8qLn55j">
        Support
      </a>
    </p>
  </div>
);

export default Header;
