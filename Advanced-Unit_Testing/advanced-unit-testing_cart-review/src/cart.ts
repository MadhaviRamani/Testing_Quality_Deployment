export type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

const coupons: Record<string, number> = {
  SAVE10: 10,
  HALF: 50,
};

export function addItem(cart: CartItem[], item: CartItem): CartItem[] {
  const existingItem = cart.find((entry) => entry.name === item.name);

  if (existingItem) {
    existingItem.quantity += item.quantity;
    return [...cart];
  }

  return [...cart, item];
}

export function removeItem(cart: CartItem[], name: string): CartItem[] {
  return cart.filter((entry) => entry.name !== name);
}

export function getTotal(cart: CartItem[], couponCode?: string): number {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  if (couponCode === undefined) {
    return subtotal;
  }

  const discount = coupons[couponCode];

  if (discount === undefined) {
    throw new Error(`Unknown coupon: ${couponCode}`);
  }

  return subtotal - (subtotal * discount) / 100;
}
