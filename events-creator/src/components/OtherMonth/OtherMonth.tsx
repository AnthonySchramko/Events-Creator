import { useContext } from "react";
import { CalenderContext } from "../../context/CalenderContextProvider";
import { DayProps } from "../Day/Day";
import { getOtherMonth } from "../../services/date-utils";
import styles from "./OtherMonth.module.scss";

const OtherMonth = ({ day }: DayProps) => {
  const { date } = useContext(CalenderContext);
  let container = styles.container;
  if (getOtherMonth(date, day) === 0 || getOtherMonth(date, day) === 6) {
    container += ` ${styles.weekend}`;
  }
  return (
    <div className={container}>
      <div className={styles.day}>{day}</div>
    </div>
  );
};

export default OtherMonth;
