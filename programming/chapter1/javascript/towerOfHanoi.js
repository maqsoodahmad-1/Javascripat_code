/*Tower of Hanoi problem */

let  n = Number(prompt("Enter the number of n disks"));
let L = 'L',R = 'R',M = 'M';
function TOH(n,L,M,R) {
    if(n === 0) {
        return    0 ;
    } else {
        TOH(n-1,L,R,M);
        document.write(`${L}------>${R}  <br>`);
        TOH(n-1,M,L,R);
    }
}
TOH(n,L,M,R);