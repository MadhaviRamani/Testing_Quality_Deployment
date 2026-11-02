# Product Card

A product card shows the name and the price of a product. It has two badges: "New" for products that were added within the last 7 days and "Sale" for products with a discount.

## Tasks

Write the five tests in `src/components/ProductCard/ProductCard.test.tsx`. The comments in the tests describe what to do.

1. Start with the snapshot tests: `toMatchSnapshot` writes a file to `__snapshots__`, `toMatchInlineSnapshot` writes the snapshot into the test file. Run `npm run test`, then open the snapshot and **read it**.
2. Write the explicit assertions for the badges and the discounted price.
3. One of the tests fails and the failure is a bug in the component. Find and fix it.
4. Change the snapshot tests so they cover what you just fixed: delete the snapshot file and the inline snapshot and run the tests again. Explain to yourself why a snapshot that was written before the fix would have been green.
5. Bonus: change the text of the badge from "Sale" to "Offer". Which tests fail? Update the snapshots with `u` in the watch mode after you have checked the diff.

## Development

To work locally, please install the dependencies using `npm i` first (Node.js 22.22 or newer is required).

Run `npm run dev` to start a development server and open the displayed URL in a browser.

Use `npm run test` to run the tests and `npm run check` to check the types. Press `u` in the watch mode to update snapshots.
