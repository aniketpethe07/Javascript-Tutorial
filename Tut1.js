/* Variables in Javascript*/
isString = "Ani";
isNumber = 7;
isFloat = 7.7;
isBoolean = false;
isNull = null; // null means empty
isUndefined = undefined; // undefined means unknown
//JS is Dynamically Typed language i.e. no need to specify the datatype of variable
console.log(isNull);

//var
//can be re-declared & updated (global scope) 
var firstVariable = 56; 
var firstVariable = 56; //no error
console.log(firstVariable); 

//let
//cannot be re-declared but can be updated (block scope)
let secondVariable = 56; 
// let secondVariable = 56; //error cannot re-declare
secondVariable = 66; //can be updated 
console.log(secondVariable); 


//const
//cannot be re-declared & updated (block scope)
const thirdVariable = 56; 

