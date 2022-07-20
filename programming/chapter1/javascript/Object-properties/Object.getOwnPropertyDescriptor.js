//Properties of object 
"use strict"
let user = {
  name: "Anmol"
};
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(JSON.stringify(descriptor, null ,2 ));
