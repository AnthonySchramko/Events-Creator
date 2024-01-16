import { useContext, useEffect, useState } from "react";
import { CalenderContext, Event } from "../../context/CalenderContextProvider";
import { useForm } from "react-hook-form";
import { eventSchema } from "../../validation/form-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { eventUtils } from "../../services/event-utils";
import EventForm from "../EventForm/EventForm";
import styles from "./UpdateEvent.module.scss";
const UpdateEvent = () => {
  const { setShowEvents, showCurrEvent, setShowCurrEvent, currEvent } =
    useContext(CalenderContext);
  const [modalClass, setModalClass] = useState<string>();
  useEffect(() => {
    if (showCurrEvent) {
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
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
    },
    values: currEvent,
  });

  const formSubmit = (data: Event) => {
    eventUtils
      .updateEventById(currEvent.id, data)
      .then(() => {})
      .catch((e) => console.log(e));
    setShowCurrEvent(false);
    setShowEvents(true);
  };
  const handleCancel = (e: any) => {
    e.preventDefault();
    reset();
    setShowCurrEvent(false);
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
export default UpdateEvent;
