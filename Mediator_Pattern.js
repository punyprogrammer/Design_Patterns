// The mediator pattern makes it possible for components to interact with each other through a central point: the mediator.
//  Instead of directly talking to each other, the mediator receives the requests, and sends them forward! In JavaScript,
// the mediator is often nothing more than an object literal or a function.

// For example we can check AirControll in flights which act as a mediator
// Another example is
// There are two components one is the mediator other is the collegaue

// Mediator
class ChatMediator {
  constructor() {
    this.users = [];
  }
  addUser(user) {
    this.users.push(user);
  }
  send(message, sender) {
    this.users.forEach((item) => {

      if (item.user !== sender) {
        item.receive(message);
      }
    });
  }
}
// collegue class
class User {
  constructor(user, mediator) {
    this.user = user;
    this.mediator = mediator;
  }
  send(message) {
    console.log(`User ${this.user} has send message ${message}`);
    this.mediator.send(message, this.user);
  }
  receive(message) {
    console.log(`User ${this.user} has received message ${message}`);
  }
}

// Usage
const mediator = new ChatMediator();
const User1 = new User("Amardeep", mediator);
const User2 = new User("John Mayer", mediator);
const User3 = new User("Jeff Buckley", mediator);
const User4 = new User("Albert King", mediator);
// add users to chat room
mediator.addUser(User1);
mediator.addUser(User2);
mediator.addUser(User3);
mediator.addUser(User4);
// Jeff sends a messsage
User3.send("Hi can we connect for jam session tonight");
User4.send("Can we do it day after tomorrow");
