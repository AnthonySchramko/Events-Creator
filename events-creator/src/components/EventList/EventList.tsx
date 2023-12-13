import { useContext } from "react";
import styles from "./EventList.module.scss";
import { CalenderContext, Event } from "../../context/CalenderContextProvider";
import Details from "../Details/Details";

const EventList = () => {
  const { currentEvents } = useContext(CalenderContext);
  console.log("currentEvents", currentEvents);
  return (
    <div className={styles.container}>
      {currentEvents &&
        currentEvents.map((e: Event, index: number) => {
          return <Details e={e} index={index} key={index} />;
        })}
    </div>
  );
};

export default EventList;
