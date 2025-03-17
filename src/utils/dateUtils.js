import { format } from "date-fns";
import { ka } from "date-fns/locale";

export const formatDueDate = (dateString) => {
  const date = new Date(dateString);
  return format(date, "dd MMM, yyyy", { locale: ka });
};

export const formatDueDateWithWeekday = (dateString) => {
  const date = new Date(dateString);
  return format(date, "EEE - dd/M/yyyy", { locale: ka });
};
