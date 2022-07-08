class Person {
  name;
constructor(name) {
  this.name =  name ;
  }
  introduceself() {
   console.log(` Hi! I'm ${this.name}`);
  }
}

/*const maqsood = new Person("maqsood");
maqsood.introduceself();

const anmol = new Person("Anmol");
anmol.introduceself();*/

/*class professor extends the properties of class person called inheritance*/
class Professor extends Person 
{

 teaches;
 
  constructor(name , teaches)
  {
   super(name);
   this.teaches = teaches;
  }
  
 introduceself() {
  console.log(`Hi! my name is ${this.name} and i will be your ${this.teaches} professor`);
  }

}

const professor = new Professor("Javid","Maths");
professor.introduceself();


/*Creating a class student that will inherit the properties of class person*/

class Student extends Person {
 
#year;

constructor(name,year) {

  super(name);
  this.year = year;
}

  introduceself() {
   console.log(`Hi my name is ${this.name} and i am a student of ${this.year} year`);
  }

  iseligible() { 
   return this.#year >1 ;
 }
}

const maqsood = new Student("maqsood",2);
maqsood.introduceself();
maqsood.iseligible();
console.log(maqsood.#year);
