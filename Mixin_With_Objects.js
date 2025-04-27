// Define mixins as objects with methods
const CanSwim = {
  swim() {
    console.log(`${this.name} is swimming!`);
  },
};

const CanFly = {
  fly() {
    console.log(`${this.name} is flying!`);
  },
};

const CanWalk = {
  walk() {
    console.log(`${this.name} is walking!`);
  },
};

// Class that uses mixins
class Animal {
  constructor(name) {
    this.name = name;
  }
}
// Assign mixins to the class prototype
Object.assign(Animal.prototype, CanWalk);

// Or to a specific instance
const duck = new Animal("Donald");
Object.assign(duck, CanSwim, CanFly);

duck.walk(); // Donald is walking!
duck.swim(); // Donald is swimming!
duck.fly(); // Donald is flying!
