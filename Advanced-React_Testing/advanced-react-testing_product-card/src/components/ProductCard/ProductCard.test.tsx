import { afterEach, beforeEach, test, vi } from "vitest";
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
  // Render a product without a discount (name "Coffee Grinder", price 80, addedAt "2026-01-10")
  // and compare its fragment with toMatchSnapshot.
});

test("shows the New badge for a product that was added two days ago", () => {
  // Use an explicit assertion, not a snapshot.
});

test("does not show the New badge for a product that was added a month ago", () => {
  // Use queryByText and not.toBeInTheDocument.
});

test("shows the discounted price", () => {
  // A product with price 80 and discount 25 should cost 60.00 €.
  // Check the price and the "Sale -25%" badge with explicit assertions.
});

test("matches the inline snapshot of a product on sale", () => {
  // Render the product from the previous test and compare it with toMatchInlineSnapshot.
});
