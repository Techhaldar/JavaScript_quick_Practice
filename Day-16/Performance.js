// Code - 1
const time1 = performance.now();
console.log(time1)
for (let i = 0; i <= 100; i++) {
  let para = document.createElement('p');
  para.textContent = "this is para : " + i;
  document.body.appendChild(para);
}

const time2 = performance.now();

console.log("total time by code-1 : " + (time2 - time1));

console.log(time2)


// Code - 2
const time3 = performance.now();
console.log(time3)
let myDiv = document.createElement('div');

for (let i = 1; i <= 100; i++) {
  let para = document.createElement('p');
  para.textContent = 'this is para' + i;
  myDiv.appendChild(para);
}

document.body.appendChild(myDiv);

const time4 = performance.now();

console.log("total time by code-2 : " + (time4 - time3));
console.log(time4)

