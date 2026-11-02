export function validatePassword(password: string): string[] {
  const errors: string[] = [];

  if (password.length <= 8) {
    errors.push("Password must have at least 8 characters");
  }

  if (!/[0-9]/.test(password)) {
    errors.push("Password must contain a digit");
  }

  if (!/[A-Z]/.test(password)) {
    errors.push("Password must contain an uppercase letter");
  }

  if (/\s/.test(password)) {
    errors.push("Password must not contain spaces");
  }

  return errors;
}

export function assertValidPassword(password: string): void {
  const errors = validatePassword(password);

  if (errors.length > 0) {
    throw new Error(errors.join(", "));
  }
}
