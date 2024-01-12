import { padZero } from "../src/";

describe("padZero", () => {
  it("should pad a single-digit number with zeros", () => {
    expect(padZero(5)).toEqual("05");
    expect(padZero(9)).toEqual("09");
  });

  it("should pad a multi-digit number with zeros", () => {
    expect(padZero(12)).toEqual("12");
    expect(padZero(567)).toEqual("567");
  });

  it("should pad a multi-digit number with zeros and targetLength greater than number of digits", () => {
    expect(padZero(12, 5)).toEqual("00012");
    expect(padZero(987, 7)).toEqual("0000987");
  });

  it("should pad a string with zeros", () => {
    expect(padZero("12")).toEqual("12");
    expect(padZero("567")).toEqual("567");
  });

  it("should pad a string with zeros and targetLength greater than string length", () => {
    expect(padZero("12", 5)).toEqual("00012");
    expect(padZero("987", 7)).toEqual("0000987");
  });
});
