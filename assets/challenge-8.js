/* 
CHALLENGE 8 
Throw Error when function square() is called
without arguments.
Create a new function and use it as default parameter to throw the error.
*/

"use strict";

function square(a) {
    console.log(a * a);
}

square(10);
// 100
square();
// BEFORE: NaN
// AFTER: Uncaught Error: Function square requires
// an argument!
