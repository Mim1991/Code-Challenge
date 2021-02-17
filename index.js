// Task 1
const repeat = (array) => {
  return array.concat(array, array);
};

// Task 2
const reformat = (text) => {
  const noVowels = text.replace(/[aeiou]/gi, "");
  return noVowels[0].toUpperCase() + noVowels.slice(1).toLowerCase();
};

// Task 3
const next_binary_number = (binary) => {
  for (let i = binary.length - 1; i >= 0; i--) {
    if (binary[i] == 0) {
      binary[i] = 1;
      break;
    } else {
      binary[i] = 0;
    }
  }
  return binary.every((digit) => digit == 0) ? [1].concat(binary) : binary;
};

module.exports = { repeat, reformat, next_binary_number };
