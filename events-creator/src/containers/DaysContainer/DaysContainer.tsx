import { useContext, useEffect, useState } from "react";
import { CalenderContext } from "../../context/CalenderProvider";
import styles from "./DaysContainer.module.scss";
import EventModal from "../../components/EventModal/EventModal";

const DaysContainer = () => {
  const { day, dayPreviousMonth, dayNextMonth, showModal, dayNames } =
    useContext(CalenderContext);
  const [modalClass, setModalClass] = useState<string>();
  useEffect(() => {
    if (showModal) {
      setModalClass(styles.modal_shown);
    } else {
      setModalClass(styles.modal);
    }
  }, [showModal]);
  return (
    <div>
      <h2>hello</h2>
      <div>
        {dayNames.map((name: string) => {
          return <div>{name}</div>;
        })}
        {dayPreviousMonth.map((name: string) => {
          return <div>{name}</div>;
        })}
        {dayNextMonth.map((name: string) => {
          return <div>{name}</div>;
        })}
      </div>
      <div className={modalClass}>
        <EventModal />
      </div>
    </div>
  );
};

export default DaysContainer;
