"use strict"
let user = {
   name: "Jhon",
   };
 
//Derining the properties of object

Object.defineProperty(user, 'name', {
      writable: false
  });
//Trying to change the name property of the user object which is read only set above

//user.name = "Anmol"; This line gives the error can't change the value of the object as it is readonly something like that

