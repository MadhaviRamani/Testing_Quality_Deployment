# Shopping Cart

A cart renders a `CartItem` for every item, shows the total and renders a `ShippingEstimate`. The `ShippingEstimate` loads its data with `fetch`.

## Tasks

Open `src/components/Cart/Cart.test.tsx`. The component `Cart` should be tested in isolation: its children are replaced with `vi.mock`.

1. Mock `ShippingEstimate` and `CartItem` as described in the comment at the top of the test file.
2. Write the tests. The comments describe what to check.
3. Several tests fail, and they all point to the same bug in `Cart`. Find and fix it.
4. Reflect: what do these tests _not_ tell you? Which bug in `CartItem` would still leave all `Cart` tests green? Write a test for the real `CartItem` in `src/components/CartItem/CartItem.test.tsx` that checks that the input calls `onQuantityChange` with a number.

## Development

To work locally, please install the dependencies using `npm i` first (Node.js 22.22 or newer is required).

Run `npm run dev` to start a development server and open the displayed URL in a browser. (The shipping estimate stays on "Calculating shipping …" because the app has no backend.)

Use `npm run test` to run the tests and `npm run check` to check the types.
