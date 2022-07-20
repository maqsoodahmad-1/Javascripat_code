"use strict"
let user = {};
Object.defineProperty(user, "name", {
    value: "jhon"
   });
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(JSON.stringify(descriptor, null, 2 ));
