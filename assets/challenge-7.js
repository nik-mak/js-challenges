/* 
CHALLENGE 7
Answer following question:
Set default value of the mult parameter
in the multiplyBy() function.
*/

"use strict";

function multiplyBy(a, mult) {
//The below line will break our logic, think about why.
    mult = mult || 2;
    console.log(a * mult);
}

multiplyBy(2);
// should print - 4
multiplyBy(2, undefined);
// should print - 4
multiplyBy(2, 0);
// should print - 0
multiplyBy(5, 10);
// should print - 50
