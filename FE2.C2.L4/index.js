// // Write a JavaScript function which accepts a string and returns white spaces trimmed, uppercase version of that string.

// const toUpper = (str) => {
//   const trimmed = str.trim();
//   return trimmed.toUpperCase();
// };

// console.log(toUpper(" con rad"));

//  Ask user to enter a number. Write a function that returns the square of that number

const removeIndex = (str, index) => {
  return str.split("").pop(index);
};

console.log(removeIndex("conrad", 1));
