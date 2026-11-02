import { describe, expect, test } from "vitest";
import { addItem, getTotal, removeItem } from "./cart";

const bread = { name: "Bread", price: 3, quantity: 1 };
const apple = { name: "Apple", price: 2, quantity: 3 };

describe("cart", () => {
  test("works", () => {
    const cart = addItem([], apple);

    expect(cart).toBeDefined();
  });

  test("total", () => {
    const cart = [apple, bread];
    const expected = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    expect(getTotal(cart)).toBe(expected);
  });

  test("remove", () => {
    removeItem([apple, bread], "Apple");
  });

  test("coupon", () => {
    expect(getTotal([apple], "SAVE10")).toBeLessThan(getTotal([apple]));
  });

  test("cart", () => {
    let cart = addItem([], apple);
    expect(cart.length).toBe(1);

    cart = addItem(cart, bread);
    expect(cart.length).toBe(2);

    cart = removeItem(cart, "Apple");
    expect(cart.length).toBe(1);
    expect(getTotal(cart)).toBe(3);
    expect(getTotal(cart, "HALF")).toBeGreaterThan(0);
  });

  test("adding an item that is already in the cart", () => {
    const cart = addItem([apple], apple);

    expect(cart[0].quantity).toBe(6);
  });
});
