const palindromes = function (string) {
  const regex = /\W/gi;
  string = string.toLowerCase().replaceAll(regex, "");

  let reversed = string.split("").reverse().join("");

  console.log(string);
  console.log(reversed);

  return string === reversed;
};

// Do not edit below this line
module.exports = palindromes;
