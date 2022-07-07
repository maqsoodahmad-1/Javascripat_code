const person = {
   name : ['Bob','smith'] ,
   age : 32,
   bio : function() {
       console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
     },
   introduceSelf : function() {
       console.log(`Hi I'M ${this.name[0]}.`);
       },
   };

console.log(person.bio());
console.log(person.name[0]);
