import { useState } from "react";
import CartItem from "../CartItem";
import ShippingEstimate from "../ShippingEstimate";
import type { Item } from "../../types";

type CartProps = {
  initialItems?: Item[];
};

export default function Cart({ initialItems = [] }: CartProps) {
  const [items, setItems] = useState(initialItems);

  function handleQuantityChange(id: string, quantity: number) {
    setItems(
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  }

  function handleRemove(id: string) {
    setItems(items.filter((item) => item.id !== id));
  }

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <h1>Your cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
              />
            ))}
          </ul>
          <p>Total: {total.toFixed(2)} €</p>
          <ShippingEstimate total={total} />
        </>
      )}
    </>
  );
}
