import { test } from 'node:test';
import assert from 'node:assert/strict';
import { applyDiscount } from '../src/discount.js';

test('10% off 19.99 is 17.99', () => {
  assert.equal(applyDiscount(19.99, 10), 17.99);
});

test('0% off leaves the total', () => {
  assert.equal(applyDiscount(42, 0), 42);
});
