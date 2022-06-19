const removeFromArray = function (initialArray, ...removables) {
  let newArray = initialArray;

  for (const removable of removables) {
    // console.log(removable);
    newArray = newArray.filter((item) => {
      return item !== removable;
    });
    // console.log(newArray);
  }

  //   console.log(newArray);
  //   console.log(initialArray);
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
