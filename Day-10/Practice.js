// Question:1 Write a function to calculate the sum of all numbers in an array.

// Problem:
// Create a JavaScript function sumArray(numbers) that accepts an array of numbers and returns the sum of all the numbers in the array.

// Example:
// js
// Copy code
// let numbers = [1, 2, 3, 4, 5];
// console.log(sumArray(numbers)); // Output should be 15
// Hints:
// You can use a loop (for/while) to iterate through the array.
// You can also explore array methods like reduce() to solve this problem in a more concise way.

// function sumArray(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i]
//   }
//   return sum;
// }

// console.log(sumArray([2, 4, 5, 1])) // Output should be 12

// *---------------------------*--------------------------*

// Question 2: Write a function to find the maximum number in an array.
// Problem:
// Create a JavaScript function findMax(numbers) that accepts an array of numbers and returns the largest number in the array.
// let numbers = [5, 3, 9, 1, 6];
// console.log(findMax(numbers)); // Output should be 9

function findMax(numbers) {
  return Math.max.apply(null, numbers)
}
let numbers = [1, 3, 6, 7];
console.log(findMax(numbers))