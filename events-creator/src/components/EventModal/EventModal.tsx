import styles from "./EventModal.module.scss";
import EventContainer from "../../containers/EventContainer/EventContainer";
import CreateEvent from "../CreateEvent/CreateEvent";
import UpdateEvent from "../UpdateEvent/UpdateEvent";
const EventModal = () => {
  return (
    <div className={styles.container}>
      <EventContainer />
      <CreateEvent />
      <UpdateEvent />
    </div>
  );
};

export default EventModal;
