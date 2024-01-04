import { distanceFormat } from "../src";

test("format:distanceFormat", () => {
  expect(distanceFormat("123")).toBe("0.12km");
});
