import type { Item } from "../../types";

export type CartItemProps = {
  item: Item;
  onQuantityChange?: (id: string, quantity: number) => void;
  onRemove?: (id: string) => void;
};

export default function CartItem({
  item,
  onQuantityChange,
  onRemove,
}: CartItemProps) {
  return (
    <li className="cart-item">
      <h2>{item.name}</h2>
      <p>{item.price.toFixed(2)} € each</p>
      <label>
        Quantity
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(event) =>
            onQuantityChange?.(item.id, Number(event.target.value))
          }
        />
      </label>
      <button type="button" onClick={() => onRemove?.(item.id)}>
        Remove {item.name}
      </button>
    </li>
  );
}
