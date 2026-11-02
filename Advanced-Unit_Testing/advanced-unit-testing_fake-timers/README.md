# Advanced Unit Testing: Fake Timers

(difficulty: 🔥🔥)

`src/timers.ts` contains three functions that depend on time:

- `getGreeting` greets depending on the current hour
- `debounce` delays a callback until no call happened for a given time
- `startCountdown` calls `onTick` every second and `onDone` at the end

Waiting for real seconds in a test would make it slow and unreliable. Vitest can control the clock instead.

## Tasks

Open `src/timers.test.ts`. Fake timers are already switched on before and off after every test. Implement the test cases.

1. `getGreeting`: set the time with `vi.setSystemTime(new Date(2026, 0, 1, 9, 0))` and test the boundaries 11:59/12:00 and 17:59/18:00.
2. `debounce`: move the clock with `vi.advanceTimersByTime(ms)`.
3. `startCountdown`: test the ticks, the end and the cancel function.
4. The last test case checks a countdown of 0 seconds. Does the function behave as you would expect? Fix it.

### Hints

- `vi.fn()` creates a mock function you can pass as a callback.
- `onTick.mock.calls` lists the arguments of all calls, for example `[[2], [1], [0]]`.
- `vi.advanceTimersByTime(2999)` and `vi.advanceTimersByTime(1)` let you test exactly on the edge.

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
