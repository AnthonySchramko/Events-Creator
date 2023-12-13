import { useContext } from "react";
import { CalenderContext, Event } from "../../context/CalenderContextProvider";
import { eventUtils } from "../../services/event-utils";
import { convertDateToString } from "../../services/date-utils";
import styles from "./Details.module.scss";
export interface DetailsProps {
  e: Event;
  index: number;
}
const Details = ({ e, index }: DetailsProps) => {
  const {
    noOfEvents,
    setNoOfEvents,
    setCurrEvent,
    setShowCurrEvent,
    setShowEvents,
  } = useContext(CalenderContext);
  const handleShowEventDetails = () => {
    setCurrEvent(e);
    setShowCurrEvent(true);
    setShowEvents(false);
  };
  const handleDelete = () => {
    console.log("deletingEvent", e);
    eventUtils
      .deleteEventById(e.id)
      .then(() => {
        setNoOfEvents(noOfEvents - 1);
      })
      .catch((e) => console.log(e));
  };
  return (
    <div key={index} className={styles.container}>
      <div className={styles.event} onClick={handleShowEventDetails}>
        <div className={styles.time}>{e.startTime}</div>
        <div className={styles.text}>{e.title}</div>

        <div className={styles.date}>
          {e.startDate} {e.startTime} - {e.endDate} {e.endTime}
        </div>
        <div className={styles.delete}>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Details;