import { createContext, useEffect, useState } from "react";
import {
  calculateMonthLength,
  calculatePrevMonthLength,
  firstDayOfMonth,
  generateDays,
  generateDaysPrevMonth,
  lastDayOfMonth,
} from "../services/date-utils";
import { eventUtils } from "../services/event-utils";
export const CalenderContext = createContext<any>(null);
export interface Event {
  id: number;
  title: string;
  details: string;
  createdAt: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  category: string;
  location: string;
}
const CalenderContextProvider = ({ children }: any) => {
  const currDate = new Date();
  const month = currDate.toLocaleString("default", { month: "long" });
  const year = currDate.getFullYear();
  const [date, setDate] = useState(currDate);
  const [monthWithYear, setMonthWithYear] = useState(`${month} ${year} `);
  const [currentMonthLength, setCurrentMonthLength] = useState<number>(0);
  const [previousMonthLength, setPreviousMonthLength] = useState<number>(0);
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [showModal, setShowModal] = useState<boolean>(false);
  const [daysInMonth, setDaysInMonth] = useState<number[]>([]);
  const [daysInPrevMonth, setDaysInPrevMonth] = useState<number[]>([]);
  const [daysInNextMonth, setDaysInNextMonth] = useState<number[]>([]);
  const [firstDay, setFirstDay] = useState<number>(0);
  const [lastDay, setLastDay] = useState<number>(0);
  const [showEvents, setShowEvents] = useState<boolean>(false);
  const [events, setEvents] = useState<Event[]>([]);
  const [currentEvents, setCurrentEvents] = useState<Event[]>();
  const [currEvent, setCurrEvent] = useState<Event>();
  const [noOfEvents, setNoOfEvents] = useState<number>(0);
  const [showCurrEvent, setShowCurrEvent] = useState<boolean>(false);
  const [makeEventModal, setMakeEventModal] = useState<boolean>(false);

  useEffect(() => {
    const currMonthLength = calculateMonthLength(date);
    setCurrentMonthLength(currMonthLength);
    const prevMonthLength = calculatePrevMonthLength(date);
    setPreviousMonthLength(prevMonthLength);
    const firstDay = firstDayOfMonth(date);
    setFirstDay(firstDay);
    const lastDay = lastDayOfMonth(date);
    setLastDay(lastDay);
    setDaysInMonth(generateDays(currMonthLength));
    const daysInPrevMonth = generateDaysPrevMonth(prevMonthLength, firstDay);
    setDaysInPrevMonth(daysInPrevMonth);
    const daysInNextMonth = generateDays(6 - lastDay);
    setDaysInNextMonth(daysInNextMonth);
  }, [date]);

  useEffect(() => {
    eventUtils.get().then((data) => setEvents(data));
  }, [noOfEvents]);
  return (
    <CalenderContext.Provider
      value={{
        currDate,
        month,
        year,
        date,
        setDate,
        monthWithYear,
        setMonthWithYear,
        currentMonthLength,
        previousMonthLength,
        dayNames,
        showModal,
        setShowModal,
        daysInMonth,
        daysInNextMonth,
        daysInPrevMonth,
        firstDay,
        lastDay,
        showEvents,
        setShowEvents,
        events,
        setEvents,
        currentEvents,
        setCurrentEvents,
        currEvent,
        setCurrEvent,
        noOfEvents,
        setNoOfEvents,
        showCurrEvent,
        setShowCurrEvent,
        makeEventModal,
        setMakeEventModal,
      }}
    >
      {children}
    </CalenderContext.Provider>
  );
};

export default CalenderContextProvider;
