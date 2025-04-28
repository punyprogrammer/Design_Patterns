// The state is behavourial design pattern that allows an object to change its behaviour when the state changes
// There are three components Context,State,Concrete
// The Context is the main class
// The state is an interface that all concrete states should implement
// The pattern is useful for scenarios where an object needs to exhibit different behaviours based on state change

// State interface
class State {
  processOrder() {}
  shipOrder() {}
  deliverOrder() {}
}

// Concrete States
class NewOrderState extends State {
  constructor(order) {
    super();
    this.order = order;
  }
  processOrder() {
    console.log("Processing the order.");
    this.order.setState(this.order.processingState);
  }
  shipOrder() {
    console.log("Cannot ship. The order is not processed yet.");
  }
  deliverOrder() {
    console.log("Cannot deliver. The order is not shipped yet.");
  }
}

class ProcessingOrderState extends State {
  constructor(order) {
    super();
    this.order = order;
  }
  processOrder() {
    console.log("Order is already being processed.");
  }
  shipOrder() {
    console.log("Shipping the order.");
    this.order.setState(this.order.shippedState);
  }
  deliverOrder() {
    console.log("Cannot deliver. The order is not shipped yet.");
  }
}

class ShippedOrderState extends State {
  constructor(order) {
    super();
    this.order = order;
  }
  processOrder() {
    console.log("Order is already processed.");
  }
  shipOrder() {
    console.log("Order is already shipped.");
  }
  deliverOrder() {
    console.log("Delivering the order.");
    this.order.setState(this.order.deliveredState);
  }
}

class DeliveredOrderState extends State {
  constructor(order) {
    super();
    this.order = order;
  }
  processOrder() {
    console.log("Order is already delivered.");
  }
  shipOrder() {
    console.log("Order is already delivered.");
  }
  deliverOrder() {
    console.log("Order is already delivered.");
  }
}
//
// Context
class Order {
  constructor() {
    this.newOrderState = new NewOrderState(this);
    this.processingState = new ProcessingOrderState(this);
    this.shippedState = new ShippedOrderState(this);
    this.deliveredState = new DeliveredOrderState(this);
    this.state = this.newOrderState;
  }
  setState(state) {
    this.state = state;
  }
  processOrder() {
    this.state.processOrder();
  }
  shipOrder() {
    this.state.shipOrder();
  }
  deliverOrder() {
    this.state.deliverOrder();
  }
}
// Client
const order = new Order();
order.processOrder(); // Processing the order.
order.shipOrder(); // Shipping the order.
order.deliverOrder(); // Delivering the order.
order.processOrder(); // Order is already delivered.
order.shipOrder(); // Order is already delivered.
order.deliverOrder(); // Order is already delivered.
