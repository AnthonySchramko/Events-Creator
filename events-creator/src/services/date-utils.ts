export const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const calculateMonthLength = (date: Date): number => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};
export const calculatePrevMonthLength = (date: Date): number => {
  return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
};
export const firstDayOfMonth = (date: Date): number => {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
};
export const lastDayOfMonth = (date: Date): number => {
  const monthLength = calculateMonthLength(date);
  return new Date(date.getFullYear(), date.getMonth(), monthLength).getDay();
};
export const getCurrentDay = (date: Date, day: number): number => {
  return new Date(date.getFullYear(), date.getMonth(), day).getDay();
};
export const getOtherMonth = (date: Date, day: number): number => {
  return new Date(
    date.getFullYear(),
    day > 7 ? date.getMonth() - 1 : date.getMonth() + 1,
    day
  ).getDay();
};

export const getDate = (date: Date, day: number) => {
  return new Date(date.getFullYear(), date.getMonth(), day);
};

export const generateDays = (num: number): number[] => {
  const days = [];
  for (let i = 1; i <= num; i++) {
    days.push(i);
  }
  return days;
};
export const generateDaysPrevMonth = (
  lastDay: number,
  lengthOfMonth: number
): number[] => {
  const days = [];
  if (lengthOfMonth === 0) {
    return [];
  }
  for (let i = lastDay; i > lastDay - lengthOfMonth; i--) {
    days.unshift(i);
  }
  return days;
};

export const compareDates = (
  date: Date,
  startDate: string,
  endDate: string
): boolean => {
  let trimmedDate = trimDate(date);
  if (new Date(startDate) <= trimmedDate && trimmedDate <= new Date(endDate)) {
    return true;
  }
  return false;
};

export const convertDateToString = (date: Date): string => {
  return date.toLocaleDateString("en-GB");
};

export const trimDate = (date: Date): Date => {
  return new Date(date.toISOString().substring(0, 10));
};
