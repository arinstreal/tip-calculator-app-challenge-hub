import { FC } from "react";
import styles from "./Label.module.scss";

interface ILabel {
  labelText: string;
  name?: string;
}

const Label: FC<ILabel> = ({labelText, name = ''}: ILabel) => (
  <label className={styles.label} htmlFor={name}>{labelText}</label>
);

export default Label;