"use strict"
let i = 0 , j = 1 , k = 0;
let n = Number(prompt("Enter the number of terms"));
document.write(i, "&nbsp");
document.write(j, "&nbsp");
for(let p = 2 ; p < n ; p++ ) {
    k = i + j ;
    document.write(k,"&nbsp");
    i = j;
    j = k;
}