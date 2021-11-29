import { FC } from "react";
import styles from "./SummaryRow.module.scss";

interface ISummaryRow {
  text: string;
  textSecond: string;
  value: string | number;
}

const SummaryRow: FC<ISummaryRow> = ({text, textSecond, value}: ISummaryRow) => {
  return (
    <div className={styles.summaryRow}>
      <div className={styles.informationWrapper}>
        <div className={styles.mainText}>{text}</div>
        <div className={styles.secondText}>{textSecond}</div>
      </div>
      <span className={styles.value}>
        {`$${value}`}
      </span>
    </div>
  )
}

export default SummaryRow