/**
 * 驼峰转下划线
 * @param str string
 * @returns
 */
export function camelCaseToUnderline(str: string) {
  return str.replace(/([A-Z])/g, "_$1").toLowerCase();
}
/**
 * 下划线转驼峰
 * @param str string
 * @returns
 */
export function underlineToCamelCase(str: string) {
  return str.replace(/_(\w)/g, function (_all, letter) {
    return letter.toUpperCase();
  });
}

/**
 * 驼峰下划线互转工具
 */
export const camelCaseUtil = {
  camelCaseToUnderline,
  underlineToCamelCase,
};
