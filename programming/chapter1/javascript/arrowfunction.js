"use strict"
/*Arrow function that calculates the sum */
document.write("Arrow function 1","<br>");
let sum = (a,b) => a+b;
let x =Number(prompt("Enter the number 1 to sum "));
let y =Number(prompt("Enter the number 2 to sum "));
document.write(`Sum of ${x} and ${y} is ${sum(x,y)}`,"<br>","<br>");

/*Arrow function that calculates the multiplication of two numbers */
document.write("Arrow function 2","<br>");
let mul = (a,b) => a*b;
let p =Number(prompt("Enter the number 1 to multiply"));
let q =Number(prompt("Enter the number 2 to multiply"));
document.write(`Product of ${p} and ${q} is ${mul(p,q)}`,"<br>","<br>");

/*Multiline arrow function */
let division = (a,b) => {
    let result = a/b;
    return result;
} 

let dividend = Number(prompt("Enter the dividend"));
let divisor = Number(prompt("Enter the divisor"));
document.write(`${dividend} divided by ${divisor} is equal to ${division(dividend, divisor)}`,"<br>","<br>");

/*Arrow function without arguments */
document.write("Multiple line arrow function","<br>");
let age = Number(prompt("What is your age",18));
let welcome = (age < 18) ? () => document.write("HELLO","<br>"):
                () => document.write("GREETINGS","<br>");
welcome();