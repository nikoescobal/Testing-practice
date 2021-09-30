const stringLength = (str) => {
  if (str.length >= 1 && str.length < 10) {
    return str.length;
  }
};

const reverseString = (str) => str.split('').reverse().join('');


class Calculator {
  static sum = (num1, num2) => (num1 * 10 + num2 * 10) / 10;

  static difference = (num1, num2) => (num1 * 10 - num2 * 10) / 10;

  static product = (num1, num2) => num1 * num2;

  static quotient = (num1, num2) => num1 / num2;

}
module.exports = {
  stringLength,
  reverseString,
  Calculator
};