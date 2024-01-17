const Header = () => (
  <div className="app__header">
    <h1 className="app__title">snippet generator</h1>
    <p className="app__subtitle">
      Made by{" "}
      <a className="app__link" href="https://pawelgrzybek.com">
        Pawel Grzybek
      </a>{" "}
      |{" "}
      <a className="app__link" href="https://www.buymeacoffee.com/pawelgrzybek">
        Buy me a coffee
      </a>{" "}
      | Source code on{" "}
      <a
        className="app__link"
        href="https://github.com/pawelgrzybek/snippet-generator"
      >
        GitHub
      </a>
    </p>
  </div>
);

export default Header;
