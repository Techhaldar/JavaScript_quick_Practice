// Error Handling
try {
  console.log("hi this is ratin haldar")
  console.log(x);
}

catch (err) {
  console.log("I am now inside the catch");
  console.log("Your Error is here:", err)
}

finally {
  console.log("hi, ratin i am vijay ")

}

// Create Error

let error = 100;

if (error == 100) {
  throw new Error("Invalid Json");
}

