let recipeMap = new Map([
    ['cucumber',200],
    ['tomatoes',300],
    ['onion',400]
]);
 //iteration over keys (vegetables)
  for(let vegetables of recipeMap.keys()) {
    document.write(vegetables);
    document.write('<br>')
  }

  //iteration over values
  document.write("<br> <br> <br>")
  document.write("Iterating over the values <br>")
  for(let amount of recipeMap.values()) {
      document.write(amount);
      document.write("<br>");
  }
  document.write("<br> <br> <br>")
  //iteration over the key value pairs
  document.write("Iterating over the key value pairs <br>")
  for(let entry of recipeMap) {
    document.write(entry);
    document.write("<br>");
  }
  document.write("<br> <br> <br>");
  document.write("Iterating over the map using the built in methid of map <br>")
  //built in method of map for iteraing over map keys and values
  recipeMap.forEach((key,value,map) => {
    document.write(`${key}: ${value}`);
    document.write("<br>");
  });