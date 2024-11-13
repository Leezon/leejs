interface Calendar {
  date: string;
  day: number;
  weekday: string;
  isToday: boolean;
  isCurrentMonth: boolean;
}

/**
 * 通过年份月份获取日历
 * @param {number} yaer 年
 * @param {number} month 月
 * @returns Calendar[]
 */
export function getCalendar(yaer: number, month: number): Calendar[] {
  const date = new Date(yaer, month - 1, 1);
  const day = date.getDay() === 0 ? 7 : date.getDay();
  const calendar = [];
  for (let i = 1; i <= 42; i++) {
    const d = new Date(date);
    d.setDate(i - day + 1);
    const dateObj: Calendar = {
      date: d.toLocaleDateString(),
      day: d.getDay(),
      weekday: [
        "星期天",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ][d.getDay()],
      isToday: d.toLocaleDateString() === new Date().toLocaleDateString(),
      isCurrentMonth: d.getMonth() === month - 1,
    };
    calendar.push(dateObj);
  }
  return calendar;
}
