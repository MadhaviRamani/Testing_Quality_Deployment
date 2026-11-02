import { describe, expect, test } from "vitest";
import { assertValidPassword, validatePassword } from "./validatePassword";

describe("validatePassword", () => {
  test("returns an empty array for a valid password", () => {
    const errors = validatePassword("Secret123");
    expect(errors).toEqual([]);

    // TODO: use the password "Secret123"
  });

  test("reports a password that is too short", () => {
    const errors = validatePassword("Ab1");

    expect(errors).toContain("Password must have at least 8 characters");
  });

  test("accepts a password with exactly 8 characters", () => {
    const errors = validatePassword("Abcdef12");
    expect(errors).toEqual([]);
    // TODO: boundary case, use the password "Abcdef12"
  });

  test("reports a password without a digit", () => {
    const errors = validatePassword("Abcdefgh");
    expect(errors).toContain("Password must contain at least one digit");
  });

  test("reports a password without an uppercase letter", () => {
    const errors = validatePassword("abcdefgh123");
    expect(errors).toContain(
      "Password must contain at least one uppercase letter",
    );
  });

  test("reports a password with a space", () => {
    const errors = validatePassword("Abcdef12 3");
    expect(errors).toContain("Password cannot contain spaces");
  });

  test("returns all errors at once for a password that breaks every rule", () => {
    const errors = validatePassword("a b");
    expect(errors).toContain("Password must have at least 8 characters");
    expect(errors).toContain("Password must contain at least one digit");
    expect(errors).toContain(
      "Password must contain at least one uppercase letter",
    );
    expect(errors).toContain("Password cannot contain spaces");
  });
});

describe("assertValidPassword", () => {
  test("does not throw for a valid password", () => {
    expect(() => assertValidPassword("Secret123")).not.toThrow();

    // TODO
  });

  test("throws an error that lists the broken rules", () => {
    expect(() => assertValidPassword("a b")).toThrowError(
      "Password must have at least 8 characters, Password must contain at least one digit, Password must contain at least one uppercase letter, Password cannot contain spaces",
    );
    // TODO
  });
});
