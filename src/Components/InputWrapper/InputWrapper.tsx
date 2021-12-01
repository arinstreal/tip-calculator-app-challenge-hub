import styles from "./InputWrapper.module.scss";
import { ChangeEvent, FC, HTMLInputTypeAttribute, useState } from "react";
import Label from "../Label/Label";

interface IInputWrapper {
  labelText?: string;
  type: HTMLInputTypeAttribute;
  name: string;
  value?: any;
  setValue?: (item: any) => void;
  icon?: string;
  handleOnValid?: (item: any) => string | null;
  onKeyPress?: (item:any) => boolean;
  placeholder?: string;
  classNames?: string;
}

const InputWrapper: FC<IInputWrapper> = (
  {
    labelText,
    type = 'text',
    name,
    value,
    setValue,
    icon,
    handleOnValid = () => null,
    onKeyPress = () => true,
    placeholder = '',
    classNames = ''
  }: IInputWrapper) => {
  const [invalidMessage, setInvalidMessage] = useState<string | null>(null);
  const className = `${styles.inputWrapper} ${!!invalidMessage ? styles.invalid : ''}`;

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const valueTmp = event.target.value;
    if (setValue) {
      setInvalidMessage(handleOnValid(valueTmp));
      setValue(valueTmp);
    }
  }

  return (
    <div className={className}>
      {
        labelText && <Label labelText={labelText} name={name} additionalText={<span className={styles.invalidMessage}>{invalidMessage}</span>}/>
      }
      <div>
        {icon && <img src={icon} alt="input icon"/>}
        <input className={classNames} name={name} type={type} onKeyPress={onKeyPress} onChange={handleOnChange} value={value} placeholder={placeholder}/>
      </div>
    </div>
  )
}

export default InputWrapper;