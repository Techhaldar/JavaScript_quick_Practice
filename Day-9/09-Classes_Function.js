// class Student {
//   Name = 'Abhay';
//   wt = 62;
//   ht = 165;
//   age = 20;

//   walking() {
//     console.log("Hi I'm Walking");
//   }

//   constructor(newAge, newHeight) {
//     this.age = newAge;
//     this.ht = newHeight;
//   }

// }

// let obj = new Student(22, 170);
// console.log(obj.Name);
// console.log(obj.age);
// console.log(obj.wt);
// console.log(obj.walking());

// console.log(obj.ht)

// function myName(firstName = "Hero", lastName = firstName.toUpperCase()) {
//   console.log(`My Name is : ${firstName} ${lastName}`);

// }

// myName("ratin", "Haldar");


function solve(value = { age: 20, wt: 90, ht: 168 }) {
  console.log("hii this is ratin", value);
}

solve(undefined);