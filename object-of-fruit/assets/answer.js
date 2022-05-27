// export const objectsOfFruit = () => {
//     // Your code here
// };

class Fruit {
  constructor(name, colour, bites) {
    this.name = name
    this.colour = colour
    this.bites = bites
  }
  takeBite() {
    if (this.bites > 0) {
      console.log("So yummy!")
      this.bites--
    } else {
      console.log("All gone!")
    }
  }
}

let apple = new Fruit("apple", "red", 3)

apple.takeBite()
apple.takeBite()
apple.takeBite()
apple.takeBite()
