import {
  camelCaseUtil,
  dateFormat,
  desensitizationName,
  desensitizationPhone,
  distanceFormat,
  getCalendar,
  getType,
  moneyFormat,
  padZero,
  timeStampTo,
} from "../src";

test("camelCaseUtil", () => {
  expect(camelCaseUtil.underlineToCamelCase("abc_def")).toBe("abcDef");
  expect(camelCaseUtil.camelCaseToUnderline("abcDef")).toBe("abc_def");
});

test("desensitization", () => {
  expect(desensitizationName("张三")).toBe("张*");
  expect(desensitizationName("王小二")).toBe("王*二");
  expect(desensitizationPhone("18745617890")).toBe("187****7890");
});

test("format", () => {
  expect(moneyFormat("1234.12")).toBe("1,234.12");
  expect(distanceFormat("123")).toBe("0.12km");
  expect(dateFormat(new Date(2020, 0, 1))).toBe("2020-01-01 00:00:00");
  expect(dateFormat(new Date(2020, 0, 1), "YYYY-MM-DD")).toBe("2020-01-01");
});

test("getType", () => {
  expect(getType(1)).toBe("number");
  expect(getType("abcd")).toBe("string");
  expect(getType({})).toBe("object");
  expect(getType([])).toBe("array");
  expect(getType(null)).toBe("null");
  expect(getType(undefined)).toBe("undefined");
  expect(getType(() => {})).toBe("function");
});

test("function", () => {
  expect(padZero(2)).toBe("02");
  expect(timeStampTo(1000)).toBe("00:00:01");
  expect(timeStampTo(60 * 60 * 1000)).toBe("01:00:00");
  expect(timeStampTo(60 * 60 * 1000 + 123, true)).toBe("01:00:00:123");
});

test("getCalendar", () => {
  expect(getCalendar(2024, 11)).toHaveLength(42);
});
