const stringLength = (str) => {
  if (str.length >= 1 && str.length < 10) {
    return str.length;
  }
};

const reverseString = (str) => str.split("").reverse().join("");

module.exports = {
  stringLength,
  reverseString,
};
