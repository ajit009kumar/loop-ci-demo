// Apply a percentage discount to a cart total, in dollars, rounded to cents.
export function applyDiscount(total, percent) {
  const cents = Math.round(total * 100);
  return Math.round(cents * (1 - percent / 100)) / 100;
}
