const {
  expect
} = require('@jest/globals');
const {
  stringLength,
  reverseString,
  Calculator,
  capitalizeFirstChar,
} = require('./functions/script.js');

describe('Testing Practice', () => {
  describe('Task 1: String length function', () => {
    test('Should return length of a sting', () => {
      expect(stringLength('hello')).toBe(5);
      expect(stringLength('hello')).not.toBe(4);
      expect(stringLength('hello')).toBeGreaterThanOrEqual(1);
      expect(stringLength('hello')).not.toBeGreaterThanOrEqual(20);
      expect(stringLength('hello')).not.toBeLessThanOrEqual(0);
      expect(stringLength('hello')).not.toBeUndefined();
      expect(stringLength('hello')).not.toBeNull();
    });
  });

  describe('Task 2: Reverse a string function', () => {
    test('Should return the reverse of a string', () => {
      expect(reverseString('hello')).toBe('olleh');
      expect(reverseString('hello')).toEqual(
        expect.not.stringContaining('hello')
      );
    });
  });

  describe('Task 3: Testing Calculation Operation', () => {
    test('Should return sum of numbers', () => {
      expect(Calculator.sum(4, 3)).toEqual(7);
      expect(Calculator.difference(10, 3)).toEqual(7);
      expect(Calculator.product(4, 3)).toEqual(12);
      expect(Calculator.quotient(20, 4)).toEqual(5);
    });
  });

  describe('Task 4: Capitalize First letter of string', () => {
    test('Should return sum of numbers', () => {
      expect(capitalizeFirstChar('when')).toEqual('When')
      expect(capitalizeFirstChar('DESTRUCTURING')).toEqual('Destructuring')
    });
  });
});