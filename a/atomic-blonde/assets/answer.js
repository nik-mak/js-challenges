// export const atomicBlonde = (num) => {
//     // Your code here
//     const digits = num.toString().split('').map(Number)
//     console.log(digits)
// };

const atomicBlonde = (num) => {
  const digits = num.toString().split('').map(Number)
  const sum = digits.reduce((a, b) => a * b, 0)
  const mult = digits.reduce((a, b) => a * b, 1)
  return sum === mult ? `${num} is an atomic blonde number` : `${num} is not an atomic blonde number`  
}


console.log(atomicBlonde(123))
console.log(atomicBlonde(456))