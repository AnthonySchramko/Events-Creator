import { useContext, useEffect, useState } from "react";
import { CalenderContext, Event } from "../../context/CalenderContextProvider";
import { useForm } from "react-hook-form";
import { eventSchema } from "../../validation/form-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { eventUtils } from "../../services/event-utils";
import EventForm from "../EventForm/EventForm";
import styles from "./CreateEvent.module.scss";
const CreateEvent = () => {
  const {
    date,
    makeEventModal,
    setMakeEventModal,
    setShowEvents,
    noOfEvents,
    setNoOfEvents,
  } = useContext(CalenderContext);

  const [modalClass, setModalClass] = useState<string>("");

  useEffect(() => {
    if (makeEventModal) {
      setModalClass(styles.modal_shown);
    } else {
      setModalClass(styles.modal);
    }
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: "",
      details: "",
      category: "",
      location: "",
      startDate: date,
      startTime: "",
      endDate: date,
      endTime: "",
    },
  });

  const formSubmit = (data: Event) => {
    eventUtils
      .createEvent(data)
      .then(() => {
        setNoOfEvents(noOfEvents + 1);
        setMakeEventModal(false);
        setShowEvents(true);
      })
      .catch((e) => console.log(e));
  };
  const handleCancel = (e: any) => {
    e.preventDefault();
    reset();
    setMakeEventModal(false);
    setShowEvents(true);
  };
  return (
    <div className={modalClass}>
      <EventForm
        errors={errors}
        register={register}
        formSubmit={formSubmit}
        handleCancel={handleCancel}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};
export default CreateEvent;
