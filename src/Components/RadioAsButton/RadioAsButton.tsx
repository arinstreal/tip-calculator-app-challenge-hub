import styles from "./RadioAsButton.module.scss";
import { FC } from "react";

interface IRadioAsButton {
  labelText: string;
  name: string;
  value: string;
}

const RadioAsButton: FC<IRadioAsButton> = ({labelText, name, value}: IRadioAsButton) => {
  return (
    <div className={styles.radioAsButton}>
      <input name={name} type="radio" value={value}/>
      <label htmlFor={name}>{labelText}</label>
    </div>
  )
}
export default RadioAsButton;