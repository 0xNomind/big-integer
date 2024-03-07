const { addBigIntegers, multiplyBigIntegers } = require("./bigInteger");

// Test addition
console.log(addBigIntegers("12345678901234567890", "98765432109876543210")); // Output should be 111111111011111111100

// Test multiplication
console.log(
  multiplyBigIntegers("12345678901234567890", "98765432109876543210")
); // Output should be 12193263112175907142666953802303274900
