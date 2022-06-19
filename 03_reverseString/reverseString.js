// const reverseString = function (string) {
//   const lettersArray = [];

//   for (const letter of string) {
//     lettersArray.push(letter);
//   }

//   const reversedArray = [];

//   for (let i = lettersArray.length - 1; i >= 0; i--) {
//     reversedArray.push(lettersArray[i]);
//   }

//   return reversedArray.join("");
// };

const reverseString = function (string) {
  return string.split("").reverse().join("");
};

// reverseString("Hello world");

// Do not edit below this line
module.exports = reverseString;
