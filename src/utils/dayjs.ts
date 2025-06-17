import dayjs from "dayjs";

export const formatAlarmTime = (datetimeStr: string): string => {
  const now = dayjs();
  const created = dayjs(datetimeStr);
  const diffInMinutes = now.diff(created, "minute");
  const diffInHours = now.diff(created, "hour");

  if (diffInMinutes < 1) {
    return "방금 전";
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes}분 전`;
  } else if (diffInHours < 2) {
    return `${diffInHours}시간 전`;
  } else if (now.isSame(created, "day")) {
    return "오늘";
  } else {
    return created.format("YYYY. MM. DD");
  }
};
