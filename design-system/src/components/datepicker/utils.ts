import dayjs from "dayjs/esm/index.js";
import { NativeDatePickerProps } from ".";

export const formatTime = (
  format: NonNullable<NativeDatePickerProps["calenderView"]>,
  date?: Date | null
) => {
  if (!date) return "";
  const displayMap: Record<typeof format, string> = {
    date: "DD/MM/YYYY",
    "datetime-local": "DD/MM/YYYY HH:mm",
    month: "MMMM YYYY",
  };

  return dayjs(date).format(displayMap[format]);
};
