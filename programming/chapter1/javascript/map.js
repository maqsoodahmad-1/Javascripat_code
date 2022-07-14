"use strict"

/*javascript program for map */

let map = new Map();
map.set('name',"anmol");
let name1 = map.get('name');
document.write(name1,"<br>");
document.write(map.has(name1),"<br>");
map.set(1,200);
document.write(map.get(1),"<br>");
document.write(map.has(1),"<br>");
document.write(map.delete(1),"<br>");
document.write(map.has(1),"<br>");
document.write(map.size,"<br>");
document.write(map.clear(),"<br>");
document.write(map.size,"<br>");


/* map can have objects as keys as shown in the below example*/
let jhon = {name2 : "anmol"};
let visitCount = new Map();
visitCount.set(jhon,123);
document.write(visitCount.get(jhon));