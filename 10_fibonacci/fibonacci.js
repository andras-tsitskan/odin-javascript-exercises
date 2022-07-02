const fibonacci = function (n) {
  if (n < 0) {
    return "OOPS";
  } else if (n === 0) {
    return 0;
  } else {
    const array = [1, 1];

    for (let i = 2; i <= n; i++) {
      array.push(array.at(-1) + array.at(-2));
    }

    return array[n - 1];
  }
};

//   ODIN SOLUTION:

// const fibonacci = function(count) {
//     if (count < 0) return "OOPS";
//     if (count === 0) return 0;
//     let a = 0;
//     let b = 1;
//     for (let i = 1; i < count; i++) {
//       const temp = b;
//       b = a + b;
//       a = temp;
//     }
//     return b;
//   };

// Do not edit below this line
module.exports = fibonacci;
