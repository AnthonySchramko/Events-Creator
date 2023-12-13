import { z } from "zod";

export const eventSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  details: z.string().min(1, { message: "Details are required" }),
  category: z.string().min(1, { message: "Category is required" }),
  location: z.string().min(1, { message: "Location is required" }),
  startDate: z.coerce
    .date()
    .refine((data) => !!data, { message: "End time is required" }),
  startTime: z.string().min(1, { message: "Start time is required" }),
  endDate: z.coerce
    .date()
    .refine((data) => !!data, { message: "End date is required" }),
  endTime: z.string().min(1, { message: "End time is required" }),
});

export type EventFormData = z.infer<typeof eventSchema>;
