import styles from "./InputWrapper.module.scss";
import { ChangeEvent, ChangeEventHandler, FC, FormEvent, HTMLInputTypeAttribute, useState } from "react";

interface IInputWrapper {
  labelText: string;
  type: HTMLInputTypeAttribute;
  name: string;
  value?: any;
  setValue?: (item: any)=> void;
}

const InputWrapper: FC<IInputWrapper> = ({labelText, type = 'text', name, value, setValue}: IInputWrapper) => {

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (setValue) setValue(event.target.value);
  }
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={name}>{labelText}</label>
      <input name={name} type={type} onChange={handleOnChange} value={value}/>
    </div>
  )
}

export default InputWrapper;