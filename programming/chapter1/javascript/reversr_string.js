use strict"
let name = "Anmol";
let leng = name.length;
for(let i = (leng - 1) ; i >=0 ; i--)
{
 console.log(name[i]);
}
console.log("Original name");
let arr =[];
for(let j = (leng-1) ; j >= 0 ; j--)
{
 arr.push(name[j]);
} 
for (let k = 0 ; k < leng ; k++)
{
 console.log(arr[k]);
}
