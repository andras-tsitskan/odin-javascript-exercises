const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  // let sum = 0;
  // for (const num of array) {
  //   sum += num;
  // }
  // return sum;

  return array.reduce((sum, num) => sum + num, 0);
};

const multiply = function (array) {
  // let total = 1;
  // for (const num of array) {
  //   total *= num;
  // }
  // return total;

  // return array.reduce((total, nextNum) => total * nextNum, 1);

  // if (array.length) {
  //   return array.reduce((total, nextNum) => total * nextNum, 1);
  // } else {
  //   return 0;
  // }

  return array.length
    ? array.reduce((total, nextNum) => total * nextNum, 1)
    : 0;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  if (num === 0) {
    return 1;
  } else {
    let result = 1;
    // while (num > 0) {
    //   result *= num;
    //   num--;
    // }
    for (let i = num; i > 0; i--) {
      result *= i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
