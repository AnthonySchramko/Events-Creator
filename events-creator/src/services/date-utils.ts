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

export const getDate = (date: Date, day: number) => {
  return new Date(date.getFullYear(), date.getMonth(), day);
};

export const generateDays = (num: number): number[] => {
  const days = [];
  for (let i = 1; i < num; i++) {
    days.push(i);
  }
  return days;
};
export const generateDaysPrevMonth = (
  lastDay: number,
  lengthOfMonth: number
): number[] => {
  const days = [];
  for (let i = lastDay; i < lastDay - lengthOfMonth; i--) {
    days.unshift(i);
  }
  return days;
};
