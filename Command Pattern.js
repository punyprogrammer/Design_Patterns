/* With the Command Pattern, we can decouple objects that execute a certain task from the object that calls the method. */

class OrderManager {
  constructor() {
    this.orders = [];
  }
  execute(command, ...args) {
    return command.execute(this.orders, ...args);
  }
}
class Command {
  constructor(execute) {
    this.execute = execute;
  }
}
function PlaceOrderCommand(order, id) {
  return new Command((orders) => {
    orders.push(id);
    return `You have successfully ordered ${order} ${id} `;
  });
}
function CancelOrderCommand(id) {
  return new Command((orders) => {
    orders = orders.filter((item) => item !== id);
  });
}
function TrackOrderCommand(id) {
  return new Command(() =>
    console.log(`Your order ${id} will arrive in 20 minutes.`)
  );
}
const manager = new OrderManager();

manager.execute(new PlaceOrderCommand("Pad Thai", "1234"));
manager.execute(new TrackOrderCommand("1234"));
manager.execute(new CancelOrderCommand("1234"));
