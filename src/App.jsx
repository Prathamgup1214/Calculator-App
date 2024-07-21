import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  let [calVal, setVal] = useState("");
  const onClickButton = (buttonText) => {
    if (buttonText === "C") {
      setVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setVal(result);
    } else {
      const newDisplayVal = calVal + buttonText;
      setVal(newDisplayVal);
    }
  };
  return (
    <div className={styles.calculator}>
      <h1 className={styles.heading}>Calculator App</h1>
      <Display displayVal={calVal}></Display>
      <ButtonsContainer onClickButton={onClickButton}></ButtonsContainer>
    </div>
  );
}

export default App;
