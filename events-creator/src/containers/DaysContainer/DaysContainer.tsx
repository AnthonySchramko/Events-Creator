import { useContext, useEffect, useState } from "react";
import { CalenderContext } from "../../context/CalenderContextProvider";
import styles from "./DaysContainer.module.scss";
import EventModal from "../../components/EventModal/EventModal";
import Day from "../../components/Day/Day";
import OtherMonth from "../../components/OtherMonth/OtherMonth";

const DaysContainer = () => {
  const { daysInMonth, daysInPrevMonth, daysInNextMonth, showModal, dayNames } =
    useContext(CalenderContext);

  const [modalClass, setModalClass] = useState<string>();
  const [calenderContainer, setCalenderContainer] = useState<string>();

  useEffect(() => {
    if (showModal) {
      setModalClass(styles.modal_shown);
      setCalenderContainer(styles.calender_container_unfocussed);
    } else {
      setModalClass(styles.modal);
      setCalenderContainer(styles.calender_container);
    }
  }, [showModal]);
  return (
    <div className={styles.container}>
      <div className={calenderContainer}>
        {dayNames.map((name: string) => {
          return (
            <div className={styles.text} key={name}>
              {name}
            </div>
          );
        })}
        <div className={styles.days}>
          {daysInPrevMonth.map((index: number) => {
            return <OtherMonth day={index} key={index} />;
          })}
          {daysInMonth.map((index: number) => {
            return <Day day={index} key={index} />;
          })}
          {daysInNextMonth.map((index: number) => {
            return <OtherMonth day={index} key={index} />;
          })}
        </div>
      </div>
      <div className={modalClass}>
        <EventModal />
      </div>
    </div>
  );
};

export default DaysContainer;
