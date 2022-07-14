let set = new Set();
let anmol = {name :"anmol"};
let praful = {name :"praful"};
let junaid = {name :"juniad"};
  set.add(anmol);
  set.add(praful);
  set.add(junaid);
  set.add(anmol);
  set.add(junaid);
  document.write(`The size of set is ${set.size}<br>`)

  //iterating over sets
  for(let user of set) {
    document.write(user.name);
    document.write("<br>");
  }