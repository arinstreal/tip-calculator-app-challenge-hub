import styles from "./RadioAsButton.module.scss";
import React, { FC } from "react";
import InputWrapper from "../InputWrapper/InputWrapper";

interface IRadioAsButton {
  labelText?: string;
  name: string;
  value?: string;
  withInput?: boolean;
}

const RadioAsButton: FC<IRadioAsButton> = ({labelText = '', name, value, withInput}: IRadioAsButton) => {
  return (
    <div className={styles.radioAsButton}>
      <input name={name} type="radio" value={value}/>
      {
        labelText && <label htmlFor={name}>
          {labelText}
        </label>
      }
      {
        withInput && <InputWrapper
          classNames={styles.other}
          type="text" name={`${name}Other`}
          placeholder="Custom"
        />
      }
    </div>
  )
}
export default RadioAsButton;