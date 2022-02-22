class Car {
  constructor(make, speed) {
    // make/speed
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    // accelerate method that adds 10 to the speed
    this.speed += 10;
    // log '"make" is going "speed" km/h'
  }

  brake() {
    // brake method that will subtract 5 from the speed
    this.speed -= 5;
    // log '"make" is going "speed" km/h'
  }
}

const hondaCivic = new Car('Honda', 60);
const toyotaPrius = new Car('Toyota', 40);
// const hondaCivic = {
//   make: 'Honda',
//   speed: 60,
// };

// console.log(hondaCivic); // log car
hondaCivic.accelerate(); // updating speed + 10
hondaCivic.brake(); // subtract 5 from speed
hondaCivic.accelerate(); // updating speed + 10
// console.log(hondaCivic); // log car
// console.log(toyotaPrius);

// Create an EV from extending Car
// it will need a charge property

class EV extends Car {
  constructor(make, speed, charge) {
    super(make, speed);
    this.charge = charge;
  }
  //   method to charge the battery
  chargeBattery(chargeTo) {
    this.charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.charge--;
    return this;
  }
}

const tesla = new EV('tesla', 100, 95);
tesla.accelerate().chargeBattery(75);
console.log(tesla);

// Do you want a deck of cards?
// if yes then create the deck

// const myDeck = new Deck();
// myDeck.initializeDeck();

// myDeck.shuffle()
// Do you want to draw a card?
// const drawnCard = myDeck.drawCard();

// If the card is an ace, then they win

// const game2 = new Deck();
