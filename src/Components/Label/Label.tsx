import { FC } from "react";
import styles from "./Label.module.scss";

interface ILabel {
  labelText: string;
  name?: string;
  additionalText?: any;
}

const Label: FC<ILabel> = ({labelText, name = '', additionalText}: ILabel) => (
  <label className={styles.label} htmlFor={name}>{labelText} {additionalText}</label>
);

export default Label;