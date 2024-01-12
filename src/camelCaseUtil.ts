/**
 * 驼峰转下划线
 * @param str-string
 * @returns
 */
export const camelCaseToUnderline = (str: string) => {
  return str.replace(/([A-Z])/g, "_$1").toLowerCase();
};
/**
 * 下划线转驼峰
 * @param str-string
 * @returns
 */
export const underlineToCamelCase = (str: string) => {
  return str.replace(/_(\w)/g, function (_all, letter) {
    return letter.toUpperCase();
  });
};

/**
 * 下划线对象转驼峰
 * @param obj-对象
 * @returns
 */
export const underlineObjToCamelCase = (obj: any) => {
  const newObj: {
    [key: string]: any;
  } = {};
  for (const key in obj) {
    newObj[underlineToCamelCase(key)] = obj[key];
  }
  return newObj;
};

/**
 *  驼峰对象转下划线
 * @param obj-对象
 * @returns
 */
export const camelCaseObjToUnderline = (obj: any) => {
  const newObj: {
    [key: string]: any;
  } = {};
  for (const key in obj) {
    newObj[camelCaseToUnderline(key)] = obj[key];
  }
  return newObj;
};

/**
 * 下划线数组对象转驼峰
 * @param arr-数组对象
 * @returns
 */
export const underlineArrObjToCamelCase = (arr: any[]) => {
  return arr.map((item) => {
    return underlineObjToCamelCase(item);
  });
};

/**
 * 驼峰数组对象转下划线
 * @param arr-数组对象
 * @returns
 */
export const camelCaseArrObjToUnderline = (arr: any[]) => {
  return arr.map((item) => {
    return camelCaseObjToUnderline(item);
  });
};

/**
 * 驼峰下划线互转工具
 */
export const camelCaseUtil = {
  camelCaseToUnderline,
  underlineToCamelCase,
  underlineObjToCamelCase,
  camelCaseObjToUnderline,
  underlineArrObjToCamelCase,
  camelCaseArrObjToUnderline,
};
