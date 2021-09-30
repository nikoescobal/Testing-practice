const {
  expect
} = require('@jest/globals');
const {
  stringLength,
  reverseString
} = require('./functions/script.js');

describe('Testing Practice', () => {
  describe('Task 1: String length function', () => {
    test('Should return length of a sting', () => {
      expect(stringLength('hello')).toBe(5);
      expect(stringLength('hello')).toBeGreaterThanOrEqual(1);
      expect(stringLength('hello')).toBeLessThanOrEqual(10);
    });
  });

  describe('Task 2: Reverse a string function', () => {
    test('Should return the reverse of a string', () => {
      expect(reverseString('hello')).toBe('olleh');
      expect(reverseString('hello')).toEqual(expect.not.stringContaining('hello'));
    });
  });
});