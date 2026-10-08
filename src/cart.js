// Cart total in dollars, rounded to cents.
export function cartTotal(items) {
  const cents = items.reduce((sum, i) => sum + Math.round(i.price * 100) * i.qty, 0);
  return cents / 100;
}
