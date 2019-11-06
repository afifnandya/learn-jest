const calculator = require('./calculator.js');

test('number 1 + 2 equal 3', () => {
  expect(calculator.sum(1, 2)).toBe(3)
})

test('number 1 * 2 equal 2', () => {
  expect(calculator.multiply(1, 2)).toBe(2)
})

test('number 4 / 2 equal 2', () => {
  expect(calculator.divide(4, 2)).toBe(2)
})

test('number 4 - 2 equal 2', () => {
  expect(calculator.reduce(4, 2)).toBe(2)
})