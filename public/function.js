"use strict";
//function signature with return type
let greeting; //declaring the return type as void
greeting = (name, last) => {
    console.log(`${name} says ${last}`);
};
let ab;
let greet = () => {
    console.log("hello,world");
};
// greet='hello' //cant be assigned to string because it needs to be a function
let greets;
// greets="hello" needs to be a function 
const add = (a, b) => {
    console.log(a + b);
};
add(5, 5); //can be called 
// add(5,'5')  cannot be called because both params should be string
//To make a param optional inside a function
const adds = (a, b, c) => {
};
