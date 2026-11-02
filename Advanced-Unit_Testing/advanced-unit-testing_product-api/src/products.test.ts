import { afterEach, describe, expect, test, vi } from "vitest";
import { getProduct, getProductTitles } from "./products";

const mascara = {
  id: 1,
  title: "Essence Mascara Lash Princess",
  price: 9.99,
};
const eyeshadow = {
  id: 2,
  title: "Eyeshadow Palette with Mirror",
  price: 19.99,
};

describe("getProduct", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("requests the product with the given id", async () => {
    const fetchSpy = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValue(new Response(JSON.stringify(mascara)));

    await getProduct(1);

    expect(fetchSpy).toHaveBeenCalledWith("https://dummyjson.com/products/1");
  });

  test("resolves with the product from the response", async () => {
    // TODO: mock fetch with a successful response and check the result with `resolves`
  });

  test("rejects with 'Product 999 not found' for a 404 response", async () => {
    // TODO: a Response with { status: 404 } is enough
  });

  test("rejects with a friendly message if the network is down", async () => {
    // TODO: use `mockRejectedValue` with a TypeError("Failed to fetch")
  });
});

describe("getProductTitles", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("returns the titles in the order of the given ids", async () => {
    // TODO: answer the two requests with `mockResolvedValueOnce`, one per product
  });

  test("sends one request per id", async () => {
    // TODO
  });

  test("returns an empty array without any request for an empty list", async () => {
    // TODO
  });

  test("rejects if one of the products does not exist", async () => {
    // TODO
  });
});
