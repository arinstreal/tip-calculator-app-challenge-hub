import React, { FC, useState, KeyboardEvent } from "react";
import styles from "./Calculator.module.scss";
import InputWrapper from "../InputWrapper/InputWrapper";
import Summary from "../Summary/Summary";
import RadioAsButton from "../RadioAsButton/RadioAsButton";
import dollarIcon from "../../images/icon-dollar.svg";
import peopleIcon from "../../images/icon-person.svg";
import Label from "../Label/Label";

const Calculator: FC = () => {
  const [bill, setBill] = useState<number | undefined>(undefined);
  const [numberOfPeople, setNumberOfPeople] = useState<number | undefined>(undefined);
  const [tipPercentage, setTipPercentage] = useState<number>(0);

  const handleReset = () => {
    setBill(undefined);
    setNumberOfPeople(undefined);
    setTipPercentage(0);
  };

  const handleOnChangeTipPercentage = (event: any) => {
    if (event.target.name === 'tipPercentage' || event.target.name === 'tipPercentageOther') setTipPercentage(event.target.value / 100);
  }

  const handleValidationNumber = (value: number | string) => Number(value) === 0 ? `Can't be zero` : null;
  const handleOnKeyPressNumber = (event: KeyboardEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    const text = `${value}${event.key}`;
    const isNumber = /^\d+(\.\d{1,2})?$/.test(text);
    if (isNumber) return true;
    else {
      event.preventDefault();
      return false;
    }
  }

  return (
    <form onReset={handleReset} className={styles.calculator} onChange={handleOnChangeTipPercentage}>
      <div className={styles.inputsPart}>
        <InputWrapper
          labelText="Bill" type="text" name="bill"
          value={bill} setValue={setBill} icon={dollarIcon}
          handleOnValid={handleValidationNumber}
          onKeyPress={handleOnKeyPressNumber}
          placeholder="0"
        />
        <div>
          <Label labelText="Select Tip %"/>
          <div className={styles.tipWrapper}>
            <RadioAsButton labelText="5%" name="tipPercentage" value="5"/>
            <RadioAsButton labelText="10%" name="tipPercentage" value="10"/>
            <RadioAsButton labelText="15%" name="tipPercentage" value="15"/>
            <RadioAsButton labelText="25%" name="tipPercentage" value="25"/>
            <RadioAsButton labelText="50%" name="tipPercentage" value="50"/>
            <RadioAsButton name="tipPercentage" withInput/>
          </div>
        </div>
        <InputWrapper
          labelText="Number of People" type="text" name="numberOfPeople"
          value={numberOfPeople} setValue={setNumberOfPeople} icon={peopleIcon}
          handleOnValid={handleValidationNumber} placeholder="0"
        />
      </div>
      <Summary bill={bill} numberOfPeople={numberOfPeople} tipPercentage={tipPercentage}/>
    </form>
  )
}

export default Calculator;