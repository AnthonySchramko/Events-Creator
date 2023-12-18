import { useContext, useEffect, useState } from "react";
import { CalenderContext, Event } from "../../context/CalenderContextProvider";
import {
  compareDates,
  getCurrentDay,
  getDate,
} from "../../services/date-utils";
import styles from "./Day.module.scss";
export interface DayProps {
  day: number;
}
const Day = ({ day }: DayProps) => {
  const { date, setDate, setShowModal, setCurrentEvents, events } =
    useContext(CalenderContext);
  let container = styles.container;
  if (getCurrentDay(date, day) === 0 || getCurrentDay(date, day) === 6) {
    container += ` ${styles.weekend}`;
  }

  const [currentDayEvents, setCurrentDayEvents] = useState<Event[]>([]);
  const currentDate = getDate(date, day);
  useEffect(() => {
    setCurrentDayEvents([]);
    const currentDayEvents = events.filter((event: Event) => {
      return compareDates(currentDate, event.startDate, event.endDate);
    });

    if (currentDayEvents) {
      setCurrentEvents(currentDayEvents);
      setCurrentDayEvents(currentDayEvents);
    }
  }, [events]);
  const handleClick = () => {
    const newDate = getDate(date, day);
    setDate(newDate);
    setShowModal(true);
    setCurrentEvents(currentDayEvents);
  };

  return (
    <div onClick={handleClick} className={container}>
      <div className={styles.day}>{day}</div>
      <div className={styles.event_container}>
        {currentDayEvents &&
          currentDayEvents.map((event: Event) => {
            return (
              <div className={styles.event} key={event.id}>
                {event.title}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Day;
