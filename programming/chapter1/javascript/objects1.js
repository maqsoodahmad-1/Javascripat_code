let user = {
     name:"Anmol sharma",
     age: 20,
}

/*Accessing the objects keys using the Object.key(obj )  method*/
document.write("Accessing the keys of an object using <br>")
document.write(Object.keys(user));
document.write("<br><br><br>")

/*Accessing the values using the object */
document.write("Accessing the values of an object <br>");
document.write(Object.values(user));
document.write('<br><br><br>');

/*Accessing the key value pair of an object */
document.write("Accessing the keys and values of an object <br>");
document.write(Object.entries(user));