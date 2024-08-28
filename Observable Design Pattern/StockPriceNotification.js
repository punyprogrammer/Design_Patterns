// 
// 
// Demonstration of Observer pattern for  a stock price monitor
// Here the definintion of observer is a user who needs to subscribe 
class Stock{

      constructor(symbol ,price){
        this.symbol = symbol;
        this.price = price;
        // All the user that are subscribed to the stock price 
        this.observers = [];
      }
      subscribe(observer){
        this.generateSubsMsg(observer,true);
        this.observers.push(observer)
      }
      unsubscribe(observer){
        this.generateSubsMsg(observer,false);
        this.observers = this.observers.filter(obs => obs!==observer);
      }
      // notify will be done for all observers a
      // update is method defined for the observer
      notify(){
        this.observers.forEach((obs)=> obs.update(this));
      }
      // set price 
      setPrice(newPrice){
        this.price  = newPrice;
        this.notify();
      }
      generateSubsMsg(observer,subscribe){
      if(subscribe){
        console.log(`${observer.name} has subscribed to ${this.symbol}`)
      }
      else {
        console.log(`${observer.name} has unsubscribed to ${this.symbol}`)
      }
      }
}
class Investor {
  constructor(name){
    this.name = name;
  }
  update(stock) {
    console.log(`Hi ${this.name} the  price of ${stock.symbol} is now ${stock.price}`);
  }
}
// 
const googleStock = new Stock('GOOG',1234);
const investor1 = new Investor('Amardeep');
const investor2 = new Investor('Sourabh');
const investor3  = new Investor('Anil');
// subscribe 
googleStock.subscribe(investor1);
googleStock.subscribe(investor2);
googleStock.subscribe(investor3);

// unsubscribe 
googleStock.unsubscribe(investor2);
// setPrice should notify all users
googleStock.setPrice(1500)




