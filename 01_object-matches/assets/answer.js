// export const objectMatches = () => {
//     // Your code here
// };

function compareObjects(obj1, obj2) {
  for (key in obj2) {
    if(obj1[key] != obj2[key]) {
      return false
    }
  }
  return true
}