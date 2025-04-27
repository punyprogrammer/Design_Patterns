// Functional mixin - returns a function that adds to the target
const Swimmer = (Base) => class extends Base {
  swim() {
    console.log(`${this.name} is swimming!`);
  }
};

const Flyer = (Base) => class extends Base {
  fly() {
    console.log(`${this.name} is flying!`);
  }
};

const Walker = (Base) => class extends Base {
  walk() {
    console.log(`${this.name} is walking!`);
  }
};

// Create a class by composing mixins
class Duck extends Swimmer(Flyer(Walker(Animal))) {
  constructor(name) {
    super(name);
  }
  
  quack() {
    console.log(`${this.name} says Quack!`);
  }
}

const donald = new Duck('Donald');
donald.walk();  // Donald is walking!
donald.swim();  // Donald is swimming!
donald.fly();   // Donald is flying!
donald.quack(); // Donald says Quack!
