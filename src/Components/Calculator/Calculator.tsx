import { FC, useMemo, useRef, useState } from "react";
import styles from "./Calculator.module.scss";
import InputWrapper from "../InputWrapper/InputWrapper";
import Summary from "../Summary/Summary";

const Calculator: FC = () => {
  const [bill, setBill] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);

  const handleReset = () => {
    setBill(0);
    setNumberOfPeople(0)
  };

  return (
    <div className={styles.calculator}>
      <form onReset={handleReset}>
        <InputWrapper
          labelText="Bill" type="text" name="bill"
          value={bill} setValue={setBill}
        />
        Select Tip
        <InputWrapper
          labelText="Number of People" type="text" name="numberOfPeople"
          value={numberOfPeople} setValue={setNumberOfPeople}
        />
        <Summary bill={bill} numberOfPeople={numberOfPeople}/>

      </form>

    </div>

  )
}

export default Calculator;