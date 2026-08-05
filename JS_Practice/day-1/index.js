// Lesson 1: var, let, and const

var name = "Nitesh";
console.log(name);

// Problems with var:

// Function-scoped (not block-scoped).
// Can be redeclared.
// Can be reassigned.

var age = 24;
var age = 29;
console.log(age);

// Use let when the value needs to change.

let ageNumber = 22;
ageNumber = 28;
console.log(ageNumber);

// You cannot redeclare a let variable in the same scope:
// let ageNumber = 11;
// console.log(ageNumber)

// const = Use const when the value should not be reassigned.

const pi = 3.14;
console.log(pi)


// Block Scope

if(true){
  let  x = 20;
}
// console.log(x) // ReferenceError: x is not defined [let exists only inside the block.]

// var behaves differently:

if(true){
  var  y = 12;
}
console.log(y) // 20


// Template Literals
// Without template literals:

const myName = "Nitesh"
console.log("Hello" + name)

// With template literals:
console.log(`Hii ${myName}`)

// Practice Questions

// Q1 What is the output?
let a = 10;
a = 20;
// console.log(a) // 20

// Q2 What happens?
// const x = 100;
// x = 222;
// console.log(x)  // Assignment to constant variable.

// Q3 Convert this to a template literal:

let stdName = "Rakesh"
let city = "Bilaspur"

console.log("My name is "+ stdName + " I'm from "+ city);