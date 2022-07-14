"use strict"
/*This program is used to verify the scope of 
variables defined with the different keywords */
//variable scope using let
function scope() {
    let value  = 200;
    if(value === 200 ) {
        console.log(`value is ${value} `);
    } else {
        console.log(`Value is not equal to 200`)
    }
}
scope();
//variable scope using var 
{
var val = 200;
console.log(val);
}
console.log(`The value outside the block is ${val}`);
//variable scope using cosnt 
{
    const val1 = 300;
    console.log(`Value inside the block is ${val1}`);
}

//console.log(`Value outside the block ${val1}`);  gives the error because the scope of const is a block scope 

{
    let val2 = 400 ;
    console.log(`Value inside the block is ${val2}`);
}

{
   // console.log(`Value outside the block is ${val2}`);//This would also give an error because the scope of varaible defined with let is a block scope 
}