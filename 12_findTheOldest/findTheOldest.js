const findTheOldest = function (array) {
  array.sort((a, b) => {
    if (a.yearOfDeath && b.yearOfDeath) {
      const previous = a.yearOfBirth - a.yearOfDeath;
      const next = b.yearOfBirth - b.yearOfDeath;

      if (previous < next) {
        return -1;
      } else if (previous === next) {
        return 0;
      } else {
        return 1;
      }
    } else {
      a.yearOfDeath = new Date().getFullYear();
      b.yearOfDeath = new Date().getFullYear();

      const previous = a.yearOfBirth - a.yearOfDeath;
      const next = b.yearOfBirth - b.yearOfDeath;

      if (previous < next) {
        return -1;
      } else if (previous === next) {
        return 0;
      } else {
        return 1;
      }
    }
  });

  return array[0];
};

// ODIN SOLUTION

// const findTheOldest = function (array) {
//   return array.reduce((oldest, currentPerson) => {
//     const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
//     const currentAge = getAge(
//       currentPerson.yearOfBirth,
//       currentPerson.yearOfDeath
//     );
//     return oldestAge < currentAge ? currentPerson : oldest;
//   });
// };

// const getAge = function (birth, death) {
//   if (!death) {
//     death = new Date().getFullYear();
//   }
//   return death - birth;
// };

// Do not edit below this line
module.exports = findTheOldest;
