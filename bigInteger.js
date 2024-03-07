const BigNumber = require("bignumber.js");

function addBigIntegers(a, b) {
  return new BigNumber(a).plus(new BigNumber(b)).toString();
}

function multiplyBigIntegers(a, b) {
  return new BigNumber(a).times(new BigNumber(b)).toString();
}

module.exports = {
  addBigIntegers,
  multiplyBigIntegers,
};
