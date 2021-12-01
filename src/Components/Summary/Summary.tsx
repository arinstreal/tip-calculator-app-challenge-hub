import { FC } from "react";
import styles from "./Summary.module.scss";
import SummaryRow from "./SummaryRow";

interface ISummary {
  bill: number | undefined;
  numberOfPeople: number | undefined;
  tipPercentage: number;
}

const roundTo2DecimalPlace = (num: number) => {
  console.log("test")
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

const Summary: FC<ISummary> = ({bill = undefined, numberOfPeople = undefined, tipPercentage = 0}: ISummary) => {
  const tip = bill !== undefined && bill !== 0 && numberOfPeople !== undefined && numberOfPeople !== 0 ? roundTo2DecimalPlace(bill * tipPercentage / numberOfPeople) : 0.00;

  const total = numberOfPeople && bill ? roundTo2DecimalPlace(bill / numberOfPeople + tip) : 0.00;

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