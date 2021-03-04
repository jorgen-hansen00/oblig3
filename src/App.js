import { useState } from "react";
import Alert from "./components/alert";
import Food from "./components/food";
import MyComponent from "./components/mycomponent";
import Title from "./components/title";
import Wrapper from "./components/wrapper";
import "./styles.scss";

const food = ["Pizza", "Hamburger", "Coke"];

export default function App() {
  const [inputChild, setInputChild] = useState("");
  const [btnClicked, setBtnClicked] = useState(false);
  return (
    <div className="App">
      <MyComponent Title="It works" />
      <Food food={food} />
      <Alert
        inputChild={inputChild}
        setInputChild={setInputChild}
        btnClicked={btnClicked}
        setBtnClicked={setBtnClicked}
      />
      {btnClicked && <p>{inputChild}</p>}
      <Wrapper>
        <Title title="Inside wrapper" />
        <p>Inside wrapper</p>
      </Wrapper>
    </div>
  );
}
