/**
 * @returns {number} a random number between 1 and 10 (inclusive)
 */
// function randomNumber() {
//     const fraction = Math.random(); //a number between 0 and 1 (exclusive)
//     return 1 + Math.floor(fraction * 10);
// }

// const randomNumber = () => {
//   const fraction = Math.random(); //a number between 0 and 1 (exclusive)
//   return 1 + Math.floor(fraction * 10);
// };

const randomNumber = () => 1 + Math.floor(Math.random() * 10);

export { randomNumber };

//The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
