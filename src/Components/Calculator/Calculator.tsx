import React, { FC, useState } from "react";
import styles from "./Calculator.module.scss";
import InputWrapper from "../InputWrapper/InputWrapper";
import Summary from "../Summary/Summary";
import RadioAsButton from "../RadioAsButton/RadioAsButton";
import dollarIcon from "../../images/icon-dollar.svg";
import peopleIcon from "../../images/icon-person.svg";
import Label from "../Label/Label";

const Calculator: FC = () => {
  const [bill, setBill] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);

  const handleReset = () => {
    setBill(0);
    setNumberOfPeople(0);
    setTipPercentage(0);
  };

  const handleOnChangeTipPercentage = (event: any) => {
    if (event.target.name === 'tipPercentage') setTipPercentage(event.target.value);
  }

  return (
    <form onReset={handleReset} className={styles.calculator} onChange={handleOnChangeTipPercentage}>
      <div className={styles.inputsPart}>
        <InputWrapper
          labelText="Bill" type="text" name="bill"
          value={bill} setValue={setBill} icon={dollarIcon}
        />
        <div>
          <Label labelText="Select Tip %"/>
          <div className={styles.tipWrapper}>
            <RadioAsButton labelText="5%" name="tipPercentage" value="0.05"/>
            <RadioAsButton labelText="10%" name="tipPercentage" value="0.10"/>
            <RadioAsButton labelText="15%" name="tipPercentage" value="0.15"/>
            <RadioAsButton labelText="25%" name="tipPercentage" value="0.25"/>
            <RadioAsButton labelText="50%" name="tipPercentage" value="0.50"/>
          </div>
        </div>
        <InputWrapper
          labelText="Number of People" type="text" name="numberOfPeople"
          value={numberOfPeople} setValue={setNumberOfPeople} icon={peopleIcon}
        />
      </div>
      <Summary bill={bill} numberOfPeople={numberOfPeople}  tipPercentage={tipPercentage}/>
    </form>
  )
}

export default Calculator;