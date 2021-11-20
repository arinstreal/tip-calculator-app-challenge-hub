import { FC } from "react";
import styles from "./Summary.module.scss";

interface ISummary {
  bill: number;
  numberOfPeople: number;
}

const Summary: FC<ISummary> = ({bill = 0, numberOfPeople = 0}: ISummary) => {
  const tip = bill * 0.15 / numberOfPeople;
  const total = bill / numberOfPeople + tip;

  return (
    <div className={styles.summary}>
      {
        console.log(`Bill: ${bill}`)
      }
      {
        console.log(`Total: ${total}`)
      }
      Tip Amount/person {tip}
      Total {total}
      <button type="reset">Reset</button>
    </div>
  )
}

export default Summary;