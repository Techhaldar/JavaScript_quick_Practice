// myName();

// function myName() {
//   console.log("Ratin Haldar");
// }

// var age = 20;
// console.log(age);

// function greetMe(greet, fullName){
//   console.log("hello", fullName);
//   greet();
// }

// function greet() {
//   console.log("hii this is Ratin Haldar");
// }
// greet();

// greetMe(greet, "Ratin Haldar");

// function solve(number){
//   return function(number){
//     return number * number
//   }
// }

// let ans = (solve(5));
// console.log(ans(10));

const arr = [
  function(a,b){
    return a+b;
  },
  function(a,b){
    return a-b;
  },
  function(a,b){
    return a*b;
  },
  function(a,b){
    return a/b;
  },
  function(a,b){
    return a%b;
  }
]

let first = arr[2];
let ans = first(3,2);
console.log(ans);