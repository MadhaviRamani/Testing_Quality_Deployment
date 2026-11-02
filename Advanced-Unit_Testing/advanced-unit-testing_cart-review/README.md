# Advanced Unit Testing: Cart Review

(difficulty: 🔥🔥🔥)

`src/cart.ts` contains the logic of a shopping cart: `addItem`, `removeItem` and `getTotal` (with an optional coupon). All tests in `src/cart.test.ts` pass and the coverage looks good, but the tests are poor. In this challenge you review tests instead of writing them from scratch.

## Tasks

1. Run `npm run coverage`. How high is the coverage? Which lines are not covered?
2. Read every test in `src/cart.test.ts` and write down what is wrong with it. A test is good if it fails when the function is wrong and stays green when you refactor it.
3. Rewrite the tests:
   - Use `describe` blocks and test names that say what is expected.
   - Check exact results instead of vague ones.
   - One test, one reason to fail.
   - Do not repeat the implementation in the test.
   - Create fresh test data for every test (`beforeEach`).
4. Cover the missing lines with a test of your own.
5. One of your new tests should fail. Why? Fix the function.

### Hints

- Which test would notice if `addItem` changed the cart that was passed in?
- A test without an `expect` can never fail.
- `toBeCloseTo` compares numbers with decimal places.
- 100 % coverage does not mean the tests are good. It only means every line was executed.

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
