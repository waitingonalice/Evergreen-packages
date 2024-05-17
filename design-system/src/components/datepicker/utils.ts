import dayjs from "dayjs/esm/index.js";

export const formatTime = (withTime?: boolean, date?: Date | null) => {
  if (!date) return "";

  if (withTime) {
    return dayjs(date).format("DD/MM/YYYY HH:mm");
  }
  return dayjs(date).format("DD/MM/YYYY");
};
