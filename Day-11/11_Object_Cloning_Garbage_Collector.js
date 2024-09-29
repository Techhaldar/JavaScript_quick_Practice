// console.log("Ratin Haldar");

// let src = {
//   age: 19,
//   wt: 62,
//   ht: 160
// };

// Method-1 Object Cloning
// src.age = 25;
// let dest = { ...src };
// console.log("src: ", src)
// console.log("dest: ", dest);

// Method-2 Object Cloning

// let dest = Object.assign({}, src);

// src.age = 25;
// console.log("dest: ", dest);
// console.log("src: ", src)

// Method-3 Object Cloning

let src = {
  age: 19,
  wt: 62,
  ht: 160
};

let dest = {};

for (let key in src) {
  let newKey = key;
  let newValue = src[key];
  dest[newKey] = newValue;
  console.log(key);
}

src.age = 90;
console.log("dest: ", dest);

console.log("src: ", src);
