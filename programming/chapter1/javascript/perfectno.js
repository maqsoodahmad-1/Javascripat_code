"use strict"
let n = Number(prompt("Enter the numebr "));
let sum = 0;
for(let i = 0 ; i < n ; i++) {
    if((n % i) === 0 ) {
        sum += i;
    }
}

if(sum === n) {
    document.write("Number is a perect number","<br>");
} else {
    document.write("Number is not a perfect number ","<br>");
}