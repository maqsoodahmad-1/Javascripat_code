"use strict"
let arr = ["Anmol","Sharma"];
document.write(arr,"<br>");
document.write("Destructuring the Array <br> <br>");
//Destructuring the array means assigning the values of array indexes to variables 
//Arrays can be destructured using the following syntax
let [firstName,lastName] = arr;
document.write(firstName,"<br>");
document.write(lastName,"<br><br><br>");
/*Using the split method to split the array */
document.write("Split method <br><br>");
let [firstname,lastname] = "Maqsood Ahamd".split(' ');
document.write(firstname,"<br>",lastname,"<br>");

/*Object destructuring  */
document.write("Destructuring the object<br><br>");

/*Creating the object */
let options = {
    title: "Menu",
    width: 100,
    heigth: 200
};

/*Destructuring the object */
let {title,width,height} = options;
document.write(title,"<br>");
document.write(width,"<br>");
document.write(height,"<br><br><br>"); 

document.write("Another way of destructuring the object<br><br>");
/*There is another way of destructuring the objects */
let {title1,width1,height1} = {title1:"Menu",width1:200,height1:300};
document.write(title1,"<br>");
document.write(width1,"<br>");
document.write(height1,"<br>"); 

/*Assignig the property with mathching the first letter of a variable */
document.write("Another method <br>");

let {width2:w,height2:h,title2} = {menu:"Menu",height2:230,width2:420};
document.write(title2,"<br>");
document.write(w,"<br>");
document.write(h,"<br>");



