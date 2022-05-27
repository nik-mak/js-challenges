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