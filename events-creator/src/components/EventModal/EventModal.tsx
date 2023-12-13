import styles from "./EventModal.module.scss";
import EventContainer from "../../containers/EventContainer/EventContainer";
import CreateEvent from "../CreateEvent/CreateEvent";
import EventList from "../EventList/EventList";
const EventModal = () => {
  return (
    <div className={styles.container}>
      <EventContainer />
      <CreateEvent />
    </div>
  );
};

export default EventModal;
