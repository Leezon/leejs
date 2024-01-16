/**
 * 判断数据类型
 * @param type any
 * @returns
 */
export function getType(type: any): string {
  return typeof type === "object"
    ? (Object.prototype.toString
        .call(type)
        .match(/[A-Z][a-z]+/)![0]
        .toLowerCase() as typeof type)
    : typeof type;
}
