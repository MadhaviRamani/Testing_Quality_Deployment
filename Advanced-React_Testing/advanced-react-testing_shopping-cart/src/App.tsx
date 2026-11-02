import Cart from "./components/Cart";
import type { Item } from "./types";

const initialItems: Item[] = [
  { id: "1", name: "Coffee Grinder", price: 80, quantity: 1 },
  { id: "2", name: "Coffee Beans", price: 12.5, quantity: 2 },
];

export default function App() {
  return <Cart initialItems={initialItems} />;
}
