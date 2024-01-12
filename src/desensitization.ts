/**
 * 手机号脱敏
 * @param phone-手机号
 * @returns
 */
export const desensitizationPhone = (phone: string) => {
  if (!phone) {
    return;
  }
  return phone.replace(/(\d{3})\d*(\d{4})/, "$1****$2");
};

/**
 * 姓名脱敏
 * @param name-姓名
 * @returns
 */
export const desensitizationName = (name: string) => {
  if (!name) {
    return;
  }
  if (name.length === 2) return name.replace(/(\S)\S/, "$1*");
  return name.replace(/(\S)\S+(\S)/, "$1*$2");
};
