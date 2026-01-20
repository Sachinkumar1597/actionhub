import { isBefore, isToday, parseISO } from 'date-fns';

export const isOverdue = (date) => {
  return isBefore(parseISO(date), new Date()) && !isToday(parseISO(date));
};

export const isTodayTask = (date) => {
  return isToday(parseISO(date));
};
