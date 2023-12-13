import { Event } from "../context/CalenderContextProvider";
import instance from "./axios";

export class eventUtils {
  public static async get(): Promise<Event[]> {
    const data = await instance.get("/");
    return data.data;
  }

  public static async createEvent(data: Event): Promise<Event> {
    const response = await instance.post(`/`, data);
    return response.data;
  }

  public static async deleteEventById(id: number): Promise<Event> {
    const response = await instance.delete(`/${id}`);
    return response.data;
  }

  public static async updateEventById(id: number, data: Event): Promise<Event> {
    const response = await instance.patch(`/${id}`, data);
    return response.data;
  }
}
