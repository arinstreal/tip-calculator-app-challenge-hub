import { FC } from "react";
import styles from "./Summary.module.scss";
import SummaryRow from "./SummaryRow";

interface ISummary {
  bill: number | undefined;
  numberOfPeople: number | undefined;
  tipPercentage: number;
}

const roundTo2DecimalPlace = (num: number) => {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

const Summary: FC<ISummary> = ({bill = undefined, numberOfPeople = undefined, tipPercentage = 0}: ISummary) => {
  const billWithTip = bill ? bill * tipPercentage : 0.00;
  const tipPerPerson = numberOfPeople && numberOfPeople > 0 ? roundTo2DecimalPlace(billWithTip / numberOfPeople) : 0.00;
  const billPerPerson = bill && numberOfPeople && (numberOfPeople > 0) ? bill / numberOfPeople : 0.00;
  const total = roundTo2DecimalPlace(billPerPerson + tipPerPerson);

  return (
    <div className={styles.summary}>
      <div>
        <SummaryRow text="Tip Amount" textSecond="/ person" value={tipPerPerson}/>
        <SummaryRow text="Total" textSecond="/ person" value={total}/>
      </div>
      <button type="reset">Reset</button>
    </div>
  )
}

export default Summary;