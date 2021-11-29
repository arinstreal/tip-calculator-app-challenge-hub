import { FC } from "react";
import styles from "./Summary.module.scss";
import SummaryRow from "./SummaryRow";

interface ISummary {
  bill: number;
  numberOfPeople: number;
  tipPercentage: number;
}

const roundTo2DecimalPlace = (num: number) => Math.round((num + Number.EPSILON) * 100) / 100;

const Summary: FC<ISummary> = ({bill = 0, numberOfPeople = 0, tipPercentage = 0}: ISummary) => {
  const tip = roundTo2DecimalPlace(bill * tipPercentage / (numberOfPeople | 1));
  const total = roundTo2DecimalPlace(bill / (numberOfPeople | 1) + tip);

  return (
    <div className={styles.summary}>
      <div>
        <SummaryRow text="Tip Amount" textSecond="/ person" value={tip}/>
        <SummaryRow text="Total" textSecond="/ person" value={total}/>
      </div>
      <button type="reset">Reset</button>
    </div>
  )
}

export default Summary;