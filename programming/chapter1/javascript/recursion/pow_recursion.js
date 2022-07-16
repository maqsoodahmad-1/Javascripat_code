//This program is used to calculate the power of ths numbers using recursion
"use strict"
function pow(x,n) {
   if(n == 1) {
     return x;
     }  else {
     return x * pow(x, n-1);
    }
}

console.log(`3 raised to power 2 is ${pow(3,2)}`);

    
