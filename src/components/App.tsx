import Header from "./Header";
import Input from "./Input";
import Output from "./Output";
import { Context } from "./Context";
import { useContext } from "react";

const App = () => {
  const context = useContext(Context);

  return (
    <div className={`app app--${context.mode}`}>
      <Header />
      <div className="app__main">
        <Input />
        <Output />
      </div>
    </div>
  );
};

export default App;
