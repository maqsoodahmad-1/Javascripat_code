//we can ommit constructors when we don't need to do not have any  special initialization
"use strict"
class Animal {
  sleep() {
   console.log("ZZZZZZZZZ");
   }
 }

const cow = new Animal();
cow.sleep();


