/* 
CHALLENGE 6
Use arrow functions instead of functions
where possible.
*/

"use strict";

let mult = (a, b) => a * b

setTimeout(
  () => console.log(mult(5, 10)),
  1000
);
// 50