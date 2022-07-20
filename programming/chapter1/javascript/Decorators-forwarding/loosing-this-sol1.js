//Loosing this while using the setTimeout function
"use strict"
let user = {
   firstname: "Jhon",
   sayHi() {
     console.log(`Hi ${this.firstname}`);
     }
}
setTimeout(function() {
   user.sayHi();//Hi Jhon
  }, 2000);
//Same as above but the shorter one 

setTimeout(() => user.sayHi(), 1000);
