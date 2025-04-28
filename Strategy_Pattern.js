// Strategy is a behavourial design pattern that enables selecting an algorithm behaviour at runtime
// The key components are Strategy ,ConcreteStrategy and the Context
// 1.Strategy :Declares a interface common to all supported algoritms
// 2.ConcreteStategy : Implement the algorithm defined in Strategy interface
// 3.Context maintains a reference to Strategy and delegates algorithm exection to currently set Strategy

// Implementation of payment system

// Strategy interface
class PaymentStrategy {
  pay(amount) {
    throw new Error("This should b overwriddern");
  }
}

// Concrete Strategy
class CreditCardStrategy extends PaymentStrategy {
  constructor(cardNumber, cardHolder, expiryDate) {
    super();
    this.cardNumber = cardNumber;
    this.cardHolder = cardHolder;
    this.expiryDate = expiryDate;
  }
  pay(amount) {
    console.log(`Paid ${amount} using card number ${this.cardNumber}`);
  }
}
class PaypalStrategy extends PaymentStrategy {
  constructor(email) {
    super();
    this.email = email;
  }
  pay(amount) {
    console.log(`Paid amount${amount} using email id ${this.email}`);
  }
}
class BitcoinPayment extends PaymentStrategy {
  constructor(walletAddress) {
    super();
    this.walletAddress = walletAddress;
  }
  pay(amount) {
    console.log(`Paid ${amount} using Bitcoin: ${this.walletAddress}`);
  }
}

// Context
class Order {
  constructor() {
    this.items = [];
    this.paymentStrategy = null;
  }
  setPaymentStrategy(paymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }
  addItem(item, price) {
    this.items.push({ item, price });
  }
  calculateTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
  checkout() {
    const total = this.calculateTotal();
    if (!this.paymentStrategy) {
      throw new Error("No payment strategy set!");
    }
    this.paymentStrategy.pay(total);
  }
}

// Client
const order = new Order();
order.addItem("Laptop", 1000);
order.addItem("Phone", 500);
order.setPaymentStrategy(
  new CreditCardPayment("1234-5678-9012-3456", "John Doe", "12/25")
);
order.checkout();
order.setPaymentStrategy(new PayPalPayment("[email protected]"));
order.checkout();
order.setPaymentStrategy(new BitcoinPayment("1A2b3C4d5E6F7g8H9I0J"));
order.checkout();


