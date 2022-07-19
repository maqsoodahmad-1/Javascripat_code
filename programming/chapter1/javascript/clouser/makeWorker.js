function makeWorker () {
   let name = "Anmol";
   return function() {
       console.log(name);
       };
     }
 let name = "Maqsood";
 let work = makeWorker();
 work();
