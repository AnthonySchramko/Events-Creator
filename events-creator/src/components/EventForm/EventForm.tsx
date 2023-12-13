import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { eventSchema } from "../../validation/form-validation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./EventForm.module.scss";

export interface EventFormProps {
  errors: any;
  register: any;
  formSubmit: (e: any) => any;
  handleCancel: (e: any) => any;
  handleSubmit: (formSubmit: any) => any;
}

const EventForm: React.FC<EventFormProps> = ({
  errors,
  register,
  formSubmit,
  handleCancel,
  handleSubmit,
}) => {
  const { control } = useForm({
    resolver: zodResolver(eventSchema),
  });

  return (
    <form onSubmit={handleSubmit(formSubmit)} className={styles.form}>
      <div>
        <input
          {...register("title")}
          placeholder="Event Title"
          className={styles.title}
        />
        {errors?.title && (
          <p className={styles.error}>{errors.title.message}</p>
        )}

        <input
          {...register("category")}
          placeholder="Category"
          className={styles.category}
        />
        {errors?.category && (
          <p className={styles.error}>{errors.category.message}</p>
        )}

        <input
          {...register("location")}
          placeholder="Location"
          className={styles.location}
        />
        {errors?.location && (
          <p className={styles.error}>{errors.location.message}</p>
        )}
        <Controller
          control={control}
          name="startDate"
          render={({ field }) => (
            <DatePicker
              placeholderText="Start Date"
              onChange={(date) => field.onChange(date)}
              selected={field.value}
              className={styles.date}
            />
          )}
        />
        <Controller
          control={control}
          name="endDate"
          render={({ field }) => (
            <DatePicker
              placeholderText="End Date"
              onChange={(date) => field.onChange(date)}
              selected={field.value}
              className={styles.date}
            />
          )}
        />
        {errors?.endDate && (
          <p className={styles.error}>{errors.endDate.message}</p>
        )}
        {errors?.startDate && (
          <p className={styles.error}>{errors.startDate.message}</p>
        )}
        <label className={styles.text}>Start Time</label>
        <input {...register("startTime")} type="time" className={styles.time} />
        {errors?.startTime && (
          <p className={styles.error}>{errors.startTime.message}</p>
        )}

        <label className={styles.text}>End Time</label>
        <input {...register("endTime")} type="time" className={styles.time} />
        {errors?.endTime && (
          <p className={styles.error}>{errors.endTime.message}</p>
        )}
      </div>
      <textarea
        {...register("details")}
        placeholder="Details"
        className={styles.details}
      />
      {errors?.details && (
        <p className={styles.error}>{errors.details.message}</p>
      )}
      <div className={styles.btn_container}>
        <button type="submit" className={styles.btn_submit}>
          Submit
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className={styles.btn_close}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EventForm;
