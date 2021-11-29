import styles from "./InputWrapper.module.scss";
import { ChangeEvent, FC, HTMLInputTypeAttribute } from "react";
import Label from "../Label/Label";

interface IInputWrapper {
  labelText: string;
  type: HTMLInputTypeAttribute;
  name: string;
  value?: any;
  setValue?: (item: any) => void;
  icon?: string;
}

const InputWrapper: FC<IInputWrapper> = ({labelText, type = 'text', name, value, setValue, icon}: IInputWrapper) => {

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (setValue) setValue(event.target.value);
  }

  return (
    <div className={styles.inputWrapper}>
      <Label labelText={labelText} name={name}/>
      <div>
        {icon && <img src={icon} alt="input icon" />}
        <input name={name} type={type} onChange={handleOnChange} value={value} defaultValue={0}/>
      </div>
    </div>
  )
}

export default InputWrapper;