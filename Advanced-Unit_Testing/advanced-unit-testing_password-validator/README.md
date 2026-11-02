# Advanced Unit Testing: Password Validator

(difficulty: 🔥)

`validatePassword` checks a password and returns a list of error messages (an empty list means the password is valid). `assertValidPassword` throws an error with all messages if the password is not valid.

The rules are:

- at least 8 characters
- at least one digit
- at least one uppercase letter
- no spaces

## Tasks

Open `src/validatePassword.test.ts`. The first test cases are described, but most of them are not implemented yet (they only contain a `TODO`).

1. Implement all test cases. Run `npm run test` after each one.
2. Several test cases check the same function with different inputs. Turn them into one `test.each` table.
3. At least one of your tests will fail. Read the error message carefully, find out whether the test or the function is wrong and fix it.

> 💡 Note that all tests pass at the beginning because the empty test functions contain no `expect`. This changes as soon as you write your first expectation.

### Hints

- To compare a whole array, use `toEqual`. To check only a part of it, use `toContain` or `toHaveLength`.
- To test that a function throws, wrap the call in an arrow function: `expect(() => assertValidPassword("abc")).toThrow("...")`.
- Think about the boundaries: which passwords are exactly on the edge of a rule?

## Development

To work locally, please install the dependencies using `npm i` first (Node.js 22.22 or newer is required).

> ❗️ This project has no browser part. Everything happens in the terminal.

Use `npm run test` to start Vitest in watch mode.

### Scripts

You can use the following commands:

- `npm run test` to run the tests in watch mode
- `npm run test:run` to run the tests once
- `npm run coverage` to run the tests once and print a coverage report
- `npm run check` to check the types with TypeScript (Vitest does not do that)
