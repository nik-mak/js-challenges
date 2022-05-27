//Rewrite code below using ES6 Classes

"use strict";

// function Food(calories) {
//     this.calories = calories;
// }

// function Fruit(title, price, calories) {
//     Food.call(this, calories);
//     this.title = title;
//     this.price = price;
// };

// Fruit.prototype = Object.create(Food.prototype);

// Fruit.prototype.priceInfo = function() {
//     return `Price of one ${this.title} is $${this.price}`;
// };



// ------------------
class Food {
  constructor(calories) {
    this.calories
  }
}

class Fruit extends Food {
  constructor(title, price, calories) {
    super(calories)
    this.title = title
    this.price = price
  }
  priceInfo() {
    return `Price of one ${this.title} is $${this.price}`
  }
}

var apple = new Fruit("Apple", 2, 150)
console.log(apple.priceInfo())

var orange = new Fruit("Orange", 3, 180)
console.log(orange.priceInfo())
