// Apply a percentage discount to a cart total, in dollars.
export function applyDiscount(total, percent) {
  return total - total * (percent / 100);
}
