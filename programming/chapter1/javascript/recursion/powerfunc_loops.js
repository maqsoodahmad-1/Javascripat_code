//Power function using the loop
function pow(x,n) {
   let result = 1;
   for(let i = 0 ; i < n ; i++) {
      result *= x ;
     }
    return result;
  }
console.log(`2 raised power 3 is ${pow(2,3)}`);

