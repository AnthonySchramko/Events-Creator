import { useContext, useEffect, useState } from "react";
import { CalenderContext, Event } from "../../context/CalenderContextProvider";
import { compareDates, convertDateToString } from "../../services/date-utils";
import styles from "./EventContainer.module.scss";
import EventList from "../../components/EventList/EventList";
const EventContainer = () => {
  const {
    date,
    setShowModal,
    showEvents,
    setShowEvents,
    events,
    setMakeEventModal,
    setCurrentEvents,
  } = useContext(CalenderContext);

  const handleModalClose = (e: any) => {
    e.preventDefault();
    setShowModal(false);
    setShowEvents(false);
  };

  const handleNewEvent = () => {
    setMakeEventModal(true);
    setShowEvents(false);
  };
  const getEventsOnDate = () => {
    const eventsOnDate = events?.filter((e: Event) => {
      return compareDates(date, e.startDate, e.endDate);
    });
    setCurrentEvents(eventsOnDate);
  };
  const [modalClass, setModalClass] = useState<string>("");
  useEffect(() => {
    if (showEvents) {
      setModalClass(styles.modal_shown);
    } else {
      setModalClass(styles.modal);
    }
  }, [showEvents]);
  useEffect(() => {
    getEventsOnDate();
  }, []);
  return (
    <div className={modalClass}>
      <div className={styles.date}>{convertDateToString(date)}</div>
      <EventList />
      <button onClick={handleNewEvent} className={styles.create}>
        Create Event
      </button>
      <button onClick={handleModalClose} className={styles.btn}>
        X
      </button>
    </div>
  );
};

export default EventContainer;
