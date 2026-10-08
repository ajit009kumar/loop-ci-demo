import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cartTotal } from '../src/cart.js';

test('totals price × quantity', () => {
  assert.equal(cartTotal([{ price: 2.5, qty: 2 }, { price: 1.25, qty: 4 }]), 10);
});

test('rounds to cents', () => {
  assert.equal(cartTotal([{ price: 0.1, qty: 3 }]), 0.3);
});
