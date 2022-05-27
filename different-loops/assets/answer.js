// export const differentLoops = () => {
//     // Your code here
// };

function differentLoops(array) {
  for (let element of array) {
    console.log(element)
  }

  function display(item) {
    console.log(item)
  }
  array.forEach(display)

  array.forEach(item => console.log(item))

  array.reduce((a, b) => a + b, 0)
}