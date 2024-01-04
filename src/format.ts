import dayjs from "dayjs";

/**
 * 千分位分割数字
 * @param num
 * @returns
 */
export const moneyFormat = (num?: number | string): string => {
  // const [num1, num2] = String(num ?? '').split('.');
  // const str = num1.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  // return num2 ? str + '.' + num2 : str;
  if (num === undefined || num === null) {
    return "";
  }
  return Number(num).toLocaleString();
};

/**
 * 日期格式化
 * @param date
 * @param format
 * @returns
 */
export const dateFormat = (
  date: any,
  format = "YYYY-MM-DD HH:mm:ss",
): string => {
  if (!date) {
    return "";
  }
  return dayjs(date).format(format);
};
