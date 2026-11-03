import { describe, expect, test } from "vitest";
import { slugify } from "./slugify";

describe("slugify", () => {
  test("replaces spaces with dashes and lowercases the text", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });

  test("removes special characters", () => {
    expect(slugify("Hello, World!")).toBe("hello-world");
  });

  test("removes dashes at the start and at the end", () => {
    expect(slugify("  --Hello--  ")).toBe("hello");
  });
});
