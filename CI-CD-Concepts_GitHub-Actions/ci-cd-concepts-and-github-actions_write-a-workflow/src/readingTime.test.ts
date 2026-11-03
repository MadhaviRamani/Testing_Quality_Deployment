import { expect, test } from "vitest";
import { readingTime } from "./readingTime";

test("rounds short texts up to one minute", () => {
  expect(readingTime("just a few words")).toBe("1 min");
});

test("calculates the reading time of a long text", () => {
  expect(readingTime("word ".repeat(450))).toBe("3 min");
});
