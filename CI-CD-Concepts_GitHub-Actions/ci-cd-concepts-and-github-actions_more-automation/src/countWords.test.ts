import { expect, test } from "vitest";
import { countWords } from "./countWords";

test("counts the words of a text", () => {
  expect(countWords("one two  three")).toBe(3);
});

test("returns 0 for an empty text", () => {
  expect(countWords("   ")).toBe(0);
});
