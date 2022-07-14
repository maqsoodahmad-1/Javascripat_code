let map = new Map([
    ['1', 'string'],
    [1, 'num1',],
    [true,'boolean']
]);
document.write(map.get(1));

/*map from an object using the built in  method Object.entries(obj) */
 let map1 = new Map(Object.entries({
    firstName : "Anmol",
    age :30
 }));
 document.write(map1.get("firstName"));


