// export const magicNumber = () => {
//     // Your code here

// };
const magicNumber = (num) => {
  let count = 0
  do {
    const ascending = num.toString().split('').map(Number).sort((a, b) => a - b)
    const descending = num.toString().split('').map(Number).sort((a, b) => b - a)
  
    const smallest = ascending.join('')
    const largest = descending.join('')

    num = largest - smallest
    count++
  } while (num != 6174)
  return count
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter a 4 digit number with at least 2 different numbers: ', number => {
  console.log(`It takes ${magicNumber(number)} iterations to get to the magic number`);
  readline.close();
});

magicNumber(8082)