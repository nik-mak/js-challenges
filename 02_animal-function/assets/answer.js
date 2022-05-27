//Rewrite this code without using ES6 Classes

"use strict";

class Mammal {
    constructor(name) {
        this.hair = true;
        this.warmblooded = true;
    }

    breath() {
        console.log("I love H2O");
    }

    speak(input) {
        return `I am a ${input}`;
    }
}

class Lion extends Mammal {
    constructor(name) {
        super();
        this.type = "Lion";
        this.name = name;
    }

    roar() {
        return super.speak(this.type) + "! Here me ROAR!";
    }
}

let simba = new Lion("simba");
console.log(simba.roar());

// YOUR CODE HERE
// export const fruitClass = () => {
//     // Your code here
// };

function Mammal(name) {
  this.hair = true
  this.warmblooded = true
}

Mammal.prototype.breath = function() {
  console.log("I love H2O")
}

Mammal.prototype.speak = function(input) {
  return `I am a ${input}`
}

function Lion(name) {
  Mammal.call(this, name)
  this.type = "Lion"
}

Lion.prototype = Object.create(Mammal.prototype)

Lion.prototype.roar() = function() {
  return super.speak(this.type) + "! Here me ROAR!"
}