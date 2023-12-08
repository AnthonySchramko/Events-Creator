import { useContext, useEffect } from "react";
import { CalenderContext } from "../../context/CalenderContextProvider";
import { getCurrentDay, getDate } from "../../services/date-utils";
import styles from "./Day.module.scss";
export interface DayProps {
  day: number;
}
const Day = ({ day }: DayProps) => {
  const { date, setDate, setShowModal } = useContext(CalenderContext);
  let container = styles.container;
  if (getCurrentDay(date, day) === 0 || getCurrentDay(date, day) === 6) {
    container += ` ${styles.weekend}`;
  }
  useEffect(() => {
    const currentDate = getDate(date, day);
  }, []);
  const handleClick = () => {
    const newDate = getDate(date, day);
    setDate(newDate);
    setShowModal(true);
  };

  return (
    <div onClick={handleClick} className={container}>
      <div className={styles.day}>{day}</div>
    </div>
  );
};

export default Day;
