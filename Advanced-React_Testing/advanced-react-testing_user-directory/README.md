# User Directory

A directory loads users with `fetch` and shows them in a list. The user can search by name. If the request fails, an error with a Retry button is shown.

## Tasks

Write the eight tests in `src/components/UserDirectory/UserDirectory.test.tsx`. The comments describe what to check.

1. Mock `fetch` with `vi.spyOn(globalThis, "fetch")`. Use `Response.json(…)` for successful responses and `new Response(null, { status: 500 })` for a failing one.
2. Wait for asynchronous changes with `findBy…` queries. Use `getBy…` only when the element is already there.
3. Two tests fail and each failure is a bug in the component. Find and fix both.
4. Check your tests: temporarily break the component on purpose (for example remove the `ok` check) and see which test notices it.

## Development

To work locally, please install the dependencies using `npm i` first (Node.js 22.22 or newer is required).

Run `npm run dev` to start a development server and open the displayed URL in a browser.

Use `npm run test` to run the tests and `npm run check` to check the types.
