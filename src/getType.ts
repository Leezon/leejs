/**
 * 判断数据类型
 * @param type
 * @returns
 */
export const getType = (type: any) => {
  return typeof type === "object"
    ? (Object.prototype.toString
        .call(type)
        .match(/[A-Z][a-z]+/)![0]
        .toLowerCase() as typeof type)
    : typeof type;
};
