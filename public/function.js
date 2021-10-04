"use strict";
var greet = function () {
    console.log("hello,world");
};
// greet='hello' //cant be assigned to string because it needs to be a function
var greets;
// greets="hello" needs to be a function 
var add = function (a, b) {
    console.log(a + b);
};
add(5, 5); //can be called 
// add(5,'5')  cannot be called because both params should be string
//To make a param optional inside a function
var adds = function (a, b, c) {
};
