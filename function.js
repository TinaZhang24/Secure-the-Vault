// Here is the pseudocode:

// define/initialize a string using const showing the message to user
// assign the operator "+" with operands "5" and "5" to variable "a" to get the first code - "10"
// assign the operator "-" with operands "60" and "20" to variable "b" to get the second code - "40"
// assign the operator "*" with operands "3" and "13" to variable "c" to get the third code - "39"
// use alert to create a popup dialog combining the text and the codes (using "+")

//Here is the coding:

// create a string for user//
const stringVar = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:"
// assign three variables //
let a = 5 + 5
let b = 60 - 20
let c = 3 * 13
// create a popup dialog displaying the string message with vault codes// 
alert( stringVar + " " + a + "-" + b + "-" + c )