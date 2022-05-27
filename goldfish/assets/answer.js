// export const goldfish = () => {
//     // Your code here
// };

const prompt = require('prompt-sync')();

arr = []
function goldfish(input) {
  arr.push(input)
  if (arr.length > 5) {
    arr.shift()
  }
  arr.forEach(entry => console.log(entry))
}

let exit = false

while (!exit) {
  let entry = prompt('Dear Diary: ')

  if (entry == "exit") {
    exit = true
  } else {
    goldfish(entry)
  }
}
