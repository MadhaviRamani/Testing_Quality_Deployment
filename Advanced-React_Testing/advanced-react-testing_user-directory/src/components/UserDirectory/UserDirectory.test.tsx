import { test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserDirectory from ".";

const users = [
  { id: 1, name: "Ada Lovelace", email: "ada@example.com" },
  { id: 2, name: "Alan Turing", email: "alan@example.com" },
  { id: 3, name: "Grace Hopper", email: "grace@example.com" },
];

// Mock fetch in every test with vi.spyOn(globalThis, "fetch").
// Restore it after each test.

test("shows a loading message first", () => {
  // Hint: a promise that never settles keeps the component loading.
});

test("renders the users after they have loaded", async () => {
  // Use findBy… to wait for the users. The loading message is gone afterwards.
});

test("shows an error message when the request fails", async () => {
  // fetch rejects.
});

test("shows an error message when the server responds with an error", async () => {
  // fetch resolves with a response with status 500.
});

test("shows a hint when there are no users", async () => {
  // fetch resolves with an empty array.
});

test("filters the users by name, ignoring upper and lower case", async () => {
  // Type "AL" (upper case) into the search field: Alan Turing stays, the other two users disappear.
});

test("shows a message when no user matches the search", async () => {
  // Search for "xyz".
});

test("loads the users again when Retry is clicked", async () => {
  // The first request fails (mockRejectedValueOnce), the second one succeeds.
  // After the click the loading message is shown again and the error is gone, then the users appear.
  // Hint: if the second request finishes immediately, the loading message may already be gone when you
  // look for it. Return a promise that you resolve yourself (mockReturnValueOnce) to control the timing.
});
