//  Decorator Pattern
// It is a structural pattern that allows behaviour to be added to individual objects
// without affecting the behaviour of other objects
// The key components of the pattern
// 1.Component ,the interface to which behavuour can be added
// 2.Concrete Component - an objcect to which addtional responsibilities can be addes
// 3.Decorator - Maintains a reference to the Component and defines an interface
// 4.ConcreteDecorator - Adds responsibility to a Component

// Component
class Product {
  getPrice() {
    return 0;
  }
}
// Concrete Component
class BasicProduct extends Product {
  constructor(price) {
    super();
    this.price = price;
  }
  getPrice() {
    return this.price;
  }
}
// Decorator
class ProductDecorator extends Product {
  constructor(product) {
    super();
    this.product = product;
  }
  getPrice() {
    return this.product.getPrice();
  }
}
// Concrete Decorator
class DiscountDecorator extends ProductDecorator {
  constructor(product, discount) {
    super(product);
    this.discount = discount;
  }
  getPrice() {
    return this.product.getPrice() * (1 - this.discount);
  }
}

class TaxDecorator extends ProductDecorator {
  constructor(product, tax) {
    super(product);
    this.tax = tax;
  }
  getPrice() {
    return this.product.getPrice() * (1 + this.tax);
  }
}

// Usage

let product = new BasicProduct(100);   //Base price 100
product = new DiscountDecorator(product, 0.1);  //Add discount of 10%
product = new TaxDecorator(product, 0.2);    //Add tax of 20%
