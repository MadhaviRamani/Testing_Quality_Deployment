import { describe, expect, test } from "vitest";
import { truncate } from "./truncate";

describe("truncate", () => {
  test("returns short texts unchanged", () => {
    expect(truncate("Hello", 10)).toBe("Hello");
  });

  test("shortens long texts and adds an ellipsis", () => {
    expect(truncate("Hello World", 8)).toBe("Hello W…");
  });

  test("never returns more characters than maxLength", () => {
    expect(truncate("Hello World", 5)).toHaveLength(5);
  });
});
