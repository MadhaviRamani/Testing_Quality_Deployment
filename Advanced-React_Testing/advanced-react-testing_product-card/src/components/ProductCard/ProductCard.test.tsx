import { afterEach, beforeEach, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductCard from ".";

// The "New" badge depends on today's date, so we fix the date for every test.
beforeEach(() => {
  vi.useFakeTimers({ toFake: ["Date"] });
  vi.setSystemTime(new Date("2026-03-15T12:00:00"));
});

afterEach(() => {
  vi.useRealTimers();
});

test("matches the snapshot of a regular product", () => {
  const { asFragment } = render(
    <ProductCard name="Coffee Grinder" price={80} addedAt="2026-01-10" />,
  );
  expect(asFragment()).toMatchSnapshot(
    `<DocumentFragment>
    
    <div data-testid="product-card">Coffee Grinder</div>
    
    </DocumentFragment>`,
  );
  // Render a product without a discount (name "Coffee Grinder", price 80, addedAt "2026-01-10")
  // and compare its fragment with toMatchSnapshot.
});

test("shows the New badge for a product that was added two days ago", () => {
  // Use an explicit assertion, not a snapshot.
  render(<ProductCard name="Coffee Grinder" price={80} addedAt="2026-03-13" />);
  expect(screen.getByTestId("new-badge")).toBeInTheDocument();
});

test("does not show the New badge for a product that was added a month ago", () => {
  // Use queryByText and not.toBeInTheDocument.
  render(<ProductCard name="Coffee Grinder" price={80} addedAt="2026-02-13" />);
  expect(screen.queryByTestId("new-badge")).not.toBeInTheDocument();
});

test("shows the discounted price", () => {
  render(<ProductCard name="Coffee Grinder" price={80} discount={25} addedAt="2026-01-10" />);
  expect(screen.getByText("Offer -25%")).toBeInTheDocument();
  expect(screen.getByText("60.00 €")).toBeInTheDocument();
  expect(screen.getByText("80.00 €")).toBeInTheDocument();
  // Render a product with price 80 and discount 25.
  // Check the price and the "Offer -25%" badge with explicit assertions.
});

test("matches the snapshot of a product on sale", () => {
  const { asFragment } = render(
    <ProductCard name="Coffee Grinder" price={80} discount={25} addedAt="2026-01-10" />,
  );
  expect(asFragment()).toMatchSnapshot();     
  // A product with price 80 and discount 25 should cost 60.00 €.
  // Check the price and the "Offer -25%" badge with explicit assertions.
});

test("matches the inline snapshot of a product on sale", () => {  
  const { asFragment } = render(
    <ProductCard name="Coffee Grinder" price={80} discount={25} addedAt="2026-01-10" />,
  );
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <article
        class="card"
      >
        <h2>
          Coffee Grinder
        </h2>
        <span
          class="badge"
        >
          Offer -25%
        </span>
        <p>
          <s>
            80.00 €
          </s>
           
          <strong>
            60.00 €
          </strong>
        </p>
      </article>
    </DocumentFragment>
  `);
  // Render the product from the previous test and compare it with toMatchInlineSnapshot.
});
