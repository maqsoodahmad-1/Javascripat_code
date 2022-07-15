"use strict"
document.write("<br><br>")
document.write("Making an object from the entries of an array<br><br>")
let prices = Object.fromEntries([
    ['Banana',200],
    ['Mango' ,300],
    ['Apple' ,400]
]);
document.write(`Price of Banana ${prices.Banana}`);