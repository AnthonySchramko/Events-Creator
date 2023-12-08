import { createContext, useEffect, useState } from "react";
import {
  calculateMonthLength,
  calculatePrevMonthLength,
  firstDayOfMonth,
  generateDays,
  generateDaysPrevMonth,
  lastDayOfMonth,
} from "../services/date-utils";

export const CalenderContext = createContext<any>(null);

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
      }}
    >
      {children}
    </CalenderContext.Provider>
  );
};

export default CalenderContextProvider;
