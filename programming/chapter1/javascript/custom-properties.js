//Adding our own properties to functions 
function sayHi() {
  console.log("Hi");
  sayHi.counter++;
   }
sayHi.counter = 0 ;//initialization

console.log(`Called ${sayHi.counter} times`);
sayHi();
sayHi();
sayHi();
console.log(`Called ${sayHi.counter} times`);
