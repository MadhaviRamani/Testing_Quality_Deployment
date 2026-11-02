# Advanced Unit Testing: Product API

(difficulty: 🔥🔥)

`getProduct` loads a product with `fetch`. `getProductTitles` loads several products and returns their titles.

> 💡 The URL `https://dummyjson.com/products` is a real API, but the tests must never send a real request. A unit test has to run without network and without the data on a server.

## Tasks

Open `src/products.test.ts`. The first test is already implemented. Implement the other test cases.

1. Mock `fetch` in every test with `vi.spyOn(globalThis, "fetch")`.
2. Test the happy path and the two error cases of `getProduct` (status 404 and a network error).
3. Test that `getProductTitles` returns the titles in the right order and sends one request per id.
4. Run `npm run check`. Does TypeScript complain about your tests?

### Hints

- A successful response: `new Response(JSON.stringify(mascara))`
- A failed response: `new Response(null, { status: 404 })`
- A network error: `mockRejectedValue(new TypeError("Failed to fetch"))`
- A response body can be read only once. If your function sends several requests, use `mockResolvedValueOnce` once per request.
- Promises: `await expect(getProduct(1)).resolves.toEqual(mascara)` and `await expect(getProduct(999)).rejects.toThrow("...")`. Without `await` the test finishes before the promise is settled, and it passes even if it should fail.
- Spies keep their mock behavior across tests, so restore them in an `afterEach` (already prepared).

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
