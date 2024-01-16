import dayjs from "dayjs";

/**
 * 千分位分割数字
 * @param num 需要分割的数字
 * @returns
 */
export function moneyFormat(num?: number | string): string {
  // const [num1, num2] = String(num ?? '').split('.');
  // const str = num1.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  // return num2 ? str + '.' + num2 : str;
  if (num === undefined || num === null) {
    return "";
  }
  return Number(num).toLocaleString();
}

/**
 * 日期格式化
 * @param date 日期
 * @param format 格式
 * @returns
 */
export function dateFormat(
  date: any,
  format: string = "YYYY-MM-DD HH:mm:ss",
): string {
  if (!date) {
    return "";
  }
  return dayjs(date).format(format);
}

/**
 * 距离格式化
 * @param value 距离
 * @param km 是否是km，默认true
 * @returns
 */
export function distanceFormat(
  value: string | number,
  km: boolean = true,
): string {
  return km ? (Number(value) / 1000).toFixed(2) + "km" : value + "m";
}
